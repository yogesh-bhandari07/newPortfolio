import React from "react";
import { TypeAnimation } from "react-type-animation";

export default function HeroMain() {
  return (
    <>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#de8c52] from-30% to-[#4133d8] via-[#d21d23] opacity-30 sm:left-[calc(50%-30rem)] sm:bottom-[-20rem] sm:w-[81.1875rem]"
            style={{
              clipPath:
                "polygon(28.22% 33.13%, 37.2% 26.09%, 48.37% 23.76%, 60.27% 26.09%, 66.68% 29.23%, 70.05% 35.52%, 72.34% 46.86%, 71.78% 53.33%, 70.05% 61.09%, 62.84% 64.45%, 51.31% 69.45%, 38.91% 67.34%, 28.22% 57.35%, 23.5% 43.51%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-5xl pb-32 sm:pb-48 lg:pb-56 lg:pt-16 sm:pt-8">
          <div className="text-center">
            <h1 className="text-5xl tracking-tight font-semibold text-black sm:text-9xl font-outfit">
              Hi There, I'm{" "}
              <span className="main-gradient">Yogesh Bhandari</span>
            </h1>
            <p className="mt-6 text-xl sm:text-3xl leading-8 text-black font-outfit">
              I'm a Fullstack Developer who builds
              <span className="main-gradient font-semibold ml-2">
                <TypeAnimation
                  sequence={[
                    "impactful software.", // Types 'One'
                    2000, // Waits 1.5s
                    "Specialist in Fintech ", // Deletes 'One' and types 'Two'
                    2000, // Waits 1.5s
                    "Full Stack Developer", // Deletes 'One' and types 'Two'
                    2000, // Waits 1.5s
                    () => {
                      console.log("Sequence completed");
                    },
                  ]}
                  wrapper="span"
                  cursor={true}
                  repeat={Infinity}
                  style={{}}
                />
              </span>
            </p>

            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#about"
                className="rounded-md bg-red-500 px-3.5 py-2.5 text-xl text-white shadow-xl shadow-red-300/50 font-outfit w-40 h-15 flex items-center justify-center transform transition hover:scale-105"
                onClick={(event) => handleNavigationClick(event, "#about")}
              >
                About Me
              </a>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#c7449b] from-50% to-[#efa717] to-40% via-[#c51010] opacity-30 sm:left-[calc(40%+36rem)] sm:bottom-[20rem] sm:w-[80.1875rem] sm:h-[60rem]"
            style={{
              clipPath:
                "polygon(28.29% 33.22%, 37.29% 26.17%, 48.49% 23.83%, 60.42% 26.17%, 66.84% 29.32%, 70.23% 35.62%, 72.52% 47%, 71.96% 53.49%, 70.23% 61.27%, 63% 64.64%, 51.44% 69.65%, 39.01% 67.54%, 28.29% 57.52%, 23.56% 43.63%)",
            }}
          />
        </div>
      </div>
    </>
  );
}
