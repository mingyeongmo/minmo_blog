import Link from "next/link";
import styles from "./header.module.scss";
import Image from "next/image";
import { DarkMode } from "src/components/Modules/Home";
import { LogoImg } from "public/images";

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
        <div className={styles.nav_right}>{/* <DarkMode /> */}</div>
      </div>
    </header>
  );
};

export default Header;
