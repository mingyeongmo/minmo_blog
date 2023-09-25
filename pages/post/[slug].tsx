import { allPosts } from ".contentlayer/generated";
import {
  InferGetStaticPropsType,
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
} from "next";
import { useMDXComponent } from "next-contentlayer/hooks";

const Post = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const MDXComponent = useMDXComponent(post?.body.code || "");
  return (
    <div>
      <h1>{post?.title}</h1>
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
