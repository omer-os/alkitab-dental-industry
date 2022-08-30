import Link from "next/link";
import React, { useState } from "react";

export default function NavBar() {
  const [ShowMenuBar, setShowMenuBar] = useState(false);
  return (
    <header className="text-gray-400 z-50 bg-slate-800 sticky top-0 left-0 body-font">
      <nav className="flex items-center justify-between p-5 shadow-xl">
        <div className="flex items-center justify-between items-center">
          <Link href="/">
            <a className="z-50 flex mr-6 border-r pr-3 border-slate-600 title-font font-medium text-white text-xl">
              All PDFs
            </a>
          </Link>

          <div
            className={` sm:relative fixed top-0 sm:h-max sm:w-max w-full h-full bg-slate-800 sm:flex-row flex  sm:!right-0 items-center justify-center flex-col sm:text-sm text-xl gap-3 sm:gap-0 ${
              ShowMenuBar ? "right-0" : "-right-full"
            } transition-all`}
          >
            <Link href="/">
              <a
                onClick={() => setShowMenuBar(false)}
                className="mr-5 hover:text-white"
              >
                Home Page
              </a>
            </Link>
            <Link href="/subjects/dental-material">
              <a
                onClick={() => setShowMenuBar(false)}
                className="mr-5 hover:text-white"
              >
                dental material
              </a>
            </Link>
          </div>
        </div>

        <div
          onClick={() => setShowMenuBar(!ShowMenuBar)}
          className="sm:hidden z-50"
        >
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
      </nav>
    </header>
  );
}
