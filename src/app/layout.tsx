import type { Metadata } from "next";
import Footer from "src/components/common/Footer/Footer";
import Header from "src/components/common/Header/Header";
import "../styles/reset.scss";
import "../styles/index.scss";
import Providers from "src/redux/provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const themeInitializerScript = `(function() {
    ${setInitialColorMode.toString()}
    setInitialColorMode();
  })()
  `;

  function setInitialColorMode() {
    function getInitialColorMode() {
      // 로컬스토리지에서 'theme' 값 가져오기
      const persistedPreferenceMode = window.localStorage.getItem("theme");
      const hasPersistedPreference =
        typeof persistedPreferenceMode === "string";

      if (hasPersistedPreference) {
        return persistedPreferenceMode;
      }

      const preference = window.matchMedia("(prefers-color-scheme: dark)");
      const hasMediaQueryPreference = typeof preference.matches === "boolean";

      if (hasMediaQueryPreference) {
        return preference.matches ? "dark" : "light";
      }

      return "light";
    }

    //현재 테마 모드
    const currentColorMode = getInitialColorMode();
    const element = document.body;
    element.style.setProperty("--initial-color-mode", currentColorMode);

    // 현재 다크모드라면 다크모드를 바로 적용 시켜줌
    if (currentColorMode === "dark")
      document.body.setAttribute("data-theme", "dark");
  }

  return (
    <html lang="ko">
      <body suppressHydrationWarning={true}>
        <script
          dangerouslySetInnerHTML={{
            __html: themeInitializerScript,
          }}
        ></script>
        <Header />
        <main className="main-children">
          <Providers>{children}</Providers>
        </main>
        <Footer />
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "minmo",
  description: "minmo 블로그, 프론트엔드 개발자 블로그",
};
