import { useState, useEffect } from "react";
import MenuButton from "./MenuButton";

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`z-50 fixed flex justify-between items-center top-0 w-screen px-4 h-24 border-b-2 border-white backdrop-blur ${
        scrollPosition > 20 ? "bg-slate-50/40" : "bg-white"
      } transition`}
    >
      <a
        href="/"
        className="text-slate-800 text-3xl font-extrabold hover:text-slate-800/80"
      >
        open-dev
      </a>
      {/* Desktop/Tablet Nav */}
      <ul className="hidden sm:flex items-center gap-1">
        <li>
          <a
            href="/"
            className="rounded-full px-6 py-4 border-2 border-slate-200 bg-slate-50 text-slate-800 font-medium transition hover:bg-slate-500 hover:text-slate-50"
          >
            Link 1
          </a>
        </li>
        <li>
          <a
            href="/"
            className="rounded-full px-6 py-4 border-2 border-slate-200 bg-slate-50 text-slate-800 font-medium transition hover:bg-slate-500 hover:text-slate-50"
          >
            Link 2
          </a>
        </li>
        <li>
          <a
            href="/"
            className="rounded-full px-6 py-4 border-2 border-slate-200 bg-slate-50 text-slate-800 font-medium transition hover:bg-slate-500 hover:text-slate-50"
          >
            Link 3
          </a>
        </li>
      </ul>
      {/* Mobile Nav */}
      <div className="block sm:hidden">
        <MenuButton />
      </div>
    </nav>
  );
};

export default Navbar;
