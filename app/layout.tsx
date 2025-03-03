import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StartupWeekBanner from "./components/StartupWeekBanner";
import { BannerProvider } from "./context/BannerContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wharton Entrepreneurship Club",
  description: "The official club for entrepreneurship at the Wharton School, University of Pennsylvania",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen flex flex-col bg-black`}>
        <BannerProvider>
          <StartupWeekBanner />
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </BannerProvider>
      </body>
    </html>
  );
}
