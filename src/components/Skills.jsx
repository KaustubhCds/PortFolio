import React from "react";
import "./Skills.css";
import mongo from "../images/mongo.png";
import express from "../images/express.png";
import react1 from "../images/react.png";
import node from "../images/node.png";
import sql from "../images/sql.png";
import Navbar from "./Navbar";
import python from "../images/python.png";
const Skills = () => {
  return (
    <div>
      <div class="skills-container ">
        <div className="text-white text-5xl heading mt-24">My Skills</div>

        <div className="justify-between flex h-48 mt-10">
          <div class="skill">
            <img src={mongo} className="h-full hover:scale-125" alt="" />
          </div>
          <div class="skill">
            <img src={express} className="h-full hover:scale-125" alt="" />
          </div>
          <div class="skill">
            <img src={react1} className="h-full hover:scale-125" alt="" />
          </div>
          <div class="skill">
            <img src={node} className="h-full hover:scale-125" alt="" />
          </div>
          <div class="skill">
            <img src={sql} className="h-full hover:scale-125" alt="" />
          </div>
          <div class="skill">
            <img src={python} className="h-full hover:scale-125" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
