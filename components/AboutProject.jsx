import Image from "next/image";
import React from "react";

import Heading from "./reusable/Heading";
import Description from "./reusable/Description";
import LinkLikeBtn from "./reusable/LinkLikeBtn";

function AboutProjec({ data, title, description }) {
  return (
    <section className="py-6 md:py-14 lg:py-28 text-light">
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
              className="flex flex-col gap-5 border rounded py-4 px-4 lg:flex-row "
            >
              <Image
                src={imageUrl}
                alt={imageAlt}
                width={500}
                height={400}
                className="w-full"
              />
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
        <p className="mb-6 px-5 text-sm md:text-base">{description}</p>
        <LinkLikeBtn
          text="Contact me"
          path="/portfolio"
          classNames="w-3/4 md:w-1/3 "
        />
      </div>
    </section>
  );
}

export default AboutProjec;
