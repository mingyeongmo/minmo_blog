"use client";
import { useState } from "react";
import { Pagination, PostList } from "src/components/Modules/Home";

const BlogListWithPagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <>
      <PostList currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </>
  );
};
export default BlogListWithPagination;
