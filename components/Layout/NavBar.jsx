import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <header className="text-gray-400 z-50 bg-slate-800 sticky top-0 left-0 body-font">
      <nav className="flex items-center p-5 shadow-xl">
        <Link href="/">
          <a className="flex mr-6 border-r pr-3 border-slate-600 title-font font-medium items-center text-white mb-4 md:mb-0 text-xl">
            All PDFs
          </a>
        </Link>
        <Link href="/">
          <a className="mr-5 hover:text-white">Home Page</a>
        </Link>
        <Link href="/subjects/dental-material">
          <a className="mr-5 hover:text-white">dental material</a>
        </Link>
      </nav>
    </header>
  );
}
