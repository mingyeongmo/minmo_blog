import { InferGetServerSidePropsType, InferGetStaticPropsType } from "next";
import { Post, allPosts } from "contentlayer/generated";
import { getStaticProps } from "src/pages";

const DropDown = ({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
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

  console.log({ categoryDupList });
  console.log({ elementsNumber });
  console.log({ ascObject });
  console.log({ ascArr });

  return (
    <>
      {ascArr.map((post, index) => (
        <li key={index}>{post}</li>
      ))}
    </>
  );
};

export default DropDown;
