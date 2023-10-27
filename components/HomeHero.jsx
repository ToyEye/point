import React from "react";

import Link from "next/link";

const HomeHero = () => {
  return (
    <section className="py-6 md:py-10 lg:py-20 ">
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
            <Link href="/portfolio" className="btnsLink">
              Portfolio
            </Link>
          </li>
          <li>
            <Link href="/contact" className="btnsLink">
              Contact us
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default HomeHero;
