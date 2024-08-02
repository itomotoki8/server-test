"use client";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between px-20 h-20 items-center">
      <div>レンダリング検証！</div>
      <div className="flex gap-20">
        <Link href="/csr" className="hover:text-blue-300">
          CSR
        </Link>
        <Link href="/ssg" className="hover:text-blue-300">
          SSG
        </Link>
        <Link href="/ssr" className="hover:text-blue-300">
          SSR
        </Link>
        <Link href="/isr" className="hover:text-blue-300">
          ISR
        </Link>
        <Link href="/post" className="hover:text-blue-300">
          POST
        </Link>
      </div>
    </header>
  );
};

export default Header;
