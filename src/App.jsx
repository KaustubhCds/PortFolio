import React from "react";
import Navbar from "./components/Navbar.jsx";
import Skills from "./components/Skills.jsx";
import "./App.css";
import HomePage from "./components/Homepage.jsx";
import Project from "./components/Project.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About.jsx";
import Education from "./components/Education.jsx";
import Contact from "./components/Contact.jsx";
const App = () => {
  return (
    <div className="px-40">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/edu" element={<Education/>}/>
          <Route path="/contact" element={<Contact/>}/>
          {/* Add a route for Education if needed */}
          {/* <Route path="/education" element={<Education />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
