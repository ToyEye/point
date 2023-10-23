import Image from "next/image";
import React from "react";
import classNames from "classnames";

import Description from "@/components/Description";

const ProjectInfo = ({ name, desc, imageUrl, imageAlt, index }) => {
  const isInteger = classNames(
    { "md:flex-row": index % 2 === 0 },
    { "md:flex-row-reverse": index % 2 !== 0 }
  );

  return (
    <li className={`flex flex-col gap-5 items-center ${isInteger}  `}>
      <div>
        <Description
          text={name}
          className="mb-4 text-center text-sm uppercase font-medium tracking-wider"
        />
        <Description text={desc} className="mb-4  text-sm" />
      </div>
      <div>
        <Image
          src={imageUrl}
          alt={imageAlt}
          width={800}
          height={1000}
          loading="lazy"
          layout="responsive"
        />
      </div>
    </li>
  );
};

export default ProjectInfo;
