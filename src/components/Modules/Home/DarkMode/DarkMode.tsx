import { useTheme } from "next-themes";
import Image from "next/image";
import { LightImage, DarkImage } from "public/images";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "src/pages/_app";

const DarkMode = () => {
  const { colorTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <div onClick={toggleTheme}>
      aa
      {/* {darkMode ? "라이트 모드로 전환" : "다크 모드로 전환"} */}
      {/* <Image
        src={isDarkMode ? DarkImage : LightImage}
        alt={"라이트"}
        width={30}
        height={30}
      /> */}
    </div>
  );
};

export default DarkMode;
