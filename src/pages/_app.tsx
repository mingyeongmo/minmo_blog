import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "src/redux/configureStore";
import Layout from "src/common/layout/Layout";
import "../common/style/index.scss";
import "../common/style/reset.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
