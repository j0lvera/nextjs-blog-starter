function Footer() {
  return (
    <>
      <footer className="wrap">
        &copy; {new Date().getFullYear()}, Proudly built with{" "}
        <a href="https://nextjs.org">Next.js</a> -{" "}
        <a href="https://github.com/j0lv3r4/nextjs-blog-starter">Source code</a>
      </footer>
      <style jsx>{`
        footer {
          padding-top: 2em;
          padding-bottom: 2em;
        }
      `}</style>
    </>
  );
}

export default Footer;
