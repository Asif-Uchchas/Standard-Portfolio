'use client'
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Hero = () => {


  const handleSubmit = () => {
    const email = 'asifuddinahmed1234@gmail.com';
    const subject = 'Emailing to Asif Uddin Ahmed';
    const body = 'Assalamu alaikum, Hope you are doing well.';
  
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  
    window.location.href = mailtoLink;
  };

  const route = useRouter()
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Let's Build something together
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I'm <span className="text-[#5651e5]">Asif</span>
          </h1>
          <h1 className="py-2 text-gray-700">A Front-End Web Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I am a front-end web developer specializing in
            building(occasionally) high-quality websites and applications.
            Curently I'm focused on building responsive front-end web
            applications while learning back-end technologies.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaLinkedinIn
                size={25}
                  onClick={() => route.push("https://www.linkedin.com/in/asif-uddin-ahmed/")}
                />
              
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
              <Link href="https://github.com/Asif-Uchchas">
                <FaGithub
                  size={25}
                  onClick={() => route.push("https://github.com/Asif-Uchchas")}
                />
              </Link>
              
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
              <AiOutlineMail size={25} onClick={handleSubmit}/>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
              <BsPersonLinesFill size={25} onClick={() => route.push("https://drive.google.com/file/d/1u-gYRgq8DIZSZsTDIW4XDX1TuEat0QIf/view?usp=sharing")}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
