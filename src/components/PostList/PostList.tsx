import { useEffect, useState } from "react";
import { Post } from "contentlayer/generated";
import BlogPost from "../BlogPost/BlogPost";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "src/redux/configureStore";
import { setPostLength } from "src/redux/modules/categorySlice";

interface PostsProps {
  posts: Post[];
  currentPage: number;
}

const PostList = ({ posts, currentPage }: PostsProps) => {
  const [post, setPost] = useState(posts);
  const dispatch = useDispatch();
  const search = useSelector((state: RootState) => {
    return state.search.search;
  }) as unknown as string;

  const category = useSelector((state: RootState) => {
    return state.category;
  });

  const { cate } = category;

  useEffect(() => {
    const filterPost = posts.filter((post) => {
      const searchd =
        post.title.toLowerCase().includes(search) ||
        post.description.toLowerCase().includes(search);
      const category = cate ? post.category === cate : true;
      return searchd && category;
    });
    setPost(filterPost);
    dispatch(setPostLength(filterPost.length));
  }, [cate, search]);

  const firstPostIndex = (currentPage - 1) * 5;
  const lastPostIndex = firstPostIndex + 5;
  const currentPosts = post.slice(firstPostIndex, lastPostIndex);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      {(currentPosts as Post[]).map((post) => (
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
