export const theme = {
  light: {
    background1: "#fafafa",
    background2: "#fafafa",
    background3: "#f5f5f5",
    font1: "#333",
  },
  dark: {
    background1: "#282c35",
    background2: "#242a32",
    background3: "#1e222b",
    font1: "#fff",
  },
};

export const lightTheme = `
    --background1: ${theme.light.background1};
    --background2: ${theme.light.background2};
    --background3: ${theme.light.background3};
    --text1 : ${theme.light.font1};

    background: ${theme.light.background1};
    color: ${theme.light.font1};
`;

export const darkTheme = `
    --background1: ${theme.dark.background1};
    --background2: ${theme.dark.background2};
    --background3: ${theme.dark.background3};
    --text1 : ${theme.dark.font1};

    background: ${theme.dark.background1};
    color: ${theme.dark.font1};
`;

export type MainTheme = typeof theme.light;
