import { useDispatch, useSelector } from "react-redux";
import { Post } from "@/contentlayer/generated";
import { setCate } from "src/redux/modules/categorySlice";
import { RootState } from "src/redux/configureStore";
import { useState } from "react";
import Image from "next/image";
import { DropdownImg, DropupImg } from "public/images";
import styles from "./DropDown.module.scss";

// TODO: 타입 정의가 필요하다.
interface DropDownType {
  posts: Post[];
}

const DropDown = ({ posts }: DropDownType) => {
  const dispatch = useDispatch();

  // 카테고리 종류 (중복 O)
  let categoryDupList = posts.map((post) => post.category);

  // 각 카테고리의 갯수 구하기
  interface ok {
    [a: string]: number;
  }

  let elementsNumber: ok = categoryDupList.reduce((a: any, i: string) => {
    return (a[i] = (a[i] || 0) + 1), a;
  }, {});

  // 갯수를 구한 객체를 내림차순으로 정렬
  let ascObject = Object.fromEntries(
    Object.entries(elementsNumber).sort(([, a], [, b]) => (a > b ? -1 : 1))
  );

  // 배열로 바꿔준다.
  let ascArr = Object.keys(ascObject);

  const PostInit = () => {
    dispatch(setCate(""));
  };

  const PostClick = (post: string) => {
    dispatch(setCate(post));
  };

  const [view, setView] = useState(false);

  const category = useSelector((state: RootState) => {
    return state.category;
  });
  const { cate, postLength } = category;
  return (
    <div className={styles.dropdown_menu}>
      <p>Post ({postLength})</p>
      <div className={styles.category_btn} onClick={() => setView(!view)}>
        <label>{cate ? cate : "전체"}</label>
        <div className={styles.drop_img}>
          {view ? (
            <Image src={DropupImg} alt="drop-up" width={20} height={20} />
          ) : (
            <Image src={DropdownImg} alt="drop-down" width={20} height={20} />
          )}
        </div>
        {view && (
          <ul className={styles.cate_list}>
            <li onClick={() => PostInit()}>전체</li>
            {ascArr.map((post, index) => (
              <li onClick={() => PostClick(post)} key={index}>
                {post}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default DropDown;
