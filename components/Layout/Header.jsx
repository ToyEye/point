import React from "react";
import Link from "next/link";

import { routes } from "@/routes";

const Header = () => {
  return (
    <header>
      <div className="container">
        <nav>
          <ul className="flex gap-5 justify-center">
            {routes.map(({ id, name, path }) => (
              <li key={id}>
                <Link href={path} className="hidden md:block py-4">
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
