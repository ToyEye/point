import Image from "next/image";
import React from "react";

import Heading from "./Heading";
import Description from "./Description";

function AboutProjec({ data, title, description }) {
  return (
    <section>
      <div className="container">
        <Heading
          text={title}
          tag="h1"
          className="text-2xl text-center mb-8 font-bold md:text-3xl md:mb-10 "
        />
        <ul className="flex flex-col gap-3 mb-10 ">
          {data.map(({ imageUrl, imageAlt, desc, name }) => (
            <li
              key={name}
              className="flex flex-col gap-5 border rounded py-4 px-4 md:flex-row "
            >
              <Image src={imageUrl} alt={imageAlt} width={300} height={400} />
              <div>
                <Description
                  text={name}
                  className="capitalize font-bold text-center mb-4 "
                />
                <Description text={desc} />
              </div>
            </li>
          ))}
        </ul>
        <p>{description}</p>
      </div>
    </section>
  );
}

export default AboutProjec;
