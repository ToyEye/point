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
          <div className="text-sm lg:text-base ">
            <p>
              Lo<span>go</span>
            </p>
            <p>Phone number</p>
            <p>+38 (044) 335 69 88</p>
          </div>
          <nav>
            <ul className="flex gap-2 flex-col justify-center text-xs md:text-sm lg:text-base">
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
            {iconList.map(({ id, path, Icon }) => (
              <li key={id}>
                <a href={path} target="_blank noreferrer">
                  <Icon className="w-[15px] h-[15px] md:w-[20px] md:h-[20px]" />
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
