import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "./Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hobbyplace",
  description: "Find your hobby of your dreams here!",
  authors: [{
    name: "Ivan Hrytsenko",
    url: "hrytsenko.svan@gmail.com"
  }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="min-h-screen ">
      <body className={inter.className}>{children}</body>
      <Footer />
    </html>
  );
}