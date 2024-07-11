import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";

import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components";

const inter = Noto_Sans({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "EngageLabs",
  description: "Your AI companion",
  icons: "/engagelabs-logo-white.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="bg-black">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
