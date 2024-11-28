import ShowAllPosts from '@/components/posts/show-all-posts'
import React from 'react'
import { DUMMY_POSTS } from '..'
import getAllPosts from '../api/get-posts';

export default function AllPosts(props) {
  return (
    <>
    <ShowAllPosts posts={props.posts}/>
    </>
  )
}
export async function getStaticProps() {
  const posts = await getAllPosts();
  return {
    props: {
      posts,
    },
  };
}