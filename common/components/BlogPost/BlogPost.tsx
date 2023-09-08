import Link from "next/link";

interface PostProps {
  title: string;
  date: string;
  des: string;
  slug: string;
}

const BlogPost = ({ title, date, des, slug }: PostProps) => {
  return (
    <Link href={`/blog/${slug}`}>
      <div>{title}</div>
      <div>{date}</div>
      <div>{des}</div>
    </Link>
  );
};

export default BlogPost;
