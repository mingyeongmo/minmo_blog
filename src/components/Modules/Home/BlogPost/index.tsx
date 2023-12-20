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
    <div>
      <Link href={`/post/${slug}`}>
        <div className={styles.post_box}>
          <div className={styles.post_upside}>
            <div className={styles.post_contents}>
              <p className={styles.post_date}>{date}</p>
              <h3 className={styles.post_title}>{title}</h3>
              <p className={styles.post_des}>{des}</p>
            </div>
            <Image
              className={styles.post_thumbnail}
              src={thumbnail}
              alt="thumbnail"
              width={120}
              height={100}
            />
          </div>
          <p className={styles.post_category}>{category}</p>
        </div>
      </Link>
    </div>
  );
};

export default BlogPost;
