import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";
import vid from "../Assets/video.mp4";
import { BsLinkedin, BsGithub, BsFillPersonLinesFill } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import Resume from "../Assets/Nur_Haque_Resume.pdf";

const Home = () => {
  const onClickHandler = () => {
    navigator.clipboard.writeText("nur.haque99@gmail.com");
  };
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      <div className="max-w-[1400px] mx-auto px-8 flex flex-row justify-center h-full items-center">
        <div className="w-full relative">
          <div className="w-full relative z-10 bg-[#0a192f]">
            <p className="text-pink-600">Hi, my name is</p>
            <h2 className="text-6xl font-bold text-[#ccd6f6] max-sm:text-2xl max-lg:text-4xl max-md:text-3xl">
              Nur Haque
            </h2>
            <h2 className="text-6xl font-bold text-[#8892b0] max-sm:text-2xl max-lg:text-4xl max-md:text-3xl">
              <TypeAnimation
                sequence={[
                  2000,
                  "I'm a Full-Stack Developer.", // Types 'One'
                  2000, // Waits 1s
                  "I'm a Problem Solver.", // Deletes 'One' and types 'Two'
                  2000, // Waits 2s
                  "I'm a Collaborator.",
                  200,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
              />
            </h2>
            <p className="text-[#8892b0] py-4 max-w-[700px]">
              I'm a motivated software engineer focused on doing Frontend,
              Backend, Fullstack development{" "}
            </p>
            <div className="w-full h-[100px] flex flex-row justify-start items-start gap-3 px-3">
              <a
                className="flex justify-between items-center  text-gray-300 px-3 py-3 bg-blue-700 rounded-full group relative"
                href="https://www.linkedin.com/in/nur-haque-88b2b9175/"
                target="_blank"
              >
                <BsLinkedin color="white" size={20} />
                <span className="absolute top-12  opacity-0 group-hover:opacity-100 transition-all ease-in-out delay-150 duration-300 text-blue-400 left-1/2 transform -translate-x-1/2">
                  Linkedin
                </span>
              </a>
              <a
                className="flex justify-between items-center text-gray-300 px-3 py-3 bg-gray-700 rounded-full relative group"
                href="https://github.com/nh124"
                target="_blank"
              >
                <BsGithub color="white" size={20} />
                <span className="absolute top-12  opacity-0 group-hover:opacity-100 transition-all ease-in-out delay-150 duration-300 text-gray-400 left-1/2 transform -translate-x-1/2">
                  GitHub
                </span>
              </a>
              <button
                className="flex justify-between items-center text-gray-300 px-3 py-3 bg-red-700 rounded-full group relative"
                type="button"
                onClick={onClickHandler}
              >
                <SiGmail color="white" size={20} />
                <span className="absolute top-12  opacity-0 group-hover:opacity-100 transition-all ease-in-out delay-150 duration-300 text-red-400 left-1/2 transform -translate-x-1/2">
                  Gmail
                </span>
              </button>
              <a
                className="flex flex-col justify-between items-center text-gray-300 px-3 py-3 bg-gray-700 rounded-full group"
                download={"Resume"}
                href={Resume}
                target="_blank"
              >
                <BsFillPersonLinesFill color="white" size={25} />
                <span className="absolute mt-9  opacity-0 group-hover:opacity-100 transition-all ease-in-out delay-150 duration-300 text-gray-400">
                  linkedin
                </span>
              </a>
            </div>
          </div>

          <div className="max-sm:absolute max-sm:inline max-sm:top-0 max-sm:left-[20%] max-sm:w-[50%] max-lg:w-[60%] mt-[-50%] hidden">
            <video
              muted
              loop
              autoPlay
              src={vid}
              onContextMenu={(event) => event.preventDefault()}
            ></video>
          </div>
        </div>
        <div className="max-sm:hidden max-sm:top-0 max-sm:left-[20%] max-sm:w-[50%] max-lg:w-[60%]">
          <video
            muted
            loop
            autoPlay
            src={vid}
            onContextMenu={(event) => event.preventDefault()}
          ></video>
        </div>
      </div>
    </div>
  );
};

export default Home;
