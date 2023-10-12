import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "src/redux/configureStore";
import Layout from "../common/layout/Layout";
import Head from "next/head";
import "../common/style/reset.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Head>
          <title>minmo-blog</title>
          <meta name="description" content="Generated by create next app" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
