const ThemeScript = () => {
  const setInitialColorMode = () => {
    function getInitialColorMode() {
      const preferenceMode = window.localStorage.getItem("theme");
      const hasPersistedPreference = typeof preferenceMode === "string";

      if (hasPersistedPreference) {
        return preferenceMode;
      }

      const preference = window.matchMedia("(prefers-color-scheme: dark)");
      const hasMediaQueryPreference = typeof preference.matches === "boolean";

      if (hasMediaQueryPreference) {
        return preference.matches ? "dark" : "light";
      }

      return "light";
    }

    const currentColorMode = getInitialColorMode();
    const element = document.body;
    element.style.setProperty("--initial-color-mode", currentColorMode);

    if (currentColorMode === "dark")
      document.body.setAttribute("data-theme", "dark");
  };

  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `(${setInitialColorMode.toString()})();`,
      }}
    />
  );
};

export default ThemeScript;
