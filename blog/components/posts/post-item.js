import React from "react";
import classes from "./post-item.module.css";
import Image from "next/image";
import Link from "next/link";

export default function PostItem({ post }) {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const imgPath = `/images/posts/${post.slug}/${post.image}`;
  console.log('post', post.slug)
  return (
    <li className={classes.post}>
      <Link href={`/posts/${post.slug}`}>
          <div className={classes.image}>
            <Image src={imgPath} alt="image" width={300} height={300} layout="responsive"/>
          </div>
          <div className={classes.content}>
            <h3>{post.title}</h3>
            <time> {formattedDate}</time>
            <p>{post.excerpt}</p>
          </div>
      </Link>
    </li>
  );
}
