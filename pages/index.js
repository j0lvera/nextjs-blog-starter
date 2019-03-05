import React from "react";
import Link from "next/link";
import Layout from "../components/layouts/default";
import blogposts from "../posts/index";

const Post = ({ title, summary, date, path }) => (
  <>
    <article className="post">
      <header className="post-header">
        <h2 className="post-title">
          <Link href={path}>
            <a>{title}</a>
          </Link>
        </h2>

        <Link href={path}>
          <a className="posted-on">
            <time>{date}</time>
          </a>
        </Link>
      </header>

      <div className="post-summary">{summary}</div>
    </article>
    <style jsx>{`
      .post:not(:last-child) {
        margin-bottom: 3em;
      }

      .post-title {
        margin-top: 0;
      }

      .posted-on {
        display: flex;
        margin-bottom: 1em;
        color: #333;
      }
    `}</style>
  </>
);

const Home = () => (
  <Layout title="Home - Next.js Blog Starter">
    {blogposts.map((post, index) => (
      <Post
        key={index}
        title={post.title}
        summary={post.summary}
        date={post.publishedAt}
        path={post.path}
      />
    ))}
  </Layout>
);

export default Home;
