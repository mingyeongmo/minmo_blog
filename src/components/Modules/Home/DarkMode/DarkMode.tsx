import { useTheme } from "next-themes";
import Image from "next/image";
import { LightImage, DarkImage } from "public/images";
import { useContext, useEffect, useState } from "react";

const DarkMode = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

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
