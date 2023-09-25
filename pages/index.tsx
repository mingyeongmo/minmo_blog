import type { InferGetStaticPropsType } from "next";
import { ChangeEvent, useState } from "react";
import { Post, allPosts } from "contentlayer/generated";
import Image from "next/image";
import PostList from "common/components/PostList/PostList";
import { SearchImage } from "public/images";
import styles from "./index.module.scss";

const Home = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [search, setSearch] = useState("");

  console.log("post length : ", posts.length);

  const inputSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value.toLowerCase());
  };

  return (
    <div className={styles.home}>
      <h1>Blog</h1>
      <div className={styles.search_container}>
        <input
          onChange={inputSearch}
          className={styles.search_input}
          type="text"
          placeholder="검색어를 입력해주세요."
        />

        <Image className={styles.search_img} src={SearchImage} alt="돋보기" />
      </div>
      <PostList
        posts={(posts as Post[]).filter(
          (post) =>
            post.title.toLowerCase().includes(search) ||
            post.description.toLowerCase().includes(search)
        )}
      />
    </div>
  );
};

export const getStaticProps = async () => {
  const posts = allPosts.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );

  return {
    props: {
      posts,
    },
  };
};

export default Home;
