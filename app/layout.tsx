import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "オフィスツネ | ポートフォリオ",
  description: "オフィスツネのポートフォリオサイトです。Web開発、デザイン、その他のプロジェクト作品を紹介しています。",
  keywords: ["ポートフォリオ", "Web開発","エクセル", "デザイン", "オフィスツネ"],
  authors: [{ name: "オフィスツネ" }],
  openGraph: {
    title: "オフィスツネ | ポートフォリオ",
    description: "オフィスツネのポートフォリオサイトです。Web開発、デザイン、その他のプロジェクト作品を紹介しています。",
    type: "website",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "オフィスツネ | ポートフォリオ",
    description: "オフィスツネのポートフォリオサイトです。Web開発、デザイン、その他のプロジェクト作品を紹介しています。",
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
