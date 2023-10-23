import React from "react";
import Link from "next/link";

import ProjectInfo from "./ProjectInfo";
import Heading from "@/components/Heading";

const Project = ({ title, data, slug }) => {
  return (
    <li>
      <Heading
        text={title}
        className="text-2xl text-center mb-8 font-bold leading-4 tracking-widest lg:text-4xl"
      />
      <ul className="flex flex-col gap-4 mb-8">
        {data.map(({ name, desc, imageAlt, imageUrl }, index) => (
          <ProjectInfo
            key={name}
            name={name}
            desc={desc}
            imageAlt={imageAlt}
            imageUrl={imageUrl}
            index={index}
          />
        ))}
      </ul>

      <Link
        href={`/portfolio/${slug}`}
        class="mx-auto w-46  border hover:scale-95 duration-300 relative group cursor-pointer text-sky-50 hover:text-dark   overflow-hidden md:h-16 md:w-64 rounded-md bg-sky-200 p-2 flex justify-center items-center font-extrabold"
      >
        <div class="absolute right-40 md:right-32 -top-4  group-hover:top-1 group-hover:right-2 z-10 w-40 h-40 rounded-full group-hover:scale-150 duration-500 bg-sky-900"></div>
        <div class="absolute right-6 md:right-2 -top-4  group-hover:top-1 group-hover:right-2 z-10 w-32 h-32 rounded-full group-hover:scale-150  duration-500 bg-sky-800"></div>
        <div class="absolute -right-4 md:-right-12 top-4 group-hover:top-1 group-hover:right-2 z-10 w-24 h-24 rounded-full group-hover:scale-150  duration-500 bg-sky-700"></div>
        <div class="absolute right-36 md:right-20 -top-4 group-hover:top-1 group-hover:right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150  duration-500 bg-sky-600"></div>
        <p class="z-10">View this ptoject</p>
      </Link>
    </li>
  );
};

export default Project;
