import type { InferGetStaticPropsType } from "next";
import { ChangeEvent, useReducer, useState } from "react";
import { Post, allPosts } from "contentlayer/generated";
import { useSelector } from "react-redux";
import { RootState } from "src/redux/configureStore";
import { initialState, reducer } from "src/types";
import Image from "next/image";
import { DropdownImg, DropupImg, SearchImage } from "public/images";
import PostList from "src/components/PostList/PostList";
import DropDown from "src/components/DropDown/DropDown";
import SearchInput from "src/components/SearchInput/SearchInput";
import styles from "./index.module.scss";

const Home = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const search = useSelector((state: RootState) => state.search);
  const [view, setView] = useState(false);

  const [cateState, dispatch] = useReducer(reducer, initialState);

  const { cate, cateNum } = cateState;

  console.log("in", search);
  return (
    <div className={styles.home}>
      <h1>Blog</h1>
      <SearchInput />
      <div className={styles.dropdown_menu}>
        <div onClick={() => setView(!view)} className={styles.category}>
          {cate ? cate : "전체"}
          {view && <DropDown posts={posts} dispatch={dispatch} />}
          {view ? (
            <Image src={DropupImg} alt="hi" />
          ) : (
            <Image src={DropdownImg} alt="ok" />
          )}
          {cateNum ? cateNum : posts.length}
        </div>
      </div>
      <PostList
        posts={(posts as Post[]).filter(
          (post) =>
            // 제목 또는 내용
            (post.title.toLowerCase().includes(search) ||
              post.description.toLowerCase().includes(search)) &&
            post.category.includes(cate)
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
