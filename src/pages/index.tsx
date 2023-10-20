import type { InferGetStaticPropsType } from "next";
import { useState } from "react";
import { allPosts } from ".contentlayer/generated";
import { useSelector } from "react-redux";
import { RootState } from "src/redux/configureStore";
import { PostList, DropDown, SearchInput, Pagination } from "src/components";
import Image from "next/image";
import { DropdownImg, DropupImg } from "public/images";
import styles from "./index.module.scss";

const Home = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const category = useSelector((state: RootState) => {
    return state.category;
  });

  const { cate, postLength } = category;

  const [view, setView] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className={styles.home}>
      <h1>Blog</h1>
      <SearchInput />
      <div className={styles.dropdown_menu}>
        <div onClick={() => setView(!view)} className={styles.category}>
          {cate ? cate : "전체"}
          {view && <DropDown posts={posts} />}
          {view ? (
            <Image src={DropupImg} alt="drop-up" />
          ) : (
            <Image src={DropdownImg} alt="drop-down" />
          )}
          {postLength}
        </div>
      </div>
      <PostList
        posts={posts}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <Pagination setCurrentPage={setCurrentPage} />
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
