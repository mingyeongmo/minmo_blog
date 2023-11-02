type PostTitleProps = {
  title: string;
};

const PostTitle = ({ title }: PostTitleProps) => {
  return <h1 style={{ fontSize: "40px" }}>{title}</h1>;
};

export default PostTitle;
