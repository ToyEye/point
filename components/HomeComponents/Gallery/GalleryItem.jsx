import React from "react";
import Image from "next/image";

const GalleryItem = ({ item: { photo, name } }) => {
  return (
    <li className="relative ">
      <Image src={photo} alt={name} width={600} height={400} />
    </li>
  );
};

export default GalleryItem;
