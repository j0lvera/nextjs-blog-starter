import Head from "../head";

function Layout({ children, title = "Next.js Blog Starter" }) {
  return (
    <>
      <Head title={title} />

      <header>
        <h1>Next.js Blog Starter</h1>
      </header>

      <main>{children}</main>

      <footer>
        &copy; {new Date().getFullYear()}, Proudly built with{" "}
        <a href="https://nextjs.org">Next.js</a>
      </footer>

      <style jsx>{`
        :global(body) {
          margin: 0;
          font-size: 18px;
          font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
            Helvetica, sans-serif;
        }

        h1 {
          margin-top: 0;
          margin-bottom: 0;
        }

        header,
        main,
        footer {
          max-width: 38em;
          margin-left: auto;
          margin-right: auto;
        }

        header,
        footer {
          padding-top: 2em;
          padding-bottom: 2em;
        }
      `}</style>
    </>
  );
}

export default Layout;
