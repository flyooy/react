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
          <div className="project" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;