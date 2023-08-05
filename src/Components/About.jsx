import React from "react";
import Nur from "../Assets/Nur.png";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-[70vh] bg-[#040d1b] text-gray-300 px-5 gap-3"
    >
      <div className="flex flex-col justify-center items-center w-full h-full gap-9 ">
        <div className="w-[300px] h-[300px] flex justify-center items-center">
          <div className="w-[70%] h-[70%] rounded-full flex justify-center items-center bg-white relative">
            {/* square */}
            <div className="w-[300px] h-[150px] absolute bg-[#040d1b] animate-spinning"></div>
            <div className="w-[95%] h-[95%] rounded-full flex justify-center items-center bg-[#040d1b] relative z-10">
              {" "}
              {/*ring system end image box below*/}
              <div className="w-[90%] h-[90%] rounded-full overflow-hidden">
                <img className="object-cover mt-[-25%]" src={Nur} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[800px] flex flex-col items-center gap-3 max-md:w-full">
          <h2 className="text-3xl font-mono max-sm:text-xl">
            Hi, I’m Nur. Nice to meet you!
          </h2>
          <div className="flex items-center justify-center font-bold text-xl max-sm:text-base text-center">
            <span>
              {/* As a seasoned full-stack developer, I have had the privilege of
              collaborating with numerous esteemed clients and companies
              throughout my journey. Starting as a Georgia State University
              student, I engaged in fruitful collaborations with peers and
              professionals, resulting in incredible projects developed during
              hackathons and internships. Today, I take pride in my successful
              tenure with Belcan and as a Frontend Engineer, where I have
              utilized my extensive web industry experience to drive remarkable
              advancements for diverse clients, such as John Deere. Moving
              forward, I am determined to leverage my wealth of experiences to
              make a meaningful difference for future companies and clients. */}
              As a seasoned full-stack developer, I've collaborated with
              esteemed clients and companies, starting from my time at Georgia
              State University. Through hackathons and internships, I achieved
              remarkable projects. At Belcan as a Frontend Engineer, I drove
              advancements for clients like John Deere. I aim to leverage my
              experiences to create meaningful impact for future companies and
              clients.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
