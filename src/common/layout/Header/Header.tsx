import Link from "next/link";
import styles from "./header.module.scss";
import Image from "next/image";
import { LightImage, LogoImg } from "../../../../public/images/index";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.navbar}>
        <div>
          <Link href="/" className={styles.nav_left}>
            <Image src={LogoImg} alt={"로고"} width={52} height={50} />
            <p>minmo</p>
          </Link>
        </div>
        <div className={styles.nav_right}>
          <Link href="/blog">about</Link>
          <Image src={LightImage} alt={"라이트모드"} width={40} height={40} />
        </div>
      </div>
    </header>
  );
};

export default Header;
