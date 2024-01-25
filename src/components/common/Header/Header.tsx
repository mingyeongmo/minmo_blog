import Image from "next/image";
import Link from "next/link";
import { DarkMode } from "src/components/Modules/Home";
import { LogoImg } from "../../../../public/images";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.navbar}>
        <div>
          <Link href="/" className={styles.nav_left}>
            <Image src={LogoImg} alt={"로고"} width={40} height={40} />
            <p>minmo</p>
          </Link>
        </div>
        <div className={styles.nav_right}>
          <DarkMode />
        </div>
      </div>
    </header>
  );
};

export default Header;
