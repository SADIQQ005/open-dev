import { useState } from "react";
import Menu from "./Menu";

const MenuButton = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className={`rounded-full outline-none p-4 ${
          showMenu ? "bg-slate-200" : ""
        } transition`}
      >
        <svg viewBox="0 0 100 80" width="25" height="25">
          <rect width="100" height="10" strokeLinecap="round" />
          <rect y="30" width="100" height="10" strokeLinecap="round" />
          <rect y="60" width="100" height="10" strokeLinecap="round" />
        </svg>
        <span class="sr-only">Menu</span>
      </button>
      <Menu showMenu={showMenu} />
    </>
  );
};

export default MenuButton;
