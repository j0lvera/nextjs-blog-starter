function Footer() {
  return (
    <>
      <footer className="wrap">
        &copy; {new Date().getFullYear()}, Proudly built with{" "}
        <a href="https://nextjs.org">Next.js</a>
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
