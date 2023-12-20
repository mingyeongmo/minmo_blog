import Image from "next/image";
import styles from "./style.module.scss";

type PostThumbnail = {
  thumbnail: string;
  alt: string;
};

const PostThumbnail = ({ thumbnail, alt }: PostThumbnail) => {
  return (
    <div className={styles.img_container}>
      <Image src={thumbnail} alt={alt} width={300} height={300} />
    </div>
  );
};

export default PostThumbnail;
