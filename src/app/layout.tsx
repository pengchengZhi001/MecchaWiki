import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
import "./globals.css";
import { Popunder } from "@/components/ads";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  ...createMetadata({
    title: siteConfig.name,
    description: siteConfig.description,
    path: "/",
  }),
  verification: {
    google: "W4aHUmcZc23Q5GS93B9LStQy7Bu12Cbpf5GaoEvbdKI",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4967304417583767"
          crossOrigin="anonymous"
        />
      </head>
      <body className="safe-area-pb flex min-h-full flex-col">
        <Header />
        <main className="min-w-0 max-w-full flex-1">{children}</main>
        <Popunder />
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
