import React from "react";

import { getGallary } from "@/sanity/sanity-utils";
import Slider from "./Slider";

const Gallery = async () => {
  const gallery = await getGallary();

  return (
    <section>
      <div className="container">
        <Slider data={gallery} />
      </div>
    </section>
  );
};

export default Gallery;
