import type { InferGetStaticPropsType } from "next";
import { ChangeEvent, useReducer, useState } from "react";
import { Post, allPosts } from "contentlayer/generated";
import { DropdownImg, DropupImg, SearchImage } from "public/images";
import Image from "next/image";
import PostList from "src/components/PostList/PostList";
import DropDown from "src/components/DropDown/DropDown";
import styles from "./index.module.scss";

const Home = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [search, setSearch] = useState("");
  const [view, setView] = useState(false);
  const [cate, setCate] = useState("");
  const [cateNum, setCateNum] = useState(0);

  type State = {
    cate: string;
    cateNum: number;
  };

  type Action =
    | { type: "cate"; cate: string }
    | { type: "cateNum"; cateNum: number };

  const reducer = (state: State, action: Action) => {
    switch (action.type) {
      case "cate":
        return {
          ...state,
          cate: action.cate,
        };
      case "cateNum":
        return {
          ...state,
          cateNum: action.cateNum,
        };
      default:
        return state;
    }
  };

  const initialState = {
    cate: "",
    cateNum: 0,
  };

  const [cateState, dispatch] = useReducer(reducer, initialState);
  console.log({ cateState });
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
      <div className={styles.dropdown_menu}>
        <div onClick={() => setView(!view)} className={styles.category}>
          {cate ? cate : "전체"}
          {view && (
            //TODO: setCate 하고 setCateNum useReducer로 묶어보자.
            <DropDown
              posts={posts}
              setCate={setCate}
              setCateNum={setCateNum}
              dispatch={dispatch}
            />
          )}
          {view ? (
            <Image src={DropupImg} alt="hi" />
          ) : (
            <Image src={DropdownImg} alt="ok" />
          )}
          {/*TODO: posts.length 실시간 변화 시켜야함 */}
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
