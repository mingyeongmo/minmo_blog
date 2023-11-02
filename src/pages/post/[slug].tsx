import { InferGetStaticPropsType, GetStaticPaths, GetStaticProps } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";
import { allPosts, Post } from "@/contentlayer/generated";
import {
  PostTitle,
  PostSubInfo,
  PostThumbnail,
} from "src/components/Modules/Post";
import styles from "./[slug].module.scss";

const Post = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const MDXComponent = useMDXComponent(post?.body.code || "");
  console.log({ post });

  return (
    <div className={styles.blog_container}>
      <header className={styles.header}>
        <PostTitle title={post?.title || ""} />
        <PostSubInfo
          category={post?.category || ""}
          date={post?.date || ""}
        ></PostSubInfo>
      </header>
      <PostThumbnail
        thumbnail={post?.thumbnail || ""}
        alt={post?.title || ""}
      />
      <MDXComponent />
    </div>
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
