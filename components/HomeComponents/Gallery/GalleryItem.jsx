import React from "react";
import Image from "next/image";

const GalleryItem = ({ item: { photo, name } }) => {
  return (
    <li className="relative ">
      <Image
        src={photo}
        alt={name}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 75vw, 50vw"
      />
      <img src={photo} alt={name} width={600} height={400} className="mb-4" />
    </li>
  );
};

export default GalleryItem;
