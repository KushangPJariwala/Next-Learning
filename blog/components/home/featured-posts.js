import React from "react";
import classes from "./featured-posts.module.css";
import PostsGrid from "../posts/post-grid";

export default function FeaturedPosts({posts}) {
  return (
    <section className={classes.latest}>
      <h2>featured-posts</h2>
      <PostsGrid posts={posts}/>
    </section>
  );
}
