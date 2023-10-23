import Image from "next/image";
import React from "react";

const ProjectInfo = ({ name, desc, imageUrl, imageAlt }) => {
  return (
    <li>
      <p>{name}</p>
      <p>{desc}</p>
      <Image src={imageUrl} alt={imageAlt} width={200} height={300} />
    </li>
  );
};

export default ProjectInfo;
