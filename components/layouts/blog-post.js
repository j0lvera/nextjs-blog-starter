import React from "react";
import SyntaxHighlight from "../syntax-highlight";
import Layout from "./default";

function BlogPost({ meta, children }) {
  return (
    <Layout title={meta.title}>
      <SyntaxHighlight />

      <h1>{meta.title}</h1>
      {children}
    </Layout>
  );
}

export default BlogPost;
