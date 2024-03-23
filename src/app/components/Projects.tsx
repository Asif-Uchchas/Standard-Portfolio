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
                      title='Airbnb'
                      backgroundImg='/Airbnb.png'
            projectUrl='/pages/airbnb'
            description="A home rental web app built with NextJs and MongoDB"
                  />
                  <ProjectItem
                      title='Carhub'
                      backgroundImg='/Carhub.png'
            projectUrl='/pages/carhub'
            description="A car rental service built with NextJs and TailwindCSS"
                  />
                  <ProjectItem
                      title='Medsync'
                      backgroundImg='/medsync.png'
            projectUrl='/pages/medsync'
            description="Your personalized medication manager for a healthier life."
                  />
                  <ProjectItem
                      title='GoTravelot'
                      backgroundImg='/gotravelot.png'
            projectUrl='/pages/gotravelot'
            description="A hotel rental website built with NextJs and SQLite"
                  />
                  
        </div>
      </div>
    </div>
  );
};

export default Projects;
