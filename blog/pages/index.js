import FeaturedPosts from "@/components/home/featured-posts";
import Hero from "@/components/home/hero";
import React, { useEffect, useState } from "react";
import getAllPosts from "./api/get-posts";

export default function Home(props) {
  console.log('props', props)
  return (
    <>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </>
  );
}
export async function getStaticProps() {
  const posts = await getAllPosts();
  const featuredPosts = posts?.filter((p) => p.featured === true);
  return {
    props: {
      posts:featuredPosts,
    },
  };
}
