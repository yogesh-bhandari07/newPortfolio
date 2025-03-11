import React from "react";
import {
  FaLinkedin,
  FaMailBulk,
  FaGithub,
  FaVolleyballBall,
  FaTableTennis,
  FaMusic,
  FaCamera,
} from "react-icons/fa";
import { BiSolidCoffeeAlt } from "react-icons/bi";
import { IoChatboxEllipses } from "react-icons/io5";
import { MdOutlineBusinessCenter } from "react-icons/md";
import mePicturenew from "../Images/pranavlatest.jpg";
import yogeshBhandariProfile from "../Images/yogeshBhandariProfile.png";

export default function AboutMe() {
  return (
    <>
      <div
        class="relative overflow-hidden bg-orange-400 -skew-y-2 px-4 xl:px-0 pt-16 space-y-24 font-outfit"
        id="about"
      >
        <div class="relative skew-y-2">
          <div class="lg:mx-auto lg:max-w-7xl flex flex-col lg:flex-row lg:gap-12 lg:px-8">
            <div class="w-full lg:w-1/2 lg:my-0 my-12 mx-auto max-w-xl lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 lg:order-1 order-2">
              <div className="pl-0">
                <div>
                  <span class="flex h-12 w-12 items-center justify-center rounded-xl bg-white">
                    <IoChatboxEllipses className="h-8 w-8 text-[#704421]" />
                  </span>
                </div>

                <div className="mt-3">
                  <h2 className="text-4xl mb-1 font-semibold tracking-wide text-white">
                    A Bit{" "}
                    <span className="text-[#67230d] underline">About Me.</span>
                  </h2>
                  <p className="px-4 text-gray-900 border-l-4 border-[#9d4d32] text-xl leading-relaxed text-slate-900 my-4">
                    <span className="text-[#36190f] font-semibold">
                      Hi there!
                    </span>{" "}
                    I'm <strong>Yogesh Kumar</strong>, a Full Stack Developer
                    with <strong>3+ years</strong> of experience in building
                    scalable web applications. My expertise includes{" "}
                    <strong>
                      Python, PHP, Laravel, Django, Django REST Framework,
                      React.js, Tailwind CSS, and MySQL
                    </strong>
                    . I thrive on creating solutions that make a meaningful
                    impact 🚀.
                    <br />
                    <br />
                    I've worked on multiple projects, including:
                    <ul className="list-disc pl-6">
                      <li>
                        <a
                          href="https://www.yogesh-bhandari.com"
                          target="_blank"
                          className="underline text-[#67230d]"
                        >
                          My Portfolio
                        </a>{" "}
                        - Showcasing my work and experience.
                      </li>
                      <li>
                        <a
                          href="https://github.com/yogesh-bhandari07"
                          target="_blank"
                          className="underline text-[#67230d]"
                        >
                          My GitHub
                        </a>{" "}
                        - Open-source contributions and projects.
                      </li>
                    </ul>
                    <br />
                    I'm currently working on **AI-based applications** and
                    **backend optimizations** while also exploring **ethical
                    hacking**. If you'd like to collaborate or have a chat, feel
                    free to{" "}
                    <a
                      href="mailto:yogesh.bhandari285@gmail.com"
                      target="_blank"
                      className="underline text-[#67230d]"
                    >
                      email me
                    </a>
                    !
                  </p>

                  <div className="flex mt-6 space-x-4 items-center gap-x-2">
                    <a
                      href="https://www.linkedin.com/in/the-yogesh-bhandari"
                      target="_blank"
                      className="contact-buttons-about"
                    >
                      <FaLinkedin className="text-2xl" />
                    </a>
                    <a
                      href="mailto:yogesh.bhandari285@gmail.com"
                      className="contact-buttons-about"
                    >
                      <FaMailBulk className="text-2xl" />
                    </a>
                    <a
                      href="https://github.com/yogesh-bhandari07"
                      target="_blank"
                      className="contact-buttons-about"
                    >
                      <FaGithub className="text-2xl" />
                    </a>
                    <a
                      href="https://www.yogesh-bhandari.com"
                      target="_blank"
                      className="contact-buttons-about"
                    >
                      <MdOutlineBusinessCenter className="text-2xl" />
                    </a>
                    <a
                      href="https://buymeacoffee.com/yogeshbhandari"
                      target="_blank"
                      className="contact-buttons-about"
                    >
                      <BiSolidCoffeeAlt className="text-2xl" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full lg:w-1/2 lg:order-2 order-1 flex items-center justify-center lg:justify-end">
              <img
                loading="lazy"
                class="rounded-xl w-5/6 lg:my-0 shadow-2xl ring-1 ring-black ring-opacity-5 rotate-2"
                src={yogeshBhandariProfile}
              />
            </div>
          </div>

          <div className="mt-10 mb-28 max-w-4xl mx-auto flex flex-col items-center gap-y-6 text-[#482d14]">
            <h1 className="six-title tracking-tight font-medium text-center">
              My Projects Make A <span className="underline">Real Impact</span>
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-3 w-full gap-4">
              <div className="w-full bg-[#34200e] py-6 flex flex-col gap-y-2 items-center text-white rounded-xl shadow-md">
                <h1 className="seven-title font-semibold">
                  2<span className="main-gradient">M+</span>
                </h1>
                <p className="one-title font-medium">Users (Millions)</p>
              </div>

              <div className="w-full bg-[#34200e] py-6 flex flex-col gap-y-2 items-center text-white rounded-xl shadow-md">
                <h1 className="seven-title font-semibold">
                  98<span className="main-gradient">%</span>
                </h1>
                <p className="one-title font-medium">
                  Transctions Success Rate
                </p>
              </div>

              <div className="w-full bg-[#34200e] py-6 flex flex-col gap-y-2 items-center text-white rounded-xl shadow-md">
                <h1 className="seven-title font-semibold">
                  <span className="main-gradient">Rs.</span>5{" "}
                  <span className="main-gradient">C+</span>
                </h1>
                <p className="one-title font-medium">
                  Total Transcation Amount{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
