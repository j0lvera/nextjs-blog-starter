import Link from "next/link";
import Head from "./head";
import { siteMeta } from "../blog.config";

function Header({ path, pageTitle }) {
  return (
    <>
      <Head title={pageTitle} />

      <header>
        <div className="wrap">
          {path === "/" ? (
            <h1 className="site-title">{siteMeta.title}</h1>
          ) : (
            <p className="site-title">
              <Link href="/">
                <a>{siteMeta.title}</a>
              </Link>
            </p>
          )}
        </div>
      </header>
      <style jsx>{`
        header {
          padding-top: 1em;
          padding-bottom: 1em;
          background-color: #eee;
        }

        h1 {
          font-size: 2.15em;
          margin-top: 0;
          margin-bottom: 0;
        }

        a {
          text-decoration: none;
        }

        p {
          margin-bottom: 0;
          font-size: 1.618em;
          font-weight: 700;
        }
      `}</style>
    </>
  );
}

export default Header;
