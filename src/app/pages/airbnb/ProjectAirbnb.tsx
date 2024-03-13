'use client'
import Image from "next/image";
import React from "react";
import CustomButton from "../../components/CustomButton";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";

const ProjectAirbnb = () => {

  const router = useRouter()
  
  return (
    <div className="w-full">
      <div className=" w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          src="/Airbnb.png"
          alt="airbnb"
          layout="fill"
          objectFit="cover"
          className="absolute z-1"
        />
        <div className=" absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Airbnb</h2>
          <h3>NextJS / React / Tailwind / MongoDB / NextAuth / Prisma</h3>
        </div>
      </div>
      <div className=" max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className=" col-span-4">
          <p>Prject</p>
          <h2>Overview</h2>
          <p>
            This Airbnb clone was built using NextJS 14 and is hosted on Varcel.
            Users are able to rent out their property with people, looking for accommodation.
            You will be able to view property information as well as the specific
            location of the property integrated with the leaflet package.
            User authentication is available so you can signup and signin to your
            account with an email address in order to save your favorite
            inns. Both Google and Github Oauth providers have been implemented.
          </p>
          <CustomButton
            title="View Project"
            containerStyles="w-50 px-8 py-2 mt-4 mr-8 shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff] font-bold"
            textStyles="text-white"
            handleClick={() => {router.push("https://airbnb-indol-eta.vercel.app/")}}
          />
          <CustomButton
            title="View Code"
            containerStyles="w-50 px-8 py-2 mt-4 mr-8 shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff] font-bold"
            textStyles="text-white"
            handleClick={() => {router.push("https://github.com/Asif-Uchchas/Airbnb")}}
          />
        </div>
        <div className=" col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className=" text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> NextJS
              </p>
              <p className=" text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className=" text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tailwind
              </p>
              <p className=" text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> MongoDB
              </p>
              <p className=" text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> NextAuth
              </p>
              <p className=" text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Prisma
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
  )
}

export default ProjectAirbnb
