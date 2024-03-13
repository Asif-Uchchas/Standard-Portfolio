'use client'
import Image from "next/image";
import React from "react";
import CustomButton from "../../components/CustomButton";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";

const ProjectCarhub = () => {

  const router = useRouter()
  return (
    <div className="w-full">
      <div className=" w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          src="/Carhub.png"
          alt="property"
          layout="fill"
          objectFit="cover"
          className="absolute z-1"
        />
        <div className=" absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Carhub</h2>
          <h3>Next JS / Tailwind / Typescript</h3>
        </div>
      </div>
      <div className=" max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className=" col-span-4">
          <p>Prject</p>
          <h2>Overview</h2>
          <p>
            A car rental website  that allows users to search for cars online. The user interface is designed in a way that users can easily access
            information on a wide range of cars and rent them hassle-free. Here the users can compare prices on cars they are interested in. The web app
            was built using the Next.JS 14, ReactJS, Typescript and on the frontend I used Tailwind.
          </p>
          <CustomButton
            title="View Project"
            containerStyles="w-50 px-8 py-2 mt-4 mr-8 shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff] font-bold"
            textStyles="text-white"
            handleClick={() => {router.push("https://carhub-sable.vercel.app/")}}
          />
          <CustomButton
            title="View Code"
            containerStyles="w-50 px-8 py-2 mt-4 mr-8 shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff] font-bold"
            textStyles="text-white"
            handleClick={() => {router.push("https://github.com/Asif-Uchchas/Carhub")}}
          />
        </div>
        <div className=" col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className=" text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Next JS
              </p>
              <p className=" text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tailwind
              </p>
              <p className=" text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Typescript
              </p>
              
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12 w-full mr-40">
          <Link href="/#projects">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <IoChevronBackCircleOutline size={30} color="#5651e5" />
                      </div>
                      <p className="p-2 uppercase">Back</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCarhub;
