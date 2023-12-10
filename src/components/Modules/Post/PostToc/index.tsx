import usePostToc from "src/hook/usePostToc";
import styles from "./style.module.scss";
import styled from "styled-components";

const PostToc = () => {
  const { activeId, headings, handleClick } = usePostToc();
  return (
    <aside className={styles.toc_container}>
      <div className={styles.toc_div}>
        {headings.map(({ id, text, level }) => (
          <Text
            key={id}
            color={id === activeId ? "#ed7458" : "inherit"}
            level={level}
          >
            <a onClick={() => handleClick(id)}>{text}</a>
          </Text>
        ))}
      </div>
    </aside>
  );
};

const Text = styled.li<{ level: string }>`
  :hover {
    cursor: pointer;
  }
  list-style: none;
  margin-left: ${({ level }) => level === "3" && "10px"};
  color: ${({ color }) => color};
`;
export default PostToc;
