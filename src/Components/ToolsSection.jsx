import React from "react";
import { WrenchScrewdriverIcon } from "@heroicons/react/24/outline";
import { IoChatboxEllipses } from "react-icons/io5";
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

const projectStarterPack = [
  {
    image: php,
    text: "PHP",
  },
  {
    image: laravel,
    text: "Laravel",
  },
  {
    image: python,
    text: "Python",
  },
  {
    image: django,
    text: "Django",
  },
  {
    image: mysql,
    text: "MySQL",
  },
];

const miscellaneous = [
  {
    image: html,
    text: "HTML",
    color:
      "transition transform duration-300 border-2 border-transparent hover:border-2 hover:border-blue-400 bg-blue-100/20",
  },
  {
    image: css,
    text: "CSS",
    color:
      "transition transform duration-300 border-2 border-transparent hover:border-2 hover:border-blue-400 bg-blue-100/20",
  },
  {
    image: javascript,
    text: "JavaScript ",
    color:
      "transition transform duration-300 border-2 border-transparent hover:border-2 hover:border-blue-400 bg-blue-100/20",
  },
  {
    image: reactjs,
    text: "ReactJS",
    color:
      "transition transform duration-300 border-2 border-transparent hover:border-2 hover:border-gray-400 bg-gray-100/20",
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    text: "NextJS",
    color:
      "transition transform duration-300 border-2 border-transparent hover:border-2 hover:border-gray-400 bg-gray-100/20",
  },
  {
    image: angular,
    text: "Angular",
    color:
      "transition transform duration-300 border-2 border-transparent hover:border-2 hover:border-gray-400 bg-gray-100/20",
  },
  {
    image: nodejs,
    text: "NodeJS",
    color:
      "transition transform duration-300 border-2 border-transparent hover:border-2 hover:border-gray-400 bg-gray-100/20",
  },
  {
    image: tailwind,
    text: "Tailwind CSS",
    color:
      "transition transform duration-300 border-2 border-transparent hover:border-2 hover:border-gray-400 bg-gray-100/20",
  },

  {
    image: redux,
    text: "Redux",
    color:
      "transition transform duration-300 border-2 border-transparent hover:border-2 hover:border-gray-400 bg-gray-100/20",
  },

  {
    image: mongodb,
    text: "MongoDB",
    color:
      "transition transform duration-300 border-2 border-transparent hover:border-2 hover:border-green-400 bg-green-100/20",
  },
  {
    image: mysql,
    text: "MySQL",
    color:
      "transition transform duration-300 border-2 border-transparent hover:border-2 hover:border-green-400 bg-green-100/20",
  },
  {
    image: typescript,
    text: "Typescript",
    color:
      "transition transform duration-300 border-2 border-transparent hover:border-2 hover:border-green-400 bg-green-100/20",
  },
  {
    image: figma,
    text: "Figma",
    color:
      "transition transform duration-300 border-2 border-transparent hover:border-2 hover:border-green-400 bg-green-100/20",
  },
  {
    image: git,
    text: "Git",
    color:
      "transition transform duration-300 border-2 border-transparent hover:border-2 hover:border-green-400 bg-green-100/20",
  },
  {
    image: flask,
    text: "Flask",
    color:
      "transition transform duration-300 border-2 border-transparent hover:border-2 hover:border-green-400 bg-green-100/20",
  },
  {
    image: threejs,
    text: "ThreeJS",
    color:
      "transition transform duration-300 border-2 border-transparent hover:border-2 hover:border-green-400 bg-green-100/20",
  },
  {
    image: docker,
    text: "Docker",
    color:
      "transition transform duration-300 border-2 border-transparent hover:border-2 hover:border-green-400 bg-green-100/20",
  },
  {
    image: laravel,
    text: "Laravel",
    color:
      "transition transform duration-300 border-2 border-transparent hover:border-2 hover:border-green-400 bg-green-100/20",
  },
  {
    image: kafka,
    text: "Kafka",
    color:
      "transition transform duration-300 border-2 border-transparent hover:border-2 hover:border-green-400 bg-green-100/20",
  },
  {
    image: aws,
    text: "AWS",
    color:
      "transition transform duration-300 border-2 border-transparent hover:border-2 hover:border-green-400 bg-green-100/20",
  },
  {
    image: grafana,
    text: "grafana",
    color:
      "transition transform duration-300 border-2 border-transparent hover:border-2 hover:border-green-400 bg-green-100/20",
  },
];

function Column({ tools }) {
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
              <p className="text-lg font-medium font-outfit tracking-tight">
                {tool.text}
              </p>
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
              <WrenchScrewdriverIcon className="h-8 w-8 text-white" />
            </span>
          </div>
          <div>
            My{" "}
            <div className="main-gradient" id="tools">
              Toolbox
            </div>{" "}
          </div>
        </div>
      </div>

      <div className="my-10 flex items-center justify-center flex-col container mx-auto rounded-xl bg-orange-400 py-10">
        <h3 className="five-title font-outfit font-medium tracking-tight text-white">
          My <span className="underline">Current</span> Tech Stack:
        </h3>
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
