import React from "react";
import Link from "next/link";

import { getGallary } from "@/sanity/sanity-utils";
import Heading from "@/components/Heading";

import GalleryItem from "./GalleryItem";

const Gallery = async () => {
  const gallery = await getGallary();

  return (
    <section>
      <div className="container">
        <Heading
          tag="h2"
          text="Gallery"
          className=" text-white text-center mb-3 text-2xl font-bold md:text-3xl md:mb-8 lg:text-5xl lg:mb-12 "
        />
        <ul className="grid gap-4 mb-4 md:grid-cols-2 md:mb-8 lg:mb-12">
          {gallery?.map((el) => (
            <GalleryItem key={el._id} item={el} />
          ))}
        </ul>
        <Link
          href={`/portfolio`}
          className="mx-auto block py-[10px] w-3/4 text-center text-light md:w-1/3  px-5 rounded-md bg-bgBtn hover:bg-bgBtnHover focus:bg-bgBtnHover transition"
        >
          Look projects
        </Link>
      </div>
    </section>
  );
};

export default Gallery;
