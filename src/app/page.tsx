import { DropDown, SearchInput } from "src/components/Modules/Home";
import BlogListWithPagination from "./components/BlogListWithPagination";
import styles from "./page.module.scss";

const Home = () => {
  return (
    <div className={styles.home}>
      <h1>Blog</h1>
      <SearchInput />
      <DropDown />
      <BlogListWithPagination />
    </div>
  );
};

export default Home;
