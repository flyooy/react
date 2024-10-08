import { useState } from "react";
import { Link } from 'react-router-dom';
import "./Header.css";

function Header() {
 
  return (
    <nav>
      <Link to="/"><h1>JS.</h1></Link>
      <div>
        <Link to="/projects">projects</Link>
        <Link to="/skills">skills</Link>
        <Link to="/contact">contact</Link>
      </div>
     
    </nav>
  );
}
export default Header;
