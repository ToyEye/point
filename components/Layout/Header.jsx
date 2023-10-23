import React from "react";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";

import { routes } from "@/routes";

const Header = () => {
  return (
    <header>
      <div className="container flex items-center justify-between py-2 md:block">
        <nav className="flex items-center justify-between">
          <Link href="/">LOGO</Link>
          <ul className="hidden md:flex gap-5 justify-center ">
            {routes.map(({ id, name, path }) => (
              <li key={id}>
                <Link href={path} className="block py-4">
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <button type="button" className="md:hidden">
          <RxHamburgerMenu size={22} />
        </button>
      </div>
    </header>
  );
};

export default Header;
