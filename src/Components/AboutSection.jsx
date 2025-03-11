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
import pranavprofile from '../Images/pranavprofile.jpg'

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

                <div class="mt-3">
                  <h2 class="text-4xl mb-1 font-semibold tracking-wide text-white">
                    A Bit{" "}
                    <span className="text-[#67230d] underline">About Me.</span>
                  </h2>
                  <p className="px-4 text-gray-900 border-l-4 border-[#9d4d32] text-xl leading-relaxed text-slate-900 my-4">
                    <span className="text-[#36190f] font-semibold">
                      Hi there!
                    </span>{" "}
                    I'm Pranav. I'm a current senior in highschool based out of
                    Richmond, Virginia. I started building simple websites in my
                    sophomore year of highschool. Ever since then, I absolutely
                    fell in love with web-development and have built + shipped
                    many different apps that have a focus on helping others{" "}
                    {":)"}
                    <br />
                    <br />
                    Here's a quick rundown of what I've done. I built{" "}
                    <a
                      href="https://talem.org"
                      target="_blank"
                      className="underline text-[#67230d]"
                    >
                      talem.org
                    </a>
                    , a website that helps highschoolers find extracurriculars
                    and internships. I created{" "}
                    <a
                      href="https://learntheweb.org"
                      target="_blank"
                      className="underline text-[#67230d]"
                    >
                      learntheweb.org
                    </a>
                    , a website that teaches web-dev through self-paced courses
                    + projects.
                    <br />
                    <br />
                    Nowadays, I'm working on my latest app which helps web
                    developers:{" "}
                    <a
                      href="https://desource.app"
                      target="_blank"
                      className="underline text-[#67230d]"
                    >
                      desource.app
                    </a>{" "}
                    and I'm running{" "}
                    <a
                      href="https://thryvedesign.com"
                      target="_blank"
                      className="underline text-[#67230d]"
                    >
                      my own web development agency
                    </a>{" "}
                    where we've worked with 20+ clients and generated ~10k in
                    revenue in just a year! If you want to reach me,{" "}
                    <a
                      href="mailto:pranavkonjeti@gmail.com"
                      target="_blank"
                      className="underline text-[#67230d]"
                    >
                      just shoot me an email
                    </a>
                    !
                  </p>

                  <div className="flex mt-6 space-x-4 items-center  gap-x-2">
                    <a
                      href="https://www.linkedin.com/in/pranav-konjeti/"
                      target="_blank"
                      className="contact-buttons-about"
                    >
                      <FaLinkedin className="text-2xl" />
                    </a>
                    <a
                      href="mailto:pranavkonjeti@gmail.com"
                      className="contact-buttons-about"
                    >
                      <FaMailBulk className="text-2xl" />
                    </a>
                    <a
                      href="https://github.com/PkTheCoda"
                      target="_blank"
                      className="contact-buttons-about"
                    >
                      <FaGithub className="text-2xl" />
                    </a>
                    <a
                      href="https://thryvedesign.com"
                      target="_blank"
                      className="contact-buttons-about"
                    >
                      <MdOutlineBusinessCenter className="text-2xl" />
                    </a>
                    <a
                      href="https://buymeacoffee.com/pranavkonjeti"
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
                src={pranavprofile}
              />
            </div>
          </div>

          <div className="mt-10 mb-28 max-w-4xl mx-auto flex flex-col items-center gap-y-6 text-[#482d14]">
            
            <h1 className="six-title tracking-tight font-medium text-center">
                My Websites Make A <span className="underline">Real Impact</span>
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-3 w-full gap-4">

                <div className="w-full bg-[#34200e] py-6 flex flex-col gap-y-2 items-center text-white rounded-xl shadow-md">
                    <h1 className="seven-title font-semibold">
                        2<span className="main-gradient">M+</span>
                    </h1>
                    <p className="one-title font-medium">Views (Millions)</p>
                </div>

                <div className="w-full bg-[#34200e] py-6 flex flex-col gap-y-2 items-center text-white rounded-xl shadow-md">
                    <h1 className="seven-title font-semibold">
                        300<span className="main-gradient">k+</span>
                    </h1>
                    <p className="one-title font-medium">Visitors (Lifetime)</p>
                </div>

                <div className="w-full bg-[#34200e] py-6 flex flex-col gap-y-2 items-center text-white rounded-xl shadow-md">
                    <h1 className="seven-title font-semibold">
                        <span className="main-gradient">$</span>4000
                    </h1>
                    <p className="one-title font-medium">In Total Funding</p>
                </div>

            </div>

            <p className="text-center">
                *This data is a combination of the lifetime analytics across {' '}
                <div className="block"><b className="underline">all my websites</b> tracked through <a href="https://marketingplatform.google.com/about/analytics/" target="_blank" className="underline font-bold">Google Analytics</a></div>
            </p>

          </div>
        </div>
      </div>
    </>
  );
}
