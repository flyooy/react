import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Projects from "./Components/Projects/Projects.jsx";
import Contact from "./Components/Contact/Contact.jsx"; 
import Skills from "./Components/Skills/Skills.jsx"; 
import About from "./Components/About/About.jsx"; 

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, 
    children: [
      {
        path: "",
        element: <About name="Yan Mukha" /> // Отображение About только на главной странице
      },
      {
        path: "projects",
        element: <Projects />
      },
      {
        path: "skills",
        element: <Skills />
      },
      {
        path: "contact",
        element: <Contact />
      }
    ]
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>
);