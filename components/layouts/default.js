import Router from "next/router";
import Link from "next/link";
import Header from "../header";
import Footer from "../footer";

function Layout({ path, children, pageTitle = "Next.js Blog Starter" }) {
  return (
    <>
      <Header path={path} pageTitle={pageTitle} />

      <main className="wrap">{children}</main>

      <Footer />
      <style jsx global>{`
        html {
          box-sizing: border-box;
        }

        *,
        *:before,
        *:after {
          box-sizing: inherit;
        }

        body {
          margin: 0;
          font-size: 18px;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
            "Segoe UI Symbol";
          font-weight: 400;
          color: #333;
          line-height: 1.618;
        }

        h1 {
          margin-bottom: 0.25em;
          font-size: 2.618em;
          font-weight: 800;
        }

        h2 {
          font-size: 2.015em;
        }

        h3 {
          font-size: 1.618em;
        }

        h1,
        h2,
        h3 {
          margin-top: 1em;
          margin-bottom: 0.354em;
          line-height: 1.125;
        }

        p {
          margin-top: 0;
          margin-bottom: 1em;
        }

        hr {
          position: relative;
          margin: 1.5em 0;
          border: 0;
          border-top: 1px solid #eee;
          border-bottom: 1px solid #fff;
        }

        blockquote {
          padding: 0.5em 1em;
          margin: 0.8em 0;
          color: #555;
          border-left: 0.25em solid #ccc;
        }

        blockquote p:last-child {
          margin-bottom: 0;
        }

        .wrap {
          max-width: 35em;
          margin-left: auto;
          margin-right: auto;
        }

        .mdx-marker {
          background-color: rgba(255, 255, 255, 0.5);
          display: block;
          margin-right: -1em;
          margin-left: -1em;
          padding-right: 1em;
          padding-left: 0.75em;
          border-left: 0.25em solid #dd4a68;
        }
      `}</style>
    </>
  );
}

export default Layout;
