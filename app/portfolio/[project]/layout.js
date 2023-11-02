import React from "react";

export const generateMetadata = async ({ params: { project } }) => {
  return { title: project };
};

const PortfolioLayout = ({ children }) => {
  return <>{children}</>;
};

export default PortfolioLayout;
