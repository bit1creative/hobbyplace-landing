import type { Metadata } from "next";
import { Inter, Mulish, Unbounded } from "next/font/google";
import "./globals.css";
import { Footer } from "./_components/Footer";
import { Header } from "./_components/Header";


const inter = Inter({ subsets: ["latin"] });

Mulish({
  weight: ['500', "700"],
  variable: '--font-mulish'
})
Unbounded({
  weight: ['500', '600'],
  variable: '--font-unbounded'
})

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
    <html lang="en" className="min-h-screen ">
      <Header />
      <body className={inter.className}>{children}</body>
      <Footer />
    </html>
  );
}
