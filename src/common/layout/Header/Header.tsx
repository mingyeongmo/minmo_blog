import Link from "next/link";
import styles from "./header.module.scss";
import { LightImage } from "../../../../public/images/index";
import Image from "next/image";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.navbar}>
        <div className={styles.nav_left}>
          <Link href="/">홈(logo)</Link>
        </div>
        <div className={styles.nav_right}>
          <Image src={LightImage} alt={"라이트모드"} width={30} height={30} />
          <Link href="/blog">about</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
