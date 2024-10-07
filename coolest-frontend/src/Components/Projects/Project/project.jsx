import React from "react";
import "./Project.css"; 

function Project({ title, description }) {
  return (
    <div className="project-box">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Project;