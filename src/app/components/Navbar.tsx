"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import CustomButton from "./CustomButton";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";
import { useRouter } from "next/router";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");

  const handleNav = () => {
    setNav(!nav);
  };
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <header
      style={{ backgroundColor: `${navBg}`}}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100]"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <Image src="/logo2.svg" alt="logo" width={50} height={50} />
        </Link>
        <div className="">
          <ul style={{color: `${linkColor}`}} className="hidden md:flex">
            <Link href="/">
              <CustomButton title="Home" containerStyles="nav-button" />
            </Link>
            <Link href="/#about">
              <CustomButton title="About" containerStyles="nav-button" />
            </Link>
            <Link href="/#skills">
              <CustomButton title="Skills" containerStyles="nav-button" />
            </Link>
            <Link href="/#projects">
              <CustomButton title="Projects" containerStyles="nav-button" />
            </Link>
            <Link href="/#contact">
              <CustomButton title="Contact" containerStyles="nav-button" />
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-400"
              : "fixed left-[-1000%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <Image src="/logo2.svg" alt="logo" width={50} height={50} />
              </Link>
              <div
                onClick={handleNav}
                className=" rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className=" border-b border-gray-300 my-4 ">
              <p className="w-[85%] md:w-[90%] py-4">
                {" "}
                Let's build something amazing together!
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <li onClick={() => setNav(false)} className="py-4 text-sm">
                <Link href="/">
                  <CustomButton title="Home" textStyles="uppercase" />
                </Link>
              </li>
              <li onClick={() => setNav(false)} className="py-4 text-sm">
                <Link href="/#about">
                  <CustomButton title="About" textStyles="uppercase" />
                </Link>
              </li>
              <li onClick={() => setNav(false)} className="py-4 text-sm">
                <Link href="/#skills">
                  <CustomButton title="Skills" textStyles="uppercase" />
                </Link>
              </li>
              <li onClick={() => setNav(false)} className="py-4 text-sm">
                <Link href="/#projects">
                  <CustomButton title="Projects" textStyles="uppercase" />
                </Link>
              </li>
              <li onClick={() => setNav(false)} className="py-4 text-sm">
                <Link href="/#contact">
                  <CustomButton title="Contact" textStyles="uppercase" />
                </Link>
              </li>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Let's Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%] lg:w-[60%] mx-auto">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaLinkedinIn />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaGithub />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiOutlineMail />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <BsPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
