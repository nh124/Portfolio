import React from "react";
import Project from "./Project.jsx";
import { projectData } from "./ProjectData.js";

const Work = () => {
  return (
    <div
      name="projects"
      className="w-full h-[200vh] bg-[#040d1b] flex justify-start items-center text-white"
    >
      <div className="w-full flex flex-col h-[70%] justify-start items-start gap-5">
        {projectData.map((project, index) => {
          return (
            <>
              {index === 1 && <Project LOR="Right" project={project} />}{" "}
              {index !== 1 && <Project LOR="Left" project={project} />}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Work;
