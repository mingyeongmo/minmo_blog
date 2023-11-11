import styles from "./style.module.scss";

type PostSubInfoProps = {
  category: string;
  date: string;
};

const PostSubInfo = ({ category, date }: PostSubInfoProps) => {
  return (
    <div className={styles.flex}>
      <p className={styles.category}>{category}</p>
      <p>{date}</p>
    </div>
  );
};

export default PostSubInfo;
