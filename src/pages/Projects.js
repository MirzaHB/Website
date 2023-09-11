import React from "react";
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList";

import "../styles/Projects.css";
import ToTop from "../components/ToTop";

function Projects() {
  return (
    <div className="projects">
      <h1 style={{color:"khaki"}}> My Personal Projects</h1>
      <div className="projectList">
        {ProjectList.map((project, idx) => {
          return (
            <ProjectItem id={idx} name={project.name} image={project.image} />
          );
        })}
      </div>
      <ToTop/>
    </div>
  );
}

export default Projects;
