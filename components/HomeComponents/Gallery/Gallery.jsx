import { getGallary } from "@/sanity/sanity-utils";
import Heading from "@/components/reusable/Heading";
import LinkLikeBtn from "@/components/reusable/LinkLikeBtn";

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
        <LinkLikeBtn
          path="/portfolio"
          text=" Look projects"
          classNames="w-3/4 md:w-1/3"
          label="Portfolio page"
        />
      </div>
    </section>
  );
};

export default Gallery;
