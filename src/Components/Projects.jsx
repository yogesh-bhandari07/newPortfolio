import React from "react";

import talem1 from "../Images/projects/gp (1).png";
import talem2 from "../Images/projects/gp (2).png";
import talem3 from "../Images/projects/gp (3).png";

import ltw1 from "../Images/projects/i4invest (2).png";
import ltw2 from "../Images/projects/i4invest (1).png";

import ecoeats1 from "../Images/ecoeats1.png";
import ecoeats2 from "../Images/ecoeats2.png";
import ecoeats3 from "../Images/ecoeats3.png";

import stella1 from "../Images/stellapic1.png";
import stella2 from "../Images/stellapic2.png";

import score1 from "../Images/score1.png";
import score2 from "../Images/score2.png";
import score3 from "../Images/score3.png";

import desource1 from "../Images/projects/icegate (1).png";
import desource2 from "../Images/projects/icegate (2).png";

import php from "../Images/php.png";
import laravel from "../Images/laravel.png";
import python from "../Images/python.png";
import django from "../Images/django.png";
import mysql from "../Images/mysql.png";
import html from "../Images/html.png";
import javascript from "../Images/javascript.png";
import css from "../Images/css.png";
import reactjs from "../Images/reactjs.png";
import tailwind from "../Images/tailwind.png";
import nodejs from "../Images/nodejs.png";
import threejs from "../Images/threejs.svg";
import redux from "../Images/redux.png";
import mongodb from "../Images/mongodb.png";
import docker from "../Images/docker.png";
import git from "../Images/git.png";
import figma from "../Images/figma.png";
import flask from "../Images/flask.png";
import typescript from "../Images/typescript.png";
import angular from "../Images/angularjs.png";
import kafka from "../Images/kafka.png";
import aws from "../Images/aws.png";
import grafana from "../Images/grafana.svg";
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

const globalPayments = [
  {
    name: "HTML",
    link: html,
  },
  {
    name: "CSS",
    link: css,
  },
  {
    name: "JavaScript",
    link: javascript,
  },
  {
    name: "Angular",
    link: angular,
  },
  {
    name: "TailwindCSS",
    link:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "MYSQL",
    link: mysql,
  },
  {
    name: "Laravel",
    link: laravel,
  },
  {
    name: "Kafka",
    link: kafka,
  },
];

const icegate = [
  {
    name: "HTML",
    link: html,
  },
  {
    name: "CSS",
    link: css,
  },
  {
    name: "JavaScript",
    link: javascript,
  },
  {
    name: "ReactJS",
    link: reactjs,
  },
  {
    name: "TailwindCSS",
    link: tailwind,
  },
  {
    name: "MYSQL",
    link: mysql,
  },
  {
    name: "MYSQL",
    link: mysql,
  },
  {
    name: "Laravel",
    link: laravel,
  },
  {
    name: "PHP",
    link: php,
  },
];

const scoreBuiltWith = [
  {
    name: "HTML",
    link:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    link:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    link:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "ReactJS",
    link:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "TailwindCSS",
    link:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "NextJS",
    link:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
];

const desourceBuiltWith = [
  {
    name: "HTML",
    link:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    link:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    link:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "ReactJS",
    link:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "TailwindCSS",
    link:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "NextJS",
    link:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Supabase",
    link:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
  },
];

const i4invest = [
  {
    name: "HTML",
    link: html,
  },

  {
    name: "CSS",
    link: css,
  },
  {
    name: "JavaScript",
    link: javascript,
  },
  {
    name: "Python",
    link: python,
  },
  {
    name: "Django",
    link: django,
  },
  {
    name: "MYSQL",
    link: mysql,
  },
  {
    name: "ReactJS",
    link: reactjs,
  },
];

const ecoeatsbuiltwith = [
  {
    name: "HTML",
    link:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    link:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JS",
    link:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "ReactJS",
    link:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Firebase",
    link:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  {
    name: "TailwindCSS",
    link:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Flutter",
    link:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  },
  {
    name: "NextJS",
    link:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
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
            Let's have a look at <br />
            <span className="main-gradient">My Projects</span>
          </h1>
          <div className="flex items-center md:w-5/12 xl:mt-0 mt-6 xl:justify-end text-lg lg:text-xl">
            <a
              href="https://github.com/yogesh-bhandari07"
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
              PayU - Global Payments
            </h2>
            <h4 className="text-gray-700 text-xl md:text-2xl flex">
              <TooltipCustomStyles
                title="About Talem"
                description="Talem was an app created by Pranav to help highschoolers find the right extracurriculars and internships fast."
              />
              A Payment Gateway
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
                  Maintained and enhanced a payment processing system to
                  facilitate secure and reliable financial transactions between
                  customers and merchants. The project involved integrating
                  multiple payment gateways, optimizing transaction processing,
                  and ensuring compliance with financial security standards. My
                  role in this project is Full-stack developer.
                </div>
                <div className="bg-white p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-3 rounded-md">
                  {globalPayments.map((technology, index) => (
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
              PayU - <span className="opacity-70">IceGate</span>
            </h2>
            <h4 className="text-gray-700 two-title font-outfit flex">
              <TooltipCustomStyles
                title="About Desource"
                description="Desource is one my newest web-development projects that serves as a collection of resources for web-development and web-designers alike!"
              />
              ICEGATE is an Indian Customs Electronic Gateway
            </h4>
          </div>

          <div className="flex flex-col w-11/12 lg:w-5/6 justify-around shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] rounded-md">
            <CarouselCustomNavigation image1={desource2} image2={desource1} />

            <div className="rounded-b-lg font-outfit bg-[#e17948ee] px-4 md:px-8 items-center justify-center flex flex-col">
              <div className="grid grid-cols-1 lg:grid-cols-2 w-full py-6 gap-8">
                <div className="w-full bg-white rounded-md p-6 text-sm md:text-lg lg:text-xl py-4">
                  Working on the integration of ICEGATE (Indian Customs
                  Electronic Gateway) with enterprise systems, ensuring seamless
                  electronic data interchange (EDI) for customs processes.
                  Responsible for developing and maintaining scalable web
                  applications using Node.js, Next.js, MongoDB, and Tailwind
                  CSS, while optimizing API interactions for secure and
                  efficient data exchange. Implementing authentication (JWT) and
                  enhancing system performance to streamline import-export
                  operations.
                </div>
                <div className="bg-white p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-3 rounded-md">
                  {icegate.map((technology, index) => (
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
              I4Invest
            </h2>
            <h4 className="text-gray-700 two-title font-outfit flex">
              <TooltipCustomStyles
                title="About Learntheweb"
                description="Learntheweb was created by Pranav when he realized how lacking basic computer science education was throughout the standardized school system."
              />
              A Portfolio Management tool for investers
            </h4>
          </div>

          <div className="flex flex-col w-11/12 lg:w-5/6 justify-around shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] rounded-md">
            <CarouselCustomNavigation image1={ltw1} image2={ltw2} />

            <div className="rounded-b-lg font-outfit bg-[#e17948ee] px-4 md:px-8 items-center justify-center flex flex-col">
              <div className="grid grid-cols-1 lg:grid-cols-2 w-full py-6 gap-8">
                <div className="w-full bg-white rounded-md p-6 text-sm md:text-lg lg:text-xl py-4">
                  This is an ai based application where we are extracting data
                  from different trading platforms and their different formats
                  like pdf, HTML, XML, and Excel, after extraction we are
                  applying options for the analysis of data. In this application
                  we are using Python Django rest framework for the backend and
                  react JS for frontend. In this project I worked as a backend
                  developer and lead developer role, as a lead developer I
                  maintain my team during the project and give the best output.
                  The main part of the application is to extract data from
                  different formats and save it in a common database model.
                </div>
                <div className="bg-white p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-3 rounded-md">
                  {i4invest.map((technology, index) => (
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
