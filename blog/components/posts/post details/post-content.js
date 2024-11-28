import React from "react";
import PostHeader from "./post-header";
import classes from "./post-content.module.css";
import ReactMarkDown from "react-markdown";
import { useRouter } from "next/router";
import getAllPosts from "@/pages/api/get-posts";

const DUMMY_POSTS = {
  slug: "getting-started-with-nextjs",
  title: "Getting Started with NextJS",
  image: "getting-started-nextjs.png",
  content: "# first post",
  date: "2022-02-10",
};

export default function PostContent() {
  
//   console.log("router in content", router.query.slug);
  const imgPath = `/images/posts/${DUMMY_POSTS.slug}/${DUMMY_POSTS.image}`;
  return (
    <article className={classes.content}>
      <PostHeader image={imgPath} title={DUMMY_POSTS.title} />
      <ReactMarkDown>{DUMMY_POSTS.content}</ReactMarkDown>
    </article>
  );
}

