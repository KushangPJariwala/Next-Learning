import React from "react";
import PostsGrid from "./post-grid";
import classes from "./all-posts.module.css";

export default function ShowAllPosts({ posts }) {
  return (
    <>
      <section className={classes.posts}>
        <h2>All Posts</h2>
        <PostsGrid posts={posts} />
      </section>
    </>
  );
}
