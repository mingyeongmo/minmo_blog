import { Dispatch, SetStateAction } from "react";
import { Post } from "contentlayer/generated";
import { useDispatch } from "react-redux";
import {
  setCate,
  setCateNum,
  setCatePost,
} from "src/redux/modules/categorySlice";
import styles from "./DropDown.module.scss";

// TODO: 타입 정의가 필요하다.
interface DropDownType {
  posts: Post[];
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

const DropDown = ({ posts, setCurrentPage }: DropDownType) => {
  const dispatch = useDispatch();
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
    setCurrentPage(() => 1);
    dispatch(setCate(""));
    dispatch(setCateNum(0));
    dispatch(setCatePost(posts));
  };

  const PostClick = (post: string) => {
    setCurrentPage(() => 1);
    dispatch(setCate(post));
    dispatch(setCateNum(ascObject[post]));
    const catePost = posts.filter((state) => state.category === post);

    dispatch(setCatePost(catePost));
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
