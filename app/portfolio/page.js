import React from "react";

import Gallery from "@/components/Gallery";
import PortfolioHero from "@/components/PortfolioHero";

import { getProjects } from "@/sanity/sanity-utils";

const PortfolioPage = async () => {
  const data = await getProjects();

  return (
    <div>
      <PortfolioHero />
      <Gallery data={data} />
    </div>
  );
};

export default PortfolioPage;
