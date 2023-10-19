import React from "react";
import AboutProject from "@/components/AboutProject";
import { getProject } from "@/sanity/sanity-utils";

const ProjectPage = async ({ params }) => {
  const slug = params.project;
  const project = await getProject(slug);

  return (
    <>
      {
        <AboutProject
          data={project.data}
          title={project.project}
          description={project.description}
        />
      }
    </>
  );
};

export default ProjectPage;
