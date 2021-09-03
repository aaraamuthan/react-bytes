import React from "react";
import Project from "./Project";

const ProjectList = ({ projects }) => {
  return (
    <>
      {projects.map((project) => {
        return <Project key={project.id} {...project} />;
      })}
    </>
  );
};

export default ProjectList;
