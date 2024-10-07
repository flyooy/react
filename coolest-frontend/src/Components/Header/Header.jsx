import { useState } from "react";
import "./Header.css";

function Header() {
  return (
    <nav>
      <h1>JS.</h1>
      <div>
        <a href="#projects">projects</a>
        <a href="#skills">skills</a>
        <a href="#contact">contact</a>
      </div>
    </nav>
  );
}
export default Header;
