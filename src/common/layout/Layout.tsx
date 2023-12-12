import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import styles from "./Layout.module.scss";

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <Header />
      <main className={styles.body}>
        <div className={styles.children}>{children}</div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
