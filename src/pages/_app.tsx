import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "src/redux/configureStore";
import Layout from "src/common/layout/Layout";
import Head from "next/head";
import "../common/style/index.scss";
import "../common/style/reset.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Head>
          <title>minmo-blog</title>
          <link rel="shortcut icon" href="/favicon.ico" />
          <meta charSet="UTF - 8" />
          <meta name="keywords" content="minmo" />
          <meta name="keywords" content="개인 블로그" />
          <meta name="keywords" content="Next.js 개인 블로그" />
          <meta httpEquiv="Content-Script-Type" content="Text/javascript" />
          <meta httpEquiv="Subject" content="기술블로그" />
          <meta httpEquiv="Author" content="minmo" />
          <meta httpEquiv="Generator" content="Visaul Studio Code" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta property="og:url" content="https://minmo.vercel.app" />
          <meta property="og:type" content="website" />

          <meta property="og:locale" content="ko_KR" />

          <meta property="og:site_name" content="minmo-blog" />

          <meta property="article:media_name" content="minmo-blog" />
          <meta
            name="google-site-verification"
            content="Ry8CSQxJ7l4q4yLlXTEKdI0noZt1R66yed09g6FVM1Q"
          />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
