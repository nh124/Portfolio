import React from "react";
import HackUGA from "../Assets/HackUGA.png";
import HackGSU from "../Assets/HackGSU.png";
import DFG from "../Assets/DFG.png";
import Belcan from "../Assets/Belcan.svg";
import KK from "../Assets/KK.png";

const Companies = () => {
  return (
    <div
      name="companies"
      className="w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
    >
      <div className="w-full h-[10%] text-3xl flex justify-center items-center text-white text-center max-sm:text-2xl px-3">
        <span>I'm thrilled to have have worked these amazing companies:</span>
      </div>
      <div className="w-full h-[40%] flex justify-center items-center text-white">
        <div className="w-[50%] h-full grid grid-cols-4 max-md:w-[90%] max-md:gap-3">
          <div className="w-full col-span-2 flex justify-center items-center max-md:items-end">
            <img className="w-[70%] max-sm:w-[100%]" src={HackUGA} alt="" />
          </div>
          <div className="w-full col-span-2 flex justify-center items-center max-md:items-end">
            <div className="w-full col-span-2 flex justify-center items-center flex-row gap-3 text-4xl max-sm:text-2xl">
              <img className="w-[20%] max-md:w-[30%]" src={HackGSU} alt="" />
              <span>HackGSU</span>
            </div>
          </div>
          <div className="w-full flex justify-center items-center max-md:items-start">
            <img
              className="w-[80%] max-md:w-[100%] max-md:h-[40%]"
              src={DFG}
              alt=""
            />
          </div>
          <div className="w-full flex justify-center items-center max-md:items-start">
            <img
              className="w-[80%] max-md:w-[100%] max-md:h-[40%] "
              src={Belcan}
              alt=""
            />
          </div>
          <div className="w-full flex justify-center items-center max-md:items-start">
            <img className="w-[70%] max-md:w-[100%]" src={KK} alt="" />
          </div>

          {/* <img src={HackUGA} className="w-[30%]" alt="" /> */}
        </div>
      </div>
    </div>
  );
};

export default Companies;
