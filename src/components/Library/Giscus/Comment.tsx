import Giscus from "@giscus/react";
import styles from "./Comment.module.scss";

export default function Comment() {
  return (
    <div className={styles.comment_container}>
      <Giscus
        repo="mingyeongmo/minmo_blog"
        repoId="R_kgDOJ_b2pw"
        category="General"
        categoryId="DIC_kwDOJ_b2p84CaryX"
        mapping="pathname"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="bottom"
        theme="preferred_color_scheme"
        lang="ko"
      />
    </div>
  );
}
