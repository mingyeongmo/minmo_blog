import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "src/redux/configureStore";
import Layout from "src/common/layout/Layout";
import "../common/style/index.scss";
import "../common/style/reset.scss";
import { createContext } from "react";
import { theme, MainTheme } from "common/theme";
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "src/hook/useDarkMode";
import { GlobalStyle } from "common/GlobalStyle";

export interface ContextProps {
  colorTheme: MainTheme | null;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ContextProps>({
  colorTheme: theme.light,
  toggleTheme: () => {
    return null;
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  const { colorTheme, toggleTheme } = useDarkMode();
  return (
    <Provider store={store}>
      <ThemeContext.Provider value={{ colorTheme, toggleTheme }}>
        <ThemeProvider theme={{ ...colorTheme }}>
          <Layout>
            <GlobalStyle />
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </ThemeContext.Provider>
    </Provider>
  );
}

export default MyApp;
