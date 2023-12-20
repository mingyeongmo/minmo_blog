"use client";
import { ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { inputSearch } from "src/redux/modules/searchSlice";
import { SearchImage } from "public/images";
import Image from "next/image";
import styles from "./style.module.scss";

const SearchInput = () => {
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
