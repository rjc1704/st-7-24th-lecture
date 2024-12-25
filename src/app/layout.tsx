import type { Metadata } from "next";
import "./globals.css";

import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const singleDay = localFont({
  src: [
    {
      path: "../assets/fonts/subset-SingleDay-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  display: "fallback",
  preload: true,
  variable: "--font-singleday", // CSS 변수로 사용할 경우
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={singleDay.className}>{children}</body>
    </html>
  );
}
