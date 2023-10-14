import { Dispatch, SetStateAction } from "react";
import styles from "./Pagination.module.scss";

interface PaginationType {
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  maxPage: number;
}

const Pagination = ({
  currentPage,
  setCurrentPage,
  maxPage,
}: PaginationType) => {
  let pageArr = new Array(maxPage);
  for (let i = 0; i < pageArr.length; i++) {
    pageArr[i] = i + 1;
  }
  console.log({ pageArr });

  const onClick = (arr: number) => {
    setCurrentPage(() => arr);
  };

  return (
    <div className={styles.pagination}>
      <p>{"<"}</p>
      {pageArr.map((arr: number) => (
        <button onClick={() => onClick(arr)} key={arr}>
          {arr}
        </button>
      ))}
      <p>{">"}</p>
    </div>
  );
};

export default Pagination;
