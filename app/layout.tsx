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
  title: "$WEN — It's not if. It's wen.",
  description:
    "$WEN on Solana. The token for everyone staring at the sky, waiting for their moment. Wen moon, wen love, wen millions — it's not if, it's wen.",
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
      {/* Not a flex column: `mx-auto` on a flex item shrink-wraps it to its
          content instead of filling the width, which drifts the hero sideways. */}
      <body className="min-h-full">{children}</body>
    </html>
  );
}
