import type { InferGetStaticPropsType } from "next";
import { ChangeEvent, useState } from "react";
import { Post, allPosts } from "contentlayer/generated";
import Image from "next/image";
import PostList from "src/components/PostList/PostList";
import { SearchImage } from "public/images";
import styles from "./index.module.scss";
import DropDown from "src/components/DropDown/DropDown";

const Home = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [search, setSearch] = useState("");
  const [view, setView] = useState(false);

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

      <ul onClick={() => setView(!view)} className={styles.category}>
        전체
        {view && <DropDown />}
      </ul>

      <PostList
        posts={(posts as Post[]).filter(
          (post) =>
            // 제목 또는 내용
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
