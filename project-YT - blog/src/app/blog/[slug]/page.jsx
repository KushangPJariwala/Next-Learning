// import Image from "next/image";
import Image from "next/image";
import styles from "./singlePost.module.css";
import PostUser from "@/components/postUser/postUser";
import { Suspense } from "react";
import { getPost } from "@/lib/data";
import blogImg from "../../../../public/blog.jpg";
// import { getPost } from "@/lib/data";

// FETCH DATA WITH AN API
// const getData = async (slug) => {
//   console.log("slug", slug);
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);

//   if (!res.ok) {
//     // throw new Error("Something went wrong");
//     console.log('error')
//   }

//   return res.json();
// };

// export const generateMetadata = async ({ params }) => {
//   const { slug } = params;

//   const post = await getPost(slug);

//   return {
//     title: post.title,
//     description: post.desc,
//   };
// };

const SinglePostPage = async ({ params }) => {
  const { slug } = params;

  // FETCH DATA WITH AN API
  // const post = await getData(slug);

  // FETCH DATA WITHOUT AN API
  const post = await getPost(slug);

  return (
    <>
      <div className={styles.container}>
        {/* {post?.img && ( */}
        <div className={styles.imgContainer}>
          <Image
            src={post?.img ? post?.img : blogImg}
            alt=""
            fill
            className={styles.img}
          />
        </div>
        {/* )} */}
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{post?.title}</h1>
          <div className={styles.detail}>
            {post && (
              <Suspense fallback={<div>Loading...</div>}>
                <PostUser userId={post?.userId} />
              </Suspense>
            )}
            <div className={styles.detailText}>
              <span className={styles.detailTitle}>Published</span>
              <span className={styles.detailValue}>1/02/2005</span>
            </div>
          </div>
          <div className={styles.content}>{post?.desc}</div>
        </div>
      </div>
    </>
  );
};

export default SinglePostPage;
