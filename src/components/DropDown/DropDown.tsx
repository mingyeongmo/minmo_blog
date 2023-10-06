import { InferGetServerSidePropsType, InferGetStaticPropsType } from "next";
import { Dispatch, SetStateAction } from "react";
import { Post, allPosts } from "contentlayer/generated";
import { getStaticProps } from "src/pages";
import styles from "./DropDown.module.scss";

// TODO: 타입 정의가 필요하다.
interface DropDownType {
  posts: Post[];
  setCate: Dispatch<SetStateAction<string>>;
  setCateNum: Dispatch<SetStateAction<number>>;
}
// InferGetStaticPropsType<typeof getStaticProps>

const DropDown = ({ posts, setCate, setCateNum }: DropDownType) => {
  // 카테고리 종류 (중복 O)
  let categoryDupList = posts.map((post) => post.category);

  // 각 카테고리의 갯수 구하기
  let elementsNumber = categoryDupList.reduce((a, i) => {
    return (a[i] = (a[i] || 0) + 1), a;
  }, {});

  // 갯수를 구한 객체를 내림차순으로 정렬
  let ascObject = Object.fromEntries(
    Object.entries(elementsNumber).sort(([, a], [, b]) => (a > b ? -1 : 1))
  );

  // 배열로 바꿔준다.
  let ascArr = Object.keys(ascObject);

  const PostClick = (post) => {
    setCate(() => post);
    // console.log("post.length", post);
    setCateNum(() => ascObject[post]);
    console.log("ok", ascObject[post]);
  };

  console.log({ elementsNumber, ascObject, ascArr });
  // console.log("hi", ascObject.JavaScript);
  // console.log("ok", ascObject["JavaScript"]);
  console.log({ ascArr });

  return (
    <ul className={styles.cate_list}>
      <li onClick={() => setCate("")}>전체</li>
      {ascArr.map((post, index) => (
        <li onClick={() => PostClick(post)} key={index}>
          {post}
        </li>
      ))}
    </ul>
  );
};

export default DropDown;
