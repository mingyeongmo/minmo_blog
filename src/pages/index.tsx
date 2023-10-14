import type { InferGetStaticPropsType } from "next";
import { useEffect, useReducer, useState } from "react";
import { Post, allPosts } from "contentlayer/generated";
import { useSelector } from "react-redux";
import { RootState } from "src/redux/configureStore";
import { initialState, reducer } from "src/reducers/categoryReducer";
import { PostList, DropDown, SearchInput, Pagination } from "src/components";
import Image from "next/image";
import { DropdownImg, DropupImg } from "public/images";
import styles from "./index.module.scss";

const Home = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const search = useSelector(
    (state: RootState) => state.search
  ) as unknown as string;
  const [view, setView] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);

  const [cateState, dispatch] = useReducer(reducer, initialState);
  const { cate, cateNum, catePost } = cateState;

  useEffect(() => {
    setMaxPage((maxPage) => maxPage + Math.floor(posts.length / 5));
  }, []);

  const firstPostIndex = (currentPage - 1) * 5;
  const lastPostIndex = firstPostIndex + 5;
  const currentPosts = posts.slice(firstPostIndex, lastPostIndex);

  return (
    <div className={styles.home}>
      <h1>Blog</h1>
      <SearchInput />
      <div className={styles.dropdown_menu}>
        <div onClick={() => setView(!view)} className={styles.category}>
          {cate ? cate : "전체"}
          {view && (
            <DropDown
              posts={posts}
              setCurrentPage={setCurrentPage}
              dispatch={dispatch}
            />
          )}
          {view ? (
            <Image src={DropupImg} alt="hi" />
          ) : (
            <Image src={DropdownImg} alt="ok" />
          )}
          {cateNum ? cateNum : posts.length}
        </div>
      </div>
      <PostList
        posts={(
          (catePost.length === 0 ? currentPosts : catePost) as Post[]
        ).filter(
          (post) =>
            // 제목 또는 내용
            post.title.toLowerCase().includes(search) ||
            post.description.toLowerCase().includes(search)
        )}
      />
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        maxPage={maxPage}
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
