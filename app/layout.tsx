import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SITE_URL, X_HANDLE } from "./token";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


const title = "$WEN — It's not if. It's wen.";
const description =
  "$WEN on Solana. Wen moon, wen love, wen millions — every dream arrives. The only question was ever the timing.";

export const metadata: Metadata = {
  // Social cards need absolute URLs; metadataBase resolves the relative ones.
  metadataBase: new URL(SITE_URL),
  title,
  description,
  applicationName: "$WEN",
  keywords: ["$WEN", "WEN", "Solana", "memecoin", "pump.fun", "wen moon"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "$WEN",
    title,
    description,
    images: [
      {
        url: "/wen-og.png",
        width: 1200,
        height: 630,
        alt: "$WEN — its only a matter of wen. The Pepe mascot gazing up at a field of stars.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: X_HANDLE,
    creator: X_HANDLE,
    title,
    description,
    images: ["/wen-og.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#060312",
  colorScheme: "dark",
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
