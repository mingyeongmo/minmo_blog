"use client";
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import { allPosts } from "@/contentlayer/generated";
import BlogPost from "../BlogPost";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "src/redux/configureStore";
import { setPostLength } from "src/redux/modules/categorySlice";
import styles from "./style.module.scss";

interface PostsProps {
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

const PostList = ({ currentPage, setCurrentPage }: PostsProps) => {
  const posts = allPosts.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );
  const [post, setPost] = useState(posts);
  const dispatch = useDispatch();
  const search = useSelector((state: RootState) => {
    return state.search.search;
  }) as unknown as string;

  const cate = useSelector((state: RootState) => {
    return state.category.cate;
  });

  const updateCurrentPage = useCallback(() => {
    setCurrentPage(1);
  }, [setCurrentPage]);

  useEffect(() => {
    const filterPost = posts.filter((post) => {
      const searchd =
        post.title.toLowerCase().includes(search) ||
        post.description.toLowerCase().includes(search);
      const category = cate ? post.category === cate : true;
      return searchd && category;
    });
    setPost(filterPost);
    dispatch(setPostLength(filterPost.length));
    updateCurrentPage();
  }, [cate, search, posts, dispatch, updateCurrentPage]);

  const firstPostIndex = (currentPage - 1) * 5;
  const lastPostIndex = firstPostIndex + 5;
  const currentPosts = post.slice(firstPostIndex, lastPostIndex);
  return (
    <div className={styles.post_grid}>
      {currentPosts.map((post) => (
        <BlogPost
          title={post.title}
          date={post.date}
          des={post.description}
          thumbnail={post.thumbnail}
          category={post.category}
          slug={post._raw.flattenedPath}
          key={post._id}
        />
      ))}
    </div>
  );
};

export default PostList;
