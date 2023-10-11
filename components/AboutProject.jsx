import React from "react";

function AboutProjec({ data }) {
  return (
    <section>
      <div className="container">
        <ul>
          {data.map(({ id, imageUrl, fullDesc, description }) => (
            <li key={id}>
              <img src={imageUrl} alt={description} className="w-[400px]" />
              <p>{fullDesc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default AboutProjec;
