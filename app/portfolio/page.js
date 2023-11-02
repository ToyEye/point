import React from "react";

import Projects from "@/components/PortfolioComponents/Project/Projects";
import PortfolioHero from "@/components/PortfolioComponents/PortfolioHero";

import { getProjects } from "@/sanity/sanity-utils";

const PortfolioPage = async () => {
  const data = await getProjects();

  return (
    <div>
      <PortfolioHero />
      <Projects data={data} />
    </div>
  );
};

export default PortfolioPage;
