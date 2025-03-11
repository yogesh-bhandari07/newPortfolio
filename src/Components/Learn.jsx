import React from "react";
import HeaderStatic from "./HeaderStatic";
import pranav from "../Images/pranavlatest.jpg";
import currentportfolio from "../Images/currentportfolio.png";
import { FaLink } from "react-icons/fa6";
import ContactSection from "./Footer";

const Learn = () => {
  return (
    <>
      <HeaderStatic />
      <div className="font-outfit">
        <div className="py-10 space-y-6 bg-[#faf6e8] px-4 pb-20">
          <div className="space-y-4 max-w-3xl mx-auto">
            <h1 className="five-title font-semibold">
              How I learned Web-Development:{" "}
              <span className="main-gradient">
                a full step-by-step account.
              </span>
            </h1>
            <div className="flex gap-x-4 py-4 items-center">
              <img
                src={pranav}
                alt="A pic of me!"
                className="h-14 w-14 object-cover rounded-full"
              />
              <div className="">
                <h4 className="text-xl">Yogesh Bhandari</h4>
                <p className="font-light">July 9th, 2024 - 10 min read</p>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-3xl space-y-12">
            <div className="max-w-2xl space-y-2">
              <h3 className="four-title font-semibold tracking-tight">
                Some Background Please?
              </h3>
              <div className="text-xl font-light leading-8 whitespace-pre-line">
                Alright, I'll start with a quick background about myself since{" "}
                <span className="bh">
                  who doesn't love talking about themselves?{" "}
                </span>
                I'm Yogesh Bhandari. I'm currently 16 years old and a rising
                Senior based out of Richmond, Virginia.
                <br />
                <br />
                In the past year, I've built multiple web-apps and applications.
                One of my largest ones is{" "}
                <a href="https://talem.org" target="_blank" className="bhl">
                  Talem
                </a>
                , a website that helps highschoolers find highschool resources.
                Extracurriculars, college programs, college applications,
                competitions, you name it. To date,{" "}
                <span className="bh">
                  Talem has done 1.2 Million Visits, 180k lifetime users, 500~
                  daily users, and over $3000 raised through grants.
                </span>
                <br />
                <br />I also built{" "}
                <a href="https://desource.app" target="_blank" className="bhl">
                  Desource
                </a>
                , a way for web-developers and web-designers to find programming
                resources. This is a newer project, but it's been gaining a ton
                of traction recently. Finally, I also run my own{" "}
                <a
                  href="https://thryvedesign.com"
                  target="_blank"
                  className="bhl"
                >
                  Web-Develompent Agency.
                </a>{" "}
                We build custom websites for mainly small businesses. We've
                generated over $10,000 in profit!
                <br />
                <br />
                In the recent months, I've been posting about all my projects
                and initiatives on platforms like Linkedin, Reddit, Discord,
                etc. and I always get the same question:
                <blockquote class="border-l-4 border-gray-500 my-8 ml-4 px-4 max-w-md">
                  <p class="text-xl font-medium text-gray-800">
                    How do I start learning web-development?
                  </p>
                </blockquote>
                In the rest of this post, I'll go over{" "}
                <span className="bh">
                  exactly what I learned, what mistakes I made while learning,
                  and the best way for <span className="underline">you</span> to
                  learn.
                </span>
              </div>
            </div>

            <div className="max-w-2xl space-y-2">
              <h3 className="four-title font-semibold tracking-tight">
                First Things First.
              </h3>
              <div className="text-xl font-light leading-8 whitespace-pre-line">
                If you want to learn web development, the{" "}
                <span className="bh">first thing, and I mean first thing</span>{" "}
                you should learn is{" "}
                <span className="bh">how the internet works.</span> I know,
                pretty boring. But it's almost essential to better your
                understanding of web-development. After all, you are literally{" "}
                <span className="bh">making websites on the internet.</span>
                Understanding how the web works - atleast to a fundamental
                level, will make it much easier to progress later on. So what do
                I mean by{" "}
                <span className="bh">"understanding how the web works"?</span> I
                mean topics like this:
                <ul class="gap-3.5 w-full grid grid-cols-2 my-4 text-white">
                  <li class="w-full bg-gray-800 text-center p-3 rounded-md">
                    How the internet works
                  </li>
                  <li class="w-full bg-gray-800 text-center p-3 rounded-md">
                    Web Pages, Servers, Browsers
                  </li>
                  <li class="w-full bg-gray-800 text-center p-3 rounded-md">
                    IP Addresses and DNS
                  </li>
                  <li class="w-full bg-gray-800 text-center p-3 rounded-md">
                    The Client-Server Model
                  </li>
                </ul>
                You can probably find a quick youtube video that covers these
                topics. I'm not asking you to become a computer engineering
                specialist - but having a <i className="bh">rudimentary</i>{" "}
                understanding of how the web works is essential!
              </div>
            </div>

            <div className="max-w-2xl space-y-2">
              <h3 className="four-title font-semibold tracking-tight">
                The Big Three
              </h3>
              <div className="text-xl font-light leading-8 whitespace-pre-line">
                Ok so you have a general understanding of the internet and
                whatnot. What now? At this point is when you start learning the{" "}
                <span className="bh">big three.</span> These are{" "}
                <span className="bh">HTML, CSS, and JavaScript (JS).</span>{" "}
                These three technologies are going to be vital when you're first
                starting out. Let's take a look at each of these, shall we?
                <br />
                <br />
                <span className="bh3">HTML</span>
                HTML stands for{" "}
                <span className="bh">HyperText Markup Language.</span> It's not
                really a "programming language" in the traditional sense. It's a{" "}
                <span className="bh">markup language</span>, meaning that it's
                essentially a set of tags you can use to create a website. HTML
                is what allows one to add real{" "}
                <span className="bh">content</span> to their website. Everything
                from a large hearder to an image to links can be created through
                HTML. You can think of it almost as the "backbone" of a website.
                <br />
                <br />
                <span className="bh3">CSS</span>
                You can create a website with <i className="bh">just HTML</i>,
                but it'll look something like this:
                <img
                  src="https://lh4.googleusercontent.com/1cqiCnTUebe7s01mte_pl6V8KHpcHmMWvVZ0v46q53l_4Ai3RoInPuvrh7nXWvfcL7TnNiLzr0co5VVOQMZwYn5XLHwIW3Rs2WA8Y0Toq0VLvjlnxAwucO312oqTvKNigUpxCfQ9nc9_u7I6QBd-NA"
                  alt="Image of an only HTML Website"
                  className="bimage"
                />
                Where's the color? The dazzle? Well, that's where{" "}
                <span className="bh">CSS</span> comes in. CSS stands for{" "}
                <span className="bh">Cascading Style Sheets</span>, and if you
                couldn't tell from the name, CSS helps us style stuff. Simple as
                that. Every website you make{" "}
                <span className="bh">will use CSS</span> (unless you're fine
                with your site looking like the above). With CSS, you can do
                pretty much <span className="bh">anything.</span> Animations?
                Done. Complex dashboard layouts? Easy. Learning and
                understanding CSS is critical if you want to be able to create
                designs that stand out to a user.
                <br />
                <br />
                Below is the homepage of one of my web-apps,{" "}
                <a href="https://talem.org" target="_blank" className="bhl">
                  Talem
                </a>
                . I made it with CSS. Everything from the colors to the
                font-size to the cool gradient blur - all done with CSS.
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/talem-app.appspot.com/o/TalemHomepage%20(1).png?alt=media&token=aa07a1bd-e39e-4161-9ae1-5e51e3a3b717"
                  alt="Talem Homepage Example"
                  className="bimage"
                />
                <br />
                <br />
                <span className="bh3">JavaScript</span>
                And lastly, we have JavaScript. You've most likely heard of it.
                It's <span className="bh">pretty important</span> since pretty
                much every website uses JavaScript in some way or another.
                JavaScript is a programming language used for interactivity on
                your website. HTML and CSS are "static" meaning that they are
                just <span className="bh">"there".</span> JS however adds
                interactivity to your website. Everything from forms to managing
                data to image sliders are all done with JavaScript.
                <br />
                <br />
                So what's after this? Well, most people move onto learning
                frameworks which just make making interactive websites easier
                and simplify the process. You can take a look at{" "}
                <a href="https://roadmap.sh/frontend" className="bhl">
                  this roadmap
                </a>{" "}
                for a better visualization of what to learn
                <br />
                <br />
                <span className="bh3">Thoughts</span>
                Alright so now you have an idea of what to learn. So how do we
                actually <span className="bh">learn it?</span> Let's get into{" "}
                <span className="bh">
                  how to learn and a major mistake to avoid while learning!
                </span>
              </div>
            </div>

            <div className="max-w-2xl space-y-2">
              <h3 className="four-title font-semibold tracking-tight">
                Avoid Tutorial Hell
              </h3>
              <div className="text-xl font-light leading-8 whitespace-pre-line">
                Tutorial Hell? What is that? It's pretty much exactly what it
                sounds like.
                <br />
                <br />
                Now I could write an explanation of what it is, but I'm lazy, so
                we'll let this reddit user describe it best:
                <div className="my-8">
                  <blockquote class="border-l-4 border-gray-500 ml-4 px-4 w-full">
                    <p class="text-xl font-medium leading-8 text-gray-800">
                      Tutorial hell is when you're stuck in the pattern of doing
                      tutorials, doing more tutorials, and sometimes switching
                      languages or technologies and doing even more tutorials
                      (usually because you hit a roadblock in the first language
                      and decided to try something different instead of pushing
                      through), instead of practicing what you learned on your
                      own and moving forward.
                    </p>
                  </blockquote>
                  <cite class="block text-right text-gray-600">
                    u/insertAlias
                  </cite>
                </div>
                Learning from tutorials is{" "}
                <span className="bh">is useful, don't get me wrong.</span> You
                have to build a foundation somewhere, right? But the biggest
                reason why people don't learn to their maximum potential is
                because{" "}
                <span className="bh">
                  they're not building things themselves.
                </span>
                <br />
                <br />I would say I'm a pretty good designer when it comes to
                making websites. Do you think I followed a tutorial in order to
                learn how to design? I definitely watched a few videos on the
                best design practices and whatnot, but the reason why I'm able
                to whip up good-looking designs quickly{" "}
                <span className="bh">
                  is because I spent so much time working on my own projects and
                  learning to design
                </span>
                that it eventually became almost a sort of second nature. That's
                how I learned and improved.
                <br />
                <br />
                The portfolio site you're on right now is actually my{" "}
                <span className="bh">second iteration.</span> I built my very
                first site just a few months after I started learning
                web-development.{" "}
                <a
                  href="https://pranavkold.vercel.app"
                  target="_blank"
                  className="bhl"
                >
                  Here's a link to it
                </a>{" "}
                if you're curious.
                <br />
                <br />
                To iterate my point better, let me show you the hero section of
                my first portfolio compared to my current one (this one).
                <br />
                <br />
                My Old One:
                <img
                  src="https://private-user-images.githubusercontent.com/107774675/248516915-822f27fe-db45-436b-8b07-c4e7243306a0.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjA3NTM0NjcsIm5iZiI6MTcyMDc1MzE2NywicGF0aCI6Ii8xMDc3NzQ2NzUvMjQ4NTE2OTE1LTgyMmYyN2ZlLWRiNDUtNDM2Yi04YjA3LWM0ZTcyNDMzMDZhMC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNzEyJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDcxMlQwMjU5MjdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0xNmRmZTVhYTFjZmJkYzFlNWNkMGYxMDYxNjBmMjJmYTQxZjllMTM5MDU1ZWViOGM4ZjFjNWE2MTliN2M5NTc0JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.mxK60VvPGV2UOZFVjLkO3xHydcMvr79kWGAxtjBQTlU"
                  alt="My old Portfolio"
                  className="bimage"
                />
                <br />
                My New Portfolio:
                <img
                  src={currentportfolio}
                  alt="Current Portfolio"
                  className="bimage"
                />
                <br />
                Big difference, no? My point is that you'll only get better by{" "}
                <span className="bh">building stuff.</span> I don't care what
                you build, <span className="bh">but just BUILD!</span> If you
                take a look at my{" "}
                <a href="https://github.com/PkTheCoda" className="bhl">
                  Github Account
                </a>
                , you can actually see some of my earliest projects. They were{" "}
                <span className="bh">pretty bad to say the least.</span>{" "}
                However, the more I built, the more I learned.
                <br />
                <br />
                Alright I'm feeling a bit hungry, so let's wrap up this blog
                post.
              </div>
            </div>

            <div className="max-w-2xl space-y-2">
              <h3 className="four-title font-semibold tracking-tight">
                I lied.
              </h3>
              <div className="text-xl font-light leading-8 whitespace-pre-line">
                Yeah, I lied. The title of this blog post is{" "}
                <span className="bh">How I learned web-development.</span> But
                the truth is, I didn't actually{" "}
                <span className="bh">"fully" learn web-development.</span> I
                don't even think that's possible. The thing I love about this
                niche of programming is that the ecosystem is{" "}
                <span className="bh">just massive.</span>
                <br />
                <br />
                You can spend a whole lifetime just learning all the new
                technologies (and don't forget the new ones that come out
                frequently!) As you advance and get better - you'll eventually
                develop a <span className="bh">"stack"</span> that you're
                comfortable with. A stack is essentially just a list of
                technologies that one uses to build an application - and there
                are tons of <span className="bh">"stacks"</span> out there. Once
                you explore and start experimenting with new technologies,
                you'll find what works for you.
              </div>
            </div>

            <div className="max-w-2xl space-y-2">
              <h3 className="four-title font-semibold tracking-tight">
                Resources
              </h3>
              <div className="text-xl font-light leading-8 whitespace-pre-line">
                Let me just dump a bunch of resources that I found best while
                learning web-development and may help you guys in your journey
                too!
              </div>

              {/* <!-- Card --> */}
              <div class="max-w-2xl mx-auto bg-[#b18631] shadow-lg rounded-lg">
                <div class="px-6 py-5 mt-4">
                  <div class="flex items-start gap-x-4">
                    {/* <!-- Icon --> */}
                    <div className="p-2 rounded-full bg-white w-max">
                      <FaLink className="w-6 h-6" />
                    </div>
                    {/* <!-- Card content --> */}
                    <div class="flex-grow truncate">
                      {/* <!-- Card header --> */}
                      <div class="w-full sm:flex justify-between items-center mb-1">
                        {/* <!-- Title --> */}
                        <h2 class="text-2xl leading-snug font-semibold text-gray-50 truncate mb-1 sm:mb-0">
                          FreeCodeCamp
                        </h2>
                      </div>
                      {/* <!-- Card body --> */}
                      <div class="flex items-end justify-between whitespace-normal">
                        {/* <!-- Paragraph --> */}
                        <div class="max-w-md text-white">
                          <p class="mb-2">
                            Freecodecamp has an amazing web-development along
                            with responsive design course which I absolute love
                            since it's project-oriented.
                          </p>
                        </div>
                        {/* <!-- More link --> */}
                        <a
                          class="flex-shrink-0 flex items-center justify-center text-white w-10 h-10 rounded-full hover:bg-white bg-amber-50 focus:outline-none focus-visible:from-white focus-visible:to-white transition duration-300 ml-2"
                          href="https://www.freecodecamp.org/"
                          target="_blank"
                        >
                          <span class="block font-bold text-black">
                            <span class="sr-only">Read more</span>
                            {">"}
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Card --> */}
              <div class="max-w-2xl mx-auto bg-[#b18631] shadow-lg rounded-lg">
                <div class="px-6 py-5 mt-4">
                  <div class="flex items-start gap-x-4">
                    {/* <!-- Icon --> */}
                    <div className="p-2 rounded-full bg-white w-max">
                      <FaLink className="w-6 h-6" />
                    </div>
                    {/* <!-- Card content --> */}
                    <div class="flex-grow truncate">
                      {/* <!-- Card header --> */}
                      <div class="w-full sm:flex justify-between items-center mb-1">
                        {/* <!-- Title --> */}
                        <h2 class="text-2xl leading-snug font-semibold text-gray-50 truncate mb-1 sm:mb-0">
                          Roadmap.sh
                        </h2>
                      </div>
                      {/* <!-- Card body --> */}
                      <div class="flex items-end justify-between whitespace-normal">
                        {/* <!-- Paragraph --> */}
                        <div class="max-w-md text-white">
                          <p class="mb-2">
                            Roadmap.sh gives a nice clear flowchart on how to
                            progress through your web-development journey and
                            what to learn.
                          </p>
                        </div>
                        {/* <!-- More link --> */}
                        <a
                          class="flex-shrink-0 flex items-center justify-center text-white w-10 h-10 rounded-full hover:bg-white bg-amber-50 focus:outline-none focus-visible:from-white focus-visible:to-white transition duration-300 ml-2"
                          href="https://roadmap.sh/frontend"
                          target="_blank"
                        >
                          <span class="block font-bold text-black">
                            <span class="sr-only">Read more</span>
                            {">"}
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Card --> */}
              <div class="max-w-2xl mx-auto bg-[#b18631] shadow-lg rounded-lg">
                <div class="px-6 py-5 mt-4">
                  <div class="flex items-start gap-x-4">
                    {/* <!-- Icon --> */}
                    <div className="p-2 rounded-full bg-white w-max">
                      <FaLink className="w-6 h-6" />
                    </div>
                    {/* <!-- Card content --> */}
                    <div class="flex-grow truncate">
                      {/* <!-- Card header --> */}
                      <div class="w-full sm:flex justify-between items-center mb-1">
                        {/* <!-- Title --> */}
                        <h2 class="text-2xl leading-snug font-semibold text-gray-50 truncate mb-1 sm:mb-0">
                          Scrimba
                        </h2>
                      </div>
                      {/* <!-- Card body --> */}
                      <div class="flex items-end justify-between whitespace-normal">
                        {/* <!-- Paragraph --> */}
                        <div class="max-w-md text-white">
                          <p class="mb-2">
                            Scrimba has interactive code editors which makes
                            learning and practicing and their courses are
                            self-paced. Amazing resource!
                          </p>
                        </div>
                        {/* <!-- More link --> */}
                        <a
                          class="flex-shrink-0 flex items-center justify-center text-white w-10 h-10 rounded-full hover:bg-white bg-amber-50 focus:outline-none focus-visible:from-white focus-visible:to-white transition duration-300 ml-2"
                          href="https://javascript.info"
                          target="_blank"
                        >
                          <span class="block font-bold text-black">
                            <span class="sr-only">Read more</span>
                            {">"}
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Card --> */}
              <div class="max-w-2xl mx-auto bg-[#b18631] shadow-lg rounded-lg">
                <div class="px-6 py-5 mt-4">
                  <div class="flex items-start gap-x-4">
                    {/* <!-- Icon --> */}
                    <div className="p-2 rounded-full bg-white w-max">
                      <FaLink className="w-6 h-6" />
                    </div>
                    {/* <!-- Card content --> */}
                    <div class="flex-grow truncate">
                      {/* <!-- Card header --> */}
                      <div class="w-full sm:flex justify-between items-center mb-1">
                        {/* <!-- Title --> */}
                        <h2 class="text-2xl leading-snug font-semibold text-gray-50 truncate mb-1 sm:mb-0">
                          Javascript.info
                        </h2>
                      </div>
                      {/* <!-- Card body --> */}
                      <div class="flex items-end justify-between whitespace-normal">
                        {/* <!-- Paragraph --> */}
                        <div class="max-w-md text-white">
                          <p class="mb-2">
                            You can think of this as almost a "dictionary" for
                            anything JavaScript. They have amazing and
                            easy-to-follow examples for everything JS!
                          </p>
                        </div>
                        {/* <!-- More link --> */}
                        <a
                          class="flex-shrink-0 flex items-center justify-center text-white w-10 h-10 rounded-full hover:bg-white bg-amber-50 focus:outline-none focus-visible:from-white focus-visible:to-white transition duration-300 ml-2"
                          href="https://javascript.info"
                          target="_blank"
                        >
                          <span class="block font-bold text-black">
                            <span class="sr-only">Read more</span>
                            {">"}
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-2xl space-y-2">
              <h3 className="four-title font-semibold tracking-tight">
                A Quick Plug
              </h3>
              <div className="text-xl font-light leading-8 whitespace-pre-line">
                Last summer, I created a fully self-paced course website where
                anyone can learn web-development for free called{" "}
                <a
                  href="https://learntheweb.org"
                  target="_blank"
                  className="bhl"
                >
                  learntheweb.org
                </a>
                . On the website, you can learn{" "}
                <span className="bh">HTML, CSS, and JS</span> through self-paced
                courses, interactive projects, and mini "homeworks" that we give
                out - I'd love for you to give it a shot and give me some
                feedback as well! Here are the quick links to some courses:
                <br />
                <br />
                {/* <!-- Cards Courses --> */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 place-items-start">
                  <a
                    href="https://learntheweb.org/courses/html"
                    target="_blank"
                    class="max-w-[16rem] w-full bg-[#b18631] shadow-lg rounded-lg"
                  >
                    <div class="px-4 py-3">
                      <div class="flex items-center gap-x-4">
                        {/* <!-- Icon --> */}
                        <div className="p-2 rounded-full bg-white w-max">
                          <FaLink className="w-6 h-6" />
                        </div>
                        {/* <!-- Card content --> */}
                        <div class="flex">
                          {/* <!-- Card header --> */}
                          <div class="w-full sm:flex justify-between items-center mb-1">
                            {/* <!-- Title --> */}
                            <h2 class="text-2xl leading-snug font-semibold text-gray-50 truncate mb-1 sm:mb-0">
                              HTML
                            </h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>

                  <a
                    href="https://learntheweb.org/courses/css"
                    target="_blank"
                    class="max-w-[16rem] w-full bg-[#b18631] shadow-lg rounded-lg"
                  >
                    <div class="px-4 py-3">
                      <div class="flex items-center gap-x-4">
                        {/* <!-- Icon --> */}
                        <div className="p-2 rounded-full bg-white w-max">
                          <FaLink className="w-6 h-6" />
                        </div>
                        {/* <!-- Card content --> */}
                        <div class="flex">
                          {/* <!-- Card header --> */}
                          <div class="w-full sm:flex justify-between items-center mb-1">
                            {/* <!-- Title --> */}
                            <h2 class="text-2xl leading-snug font-semibold text-gray-50 truncate mb-1 sm:mb-0">
                              CSS
                            </h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>

                  <a
                    href="https://learntheweb.org/courses/javascript"
                    target="_blank"
                    class="max-w-[16rem] w-full bg-[#b18631] shadow-lg rounded-lg"
                  >
                    <div class="px-4 py-3">
                      <div class="flex items-center gap-x-4">
                        {/* <!-- Icon --> */}
                        <div className="p-2 rounded-full bg-white w-max">
                          <FaLink className="w-6 h-6" />
                        </div>
                        {/* <!-- Card content --> */}
                        <div class="flex">
                          {/* <!-- Card header --> */}
                          <div class="w-full sm:flex justify-between items-center mb-1">
                            {/* <!-- Title --> */}
                            <h2 class="text-2xl leading-snug font-semibold text-gray-50 truncate mb-1 sm:mb-0">
                              JavaScript
                            </h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="max-w-2xl space-y-2">
              <h3 className="four-title font-semibold tracking-tight">
                Conclusion
              </h3>
              <div className="text-xl font-light leading-8 whitespace-pre-line">
                Web Development is not easy to learn, but I wouldn't say it's
                hard to learn either. You need a lot of patience and aptitude in
                order to learn in this niche and just remember:{" "}
                <span className="bh">failure is part of the process</span>. I
                can't tell you how many times a seemingly unfixable bug has
                demotivated me while working on something. In that case, it's
                best to step back from the project for a day or two, relax or
                work on something else, and come back with a fresh mind.
                <br />
                <br />
                It was a lot of fun writing this post. I'm normally not the
                extroverted "sharing" type of person, so practicing writing
                stuff like this has helped me out a lot, and I hope the actual
                post helps you too!
                <br />
                <br />
                If you ever need any help or have any questions, you can just
                send me an email or send me a message on linkedin. (Email is
                faster though!)
                <br />
                <br />
                Cheers,
                <br />
                Pranav
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactSection />
    </>
  );
};

export default Learn;
