import Header from "./Header/Header";
import styles from "./Layout.module.scss";

const Layout = ({ children }: any) => {
  return (
    <div>
      <Header />
      <div className={styles.body}>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
