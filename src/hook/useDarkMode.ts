import { useEffect, useState } from "react";
import { theme, MainTheme } from "common/theme";

export const useDarkMode = () => {
  const [colorTheme, setTheme] = useState<MainTheme | null>(null);

  const setMode = (mode: MainTheme) => {
    if (mode === theme.light) {
      document.body.dataset.theme = "light";
      window.localStorage.setItem("theme", "light");
    } else {
      document.body.dataset.theme = "dark";
      window.localStorage.setItem("theme", "dark");
    }
    setTheme(mode);
  };

  const toggleTheme = () => {
    colorTheme === theme.light ? setMode(theme.dark) : setMode(theme.light);
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");

    // when user prefer dark mode, set dark mode
    const userPreferDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    userPreferDark && !localTheme
      ? setMode(theme.dark)
      : localTheme === "dark"
      ? setMode(theme.dark)
      : setMode(theme.light);
  }, []);

  return { colorTheme, toggleTheme };
};
