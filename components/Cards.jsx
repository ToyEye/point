import { getPrices } from "@/sanity/sanity-utils";
import React from "react";
import Card from "./Card";

const Cards = async () => {
  const cards = await getPrices();

  return (
    <section className="py-10">
      <div className="container">
        <ul className="flex flex-col gap-5 items-center md:flex-row flex-wrap justify-center">
          {cards?.map((card) => (
            <Card key={card._id} card={card} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Cards;
