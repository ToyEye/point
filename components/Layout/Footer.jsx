"use client";
import React from "react";
import { BsFacebook, BsInstagram, BsTelegram } from "react-icons/bs";
import { GoMail } from "react-icons/go";

import { routes } from "@/routes";
import Link from "next/link";

const iconList = [
  { id: "1", path: "mailto:litvinovaalina1992@gmail.com", Icon: GoMail },
  {
    id: "2",
    path: "https://www.facebook.com/profile.php?id=100017677902012",
    Icon: BsFacebook,
  },
  {
    id: "3",
    path: "https://www.instagram.com/leading_miroslavovna/",
    Icon: BsInstagram,
  },
  {
    id: "4",
    path: "https://t.me/alinamiroslavovna",
    Icon: BsTelegram,
  },
];

const Footer = () => {
  return (
    <footer className="py-8 bg-footerBgColor">
      <div className="container">
        <div className="flex items-baseline  justify-between">
          <div className="text-sm text-light lg:text-base ">
            <p>
              Lo<span>go</span>
            </p>
            <p>Phone number:</p>
            <p>+38 (044) 335 69 88</p>
          </div>
          <nav>
            <ul className="flex gap-2 flex-col justify-center text-xs md:text-sm lg:text-base">
              {routes.map(({ id, name, path }) => (
                <li key={id}>
                  <Link
                    href={path}
                    className="text-light font-semibold hover:text-[#333333] focus:text-[#333333] transition "
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <ul className="flex flex-col md:flex-row gap-2 md:gap-4">
            {iconList.map(({ id, path, Icon }) => (
              <li key={id}>
                <a
                  href={path}
                  target="_blank noreferrer"
                  className="flex justify-center items-center text-light hover:scale-150 hover:bg-light  hover:text-bgBtn rounded  transition  w-[20px] h-[20px] md:w-[26px] md:h-[26px] lg:w-[30px] lg:h-[30px]"
                >
                  <Icon className="lg:w-[26px] lg:h-[26px]" />
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
