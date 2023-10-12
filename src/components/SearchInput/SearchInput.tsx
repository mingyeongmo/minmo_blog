import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { inputSearch } from "src/redux/modules/searchSlice";
import Image from "next/image";
import { SearchImage } from "public/images";
import styles from "./SearchInput.module.scss";
import { RootState } from "src/redux/configureStore";

const SearchInput = () => {
  // const [search, setSearch] = useState("");
  const search = useSelector((state: RootState) => state.search);
  const dispatch = useDispatch();

  const inputSearc = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(inputSearch(e.target.value.toLowerCase()));
  };

  console.log("s", { search });
  console.log("n", search);

  return (
    <div className={styles.search_container}>
      <input
        onChange={inputSearc}
        className={styles.search_input}
        type="text"
        placeholder="검색어를 입력해주세요."
      />
      <Image className={styles.search_img} src={SearchImage} alt="돋보기" />
    </div>
  );
};

export default SearchInput;
