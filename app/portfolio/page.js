import React from "react";

import Gallery from "@/components/Gallery";
import PortfolioHero from "@/components/PortfolioHero";

import { getData } from "@/helpers/getApi";

const PortfolioPage = async () => {
  const { data } = await getData();

  return (
    <div>
      <PortfolioHero />
      <Gallery data={data} />
    </div>
  );
};

export default PortfolioPage;
