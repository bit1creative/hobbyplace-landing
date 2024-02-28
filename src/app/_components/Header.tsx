"use client";

import Link from "next/link";

export const Header = () => (
  <header className="w-full mx-auto max-w-5xl 2xl:max-w-[1440px]">
    <div className="py-4 text-white md:py-8 text-2xl md:text-3xl 2xl:text-4xl">
      <Link href={"/"}>hobbyplace.</Link>
    </div>
  </header>
);
