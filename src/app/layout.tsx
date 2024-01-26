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
  description: "minmo의 기술 블로그 입니다.",
  creator: "민경모",
  publisher: "민경모",
  icons: "/favicon.png",
  verification: {
    google: "process.env.GOOGLE_VERIFICATION_CODE",
  },
  openGraph: {
    title: "minmo의 블로그",
    description: "minmo의 기술 블로그 입니다.",
    url: "https://minmo.vercel.app/",
    siteName: "minmo Blog",
    locale: "ko",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "standard",
      "max-snippet": -1,
    },
  },
};
