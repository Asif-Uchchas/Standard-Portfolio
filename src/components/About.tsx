import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className=" max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            Hi, I'm Asif! A web developer based in Bangladesh specialising in
            building (and occasionally designing) exceptional, high-quality
            websites and applications.
          </p>
          <p className="py-2 text-gray-600">
            I have a passion for web development and love to create for web and
            mobile devices. My goal is to make the digital world a better place
            by creating intuitive, user-friendly, and beautiful web
            applications. With a passion for learning new technologies, I am
            always on the lookout to improve my skills and learn new things.I
            have a strong passion for creating interactive digital experiences
            that are both visually stunning and highly functional.
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">Check some of my projects.</p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
                  <Image
                      src="/about.jpg"
                      alt="about"
                      width={500}
                      height={500}
                      className="rounded-xl"
                  />
        </div>
      </div>
    </div>
  );
};

export default About;
