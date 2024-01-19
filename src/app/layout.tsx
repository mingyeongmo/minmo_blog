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
  applicationName: "minmo Blog",
  referrer: "origin-when-cross-origin",
  keywords: ["Next.js", "개발자 블로그", "개인 블로그"],
  title: "minmo Blog",
  description: "minmo의 개인 블로그 입니다.",
  creator: "민경모",
  publisher: "민경모",
  icons: "/favicon.png",
  openGraph: {
    title: "minmo blog",
    description: "minmo의 개인 블로그 입니다.",
    url: "https://minmo.vercel.app/",
    siteName: "minmo Blog",
    images: "public/favicon.png",
    locale: "ko",
    type: "website",
  },
};
