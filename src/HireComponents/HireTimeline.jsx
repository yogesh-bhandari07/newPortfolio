export default function HireTimeline() {
    return (
        <>
        <section>
            <div class="bg-white text-black py-8">
                <div class="container mx-auto flex flex-col items-start lg:flex-row my-12 md:my-24">
                <div class="flex flex-col w-full lg:sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8 font-outfit">
                    <p class="text-orange-700 uppercase">The Timeline</p>
                    <p class="text-3xl md:text-4xl leading-normal font-semibold mb-2">Here's how I make you <span className="main-gradient">your dream website.</span></p>
                    <p class="text-sm md:text-base text-black mb-4">
                    The process is quite long, so I've summed it down to the most core steps we'll take in our journey of making you your dream website! 
                    </p>
                </div>
                <div class="ml-0 lg:ml-12 w-full lg:w-2/3 sticky">
                    <div class="container mx-auto w-full h-full font-outfit">
                        <div class="relative wrap overflow-hidden p-10 h-full">
                            <div class="border-2-2 border-yellow-555 absolute h-full rounded-[1%] border-2 border-solid border-[#FFC100] right-2/4"
                            ></div>
                            <div class="border-2-2 border-yellow-555 absolute h-full rounded-[1%] border-2 border-solid border-[#FFC100] left-2/4"
                            ></div>
                            <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                            <div class="order-1 w-5/12"></div>
                            <div class="order-1 w-5/12 px-1 py-4 text-right">
                                <p class="mb-3 text-base text-orange-700">0 Days</p>
                                <h4 class="mb-3 font-bold text-lg md:text-2xl">Discovery Call</h4>
                                <p class="text-sm md:text-base leading-snug text-black text-opacity-100">
                                This first phase is all about understanding your needs and establishing a foundation for the project. Is the website for a company,
                                a business, a nonprofit, or something else? What functionality do we need? Login/signup? A scheduling system? We'll discuss all of that
                                here.
                                </p>
                            </div>
                            </div>
                            <div class="mb-8 flex justify-between items-center w-full">
                            <div class="order-1 w-5/12"></div>
                            <div class="order-1 w-5/12 px-1 py-4 text-left">
                                <p class="mb-3 text-base text-orange-700">1-2 Days</p>
                                <h4 class="mb-3 font-bold text-lg md:text-2xl">Planning and Strategy</h4>
                                <p class="text-sm md:text-base leading-snug text-black text-opacity-100">
                                After our initial discussion, I'll create a detailed plan/contract outlining the structure, features, timeline, and 
                                budget for your website. We'll review and refine this plan together to make sure we're aligned and ready to 
                                move on with the project.
                                </p>
                            </div>
                            </div>
                            <div class="mb-8 flex justify-between flex-row-reverse items-center w-full">
                            <div class="order-1 w-5/12"></div>
                            <div class="order-1 w-5/12 px-1 py-4 text-right">
                                <p class="mb-3 text-base text-orange-700">7-10 Days</p>
                                <h4 class="mb-3 font-bold text-lg md:text-2xl">UI/UX Design</h4>
                                <p class="text-sm md:text-base leading-snug text-black text-opacity-100">
                                Once the plan is approved, I'll design wireframes and mockups for your review. 
                                Your feedback is crucial in finalizing the visual elements and overall design of the website.
                                </p>
                            </div>
                            </div>

                            <div class="mb-8 flex justify-between items-center w-full">
                            <div class="order-1 w-5/12"></div>

                            <div class="order-1 w-5/12 px-1 py-4">
                                <p class="mb-3 text-base text-orange-700">10-20 Days</p>
                                <h4 class="mb-3 font-bold  text-lg md:text-2xl text-left">Development</h4>
                                <p class="text-sm md:text-base leading-snug text-black text-opacity-100">
                                With the design confirmed, I'll start building the website's frontend and backend (if applicable), 
                                making sure the site is responsive and functional. We'll have regular check-ins to provide feedback and 
                                track my progress!
                                </p>
                            </div>
                            </div>

                            <div class="mb-8 flex justify-between flex-row-reverse items-center w-full">
                            <div class="order-1 w-5/12"></div>
                            <div class="order-1 w-5/12 px-1 py-4 text-right">
                                <p class="mb-3 text-base text-orange-700">20 Days Onwards</p>
                                <h4 class="mb-3 font-bold text-lg md:text-2xl">Final Edits + Launch</h4>
                                <p class="text-sm md:text-base leading-snug text-black text-opacity-100">
                                Once everything is perfect, we'll launch the website! Post-launch, I'll continue to provide support, 
                                making sure the website remains secure, up-to-date, and aligned with any changes you need! Any major changes,
                                however, will require additional payments.
                                </p>
                            </div>
                            </div>
                        </div>
                    <img class="hidden lg:block mx-auto -mt-60 md:-mt-10" src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png" />
                    </div>
                </div>
                </div>
            </div>
        </section>
        </>
    )
}