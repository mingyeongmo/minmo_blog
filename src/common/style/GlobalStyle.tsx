import { createGlobalStyle } from "styled-components";
import { lightTheme, darkTheme } from "./theme";

export const GlobalStyle = createGlobalStyle`
    body {
        ${lightTheme};
    }
body.light {
    ${lightTheme}
}
    body.dark {
        ${darkTheme};
    }
    body[data-theme='light'] {
        ${lightTheme};
    }

    body[data-theme='dark'] {
        ${darkTheme};
    }
`;
