import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
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
  title: "Fill Forward | Kombucha on Tap. Zero Waste. Community Owned.",
  description:
    "Neighborhood kombucha refill stations. $2.50/pint from a neighbor's garage. No bottles. No cans. No waste. Cooperative-owned.",
  metadataBase: new URL("https://fillforward.com"),
  openGraph: {
    title: "Fill Forward | Kombucha on Tap. Zero Waste. Community Owned.",
    description:
      "$2.50/pint kombucha from a neighbor's garage tap. 1,500 fewer cans per person per year. Cooperative-owned.",
    siteName: "Fill Forward",
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
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
        <Script src="https://www.solvinghealth.com/voice-embed.js" data-site="fillforward" strategy="lazyOnload" /></body>
    </html>
  );
}
