import sample1 from '../Images/stellapic1.png'
import sample2 from '../Images/ecoeats1.png'
import sample3 from '../Images/acely1.png'
import sample4 from '../Images/score1.png'
import languify from '../Images/languifymain.png'
import desource1 from '../Images/desource2.png'
import { FaPlusCircle } from "react-icons/fa";
import { SiBuymeacoffee } from "react-icons/si";

export default function ExtraProjectBottom() {
    return (
        <div className='flex flex-col font-outfit bg-orange-100 py-16 -skew-y-1'>
            
            <div className='skew-y-1'>
                <div className='seven-title font-medium text-center text-[#704421] space-y-2'>
                    <h1 className='seven-title tracking-tighter'>Other <span className="underline">Side Projects</span> </h1>
                    <h4 className="text-xl font-normal max-w-xl mx-auto">
                        These are some of my favorite side-projects I've created. Check out <a href="https://github.com/pkthecoda" target="_blank" className="underline">my github</a> {' '}
                        for the 30+ web-projects I've built.
                    </h4>
                </div>
                <div className="py-6 max-w-[70rem] grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto">
                    <a target='_blank' href='https://score1600.com' className="h-full gap-8 p-8 rounded-xl shadow-md cursor-pointer bg-[#ffedd5]">
                        <div className="flex items-center">
                            <img src={sample4} alt="Image of another project of mine" className='rounded-md shadow-lg' />
                        </div>
                        <div className="p-4 space-y-4 flex flex-col text-black justify-center">
                            <a href="https://score1600.com" className='text-blue-500 underline' target='_blank'>Score1600.com</a>
                            <h1 className="five-title text-wrap">
                                Score1600
                            </h1>
                            <h3 className='text-sm sm:text-lg text-balance leading-6 font-light text-gray-800'>
                                Score1600 is an SAT tutoring service started with a group of friends. I personally LOVE
                                this website - I focused heavily on design + color theme while making it.
                                <br />
                                <br />
                                You can visit the site at <b className='font-bold'>Score1600.com</b>!
                            </h3>
                        </div>
                    </a>
                    <a target='_blank' href='https://ecoeats.us' className="gap-8 shadow-md cursor-pointer bg-[#ffedd5] p-8 rounded-xl">
                        <div className="flex items-center">
                            <img src={sample2} alt="Image of another project of mine" className='rounded-md shadow-lg' />
                        </div>
                        <div className="p-4 space-y-4 flex flex-col text-black justify-center space-y-2">
                            <a href="https://ecoeats.us" className='text-blue-500 underline' target='_blank'>Ecoeats.us</a>
                            <h1 className="five-title">
                                EcoEats
                            </h1>
                            <h3 className='text-sm sm:text-lg text-balance leading-6 font-light text-gray-800'>
                                EcoEats is a revolutionary app that connects food banks and charities with food. The website
                                showcases the nonprofit Ecoeats along with the potential of the app.
                                <br />
                                <br />
                                You can visit the site at <b className='font-bold'>Ecoeats.us</b>!
                            </h3>
                        </div>
                    </a>
                    <a target='_blank' href='https://www.linkedin.com/posts/pranav-konjeti_easyaps-ai-can-now-grade-your-frq-response-activity-7220802778858696704-3VPA?utm_source=share&utm_medium=member_desktop' className="gap-8 p-8 rounded-xl shadow-md cursor-pointer bg-[#ffedd5]">
                        <div className="p-4 space-y-4 flex flex-col text-black justify-center">
                            <div className="flex items-center">
                                <img src={sample3} alt="Image of another project of mine" className='rounded-md shadow-lg' />
                            </div>
                            <div className='space-y-2'>
                                <a href="https://www.linkedin.com/posts/pranav-konjeti_easyaps-ai-can-now-grade-your-frq-response-activity-7220802778858696704-3VPA?utm_source=share&utm_medium=member_desktop" className='text-blue-500 underline' target='_blank'>Demo Video</a>
                                <h1 className="five-title">
                                    Acely
                                </h1>
                                <h3 className='text-sm sm:text-lg text-balance leading-6 font-light text-gray-800'>
                                    Acely is (kind of) an older project (2~ months in the works). I believe that it'll be
                                    the next best thing in Edtech! We plan to include AI-Graded MCQs, FRQs, DBQs, live feedback,
                                    massive question bank, mock exams, and so much more! Reach out if you'd like to help :)
                                </h3>
                            </div>
                        </div>
                    </a>
                    <a target='_blank' href='https://www.youtube.com/watch?v=ZjpzYi6aBa8' className="gap-8 p-8 rounded-xl shadow-md cursor-pointer bg-[#ffedd5]">
                        <div className="p-4 space-y-4 flex flex-col text-black justify-center">
                            <div className="flex items-center">
                                <img src={languify} alt="Image of another project of mine" className='rounded-md shadow-lg' />
                            </div>
                            <div className='space-y-2'>
                                <a href="https://www.youtube.com/watch?v=ZjpzYi6aBa8" className='text-blue-500 underline' target='_blank'>Demo Video</a>
                                <h1 className="five-title">
                                    Languify
                                </h1>
                                <h3 className='text-sm sm:text-lg text-balance leading-6 font-light text-gray-800'>
                                    Languify is a website I built to help learn languages faster. You'll get a
                                    randomly generated sentence, type it out in the language you intend to learn,
                                    and get comprehensive skill/grammar/etc. feedback!
                                </h3>
                            </div>
                        </div>
                    </a>
                </div>
            </div>

            
            {/* <div className='text-center two-title font-medium tracking-tight flex flex-col gap-2 justify-center items-center'>
                <p>Want to support my projects? Buy me a coffee!</p> 
                <a 
                    className='flex items-center gap-x-2 px-4 py-2 bg-white rounded-lg text-xl transition300scale'
                    target='_blank'
                    href='https://buymeacoffee.com/pranavkonjeti'
                >
                    <SiBuymeacoffee /> Support Me
                </a>
            </div> */}

            {/* <div className="pb-10 px-10 pt-0 w-full max-w-[70rem] mx-auto bg-[#ffedd5] rounded-xl shadow-md">
                hi
            </div> */}

        </div>
    )
}