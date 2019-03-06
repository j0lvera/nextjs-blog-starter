import Link from "next/link";
import { parse, format } from "date-fns";

function PublishedAt({ date, link }) {
  return (
    <>
      <Link href={link}>
        <a rel="bookmark">
          <time>{format(parse(date), "MMMM DD, YYYY")}</time>
        </a>
      </Link>
      <style jsx>{`
        a {
          text-decoration: none;
        }
      `}</style>
    </>
  );
}

export default PublishedAt;
