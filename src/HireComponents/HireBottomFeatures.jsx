import { FaSearch, FaMobileAlt, FaCode, FaPeopleArrows, FaMoneyBillWave } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { IoAnalytics } from "react-icons/io5";

const features = [
    {
        title: "Domain Management",
        content: "I will setup and manage your domain(s)! This includes everything from domain registration to DNS transfer.",
        icon: <CgWebsite />
    },
    {
        title: "Responsive Web Design",
        content: "I specialize in creating websites that look great and function flawlessly on all devices, from desktops to smartphones.",
        icon: <FaMobileAlt />
    },
    {
        title: "Collaborative Approach",
        content: "While I'm building the site, I'll make sure to work closely alongside you to make sure that I am making something up to your expectations!",
        icon: <FaPeopleArrows />
    },
    {
        title: "Access to Code",
        content: "Once I'm done with the website, you'll get access to the repo, or codebase, incase you want to make any custom edits or changes - or do anything.",
        icon: <FaCode />
    },
    {
        title: "Analytics",
        content: "I'll have a google analytics account setup for your website. This allows you to view everything from conversion rate to how many people are visiting daily!",
        icon: <IoAnalytics />
    },
    {
        title: "Pay Only if you Like it",
        content: "There is no down-payment for my services. I'll create the site and if it's what you're looking for, you'll pay me! It's that simple.",
        icon: <FaMoneyBillWave />
    },
]

export default function HireBottomFeatures() {
  return (
    <>
      <div className="py-20 relative overflow-hidden background-pattern-square">


        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="absolute -top-20 z-10" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs" viewBox="0 0 800 450" element-id="406"><defs element-id="405"><filter id="bbblurry-filter" x="-100%" y="-100%" width="400%" height="400%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB" element-id="1">
            <feGaussianBlur stdDeviation="103" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" edgeMode="none" result="blur" element-id="0"></feGaussianBlur></filter></defs><g filter="url(#bbblurry-filter)" element-id="402"><ellipse rx="75" ry="55.5" cx="398.227594722401" cy="193.93150962482798" fill="hsla(43, 88%, 40%, 1.00)" element-id="401"></ellipse><ellipse rx="75" ry="55.5" cx="525.4156139330429" cy="233.70940126072279" fill="hsla(0, 55%, 67%, 1.00)" element-id="400"></ellipse><ellipse rx="75" ry="55.5" cx="258.76315322789276" cy="226.5310489481146" fill="hsla(45, 20%, 67%, 1.00)" element-id="399"></ellipse><ellipse rx="75" ry="55.5" cx="401.95759690891623" cy="183.9944755380803" fill="hsla(24, 76%, 38%, 1.00)" element-id="8"></ellipse></g>
        </svg>
        
        <div className="container mx-auto font-outfit rounded-xl flex flex-col gap-y-6 z-40">
          {" "}
          {/* Add overflow-hidden here */}
          <div className="flex flex-col items-center  gap-y-2 z-20">
            <h2 className="six-title text-center font-semibold">
              Still Don't feel <span className="main-gradient">convinced?</span>
            </h2>
            <p className="text-2xl font-light half-responsive text-center">
              Here's a few more things you'll get by getting a website built by
              me:
            </p>
          </div>
          <div className="py-2 lg:px-0 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 z-20">

            {features.map((feature, index) => {
                return (
                    <div className="p-6 flex flex-col gap-y-4 bg-white/90 rounded-sm border-2 border-gray-100">
                        <div className="flex gap-x-6 items-center">
                        <div className="p-4 bg-[#fefefd] border text-black">
                            {feature.icon}
                        </div>
                        <h3 className="text-xl font-medium text-black">
                            {feature.title}
                        </h3>
                        </div>
                        <h4>
                            {feature.content}
                        </h4>
                    </div>
                    )
                })}

          </div>
        </div>
        <div className="relative px-5 lg:px-10 xl:px-20 flex justify-center my-20">
        {/* Add the shadow blob */}
        <div className="hidden lg:block gap-x-20 absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-3xl">
          <div
            className="relative aspect-[1155/678] w-[40rem] bg-gradient-to-tr from-[#de8c52] from-30% to-[#4133d8] via-[#d21d23] opacity-40 "
            style={{
              clipPath:
                "polygon(12.58% 16.91%, 24.76% 10.52%, 36.95% 16.91%, 47.44% 10.52%, 66.68% 6.99%, 76.59% 16.91%, 84.33% 16.91%, 88.89% 37.91%, 91.64% 60.12%, 83.35% 62.08%, 76.59% 71.88%, 66.93% 72.68%, 57.43% 76.31%, 47.04% 81.23%, 38.05% 69.73%, 23.1% 76.31%, 18.66% 63.16%, 9.36% 53.87%, 5.81% 28.54%)",
            }}
          />
        </div>

        <div className="bg-[#171717] text-white text-center w-full text-5xl font-semibold rounded-xl py-20 flex flex-col gap-y-4 items-center font-outfit px-5 xl:px-20 relative ">
          <div className="block z-30">And the best part?</div>
          <div className="text-5xl block z-30 text-[#f53c80]">
            You don't pay a dime <span className="text-[#1bc1f7] ">until</span>{" "}
            the website is done.
          </div>
          <div className="text-xl font-light w-full px-0 xl:px-20 block z-30">
            Yep, it's that simple: no payment until you see the site. The
            benefit? No worrying about paying for something you dislike. But
            obviously, if you don't pay, you don't get the site. This won't be
            an issue though because once you see the site, the last thing on
            your mind is not paying for it 😉. But why do this? From my
            experience, people are pretty skeptical when a 16 year old offers to
            make their site so this feature will keep you from worrying about
            paying for something you don't like!
            <br />
            <br />
          </div>
          <a
            href="https://tally.so/r/wLpGWy"
            target="_blank"
            className="bg-[#f53c80] z-40 px-3 transition transform duration-300 hover:scale-105 py-2 rounded-xl text-xl font-normal"
          >
            Let's Do This!
          </a>
        </div>
      </div>
      </div>
      
    </>
  );
}
