import { ChangeEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { inputSearch } from "src/redux/modules/searchSlice";
import Image from "next/image";
import { SearchImage } from "public/images";
import styles from "./SearchInput.module.scss";
import { RootState } from "src/redux/configureStore";
import { Post } from "contentlayer/generated";
import {
  setCate,
  setCatePost,
  setViewPost,
} from "src/redux/modules/categorySlice";

interface SearchInput {
  posts: Post[];
}

const SearchInput = (posts: SearchInput) => {
  console.log("ok", posts);
  const search = useSelector((state: RootState) => {
    return state.search.search;
  }) as unknown as string;

  const category = useSelector((state: RootState) => {
    return state.category;
  });

  const { catePost } = category;

  const Post = posts.posts.filter(
    (post) =>
      post.title.toLowerCase().includes(search) ||
      post.description.toLowerCase().includes(search)
  );

  useEffect(() => {
    dispatch(setViewPost(Post));
  }, [search]);

  const dispatch = useDispatch();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(inputSearch(e.target.value.toLowerCase()));
  };

  return (
    <div className={styles.search_container}>
      <input
        onChange={onChange}
        className={styles.search_input}
        type="text"
        placeholder="검색어를 입력해주세요."
      />
      <Image className={styles.search_img} src={SearchImage} alt="돋보기" />
    </div>
  );
};

export default SearchInput;
