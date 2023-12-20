import type { Metadata } from "next";
import { allPosts } from "@/contentlayer/generated";
import {
  PostTitle,
  PostSubInfo,
  PostThumbnail,
  PostContent,
  PostToc,
} from "src/components/Modules/Post";
import Comment from "src/components/Library/Giscus/Comment";
import styles from "./page.module.scss";

interface Props {
  params: {
    slug: string;
  };
}

const Post = ({ params }: Props) => {
  const post = allPosts.find((post) => post.slug === params.slug);
  if (!post) {
    return false;
  }

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

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata | undefined> {
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
    category: post.category,
  };
}
