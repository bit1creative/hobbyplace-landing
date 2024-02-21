"use client";

import Link from "next/link";

export const Header = () => (
  <header className="absolute top-0 left-0 text-2xl">
    <div className="py-4 px-5 text-white">
      <Link href={"/"}>hobbyplace.</Link>
    </div>
  </header>
);
