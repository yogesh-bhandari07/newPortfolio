import React from "react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaCoffee,
  FaYoutube,
} from "react-icons/fa";
import ContactForm from "./ContactForm";
import { BiSolidCoffeeAlt } from "react-icons/bi";
import yogeshText from "../Images/Yogeshtext.svg";

function Footer() {
  return (
    <div className="relative font-outfit">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="block w-full relative -bottom-2"
      >
        <path
          fill="#FFA726"
          fillOpacity="1"
          d="M0,192L34.3,208C68.6,224,137,256,206,277.3C274.3,299,343,309,411,272C480,235,549,149,617,138.7C685.7,128,754,192,823,229.3C891.4,267,960,277,1029,277.3C1097.1,277,1166,267,1234,245.3C1302.9,224,1371,192,1406,176L1440,160L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        ></path>
      </svg>
      <section className="bg-[#FFA726] pt-8" id="contact">
        <div className="max-w-[80rem] mx-auto text-center px-2 flex flex-col gap-y-4 items-center">
          <h2 className="six-title font-semibold text-[#553418]">
            Get in Touch
          </h2>
          <p className="text-lg text-[#553418] px-2 max-w-xl text-center">
            Have a question or a project in mind? Don't hesitate to reach out!
            Whether it's discussing potential collaborations or simply saying
            hello, I'm here and ready to chat.
          </p>

          <ContactForm />
        </div>

        {/* <footer className="bg-[#efa237] mt-16 py-8 text-center">
          <p className="text-[#553418] text-lg font-outfit px-2">
            Built with ❤️ by <a href="mailto:yogesh.bhandari285@gmail.com" target="_blank" className="text-[#3c2611] underline">Yogesh Bhandari</a> using <span className="text-[#3c2611]">React, TailwindCSS, Material Tailwind</span> <br />
            This portfolio is a complete rehaul of my <a href="https://pranavkold.vercel.app" target="_blank" className="text-[#3c2611] underline">old one</a>. Have Suggestions? Email me!
            

          </p>

          <div className="mt-4 flex justify-center gap-4">
            <a
              href="https://github.com/pkthecoda"
              target="_blank"
                className="p-3 bg-white rounded-full transition transform hover:scale-105"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-[#4a2f16] text-2xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/pranav-konjeti"
              target="_blank"
                className="p-3 bg-white rounded-full transition transform hover:scale-105"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-[#4a2f16] text-2xl" />
            </a>
            <a
              className="p-3 bg-white rounded-full transition transform hover:scale-105"
              href="mailto:yogesh.bhandari285@gmail.com"
            >
              <FaEnvelope className="text-[#4a2f16] text-2xl" />
            </a>
            <a
              href="https://www.youtube.com/@pranavkonjeti"
                className="p-3 bg-white rounded-full transition transform hover:scale-105"
              target="_blank"
            >
              <FaYoutube className="text-[#4a2f16] text-2xl" />
            </a>
            <a
              href="https://buymeacoffee.com/pranavkonjeti"
                className="p-3 bg-white rounded-full transition transform hover:scale-105"
              target="_blank"
            >
              <BiSolidCoffeeAlt className="text-[#4a2f16] text-2xl" />
            </a>
          </div>
        </footer> */}

        <footer className="mt-10">
          <div className="bg-[#de9630] pt-10 px-10">
            <div className="max-w-screen-lg px-4 sm:px-6 sm:grid md:grid-cols-4 sm:grid-cols-2 mx-auto text-[#553418]">
              <div className="p-5 flex flex-col gap-y-2 items-start">
                <h3 className="font-bold text-xl text-[#553418]">
                  Yogesh Bhandari
                </h3>
              </div>

              <div className="p-5 font-light">
                <div className="text-sm uppercase text-[#553418] font-bold">
                  Quick Links
                </div>
                <a
                  className="my-3 block hover:underline"
                  href="https://www.linkedin.com/in/the-yogesh-bhandari/"
                  target="_blank"
                >
                  Linkedin <span className="text-teal-600 text-xs p-1"></span>
                </a>

                <a
                  className="my-3 block hover:underline"
                  href="https://github.com/yogesh-bhandari07"
                  target="_blank"
                >
                  Github
                </a>
              </div>

              <div className="p-5 font-light">
                <div className="text-sm uppercase text-[#553418] font-bold">
                  Contact Me
                </div>
                <a
                  className="my-3 block"
                  href="mailto:yogesh.bhandari285@gmail.com"
                >
                  yogesh.bhandari285@gmail.com
                  <span className="text-teal-600 text-xs p-1"></span>
                </a>
              </div>
            </div>
            <div className="max-w-screen-lg py-10 border-t-2 border-[#b1743e] mx-auto">
              <img src={yogeshText} alt="" className="w-full" />
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
}

export default Footer;
