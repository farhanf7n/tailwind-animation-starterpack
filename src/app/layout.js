import "./globals.css";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react";
import ClarityScript from "@/components/utils/ClarityScript";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Tailwind CSS Animations - Effortless Motion for Web Design",
  description:
    "Discover a curated collection of Tailwind CSS animation classes that you can easily copy and paste into your projects, bringing smooth, engaging motion to your web designs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="./apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="./favicon-16x16.png"
        />
        <link rel="manifest" href="./site.webmanifest" />
      </head>
      <body className={`${inter.className}`}>
        <ClarityScript />
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
