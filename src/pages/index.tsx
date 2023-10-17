import type { InferGetStaticPropsType } from "next";
import { useEffect, useState } from "react";
import { Post, allPosts } from "contentlayer/generated";
import { useDispatch, useSelector } from "react-redux";
import { setCatePost, setViewPost } from "src/redux/modules/categorySlice";
import { RootState } from "src/redux/configureStore";
import { PostList, DropDown, SearchInput, Pagination } from "src/components";
import Image from "next/image";
import { DropdownImg, DropupImg } from "public/images";
import styles from "./index.module.scss";

const Home = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const category = useSelector((state: RootState) => {
    return state.category;
  });

  const dispatch = useDispatch();

  const { cate, cateNum, catePost, viewPost } = category;

  const [view, setView] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);

  useEffect(() => {
    dispatch(setCatePost(posts));
    dispatch(setViewPost(posts));
    setMaxPage((maxPage) => maxPage + Math.floor(posts.length / 5));
  }, []);

  const firstPostIndex = (currentPage - 1) * 5;
  const lastPostIndex = firstPostIndex + 5;
  const currentPosts = viewPost.slice(firstPostIndex, lastPostIndex);

  console.log({ viewPost });
  console.log("in", posts, catePost);

  return (
    <div className={styles.home}>
      <h1>Blog</h1>
      <SearchInput posts={posts} />
      <div className={styles.dropdown_menu}>
        <div onClick={() => setView(!view)} className={styles.category}>
          {cate ? cate : "전체"}
          {view && <DropDown posts={posts} setCurrentPage={setCurrentPage} />}
          {view ? (
            <Image src={DropupImg} alt="drop-up" />
          ) : (
            <Image src={DropdownImg} alt="drop-down" />
          )}
          {cateNum ? cateNum : catePost.length}
        </div>
      </div>
      <PostList
        // posts={(currentPosts as Post[]).filter(
        //   (post) =>
        //     // 제목 또는 내용
        // post.title.toLowerCase().includes(search) ||
        // post.description.toLowerCase().includes(search)
        // )}
        posts={currentPosts}
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
