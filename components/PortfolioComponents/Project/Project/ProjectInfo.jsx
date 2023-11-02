import Image from "next/image";
import React from "react";
import classNames from "classnames";

import Description from "@/components/reusable/Description";
import Heading from "@/components/reusable/Heading";

const ProjectInfo = ({ name, desc, imageUrl, imageAlt, index }) => {
  const isInteger = classNames(
    { "lg:flex-row": index % 2 === 0 },
    { "lg:flex-row-reverse": index % 2 !== 0 }
  );

  return (
    <li className={`flex flex-col-reverse gap-5 items-center ${isInteger}  `}>
      <div className="lg:w-1/3 ">
        <Heading
          text={name}
          className="mb-4 text-center text-sm uppercase font-medium tracking-wider md:text-lg md:font-semibold  "
        />
        <Description text={desc} className="text-sm leading-5  md:text-base " />
      </div>
      <div>
        <Image
          src={imageUrl}
          alt={imageAlt}
          width={800}
          height={1000}
          loading="lazy"
        />
      </div>
    </li>
  );
};

export default ProjectInfo;
