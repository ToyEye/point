import React from "react";
import { BsFacebook, BsInstagram, BsTelegram } from "react-icons/bs";
import { GoMail } from "react-icons/go";

import { routes } from "@/routes";
import Link from "next/link";

const iconList = [
  { id: "1", path: "mailto:litvinovaalina1992@gmail.com", icon: <GoMail /> },
  {
    id: "2",
    path: "https://www.facebook.com/profile.php?id=100017677902012",
    icon: <BsFacebook />,
  },
  {
    id: "3",
    path: "https://www.instagram.com/leading_miroslavovna/",
    icon: <BsInstagram />,
  },
  {
    id: "4",
    path: "https://t.me/alinamiroslavovna",
    icon: <BsTelegram />,
  },
];

const Footer = () => {
  return (
    <footer className="py-8">
      <div className="container">
        <div className="flex items-center">
          <nav>
            <ul className="flex gap-2 flex-col justify-center text-xs">
              {routes.map(({ id, name, path }) => (
                <li key={id}>
                  <Link href={path} className="">
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <ul className="flex gap-4">
            {iconList.map(({ id, path, icon }) => (
              <li key={id}>
                <a href={path} target="_blank noreferrer">
                  {icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
