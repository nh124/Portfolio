import React from "react";
import Nur from "../Assets/Nur.png";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-[70vh] bg-[#040d1b] text-gray-300 px-5 gap-3"
    >
      <div className="flex flex-col justify-center items-center w-full h-full gap-9">
        <div className="w-[300px] h-[300px] bg-[#040d1b] relative">
          <div className="w-[245px] h-[245px] rounded-full bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-sm:w-[200px] max-sm:h-[200px]"></div>
          <div className=" w-[235px] h-[235px] rounded-full bg-[#040d1b] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-sm:w-[190px] max-sm:h-[190px]"></div>
          <div className="w-[100%] h-[200px] bg-[#040d1b] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-sm:h-[150px]"></div>
          <div className="w-[220px] h-[220px] rounded-full bg-white absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden max-sm:w-[175px] max-sm:h-[175px]">
            <img className="w-full mt-[-25%] object-cover" src={Nur} alt="" />
          </div>
        </div>

        <div className="w-[800px] flex flex-col items-center gap-3 max-md:w-full">
          <h2 className="text-3xl font-mono max-sm:text-xl">
            Hi, I’m Nur. Nice to meet you.
          </h2>
          <div className="flex items-center justify-center font-bold text-xl max-sm:text-base">
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
              repudiandae aspernatur? Vitae earum reprehenderit, expedita
              deserunt consequatur asperiores, sunt perspiciatis, molestias
              numquam debitis id sint aliquam amet quibusdam hic vel?
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
