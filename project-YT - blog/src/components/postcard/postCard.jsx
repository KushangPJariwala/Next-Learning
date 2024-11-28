import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";
import blogImg from "../../../public/blog.jpg";

const PostCard = ({ post }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        {
          // post.img &&
          <div className={styles.imgContainer}>
            <Image
              src={post?.img ? post?.img : blogImg}
              alt="image"
              className={styles.img}
              fill
            />
          </div>
        }
        <span className={styles.date}>1/02/2005</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>{post.desc}</p>
        <Link className={styles.link} href={`/blog/${post.slug}`}>
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
