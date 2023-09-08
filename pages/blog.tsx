import { Post, allPosts } from "contentlayer/generated";
import { InferGetStaticPropsType } from "next";
import BlogPost from "common/components/BlogPost/BlogPost";

const Blog = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log({ posts });
  return (
    <div>
      {posts.map((post) => (
        <BlogPost
          title={post.title}
          date={post.date}
          des={post.description}
          slug={post._raw.flattenedPath}
          key={post._id}
        />
      ))}
    </div>
  );
};

export const getStaticProps = async () => {
  const posts = allPosts.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );

  return {
    props: {
      posts,
    },
  };
};

export default Blog;
