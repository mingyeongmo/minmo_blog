import { createGlobalStyle } from "styled-components";
import { lightTheme, darkTheme } from "./theme";

export const GlobalStyle = createGlobalStyle`
    body {
        ${lightTheme};
    }

    body[data-theme='light'] {
        ${lightTheme};
    }

    body[data-theme='dark'] {
        ${darkTheme};
    }
`;
