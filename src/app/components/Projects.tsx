import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className=" max-w-[1240px] mx-auto px-2 py-2">
        <p className=" text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
              <div className="grid md:grid-cols-2 gap-8">
                  
                  <ProjectItem
                      title='Shaka Laka'
                      backgroundImg='/crypto.jpg'
                      projectUrl='/pages/crypto'
                  />
                  <ProjectItem
                      title='Property'
                      backgroundImg='/property.jpg'
                      projectUrl='/pages/property'
                  />
                  <ProjectItem
                      title='Netflix'
                      backgroundImg='/netflix.jpg'
                      projectUrl='/netflix'
                  />
                  <ProjectItem
                      title='Twitch'
                      backgroundImg='/twitch.jpg'
                      projectUrl='/twitch'
                  />
                  
        </div>
      </div>
    </div>
  );
};

export default Projects;
