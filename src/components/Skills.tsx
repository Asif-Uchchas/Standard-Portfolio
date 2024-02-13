import Image from "next/image";
import React from "react";

const Skills = () => {
  return (
    <div className="w-full lg:h-screen p-2">
      <div className=" min-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className=" text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className=" py-4">What I Can Do</h2>
        <div
          className="grid md:grid-cols-2 lg:grid-cols-8
               gap-8"
        >
          <div className=" p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src="/html.png" alt="html" width={64} height={64} />
              </div>
              <div>
                <p className="flex flex-col items-center justify-center">
                  <h3>HTML5</h3>
                </p>
              </div>
            </div>
          </div>
          <div className=" p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src="/css.png" alt="CSS" width={64} height={64} />
              </div>
              <div>
                <p className="flex flex-col items-center justify-center">
                  <h3>CSS</h3>
                </p>
              </div>
            </div>
          </div>
          <div className=" p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/javascript.png"
                  alt="Javascript"
                  width={64}
                  height={64}
                />
              </div>
              <div>
                <p className="flex flex-col items-center justify-center">
                  <h3>Javascript</h3>
                </p>
              </div>
            </div>
          </div>
          <div className=" p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src="/react.png" alt="React" width={64} height={64} />
              </div>
              <div>
                <p className="flex flex-col items-center justify-center">
                  <h3>React</h3>
                </p>
              </div>
            </div>
          </div>
          <div className=" p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src="/tailwind.png" alt="Tailwind" width={64} height={64} />
              </div>
              <div>
                <p className="flex flex-col items-center justify-center">
                  <h3>Tailwind</h3>
                </p>
              </div>
            </div>
          </div>
          <div className=" p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src="/github1.png" alt="Github" width={64} height={64} />
              </div>
              <div>
                <p className="flex flex-col items-center justify-center">
                  <h3>Github</h3>
                </p>
              </div>
            </div>
          </div>
          <div className=" p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src="/mongo.png" alt="MongoDB" width={64} height={64} />
              </div>
              <div>
                <p className="flex flex-col items-center justify-center">
                  <h3>MongoDB</h3>
                </p>
              </div>
            </div>
          </div>
          <div className=" p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src="/firebase.png" alt="firebase" width={64} height={64} />
              </div>
              <div>
                <p className="flex flex-col items-center justify-center">
                  <h3>Firebase</h3>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
