import {
  InferGetStaticPropsType,
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
} from "next";
import { allPosts } from "@/contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import styles from "./[slug].module.scss";

const Post = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const MDXComponent = useMDXComponent(post?.body.code || "");
  console.log({ post });
  return (
    <div>
      <header className={styles.header}>
        <h1>{post?.title}</h1>
        <div className={styles.test}>
          <p>{post.category}</p>
          <p>{post.date}</p>
        </div>
      </header>
      <MDXComponent />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: allPosts.map((p) => ({ params: { slug: p._raw.flattenedPath } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
}: GetStaticPropsContext) => {
  const post = allPosts.find((p) => p._raw.flattenedPath === params?.slug);
  return {
    props: {
      post,
    },
  };
};

export default Post;
