'use client'
import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import CustomButton from "./CustomButton";
import Link from "next/link";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { useRouter } from "next/navigation";

const Contact = () => {

  const route = useRouter()

  const handleSubmit = () => {
     
    const email = 'asifuddinahmed1234@gmail.com';
    const subject = 'Emailing to Asif Uddin Ahmed';
    const body = 'Assalamu alaikum, Hope you are doing well.';
  
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  
    window.location.href = mailtoLink;
  };
  


  return (
    <div id="contact" className=" w-full lg:h-screen">
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full '>
        <p className="uppercase text-xl tracking-widest text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4">Get in touch!</h2>
        <div className='grid lg:grid-cols-5 gap-8'>
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full ">
              <div>
                <Image
                  src="/contact.jpg"
                  alt="contact"
                  width={500}
                  height={500}
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                />
              </div>
              <div>
                <h2 className="py-2">Asif Uddin Ahmed</h2>
                <p>Front-End Developer</p>
                <p className="py-4">
                  I am available for freelance or full-time positions. Contact
                  me let's talk.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect With Me</p>
                <div className="flex items-center justify-between py-4">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
                    <FaLinkedinIn
                      size={25}
                      onClick={() => route.push("https://www.linkedin.com/in/asif-uddin-ahmed/")}
                    />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
                    <FaGithub
                      size={25}
                      onClick={() => route.push("https://github.com/Asif-Uchchas")}
                    />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
                    <AiOutlineMail size={25} onClick={handleSubmit}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div className=" col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:py-4">
            <div className="p-4">
              <form>
                <div className="grid md:grid-cols-2 gap-5 w-full py-2">
                  <div className="flex flex-col">
                    <label htmlFor="name" className="uppercase text-sm py-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Enter your name"
                      className="border-2 rounded-lg p-3 flex border-gray-300 shadow-sm shadow-gray-400"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="Number" className="uppercase text-sm py-2">Phone Number</label>
                    <input
                      type="text"
                      id="number"
                      placeholder="Enter your phone number"
                      className="border-2 rounded-lg p-3 flex border-gray-300 shadow-sm shadow-gray-400"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="email" className="uppercase text-sm py-2">Email</label>
                  <input
                      type="text"
                      id="email"
                      placeholder="Enter your email"
                      className="border-2 rounded-lg p-3 flex border-gray-300 shadow-sm shadow-gray-400"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="subject" className="uppercase text-sm py-2">Subject</label>
                  <input
                      type="text"
                      id="subject"
                      placeholder="Enter subject"
                      className="border-2 rounded-lg p-3 flex border-gray-300 shadow-sm shadow-gray-400"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="message" className="uppercase text-sm py-2">Message</label>
                  <textarea
                    id="message"
                    placeholder="Enter your message"
                    className="border-2 rounded-lg p-3 flex border-gray-300 shadow-sm shadow-gray-400"
                    rows={10}
                  />
                </div>
                {/* {errorMessage && <p className="text-red-500">{errorMessage}</p>} Display error message if present */}
                <CustomButton
                  title="Send Message"
                  btnType="submit"
                  containerStyles="w-full p-4 mt-4 shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff] font-bold"
                  textStyles=" text-gray-100"
                  handleClick={handleSubmit}
                />
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
              <HiOutlineChevronDoubleUp
                size={30}
                color="#5651e5"
              />
              </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
