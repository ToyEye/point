import React from "react";
import Slider from "./Slider";

const catImages = {
  title: "Appartments",
  propjectDescrL:
    ' "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus molestias voluptates porro aliquam quaerat saepe est blanditiis adipisci minima. Vero minus ipsum nemo doloribus incidunt, quia enim facilis, illum dolorum libero a reprehenderit temporibus ad maximeesse at aliquam error, ex itaque fugit! Recusandae voluptatemtempore enim, doloremque quia hic atque dolorum ad, iusto animiconsequatur architecto, minima inventore commodi ullam error iureillum? Iure, cum, consequatur nisi officia doloremque magnidignissimos fugit numquam, non illum quisquam reiciendis enim.",',
  images: [
    {
      id: 1,
      imageUrl: "https://images.unsplash.com/photo-1560807707-8cc77767d783",
      description: "Прекрасный котенок с белым мехом.",
      fullDesc:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus molestias voluptates porro aliquam quaerat saepe est blanditiis adipisci minima. Vero minus ipsum nemo doloribus incidunt, quia enim facilis, illum dolorum libero a reprehenderit temporibus ad maximeesse at aliquam error, ex itaque fugit! Recusandae voluptatemtempore enim, doloremque quia hic atque dolorum ad, iusto animiconsequatur architecto, minima inventore commodi ullam error iureillum? Iure, cum, consequatur nisi officia doloremque magnidignissimos fugit numquam, non illum quisquam reiciendis enim.",
    },
    {
      id: 2,
      imageUrl: "https://images.unsplash.com/photo-1560807707-8cc77767d783",
      description: "Спящий котенок в корзине.",
      fullDesc:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus molestias voluptates porro aliquam quaerat saepe est blanditiis adipisci minima. Vero minus ipsum nemo doloribus incidunt, quia enim facilis, illum dolorum libero a reprehenderit temporibus ad maximeesse at aliquam error, ex itaque fugit! Recusandae voluptatemtempore enim, doloremque quia hic atque dolorum ad, iusto animiconsequatur architecto, minima inventore commodi ullam error iureillum? Iure, cum, consequatur nisi officia doloremque magnidignissimos fugit numquam, non illum quisquam reiciendis enim.",
    },
    {
      id: 3,
      imageUrl: "https://images.unsplash.com/photo-1560807707-8cc77767d783",
      description: "Игривый котенок с мячиком.",
      fullDesc:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus molestias voluptates porro aliquam quaerat saepe est blanditiis adipisci minima. Vero minus ipsum nemo doloribus incidunt, quia enim facilis, illum dolorum libero a reprehenderit temporibus ad maximeesse at aliquam error, ex itaque fugit! Recusandae voluptatemtempore enim, doloremque quia hic atque dolorum ad, iusto animiconsequatur architecto, minima inventore commodi ullam error iureillum? Iure, cum, consequatur nisi officia doloremque magnidignissimos fugit numquam, non illum quisquam reiciendis enim.",
    },
    {
      id: 4,
      imageUrl: "https://images.unsplash.com/photo-1560807707-8cc77767d783",
      description: "Котенок на окне смотрит на улицу.",
      fullDesc:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus molestias voluptates porro aliquam quaerat saepe est blanditiis adipisci minima. Vero minus ipsum nemo doloribus incidunt, quia enim facilis, illum dolorum libero a reprehenderit temporibus ad maximeesse at aliquam error, ex itaque fugit! Recusandae voluptatemtempore enim, doloremque quia hic atque dolorum ad, iusto animiconsequatur architecto, minima inventore commodi ullam error iureillum? Iure, cum, consequatur nisi officia doloremque magnidignissimos fugit numquam, non illum quisquam reiciendis enim.",
    },
    {
      id: 5,
      imageUrl: "https://images.unsplash.com/photo-1560807707-8cc77767d783",
      description: "Котенок с красивыми глазами.",
      fullDesc:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus molestias voluptates porro aliquam quaerat saepe est blanditiis adipisci minima. Vero minus ipsum nemo doloribus incidunt, quia enim facilis, illum dolorum libero a reprehenderit temporibus ad maximeesse at aliquam error, ex itaque fugit! Recusandae voluptatemtempore enim, doloremque quia hic atque dolorum ad, iusto animiconsequatur architecto, minima inventore commodi ullam error iureillum? Iure, cum, consequatur nisi officia doloremque magnidignissimos fugit numquam, non illum quisquam reiciendis enim.",
    },
  ],
};

const Gallery = () => {
  return (
    <section>
      <div className="container">
        <h1>{catImages.title}</h1>
        <p>{catImages.propjectDescrL}</p>
        <Slider data={catImages.images} />
        <Slider data={catImages.images} />
        <Slider data={catImages.images} />
      </div>
    </section>
  );
};

export default Gallery;
