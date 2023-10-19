import React from "react";

import Description from "@/components/Description";

import Heading from "@/components/Heading";

const PortfolioHero = () => {
  return (
    <section>
      <div className="container">
        <Heading
          text="Title"
          className="text-center mb-4 font-bold text-sm md:text-lg"
        />
        <Description
          text="About page: Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis qui, quod aliquid maiores est blanditiis, consectetur mollitia cum eligendi nulla inventore numquam in voluptatem voluptate? Repellat fuga cupiditate reiciendis cum."
          className="text-center mb-10 text-sm md:text-base"
        />
      </div>
    </section>
  );
};

export default PortfolioHero;
