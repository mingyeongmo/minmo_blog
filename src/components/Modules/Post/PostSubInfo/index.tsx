type PostSubInfoProps = {
  category: string;
  date: string;
};

const PostSubInfo = ({ category, date }: PostSubInfoProps) => {
  return (
    <div>
      <p>{category}</p>
      <p>{date}</p>
    </div>
  );
};

export default PostSubInfo;
