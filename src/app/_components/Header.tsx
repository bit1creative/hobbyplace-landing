"use client";

import Link from "next/link";

export const Header = () => (
  <header className="absolute top-0 left-1/2 max-w-5xl -translate-x-1/2 w-full 2xl:max-w-[1440px]">
    <div className="py-4 px-5 text-white md:px-14 md:py-8 text-2xl md:text-3xl 2xl:text-4xl">
      <Link href={"/"}>hobbyplace.</Link>
    </div>
  </header>
);
