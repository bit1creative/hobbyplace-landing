import type { Metadata } from "next";
import { Mulish, Unbounded } from "next/font/google";
import "./globals.css";
import { Footer } from "./_components/Footer";
import { Header } from "./_components/Header";


const mulish = Mulish({
  subsets: ["latin", "cyrillic"],
  weight: ["500", "700"],
  variable: "--font-mulish",
});

const unbounded = Unbounded({
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600"],
  variable: "--font-unbounded",
});

export const metadata: Metadata = {
  title: "Hobbyplace",
  description: "Find your hobby of your dreams here!",
  authors: [
    {
      name: "Ivan Hrytsenko",
      url: "hrytsenko.svan@gmail.com",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="min-h-screen">
      <body className={`${mulish.variable} ${unbounded.variable} font-sans`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
