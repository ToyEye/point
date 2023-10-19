import React from "react";
import AboutProject from "@/components/AboutProject";
import { getProject } from "@/sanity/sanity-utils";

const ProjectPage = async ({ params }) => {
  const slug = params.project;
  const project = await getProject(slug);
  console.log(project);
  return <>{<AboutProject data={project.data} title={project.project} />}</>;
};

export default ProjectPage;
