import { AnimateSharedLayout } from "framer-motion";
import React from "react";
import NavBar from "./NavBar";

export default function Layout({ children }) {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <NavBar />
      <div className="z-30">
        <>{children}</>
      </div>
    </div>
  );
}
