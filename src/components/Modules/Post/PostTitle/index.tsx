type PostTitleProps = {
  title: string;
};

const PostTitle = ({ title }: PostTitleProps) => {
  return <h1>{title}</h1>;
};

export default PostTitle;
