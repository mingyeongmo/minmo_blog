import type { Metadata } from "next";
import Footer from "src/components/common/Footer/Footer";
import Header from "src/components/common/Header/Header";
import Providers from "src/redux/provider";
import ThemeScript from "common/ThemeScript";
import "../styles/reset.scss";
import "../styles/index.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body suppressHydrationWarning={true}>
        <ThemeScript />
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
