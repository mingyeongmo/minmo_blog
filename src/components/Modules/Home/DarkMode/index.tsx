"use client";
import { useEffect, useState } from "react";

const DarkMode = () => {
  const [darkTheme, setDarkTheme] = useState<boolean | undefined>(undefined);

  const handleThemeChange = () => {
    setDarkTheme((prevDarkTheme) => {
      const newTheme = prevDarkTheme ? "light" : "dark";
      window.localStorage.setItem("theme", newTheme);
      window.dispatchEvent(new StorageEvent("storage", { key: newTheme }));
      return !prevDarkTheme;
    });
  };

  useEffect(() => {
    if (darkTheme !== undefined) {
      const newTheme = darkTheme ? "dark" : "light";
      document.body.setAttribute("data-theme", newTheme);
    }
  }, [darkTheme]);

  useEffect(() => {
    const root = window.document.body;
    const initialThemeValue = root.style.getPropertyValue(
      "--initial-color-mode"
    );

    setDarkTheme(initialThemeValue === "dark");
  }, []);

  return <button onClick={handleThemeChange}>테마 체인지</button>;
};

export default DarkMode;
