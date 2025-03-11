import React from "react";
import { WrenchScrewdriverIcon } from '@heroicons/react/24/outline'
import { IoChatboxEllipses } from "react-icons/io5";

const projectStarterPack = [
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", 
    text: "ReactJS",
  },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", 
    text: "TailwindCSS",
  },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", 
    text: "NextJS",
  },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    text: "TypeScript"
  },
];

const miscellaneous = [
    {
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", 
      text: "HTML",
      color: "transition transform duration-300 border-2 border-transparent hover:border-2 hover:border-blue-400 bg-blue-100/20"
    },
    {
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", 
      text: "Vanilla CSS",
      color: "transition transform duration-300 border-2 border-transparent hover:border-2 hover:border-blue-400 bg-blue-100/20"
    },
    {
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", 
      text: "JavaScript ",
      color: "transition transform duration-300 border-2 border-transparent hover:border-2 hover:border-blue-400 bg-blue-100/20"
    },
    {
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", 
      text: "ReactJS",
      color: "transition transform duration-300 border-2 border-transparent hover:border-2 hover:border-gray-400 bg-gray-100/20"
    },
    {
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", 
      text: "NextJS",
      color: "transition transform duration-300 border-2 border-transparent hover:border-2 hover:border-gray-400 bg-gray-100/20"
    },
    {
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", 
      text: "NodeJS",
      color: "transition transform duration-300 border-2 border-transparent hover:border-2 hover:border-gray-400 bg-gray-100/20"
    },
    {
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", 
      text: "Bootstrap",
      color: "transition transform duration-300 border-2 border-transparent hover:border-2 hover:border-gray-400 bg-gray-100/20"
    },
    {
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg", 
      text: "Redux",
      color: "transition transform duration-300 border-2 border-transparent hover:border-2 hover:border-gray-400 bg-gray-100/20"
    },
    {
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      text: "TailwindCSS",
      color: "transition transform duration-300 border-2 border-transparent hover:border-2 hover:border-gray-400 bg-gray-100/20"
    },
    {
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg", 
      text: "Webpack",
      color: "transition transform duration-300 border-2 border-transparent hover:border-2 hover:border-green-400 bg-green-100/20"
    },
    {
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", 
      text: "Firebase",
      color: "transition transform duration-300 border-2 border-transparent hover:border-2 hover:border-green-400 bg-green-100/20"
    },
    {
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
        text: "Wordpress",
        color: "transition transform duration-300 border-2 border-transparent hover:border-2 hover:border-green-400 bg-green-100/20"
    },
    {
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
      text: "PostgreSQL",
      color: "transition transform duration-300 border-2 border-transparent hover:border-2 hover:border-green-400 bg-green-100/20"
    },
    {
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
      text: "MongoDB",
      color: "transition transform duration-300 border-2 border-transparent hover:border-2 hover:border-green-400 bg-green-100/20"
    },
    
];

function Column({tools }) {
    return (
        <>
          <div className="flex flex-wrap justify-center gap-6 lg:gap-10 ">
            {tools.map((tool, index) => (
                <div className="flex transition transform duration-300 hover:scale-[1.01] flex-wrap p-1 bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-pink-500 via-red-500 to-yellow-500 rounded-xl items-center justify-center">
                  <div
                      key={index}
                      className={`bg-white border p-10 rounded-lg text-center`}
                  >
                      <img
                        src={tool.image}
                        alt={tool.text}
                        className="w-[8rem] h-20 mx-auto mb-4"
                      />
                      <p className="text-lg font-medium font-outfit tracking-tight">{tool.text}</p>
                  </div>
                </div>
            ))}
          </div>
        </>
    );
  }

export default function ToolsSection() {
  return (
    <>
    
      <div className="h-max mt-20 relative">
        <div className="text-center seven-title font-outfit font-semibold tracking-tight flex items-center gap-x-5 justify-center">
          <div>
            <span class="flex h-16 w-16 items-center justify-center rounded-full bg-orange-900">
                <WrenchScrewdriverIcon className='h-8 w-8 text-white'/>
            </span>
          </div>
          <div>My <div className="main-gradient" id="tools">Toolbox</div> </div>
        </div>
      </div>

      <div className="my-10 flex items-center justify-center flex-col container mx-auto rounded-xl bg-orange-400 py-10">
        <h3 className="five-title font-outfit font-medium tracking-tight text-white">My <span className="underline">Current</span> Tech Stack:</h3>
        <div className="flex justify-center gap-8 flex-wrap  py-10 px-4 md:px-20 w-full rounded-lg">
          {projectStarterPack.map((tool, index) => (
            <div
              key={index}
              className="bg-white shadow-sm relative z-[30] p-6 rounded-lg text-center w-max"
            >
              <img
                src={tool.image}
                alt={tool.text}
                className="w-max px-4 h-20 mx-auto mb-4"
              />
              <p className="text-lg font-outfit">{tool.text}</p>
            </div>
          ))}

          <div
            className="bg-white shadow-sm relative p-6 rounded-lg text-center w-max "
          >
            <div className="p-4 hidden sm:block bg-white shadow-md rounded-md gap-y-2 absolute -top-6 -right-24 border-2 border-orange-900">
              <img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" 
                alt="Supabase" 
                className="w-20"
              />
              <p className="text-md font-outfit">Or Supabase</p>
            </div>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
              className="w-max px-4 h-20 mx-auto mb-4"
            />
            <p className="text-lg font-outfit">Firebase</p>
          </div>

        </div>
      </div>



    <div className="max-w-[100rem] mx-auto space-y-10">
      <h3 class="flex items-center justify-center w-full text-center five-title font-outfit font-medium tracking-tight">
        My Skills & Technologies
      </h3>
      <div className="flex mx-2 lg:mx-10">
          <Column title="Miscellaneous" tools={miscellaneous} />
      </div>
    </div>



    </>
  );
}
