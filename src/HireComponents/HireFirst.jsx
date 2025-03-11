import React from 'react';
import hireIcons from '../Images/hireIcons.svg'

export default function HireFirst() {
  return (
    <div className="pb-16 flex items-center justify-center">
      <div className="container mx-auto flex lg:flex-row flex-col items-center justify-center px-2 lg:px-20">
        {/* Left Side */}
        <div className="w-full lg:w-1/2 lg:pr-8 flex flex-col justify-center font-outfit text-center lg:text-start">
          <h2 className="text-4xl font-semibold text-gray-800 mb-4 font-outfit">I tackle web-development a bit differently...</h2>
          <p className="text-lg text-gray-600 mb-4">
            To me, a good website is more than one that "looks nice". It has to have the perfect color scheme, the perfect fonts, be accessible to users, load fast, etc..
          </p>
          <p className="text-lg text-gray-600 mb-4">
            In a sense, I'm essentially a perfectionist - one of the few qualities that might suck in real life, but translates well into web-development. 
            
          </p>
          <p className="text-lg text-gray-600 mb-6">
            When I create my websites, I make sure <span className='font-bold underline underline-offset-1'>everything is perfect.</span> From the right color palette to the right fonts, whenever I make a website, I put my all into it.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            So if you <span className="italic">were</span> to get a website designed by me, I can assure that everything would be to your liking. Don't like the font? Let's change it. Don't like the color scheme? Let's change that as well. 
            It is <span className="italic">your</span> website after all.
          </p>
          {/* <a
            href="#contact"
            className="bg-red-500 text-white px-6 py-3 rounded-full inline-block font-bold hover:bg-red-600 transition duration-300"
          >
            Contact Me
          </a> */}
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <img
            src={hireIcons}
            alt="Profile"
            className="w-4/5"
          />
        </div>
      </div>
    </div>
  );
};
