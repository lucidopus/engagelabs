import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components";

const inter = Montserrat({ subsets: ["latin"], weight: "400" });

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
      <body className={`bg-black ${inter.className}`}>
        <Header />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
