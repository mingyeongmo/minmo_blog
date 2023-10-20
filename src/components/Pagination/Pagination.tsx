import { Dispatch, SetStateAction } from "react";
import { useSelector } from "react-redux";
import { RootState } from "src/redux/configureStore";
import styles from "./Pagination.module.scss";

interface PaginationType {
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

const Pagination = ({ setCurrentPage }: PaginationType) => {
  const postLength = useSelector((state: RootState) => {
    return state.category.postLength;
  });

  const maxPage = 1 + Math.floor(postLength / 5);

  let pageArr = new Array(maxPage);
  for (let i = 0; i < pageArr.length; i++) {
    pageArr[i] = i + 1;
  }

  const onClick = (arr: number) => {
    setCurrentPage(() => arr);
  };

  return (
    <div className={styles.pagination}>
      <p>{"<"}</p>
      {pageArr.map((arr: number) => (
        <button className={styles.btn} onClick={() => onClick(arr)} key={arr}>
          {arr}
        </button>
      ))}
      <p>{">"}</p>
    </div>
  );
};

export default Pagination;
