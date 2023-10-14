import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>Copyright ©2023 minmo All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
