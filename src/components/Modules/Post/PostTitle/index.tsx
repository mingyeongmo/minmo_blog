import styles from "./style.module.scss";

type PostTitleProps = {
  title: string;
};

const PostTitle = ({ title }: PostTitleProps) => {
  return <h1 className={styles.title}>{title}</h1>;
};

export default PostTitle;
