"use client";

import Link from "next/link";

import React, { useEffect } from "react";
import { GrClose } from "react-icons/gr";
import { RxHamburgerMenu } from "react-icons/rx";

import { routes } from "@/routes";
import { useState } from "react";
import MobileMenu from "../MobileMenu";
import { usePathname } from "next/navigation";
import Checkbox from "../Checkbox";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [path, setPath] = useState("");

  const pathname = usePathname();

  const handleShowMeni = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
      if (!e.matches) {
        return;
      }
      setShowMenu(false);
    });

    if (path === pathname) {
      setShowMenu(false);
    }
  }, [path, pathname]);

  useEffect(() => {
    setPath(pathname);
  }, [pathname]);

  return (
    <header className="bg-headerBgColor ">
      <div className="container flex md:block items-center justify-between py-2 text-white">
        <nav className="flex items-center justify-between gap-32">
          <Link href="/" className=" transition hover:text-red-500 ">
            Litvinova .point
          </Link>
          <ul className="hidden md:flex gap-5 justify-center ">
            {routes.map(({ id, name, path }) => (
              <li key={id}>
                <Link
                  href={path}
                  className="block py-4 transition hover:text-red-500"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        {/* <Checkbox /> */}
        <button
          type="button"
          className="z-10  md:hidden"
          onClick={handleShowMeni}
        >
          {showMenu ? <GrClose size={22} /> : <RxHamburgerMenu size={22} />}
        </button>
        <MobileMenu routes={routes} showMenu={showMenu} />
      </div>
    </header>
  );
};

export default Header;
