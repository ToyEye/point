import Image from "next/image";
import React from "react";

function AboutProjec({ data }) {
  return (
    <section>
      <div className="container">
        <ul>
          {data.map(({ imageUrl, imageAlt, desc, name }) => (
            <li key={name}>
              <Image src={imageUrl} alt={imageAlt} width={300} height={400} />
              <p>{name}</p>
              <p>{desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default AboutProjec;
