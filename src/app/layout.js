import "./globals.css";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react";
import ClarityScript from "@/components/utils/ClarityScript";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Tailwind CSS Animations - Effortless Motion for Web Design",
  description:
    "Discover a curated collection of Tailwind CSS animation classes that you can easily copy and paste into your projects, bringing smooth, engaging motion to your web designs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClarityScript />
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
