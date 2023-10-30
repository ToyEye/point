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
        <Heading tag="h2" text="Gallery" className="text-center mb-3" />
        <ul>
          {gallery?.map((el) => (
            <GalleryItem key={el._id} item={el} />
          ))}
        </ul>
        <Link
          href={`/portfolio`}
          className="mx-auto block border w-1/2 text-center rounded-md py-2"
        >
          Look projects
        </Link>
      </div>
    </section>
  );
};

export default Gallery;
