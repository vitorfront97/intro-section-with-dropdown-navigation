"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Menu from "./Menu";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  useEffect(() => {
    document.body.style.overflow = openMenu ? "hidden" : "auto";
    document.documentElement.style.overflow = openMenu ? "hidden" : "auto";
  }, [openMenu]);
  return (
    <div className="py-8 px-6 flex items-center gap-16 md:px-10">
      <Image
        className="h-auto"
        src="/images/logo.svg"
        width={75}
        height={0}
        alt="Logo"
      />
      <Image
        onClick={() => setOpenMenu((o) => !o)}
        className="h-auto absolute right-6 z-60 cursor-pointer md:hidden"
        src={`${
          openMenu ? "/images/icon-close-menu.svg" : "/images/icon-menu.svg"
        }`}
        width={32}
        height={0}
        alt={`${openMenu ? "Fechar" : "Abrir"}`}
      />
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 backdrop-blur-sm ${openMenu ? "opacity-100" : "opacity-0 pointer-events-none"} md:hidden`}
      />
      <Menu openMenu={openMenu} />
    </div>
  );
};
