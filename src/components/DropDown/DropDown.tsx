import { Dispatch, SetStateAction } from "react";
import { Post } from "contentlayer/generated";
import { Action } from "src/reducers/categoryReducer";
import styles from "./DropDown.module.scss";

// TODO: 타입 정의가 필요하다.
interface DropDownType {
  posts: Post[];
  dispatch: Dispatch<Action>;
}
// InferGetStaticPropsType<typeof getStaticProps>

const DropDown = ({ posts, dispatch }: DropDownType) => {
  // 카테고리 종류 (중복 O)
  let categoryDupList = posts.map((post) => post.category);

  // 각 카테고리의 갯수 구하기
  interface ok {
    [a: string]: number;
  }

  let elementsNumber: ok = categoryDupList.reduce((a: {}, i: string) => {
    return (a[i] = (a[i] || 0) + 1), a;
  }, {});

  // 갯수를 구한 객체를 내림차순으로 정렬
  let ascObject = Object.fromEntries(
    Object.entries(elementsNumber).sort(([, a], [, b]) => (a > b ? -1 : 1))
  );

  // 배열로 바꿔준다.
  let ascArr = Object.keys(ascObject);

  const PostInit = () => {
    dispatch({ type: "cate", cate: "" });
    dispatch({ type: "cateNum", cateNum: 0 });
  };

  const PostClick = (post: string) => {
    dispatch({ type: "cate", cate: post });
    dispatch({ type: "cateNum", cateNum: ascObject[post] });
  };

  return (
    <ul className={styles.cate_list}>
      <li onClick={() => PostInit()}>전체</li>
      {ascArr.map((post, index) => (
        <li onClick={() => PostClick(post)} key={index}>
          {post}
        </li>
      ))}
    </ul>
  );
};

export default DropDown;
