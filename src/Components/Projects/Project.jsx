import React from "react";
import { DiReact } from "react-icons/di";
import {
  SiTailwindcss,
  SiMysql,
  SiPostgresql,
  SiMicrosoftazure,
  SiSpring,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { TbExternalLink } from "react-icons/tb";
import CampusProject from "../../Assets/CampusProject.jpg";
import { FaReact, FaLinux } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { FaAngular } from "react-icons/fa";
import { VscAzureDevops } from "react-icons/vsc";
import { FiFigma } from "react-icons/fi";

const Project = ({ LOR, project }) => {
  const projectTitle = project.name.split(" ");
  return (
    <div
      className={`w-full h-[30%] flex flex-col gap-3 px-3 ${
        LOR === "Left" ? "items-start" : "items-end"
      }  max-lg:items-center`}
    >
      <div className="w-[70%] h-full rounded-lg flex justify-start py-3 px-3 relative  gap-3 bg-[#0a192f] ml-[5%] max-xl:w-[90%]">
        <div className="w-full h-full rounded-lg flex flex-row justify-start py-3 px-3 relative gap-3 bg-black/30">
          <div className="w-[100%] h-full">
            <div className="w-full h-[70%] overflow-hidden rounded-xl max-sm:h-[60%] relative group">
              <img
                className="w-full h-full object-cover"
                src={CampusProject}
                alt=""
              />
              <div className="invisible w-full h-full bg-black/70 absolute top-0 max-md:group-hover:visible flex flex-col justify-center text-center">
                {project.description.map((description, index) => {
                  return (
                    <li
                      key={index}
                      className="overflow-hidden font-mono text-sm font-bold animate-typing max-sm:text-[0.5rem] list-none"
                    >
                      {description}
                    </li>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-row justify-between items-center h-[30%] gap-3 w-full overflow-hidden max-md:flex-col max-md:items-start py-3 max-sm:h-[45%]">
              <div className="flex flex-col gap-1 text-xl font-bold">
                <div className="flex flex-row gap-1">
                  <span>{projectTitle[0]}</span>
                  <span className="text-blue-400">{projectTitle[1]}</span>
                </div>
                <div className="w-full h-[2px] bg-blue-400"></div>
              </div>
              <div className="w-full h-full flex flex-row">
                <div className="w-full h-full justify-start items-center flex px-4 gap-3">
                  {project.tech.map((tech, index) => {
                    return (
                      <>
                        <div className="group relative max-md:hidden">
                          {tech === "React" && <FaReact size={40} />}
                          {tech === "Tailwind" && <SiTailwindcss size={40} />}
                          {tech === "NextJS" && <TbBrandNextjs size={40} />}
                          {tech === "Angular" && <FaAngular size={40} />}
                          {tech === "SpringBoot" && <SiSpring size={40} />}
                          {tech === "MySQL" && <SiMysql size={40} />}
                          {tech === "PS/QL" && <SiPostgresql size={40} />}
                          {tech === "Linux" && <FaLinux size={40} />}
                          {tech === "AWS" && <FaAws size={40} />}
                          {tech === "DevOps" && <VscAzureDevops size={40} />}
                          {tech === "Azure" && <SiMicrosoftazure size={40} />}
                          {tech === "Figma" && <FiFigma size={30} />}
                          <span className="absolute opacity-0 group-hover:opacity-100 transition-all ease-in-out delay-150 duration-300  left-1/2 transform -translate-x-1/2 ">
                            {tech}
                          </span>
                        </div>
                        <div className="hidden group relative max-sm:inline">
                          {tech === "React" && <FaReact size={20} />}
                          {tech === "Tailwind" && <SiTailwindcss size={20} />}
                          {tech === "NextJS" && <TbBrandNextjs size={20} />}
                          {tech === "Angular" && <FaAngular size={20} />}
                          {tech === "SpringBoot" && <SiSpring size={20} />}
                          {tech === "MySQL" && <SiMysql size={20} />}
                          {tech === "PS/QL" && <SiPostgresql size={20} />}
                          {tech === "Linux" && <FaLinux size={20} />}
                          {tech === "AWS" && <FaAws size={20} />}
                          {tech === "DevOps" && <VscAzureDevops size={20} />}
                          {tech === "Azure" && <SiMicrosoftazure size={20} />}
                          {tech === "Figma" && <FiFigma size={30} />}
                          <span className="absolute opacity-0 group-hover:opacity-100 transition-all ease-in-out delay-150 duration-300  left-1/2 transform -translate-x-1/2 text-xs">
                            {tech}
                          </span>
                        </div>
                      </>
                    );
                  })}
                </div>
                <div className="w-[40%] flex items-end justify-end px-3 py-3 gap-3 max-sm:items-center">
                  {project.URL.map((url, index) => {
                    return (
                      <>
                        {url.name === "github" && (
                          <a
                            href={url.URL}
                            className="hover:cursor-pointer"
                            target="_blank"
                          >
                            <BsGithub size={20} />
                          </a>
                        )}
                        {url.name === "web" && (
                          <a
                            href={url.URL}
                            className="hover:cursor-pointer"
                            target="_blank"
                          >
                            <TbExternalLink size={20} />
                          </a>
                        )}
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-full max-md:hidden">
            <div className="w-full h-[20%] text-3xl px-3 italic items-center flex">
              {project.quote}
            </div>
            <div className="w-full h-[80%] rounded-xl bg-[#0b234b] flex justify-center items-center">
              <div className="w-[97%] h-[90%] rounded-xl bg-[#010813] px-3 py-3 flex flex-col">
                {project.description.map((description, index) => {
                  return (
                    <li
                      key={index}
                      className="overflow-hidden font-mono text-base font-bold animate-typing"
                    >
                      {description}
                    </li>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
