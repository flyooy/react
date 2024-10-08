import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Components/Header/Header"; 
import Footer from "./Components/Footer/Footer"; 
import Contact from "./Components/Contact/Contact"; 
import About from "./Components/About/About.jsx"; 
import Projects from "./Components/Projects/Projects.jsx";
function App() {
  return (
    <div className="app-container">
    <Header />
    <div className="content">
      <Outlet /> 
    </div>
    <Footer />
  </div>
  );
}

export default App;