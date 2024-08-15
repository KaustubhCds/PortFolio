import React from "react";
import img from "../images/img.png"
import './About.css'
import Navbar from "./Navbar";
const About = () => {
  return (
    
        
        

    <div className="">
      
      <div className="flex">
        <div className="about">
          <div className="kp text-white font-semibold text-5xl pt-12  ease-in-out duration-1000 delay-1000 ">
            Hi, I am <br />
            Kaustubh Phatangare
          </div>
          <div className="text-white text-3xl mt-10">
            I am a <span className="text-purple-400 anima">Full-stack developer</span>
          </div>

          <p className="text-white text-xl mt-6 tracking-wide leading-7 ">
            I am a hardworking and determined individual with a passion for
            technology. As a tech enthusiast, I am always eager to learn and
            explore new technologies. My commitment to continuous learning and
            my enthusiasm for tech drive me to stay updated with the latest
            trends and advancements in the industry.
          </p>
          <div className="mt-6 ">
            <a href="https://drive.google.com/file/d/1DpSoNdSDpRqfK8TuP7VpnWQ5Y1tYW0sd/view?usp=sharing" className="">
              <button className="text-white text-xl hover:scale-105 hover:bg-purple-600 bg-purple-700 p-2  rounded-2xl">Check Resume</button>
            </a>
          </div>
        </div>
        <div className="pl-10">
          <img src={img} alt="" className="w-screen rounded-full border-2 border-purple-400 mt-10" />
        </div>
        <p className="text-white text-xl mt-6 tracking-wide leading-7 ">
          
          </p>
            </div>
    </div>
  );
};

export default About;
