import { InferGetStaticPropsType, GetStaticPaths, GetStaticProps } from "next";
import { allPosts, Post } from "@/contentlayer/generated";
import {
  PostTitle,
  PostSubInfo,
  PostThumbnail,
  PostContent,
  PostToc,
} from "src/components/Modules/Post";
import Comment from "src/components/Library/Giscus/Comment";
import styles from "./[slug].module.scss";

const Post = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <header className={styles.header}>
        <PostTitle title={post?.title || ""} />
        <PostSubInfo
          category={post?.category || ""}
          date={post?.date || ""}
        ></PostSubInfo>
      </header>
      <PostToc />

      {/* <PostThumbnail
        thumbnail={post?.thumbnail || ""}
        alt={post?.title || ""}
      /> */}
      <PostContent code={post?.body.code || ""} />
      <Comment />
    </>
  );
};

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: allPosts.map(({ _raw }) => ({
      params: {
        slug: _raw.flattenedPath,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{
  post: Post | undefined;
}> = async ({ params }) => {
  const postId = String(params?.slug || "");
  const post = allPosts.find(({ _raw }) => {
    return _raw.flattenedPath === postId;
  });

  return {
    props: {
      post,
    },
  };
};
