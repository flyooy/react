import { useState } from "react";
import "./About.css";

function About(props) {
    return (
        <div className="container">
        <h1>Hi, I am <span className="highlight">{props.name}</span></h1>
            <h3>A Frontend Developer.</h3>
            <p>As a passionate front-end developer, I specialize in creating engaging and responsive user interfaces that provide an exceptional user experience. With a strong foundation in HTML, CSS, and JavaScript, I leverage modern frameworks and libraries such as React, Vue.js, and Angular to build dynamic web applications.</p>
            <button>Resume</button>
        </div>
  );
}
export default About;