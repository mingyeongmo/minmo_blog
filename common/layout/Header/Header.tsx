import Link from "next/link";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.navbar}>
        <div className={styles.nav_left}>
          <Link href="/">홈(logo)</Link>
        </div>
        <div className={styles.nav_right}>
          <Link href="/blog">blog</Link>
          <Link href="/project">project</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
