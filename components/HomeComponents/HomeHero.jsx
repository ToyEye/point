import React from "react";

import Link from "next/link";

const HomeHero = () => {
  return (
    <section className="py-6 mx-auto md:py-20  lg:py-40  max-w-[1600px]  relative text-white font-semibold ">
      <div className="bg-cover bg-center bg-[url('/img/hero-back.jpg')] bg-no-repeat absolute top-0 left-0 h-full w-full -z-[2]"></div>
      <div className="absolute top-0 left-0 bg-gradient-to-r from-slate-700 to-slate-700 h-full w-full -z-[1] opacity-70 "></div>
      <div className="container">
        <h1 className="text-center mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
          voluptate aut. Eius dolor quos autem, officiis repudiandae pariatur
          enim vel ab facilis culpa dolorem reiciendis obcaecati reprehenderit
          accusamus sed cumque!
        </h1>
        <p className="text-center mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
          voluptate aut
        </p>
        <ul className="flex justify-center gap-12">
          <li>
            <Link
              href="/portfolio"
              className=" block py-[10px] px-5 rounded-md bg-bgBtn hover:bg-bgBtnHover focus:bg-bgBtnHover transition  "
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="block py-[10px] px-5 rounded-md bg-bgBtn hover:bg-bgBtnHover focus:bg-bgBtnHover transition  "
            >
              Contact us
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default HomeHero;
