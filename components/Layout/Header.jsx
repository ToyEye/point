"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { GrClose } from "react-icons/gr";

import { routes } from "@/routes";
import { useState } from "react";
import MobileMenu from "../MobileMenu";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();

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
  }, []);

  // useEffect(() => {
  //   const showMenu = () => {
  //     setShowMenu(!showMenu);
  //   };

  //   router.events.on("routeChangeStart", showMenu);

  //   return () => {
  //     router.events.off("routeChangeStart", showMenu);
  //   };
  // }, [router.events]);

  return (
    <header>
      <div className="container flex items-center justify-between py-2 md:block">
        <nav className="flex items-center justify-between">
          <Link href="/" className="transition hover:text-red-500">
            LOGO
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
