import React from "react";
import About from "./About";
import Skills from "./Skills";
import Project from "./Project";
import Contact from "./Contact";
import Education from "./Education";
const HomePage = () => {
  return (
    <div>
      <About />
      <Skills />
      <Project />
      <Education />
      <Contact/>
    </div>
  );
};

export default HomePage;
