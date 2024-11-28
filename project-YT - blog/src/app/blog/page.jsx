import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";
import { getPosts } from "@/lib/data";
// import { getPosts } from "@/lib/data";

// FETCH DATA WITH AN API
// const getData = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");

//   if (!res.ok) {
//     throw new Error("Something went wrong");
//     // return;
//   }
//   return res.json();

// };

const BlogPage = async () => {
  //   // FETCH DATA WITH AN API
  const posts = await getPosts();
  // console.log('post', posts)
  // FETCH DATA WITHOUT AN API
  // const posts = await getPosts();

  return (
    <div className={styles.container}>
      {posts.length ? (
        posts?.map((post) => (
          <div className={styles.post} key={post.id}>
            <PostCard post={post} />
          </div>
        ))
      ) : (
        <div style={{textAlign:'center', width:'100%'}}>
          <h2>No blogs available</h2>
        </div>
      )}
    </div>
  );
};

export default BlogPage;
