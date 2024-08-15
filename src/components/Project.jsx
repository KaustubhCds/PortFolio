import React from "react";
import img from "../images/chatapp.png";
import img1 from "../images/charge.png";
import "./Project.css"
const Project = () => {
  return (
    
      <div className="">
        <div className="text-5xl text-white flex justify-center mt-24 ">
          My Projects
        </div>
        <div className="flex justify-between mt-20">
          <a href="https://chargeeazy.com/" target="_blank">
          <div className="h-72  grid place-content-center">
            <img src={img1} className="h-fit  about" alt="" />
          </div>
          </a>
          <div className="h-auto mt-1 ">
            <a href="https://chargeeazy.com/" className="" target="_blank">
              <span className="  font-medium desc text-3xl justify-center flex text-blue-500 hover:text-blue-300 ">
                ChargeEazy Website
              </span>
            </a>
            <p className="desc text-white text-xl w-96 mt-14 text-pretty tracking-wide leading-8 text-ellipsis over">
              ChargeEazy is a platform developed by my team and me, focusing on
              React and JavaScript. It offers a seamless EV charging solution
              with a user-friendly interface and robust backend, allowing users
              to locate stations, manage sessions, and monitor usage, promoting
              sustainable transportation.
            </p>
          </div>
        </div>
        <div className="">
          <div className="flex justify-between mt-12 ">
            <a href="https://chat-app-mern-qk1k.onrender.com/ "target="_blank">
            <div className="h-96 grid place-content-center">
              <img src={img} className="h-72 about relative left-12" alt="" />
            </div>
            </a>
            <div className="h-auto mt-1">
              <a href="https://chat-app-mern-qk1k.onrender.com/" className="" target="_blank">
                <span className="text-blue-500 desc font-medium text-3xl flex justify-center hover:text-blue-300 ">
                  ChatApp-Messanger
                </span>
              </a>
              <p className="desc text-white text-xl w-96 mt-14 text-pretty tracking-wide leading-8 text-ellipsis over">
                The Chat App is a real-time messaging platform developed using
                the MERN stack (MongoDB, Express.js, React, Node.js). It allows
                users to create accounts, join chat rooms, and communicate
                instantly through a user-friendly interface.
              </p>
            </div>
          </div>
        </div>
      </div>
 
  );
};

export default Project;
