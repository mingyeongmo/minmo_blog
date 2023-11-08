import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.links}>
          <a href="https://github.com/mingyeongmo" target="_blank">
            Github
          </a>
          <a href="https://www.instagram.com/rudahahah" target="_blank">
            instagram
          </a>
        </div>
        <p>Copyright ©2023 minmo All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
