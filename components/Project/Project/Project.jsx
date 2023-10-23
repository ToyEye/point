import React from "react";
import Link from "next/link";

import ProjectInfo from "./ProjectInfo";

const Project = ({ title, data, slug }) => {
  return (
    <li>
      <h2>{title}</h2>
      <ul>
        {data.map(({ name, desc, imageAlt, imageUrl }) => (
          <ProjectInfo
            key={name}
            name={name}
            desc={desc}
            imageAlt={imageAlt}
            imageUrl={imageUrl}
          />
        ))}
      </ul>
      <Link href={`/portfolio/${slug}`}>Go to this ptoject</Link>
    </li>
  );
};

export default Project;
