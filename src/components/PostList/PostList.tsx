import { Post } from "contentlayer/generated";
import BlogPost from "../BlogPost/BlogPost";

interface PostsProps {
  posts: Post[];
}

const PostList = ({ posts }: PostsProps) => {
  // console.log("postlist", { posts });
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      {posts.map((post) => (
        <BlogPost
          title={post.title}
          date={post.date}
          des={post.description}
          thumbnail={post.thumbnail}
          category={post.category}
          slug={post._raw.flattenedPath}
          key={post._id}
        />
      ))}
    </div>
  );
};

export default PostList;
