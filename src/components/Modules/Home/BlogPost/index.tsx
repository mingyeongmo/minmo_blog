"use client";
import Link from "next/link";
import styles from "./style.module.scss";
import Image from "next/image";

interface PostProps {
  title: string;
  date: string;
  des: string;
  thumbnail: string;
  category: string;
  slug: string;
}

const BlogPost = ({
  title,
  date,
  des,
  slug,
  thumbnail,
  category,
}: PostProps) => {
  return (
    <Link href={`/post/${slug}`}>
      <div className={styles.post_box}>
        <div className={styles.post_imageBox}>
          <Image
            className={styles.post_thumbnail}
            src={thumbnail}
            alt="thumbnail"
            width={100}
            height={100}
          />
        </div>
        <div className={styles.post_content}>
          <p className={styles.post_category}>{category}</p>
          <p className={styles.post_title}>{title}</p>
          <p className={styles.post_date}>{date}</p>
        </div>
      </div>
    </Link>
  );
};

export default BlogPost;
