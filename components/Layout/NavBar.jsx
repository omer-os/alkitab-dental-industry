import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <div className="flex shadow-xl justify-between items-center p-4 bg-slate-800 sticky top-0 left-0 w-full">
      <div className="font-bold text-xl">Malazim</div>

      <div className="flex gap-3">
        <Link href="/">
          <a>malazim</a>
        </Link>
      </div>
    </div>
  );
}
