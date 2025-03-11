import React from "react";

import talem1 from "../Images/talem1.png";
import talem2 from "../Images/talem2.png";
import talem3 from "../Images/talem3.png";

import ltw1 from "../Images/ltw1.png";
import ltw2 from "../Images/ltw2.png";
import ltw3 from "../Images/ltw3.png";

import ecoeats1 from "../Images/ecoeats1.png";
import ecoeats2 from "../Images/ecoeats2.png";
import ecoeats3 from "../Images/ecoeats3.png";

import stella1 from "../Images/stellapic1.png";
import stella2 from "../Images/stellapic2.png";

import score1 from "../Images/score1.png";
import score2 from "../Images/score2.png";
import score3 from "../Images/score3.png";

import desource1 from "../Images/desource1.png";
import desource2 from "../Images/desource2.png";
import desource3 from "../Images/desource3.png";

import {
  FaEye,
  FaUser,
  FaMoneyBill,
  FaExternalLinkAlt,
  FaCode,
} from "react-icons/fa";

import { GrWorkshop } from "react-icons/gr";
import { PiStudentDuotone } from "react-icons/pi";

import {
  Carousel,
  IconButton,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import {
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";

function CarouselCustomNavigation(props) {
  return (
    <Carousel
      className="rounded-t-md w-full h-max"
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color="black"
          size="lg"
          onClick={handlePrev}
          className="!absolute top-2/4 left-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          color="black"
          size="lg"
          onClick={handleNext}
          className="!absolute top-2/4 !right-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </IconButton>
      )}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-40 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-black" : "w-4 bg-black"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <img
        src={props.image1}
        alt="image 1"
        className="h-full w-full object-cover"
      />

      {props.image2 && (
        <img
          src={props.image2}
          alt="image 2"
          className="h-full w-full object-cover"
        />
      )}

      {props.image3 && (
        <img
          src={props.image3}
          alt="image 3"
          className="h-full w-full object-cover"
        />
      )}
    </Carousel>
  );
}

function TooltipCustomStyles(props) {
  return (
    <Tooltip
      placement="bottom"
      className="border border-blue-gray-50 bg-white px-4 py-3 shadow-xl shadow-black/10"
      content={
        <div className="w-80">
          <Typography color="blue-gray" className="font-inter font-bold">
            {props.title}
          </Typography>
          <Typography
            variant="small"
            color="blue-gray"
            className="font-normal font-inter opacity-80"
          >
            {props.description}
          </Typography>
        </div>
      }
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        className="h-5 w-5 cursor-pointer text-blue-gray-500 mt-1.5 mr-1"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
        />
      </svg>
    </Tooltip>
  );
}

const talemBuiltWith = [
  {
    name: "HTML",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "ReactJS",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Firebase",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  {
    name: "React Router",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", // Replace with actual image link
  },
  {
    name: "TailwindCSS",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Radix UI",
    link: "https://static-00.iconduck.com/assets.00/brand-radix-ui-icon-1536x2048-78tvytqz.png", // Replace with actual image link
  },
];

const stellaBuiltWith = [
  {
    name: "HTML",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "ReactJS",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "PrismaDB",
    link: "https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/287/square_480/prismaHD.png",
  },
  {
    name: "TailwindCSS",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Daisy UI",
    link: "https://raw.githubusercontent.com/saadeghi/daisyui/master/src/docs/static/images/daisyui-logo/favicon-192.png",
  },
  {
    name: "NextJS",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "PostgreSQL",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
];

const scoreBuiltWith = [
  {
    name: "HTML",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "ReactJS",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "TailwindCSS",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "NextJS",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
];

const desourceBuiltWith = [
  {
    name: "HTML",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "ReactJS",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "TailwindCSS",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "NextJS",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Supabase",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
  },
];

const learnthewebBuiltWith = [
  {
    name: "Wordpress",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
  },
  {
    name: "HTML",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "PHP",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  },
];

const ecoeatsbuiltwith = [
  {
    name: "HTML",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JS",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "ReactJS",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Firebase",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  {
    name: "TailwindCSS",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Flutter",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  },
  {
    name: "NextJS",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
];

export function Projects() {
  return (
    <div className="max-w-[100rem] mx-auto">
      {/* P1: Talem */}
      <div
        className="rounded-xl flex flex-col justify-center items-center my-20 mx-0 font-outfit"
        id="work"
      >

        <div className="py-4 w-4/5 flex md:flex-row flex-col mb-10">
          <h1 className="seven-title md:w-7/12 font-semibold tracking-tight">
            Let's have a look at{" "}
            <br />
            <span className="main-gradient">My Projects</span>
          </h1>
          <div className="flex items-center md:w-5/12 xl:mt-0 mt-6 xl:justify-end text-lg lg:text-xl">
            <a
              href="https://github.com/PkTheCoda"
              target="_blank"
              class="relative w-full md:w-2/3 lg:w-1/2 inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out bg-orange-400 rounded-md shadow-md group"
            >
              <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-orange-700 group-hover:translate-x-0 ease">
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span class="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
                See All My Projects
              </span>
              <span class="relative invisible">Button Text</span>
            </a>
          </div>
        </div>

        <div className="rounded-xl flex items-center flex-col relative">
          <div className="flex flex-col gap-y-1 mb-4 w-5/6">
            <h2 className="five-title font-semibold">
              <span className="text-blue-500 drop-shadow-2xl text-base">
                01
              </span>
              Talem - Extracurriculars
            </h2>
            <h4 className="text-gray-700 text-xl md:text-2xl flex">
              <TooltipCustomStyles
                title="About Talem"
                description="Talem was an app created by Pranav to help highschoolers find the right extracurriculars and internships fast."
              />
              Highschool Opportunities Finder
            </h4>
          </div>

          <div className="flex flex-col w-11/12 lg:w-5/6 justify-around shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] rounded-md">
            <CarouselCustomNavigation
              image1={talem1}
              image2={talem2}
              image3={talem3}
            />

            <div className="rounded-b-lg bg-[#e17948ee] px-4 md:px-4 md:px-8 items-center justify-center flex flex-col">
              <div className="grid grid-cols-1 lg:grid-cols-2 w-full py-6 gap-8">
                <div className="w-full bg-white rounded-md p-6 text-sm md:text-lg lg:text-xl py-4">
                  Talem is an advanced platform enabling high school students to
                  discover tailored extracurriculars and internships. With a
                  vast database and over 15 filtering options, users can easily
                  navigate opportunities. The website boasts a seamless
                  integration of backend and frontend, designed using
                  TailwindCSS.
                </div>
                <div className="bg-white p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-3 rounded-md">
                  {talemBuiltWith.map((technology, index) => (
                    <a
                      key={index}
                      href={technology.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-900 rounded-md font-normal text-xl text-gray-300 font-outfit flex flex-row lg:flex-col xl:flex-row justify-center items-center"
                    >
                      <img
                        src={technology.link}
                        alt={technology.name}
                        className="w-6 h-6 mr-2"
                      />
                      {technology.name}
                    </a>
                  ))}
                </div>
              </div>

              <div className="w-full mb-8 gap-8 grid grid-cols-1 lg:grid-cols-2">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-white rounded-md py-2 flex lg:flex-row flex-col gap-2 text-center items-center justify-center">
                    <div className="p-2 bg-orange-100 rounded-full">
                      <FaEye className="text-orange-800" />
                    </div>
                    <h2 className="text-lg">1 Million+ Visits</h2>
                  </div>

                  <div className="bg-white rounded-md py-2 flex lg:flex-row flex-col gap-2 text-center items-center justify-center">
                    <div className="p-2 bg-orange-100 rounded-full">
                      <FaUser className="text-orange-800" />
                    </div>
                    <h2 className="text-lg">300-600 DAU</h2>
                  </div>

                  <div className="bg-white rounded-md py-2 flex lg:flex-row flex-col gap-2 text-center items-center justify-center">
                    <div className="p-2 bg-orange-100 rounded-full">
                      <FaMoneyBill className="text-orange-800" />
                    </div>
                    <h2 className="text-lg">$3k Raised</h2>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <a
                    href="https://talem.org"
                    target="_blank"
                    class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out bg-blue-200 rounded-md shadow-md group"
                  >
                    <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-500 group-hover:translate-x-0 ease">
                      <svg
                        class="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </span>
                    <span class="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease gap-2">
                      <FaExternalLinkAlt /> Visit Website
                    </span>
                    <span class="relative invisible">Button Text</span>
                  </a>
                  <a
                    href="https://github.com/PkTheCoda/talem-app"
                    target="_blank"
                    class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out bg-orange-200 rounded-md shadow-md group"
                  >
                    <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-orange-500 group-hover:translate-x-0 ease">
                      <svg
                        class="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </span>
                    <span class="absolute flex items-center justify-center w-full h-full text-[#6b4d01ee] transition-all duration-300 transform group-hover:translate-x-full ease gap-2">
                      <FaCode /> View Repo
                    </span>
                    <span class="relative invisible">Button Text</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project #2: Desource */}
      <div className="rounded-xl flex flex-col my-20 mx-0 relative">
        <div className="rounded-xl flex items-center flex-col relative">
          <div className="flex flex-col gap-y-1 mb-4 w-5/6">
            <h2 className="five-title font-semibold font-outfit ">
              <span className="text-blue-500 drop-shadow-2xl text-base">
                02{" "}
              </span>{" "}
              Desource -{" "}
              <span className="opacity-70">Resources for Web-Developers</span>
            </h2>
            <h4 className="text-gray-700 two-title font-outfit flex">
              <TooltipCustomStyles
                title="About Desource"
                description="Desource is one my newest web-development projects that serves as a collection of resources for web-development and web-designers alike!"
              />
              A Massive Database of Web-development Resources
            </h4>
          </div>

          <div className="flex flex-col w-11/12 lg:w-5/6 justify-around shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] rounded-md">
            <CarouselCustomNavigation
              image1={desource2}
              image2={desource1}
              image3={desource3}
            />

            <div className="rounded-b-lg font-outfit bg-[#e17948ee] px-4 md:px-8 items-center justify-center flex flex-col">
              <div className="grid grid-cols-1 lg:grid-cols-2 w-full py-6 gap-8">
                <div className="w-full bg-white rounded-md p-6 text-sm md:text-lg lg:text-xl py-4">
                  Desource is one of my newest projects. It's a massive
                  collection of resources for web-designers and web-developers.
                  Users can access the site and bookmark resources useful for
                  them, submit their own resources, and even leave ratings of
                  reviews along with over 20+ different filters from gradients
                  to colors to graphics and more!
                </div>
                <div className="bg-white p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-3 rounded-md">
                  {desourceBuiltWith.map((technology, index) => (
                    <a
                      key={index}
                      href={technology.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-900 rounded-md font-normal text-xl text-gray-300 font-outfit flex flex-row lg:flex-col xl:flex-row justify-center items-center"
                    >
                      <img
                        src={technology.link}
                        alt={technology.name}
                        className="w-6 h-6 mr-2"
                      />
                      {technology.name}
                    </a>
                  ))}
                </div>
              </div>

              <div className="w-full mb-8 gap-8 grid grid-cols-1 lg:grid-cols-2">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-white rounded-md py-2 flex lg:flex-row flex-col gap-2 text-center items-center justify-center">
                    <div className="p-2 bg-orange-100 rounded-full">
                      <FaEye className="text-orange-800" />
                    </div>
                    <h2 className="text-lg">10k visits</h2>
                  </div>

                  <div className="bg-white rounded-md py-2 flex lg:flex-row flex-col gap-2 text-center items-center justify-center">
                    <div className="p-2 bg-orange-100 rounded-full">
                      <FaUser className="text-orange-800" />
                    </div>
                    <h2 className="text-lg">No Stats</h2>
                  </div>

                  <div className="bg-white rounded-md py-2 flex lg:flex-row flex-col gap-2 text-center items-center justify-center">
                    <div className="p-2 bg-orange-100 rounded-full">
                      <FaMoneyBill className="text-orange-800" />
                    </div>
                    <h2 className="text-lg">No Stats</h2>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <a
                    href="https://desource.app"
                    target="_blank"
                    class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out bg-blue-200 rounded-md shadow-md group"
                  >
                    <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-500 group-hover:translate-x-0 ease">
                      <svg
                        class="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </span>
                    <span class="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease gap-2">
                      <FaExternalLinkAlt /> Visit Website
                    </span>
                    <span class="relative invisible">Button Text</span>
                  </a>
                  <a
                    href="https://github.com/pkthecoda/desource"
                    class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out bg-orange-200 rounded-md shadow-md group"
                  >
                    <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-orange-500 group-hover:translate-x-0 ease">
                      <svg
                        class="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </span>
                    <span class="absolute flex items-center justify-center w-full h-full text-[#6b4d01ee] transition-all duration-300 transform group-hover:translate-x-full ease gap-2">
                      <FaCode /> Visit Repo
                    </span>
                    <span class="relative invisible">Visit Repo</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* P2: learntheweb */}
      <div className="rounded-xl flex flex-col my-20 mx-0 relative">
        <div className="rounded-xl flex items-center flex-col relative">
          <div className="flex flex-col gap-y-1 mb-4 w-5/6">
            <h2 className="five-title font-semibold font-outfit ">
              <span className="text-blue-500 drop-shadow-2xl text-base">
                03{" "}
              </span>
              Learntheweb
            </h2>
            <h4 className="text-gray-700 two-title font-outfit flex">
              <TooltipCustomStyles
                title="About Learntheweb"
                description="Learntheweb was created by Pranav when he realized how lacking basic computer science education was throughout the standardized school system."
              />
              Online Programming Initative
            </h4>
          </div>

          <div className="flex flex-col w-11/12 lg:w-5/6 justify-around shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] rounded-md">
            <CarouselCustomNavigation
              image1={ltw1}
              image2={ltw2}
              image3={ltw3}
            />

            <div className="rounded-b-lg font-outfit bg-[#e17948ee] px-4 md:px-8 items-center justify-center flex flex-col">
              <div className="grid grid-cols-1 lg:grid-cols-2 w-full py-6 gap-8">
                <div className="w-full bg-white rounded-md p-6 text-sm md:text-lg lg:text-xl py-4">
                  learntheweb.org is a free online learning platform designed to
                  make coding easy and accessible to people of all ages and
                  backgrounds. To date, we've conducted over 6 workshops, taught
                  over 200+ students, over 300 hours of active teaching, and
                  more. Additionally, you can self-learn with our 80+ in-built
                  lessons
                </div>
                <div className="bg-white p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-3 rounded-md">
                  {learnthewebBuiltWith.map((technology, index) => (
                    <a
                      key={index}
                      href={technology.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-900 rounded-md font-normal text-xl text-gray-300 font-outfit flex flex-row lg:flex-col xl:flex-row justify-center items-center"
                    >
                      <img
                        src={technology.link}
                        alt={technology.name}
                        className="w-6 h-6 mr-2"
                      />
                      {technology.name}
                    </a>
                  ))}
                </div>
              </div>

              <div className="w-full mb-8 gap-8 grid grid-cols-1 lg:grid-cols-2">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-white rounded-md py-2 flex lg:flex-row flex-col gap-2 text-center items-center justify-center">
                    <div className="p-2 bg-orange-100 rounded-full">
                      <FaEye className="text-orange-800" />
                    </div>
                    <h2 className="text-lg">300k visits</h2>
                  </div>

                  <div className="bg-white rounded-md py-2 flex lg:flex-row flex-col gap-2 text-center items-center justify-center">
                    <div className="p-2 bg-orange-100 rounded-full">
                      <GrWorkshop className="text-orange-800" />
                    </div>
                    <h2 className="text-lg">6 Workshops</h2>
                  </div>

                  <div className="bg-white rounded-md py-2 flex lg:flex-row flex-col gap-2 text-center items-center justify-center">
                    <div className="p-2 bg-orange-100 rounded-full">
                      <PiStudentDuotone className="text-orange-800" />
                    </div>
                    <h2 className="text-lg">150+ Taught</h2>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <a
                    href="https://learntheweb.org"
                    target="_blank"
                    class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out bg-blue-200 rounded-md shadow-md group"
                  >
                    <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-500 group-hover:translate-x-0 ease">
                      <svg
                        class="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </span>
                    <span class="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease gap-2">
                      <FaExternalLinkAlt /> Visit Website
                    </span>
                    <span class="relative invisible">Button Text</span>
                  </a>
                  <a
                    href="https://learntheweb.org"
                    target="_blank"
                    class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out bg-orange-200 rounded-md shadow-md group"
                  >
                    <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-orange-500 group-hover:translate-x-0 ease">
                      <svg
                        class="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </span>
                    <span class="absolute flex items-center justify-center w-full h-full text-[#6b4d01ee] transition-all duration-300 transform group-hover:translate-x-full ease gap-2">
                      <FaCode /> Visit Repo
                    </span>
                    <span class="relative invisible">Button Text</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
