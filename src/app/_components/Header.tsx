"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/images/logo.png";

export const Header = () => (
  <header className="w-full">

    <div className="z-10 h-[100px] w-screen absolute top-0 left-0 bg-gradient-to-t from-transparent to-[#001721]" />

    <div className="relative z-20 w-full mx-auto max-w-5xl 2xl:max-w-[1440px]">

      <div className="2xl:py-0 py-4 text-white md:py-8 text-2xl md:text-3xl 2xl:text-4xl px-6 md:px-0">

        <Link href={"/"}>

          <div className="w-[144px] md:w-[196px]">

            <Image src={logo} alt="logo" />

          </div>

        </Link>

      </div>

    </div>

  </header>
);
