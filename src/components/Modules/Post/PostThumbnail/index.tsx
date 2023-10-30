import Image from "next/image";

type PostThumbnail = {
  thumbnail: string;
  alt: string;
};

const PostThumbnail = ({ thumbnail, alt }: PostThumbnail) => {
  console.log({ thumbnail });
  return <Image src={thumbnail} alt={alt} width={300} />;
};

export default PostThumbnail;
