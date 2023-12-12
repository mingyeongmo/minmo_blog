import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from "next/document";
import { ServerStyleSheet } from "styled-components";
class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet: ServerStyleSheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () => {
        return originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });
      };

      const initialProps: DocumentInitialProps = await Document.getInitialProps(
        ctx
      );

      return {
        ...initialProps,
        styles: [
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>,
        ],
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    const setThemeMode = `
      const theme = localStorage.getItem('theme')
      const getUserTheme = () => {
        if (theme) return theme
        return window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light'
      }
      document.body.dataset.theme = getUserTheme()
    `;

    return (
      <Html lang="ko">
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
        <body>
          {/* <script dangerouslySetInnerHTML={{ __html: setThemeMode }} /> */}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
