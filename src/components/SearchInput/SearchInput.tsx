import { ChangeEvent } from "react";
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

const SearchInput = () => {
  const search = useSelector((state: RootState) => {
    return state.search.search;
  }) as unknown as string;

  const category = useSelector((state: RootState) => {
    return state.category;
  });

  const { catePost } = category;

  const Post = (catePost as Post[]).filter(
    (post) =>
      post.title.toLowerCase().includes(search) ||
      post.description.toLowerCase().includes(search)
  );
  console.log("Post", Post);

  const dispatch = useDispatch();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(inputSearch(e.target.value.toLowerCase()));
    dispatch(setViewPost(Post));
    console.log("흠");
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
