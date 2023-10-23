import Link from "next/link";
import React from "react";
import classNames from "classnames";

const MobileMenu = ({ routes, showMenu }) => {
  const isShow = classNames({ "translate-x-full": showMenu });

  return (
    <div
      className={`fixed top-0 -left-full  w-full h-full bg-slate-100 transition ${isShow} `}
    >
      <ul className="flex flex-col gap-5 justify-center items-center pt-[200px] ">
        {routes.map(({ id, name, path }) => (
          <li key={id}>
            <Link
              href={path}
              className="block text-dark py-2 transition hover:text-red-500"
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileMenu;
