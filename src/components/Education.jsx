import React from "react";
import img from "../images/mit.png";
import img1 from "../images/shramik.png";
import img2 from "../images/sahyadri.png";
import "./Education.css";
const Education = () => {
  return (
    <div>
      <div className="ed">
        <h className="flex  mt-12 text-white text-5xl justify-center">
          Education
        </h>
        <p className="flex  mt-3 text-center text-white  justify-center">
          My education has been a journey of self-discovery and growth.My <br />
          educational details are as follows
        </p>
      </div>
      <div className="edu">
        <div className="flex justify-center mt-14">
          <div className="box h-auto w-1/2 border-purple-600 rounded-md border-2">
            <div className=" flex mt-5">
              <img src={img} alt="" className="h-16 rounded-full ml-5 " />
              <div className="text-white text-xl ml-5">
                MIT Academy of Engineering
                <div className="text-gray-300 text-sm">
                  Bachlor of technology-Btech Computer Science and Engineering
                  <br />
                  2021-2025
                </div>
              </div>
            </div>

            <div className="mt-3 ml-4">
              <span className="text-gray-300 font-semibold text-base mt-5">
                Grades: 8.98
              </span>
            </div>

            <div className="text-white text-sm mt-5 ml-4 mb-3">
              Degree: Bachelor of Engineering (B.E.) in Computer Engineering{" "}
              <br />
              Year: 4th Year <br />
              Location: Pune, India <br />
              Expected Graduation:2025
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-14">
          <div className="box h-auto w-1/2 border-purple-600 rounded-md border-2">
            <div className="flex mt-5">
              <img src={img1} alt="" className="h-16 rounded-lg ml-5" />
              <div className="text-white text-xl ml-5">
                Shramik Jr College, Sangamner
                <div className="text-gray-300 text-sm">
                  Higher Secondary Certificate (HSC) - Science <br />
                  2019-2021
                </div>
              </div>
            </div>

            <div className="mt-3 ml-4">
              <span className="text-gray-300 font-semibold text-base mt-5">
                Grades: 80.83%
              </span>
            </div>

            <div className="text-white text-sm mt-5 ml-4 mb-3">
              Degree: Higher Secondary Certificate (HSC) <br />
              Stream: Science <br />
              Location: Sangamner, India <br />
              Year of Completion: 2021
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-14">
          <div className="box h-auto w-1/2 border-purple-600 rounded-md border-2">
            <div className="flex mt-5">
              <img src={img2} alt="" className="h-16 rounded-full ml-5" />
              <div className="text-white text-xl ml-5">
                Sahyadri Vidyalaya, Sangamner
                <div className="text-gray-300 text-sm">
                  Secondary School Certificate (SSC) <br />
                  Year: 2019
                </div>
              </div>
            </div>

            <div className="mt-3 ml-4">
              <span className="text-gray-300 font-semibold text-base mt-5">
                Grades: 87.60%
              </span>
            </div>

            <div className="text-white text-sm mt-5 ml-4 mb-3">
              Degree: Secondary School Certificate (SSC) <br />
              Location: Sangamner, India <br />
              Year of Completion: 2019
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
