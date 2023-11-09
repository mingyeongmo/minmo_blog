import type { InferGetStaticPropsType } from "next";
import { useState } from "react";
import { allPosts } from "@/contentlayer/generated";
import {
  PostList,
  DropDown,
  SearchInput,
  Pagination,
} from "src/components/Modules/Home";
import styles from "./index.module.scss";

const Home = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className={styles.home}>
      <h1>Blog</h1>
      <SearchInput />
      <DropDown posts={posts} />
      <PostList
        posts={posts}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
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
