// import { AnimateSharedLayout } from "framer-motion";
import NavBar from "./NavBar";

export default function Layout({ children }) {
  return (
    <div className="bg-slate-900 text-white min-h-screen">
      <NavBar />
      <div className="z-30">
        <>{children}</>
      </div>
    </div>
  );
}





