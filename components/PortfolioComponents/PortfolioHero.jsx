import React from "react";

import Description from "@/components/reusable/Description";

import Heading from "@/components/reusable/Heading";

const PortfolioHero = () => {
  return (
    <section className="text-light py-9 md:py-12">
      <div className="container">
        <Heading
          text="Portfolio"
          className="uppercase text-lg  text-center mb-4 font-bold leading-4 tracking-widest md:text-2lg lg:text-4xl"
        />
        <Description
          text="Welcome to our page showcasing interior design projects! Here, you'll discover inspiring designs crafted by our talented team of designers. Each project reflects our commitment to a creative and functional approach to decorating residential and commercial spaces. Explore the artistry and innovation that define our interior design solutions."
          className="text-center  text-sm md:text-base"
        />
      </div>
    </section>
  );
};

export default PortfolioHero;
