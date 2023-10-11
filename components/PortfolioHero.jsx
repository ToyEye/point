import React from "react";

import Description from "@/components/Description";

import Heading from "@/components/Heading";

const PortfolioHero = () => {
  return (
    <section>
      <div className="container">
        <Heading text="Title" className="text-center" />
        <Description text="About page" className="text-center" />
      </div>
    </section>
  );
};

export default PortfolioHero;
