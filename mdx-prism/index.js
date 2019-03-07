const rangeParser = require("parse-numeric-range");
const visit = require("unist-util-visit");
const nodeToString = require("hast-util-to-string");
const refractor = require("refractor");
const addMarkers = require("./add-markers");
// const Refractor = require("react-refractor");

module.exports = (options = {}) => {
  return tree => {
    visit(tree, "element", visitor);
  };

  function visitor(node, index, parent) {
    if (!parent || parent.tagName !== "pre" || node.tagName !== "code") {
      return;
    }

    const className = getLangClass(node);
    const { highlightLines, splitLanguage } = parseLineNumberRange(className);
    const lang = getLanguage(splitLanguage);
    const markers = highlightLines;

    if (lang === null) {
      return;
    }

    let result;
    try {
      parent.properties.className = (parent.properties.className || []).concat(
        "language-" + lang
      );

      result = refractor.highlight(nodeToString(node), lang);

      if (markers && markers.length > 0) {
        result = addMarkers(result, { markers });
      }
    } catch (err) {
      if (options.ignoreMissing && /Unkown language/.text(err.message)) {
        return;
      }

      throw err;
    }

    node.children = result;
  }
};

const parseLineNumberRange = language => {
  if (!language) {
    return "";
  }
  if (language.split("{").length > 1) {
    let [splitLanguage, ...options] = language.split("{");
    let highlightLines = [];
    options.forEach(option => {
      option = option.slice(0, -1);
      if (rangeParser.parse(option).length > 0) {
        highlightLines = rangeParser.parse(option).filter(n => n > 0);
      }
    });

    return {
      splitLanguage,
      highlightLines
    };
  }

  return { splitLanguage: language };
};

function getLangClass(node) {
  const className = node.properties.className || [];
  for (const item of className) {
    if (item.slice(0, 9) === "language-") {
      return item;
    }
  }
  return null;
}

function getLanguage(className = "") {
  if (className.slice(0, 9) === "language-") {
    return className.slice(9).toLowerCase();
  }

  return null;
}
