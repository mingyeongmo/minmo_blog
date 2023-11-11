import { useMDXComponent } from "next-contentlayer/hooks";
import styles from "./style.module.scss";

type PostContentType = {
  code: string;
};

const PostContent = ({ code }: PostContentType) => {
  const MDXComponent = useMDXComponent(code);
  return (
    <div className={styles.writing_container}>
      <MDXComponent />
    </div>
  );
};

export default PostContent;
