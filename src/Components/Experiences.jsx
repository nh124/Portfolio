import React from "react";
import { experienceData } from "./experienceData";
import Experience from "./Experience";

const workExperience = experienceData;

const Experiences = () => {
  return (
    <div
      name="Experiences"
      className="w-full h-screen bg-[#0a192f] text-white px-5 py-5"
    >
      <div className="max-w-[1000px] mx-auto px-4 flex flex-col justify-center items-center w-full h-screen">
        <h2 className="text-4xl font-bold inline border-b-4 border-pink-600 mb-5">
          Work Experience
        </h2>
        {workExperience?.map((experience, index) => (
          <Experience
            key={index}
            job_title={experience.job_title}
            company={experience.company}
            date_range={experience.date_range}
            description={experience.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Experiences;
