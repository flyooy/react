import React from "react";
import "./index.css";

import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div>
      <Header />
      <About name="Yan Mukha" />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
