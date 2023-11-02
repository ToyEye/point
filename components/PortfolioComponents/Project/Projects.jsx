import React from "react";

import Project from "./Project/Project";

const Projects = ({ data }) => {
  return (
    <section className="text-light pb-9 md:pb-16 lg:pb-28">
      <div className="container">
        <ul className="flex flex-col gap-10">
          {data?.map(({ _id, project, data, slug }) => (
            <Project key={_id} title={project} data={data} slug={slug} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
