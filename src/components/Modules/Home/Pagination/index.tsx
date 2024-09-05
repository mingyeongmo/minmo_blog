"use client";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "src/redux/configureStore";
import styles from "./style.module.scss";

interface PaginationType {
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

const Pagination = ({ currentPage, setCurrentPage }: PaginationType) => {
  const [btnWriteColor, setBtnWriteColor] = useState<string>("#000000");

  const postLength = useSelector((state: RootState) => {
    return state.category.postLength;
  });

  const maxPage = 1 + Math.floor(postLength / 6);

  let pageArr = new Array(maxPage);
  for (let i = 0; i < pageArr.length; i++) {
    pageArr[i] = i + 1;
  }

  const onClick = (arr: number) => {
    setCurrentPage(() => arr);

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const buttonStyle = {
    background: "#ed7458",
    color: "#ffffff",
  };

  useEffect(() => {
    const handleThemeChange = () => {
      const theme = document.body.getAttribute("data-theme");
      if (theme === "dark") {
        setBtnWriteColor("#ffffff");
      } else {
        setBtnWriteColor("#000000");
      }
    };

    handleThemeChange();

    const observer = new MutationObserver(handleThemeChange);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.pagination_container}>
      <div className={styles.pagination}>
        {pageArr.map((arr: number) => (
          <button
            className={styles.btn}
            onClick={() => onClick(arr)}
            key={arr}
            style={currentPage === arr ? buttonStyle : { color: btnWriteColor }}
          >
            {arr}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
