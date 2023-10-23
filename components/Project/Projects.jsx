import React from "react";

import Project from "./Project/Project";

const Projects = ({ data }) => {
  return (
    <section>
      <div className="container">
        <ul>
          {data?.map(({ _id, project, data, slug }) => (
            <Project key={_id} title={project} data={data} slug={slug} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
