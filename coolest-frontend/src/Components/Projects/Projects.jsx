import React from "react";
import Project from "./Project/project"; 
import "./Projects.css";  

function Projects() {
  const projectData = [
    {
      title: "Project 1",
      description: "This is the description for project 1.",
    },
    {
      title: "Project 2",
      description: "This is the description for project 2.",
    },
    {
      title: "Project 3",
      description: "This is the description for project 3.",
    },
  ];

  return (
    <div className="projects-section">
      <h2>Projects</h2>
      <div className="projects-container">
        {projectData.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
