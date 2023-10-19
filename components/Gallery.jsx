import React from "react";

import Link from "next/link";
import Image from "next/image";

const Gallery = ({ data }) => {
  console.log(data);
  return (
    <section>
      <div className="container">
        <ul>
          {data?.map((project) => {
            return (
              <li key={project._id}>
                <h2>{project.project}</h2>
                <ul>
                  {project.data.map(({ name, desc, imageAlt, imageUrl }) => {
                    return (
                      <li key={name}>
                        <p>{name}</p>
                        <p>{desc}</p>
                        <Image
                          src={imageUrl}
                          alt={imageAlt}
                          width={200}
                          height={300}
                        />
                      </li>
                    );
                  })}
                </ul>
                <Link href={`/portfolio/${project.slug}`}>
                  Go to this ptoject
                </Link>
              </li>
            );
          })}
        </ul>
        {/* {data?.map(({ id, attributes }) => {
          console.log(attributes.images.data);
          return (
            <div key={id}>
              <h2>{attributes.title}</h2>
              <Slider data={attributes.images.data} />;
            </div>
          );
        })} */}
        {/* <h1>{catImages.title}</h1>
        <p>{catImages.propjectDescrL}</p>
        <Slider data={catImages.images} />
        <Slider data={catImages.images} />
        <Slider data={catImages.images} /> */}
      </div>
    </section>
  );
};

export default Gallery;
