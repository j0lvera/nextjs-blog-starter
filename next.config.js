const withCSS = require("@zeit/next-css");
const withMDX = require("@zeit/next-mdx")({
  extension: /.mdx?$/,
  options: {
    hastPlugins: [require("@mapbox/rehype-prism")]
  }
});

module.exports = withMDX(
  withCSS({
    target: "serverless",
    pageExtensions: ["js", "jsx", "mdx", "md"],
    webpack: config => {
      // Fixes npm packages that depend on `fs` module
      config.node = {
        fs: "empty"
      };

      return config;
    }
  })
);
