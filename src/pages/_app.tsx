import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "src/redux/configureStore";
import Layout from "src/common/layout/Layout";
import "../common/style/index.scss";
import "../common/style/reset.scss";
import { theme, MainTheme } from "common/theme";
import { ThemeProvider } from "next-themes";
import { GlobalStyle } from "common/GlobalStyle";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider defaultTheme="light" attribute="class">
        <Layout>
          <GlobalStyle />
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
