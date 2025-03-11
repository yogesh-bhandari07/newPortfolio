import { useState } from 'react'
import { TypeAnimation } from 'react-type-animation';

const navigation = [
  { name: 'How it Works', href: '#about' },
  { name: 'General Pricing', href: '#work' },
  { name: 'Features', href: '#tools' },
]

export default function HireHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleNavigationClick = (event, href) => {
    event.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false); 
  };

  return (
    <>
      <div className="">

        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#de8c52] from-30% to-[#4133d8] via-[#d21d23] opacity-30 sm:left-[calc(50%-30rem)] sm:bottom-[-20rem] sm:w-[81.1875rem]"
              style={{
                clipPath:
                  'polygon(28.22% 33.13%, 37.2% 26.09%, 48.37% 23.76%, 60.27% 26.09%, 66.68% 29.23%, 70.05% 35.52%, 72.34% 46.86%, 71.78% 53.33%, 70.05% 61.09%, 62.84% 64.45%, 51.31% 69.45%, 38.91% 67.34%, 28.22% 57.35%, 23.5% 43.51%)',
              }}
            />
          </div>
          <div className="mx-auto max-w-7xl pb-32 sm:pb-48 lg:pb-56 lg:pt-16 sm:pt-8">
            <div className="text-center">
              <h1 className="text-5xl tracking-tight font-semibold text-black sm:text-8xl font-outfit leading-normal z-40">
                Let's create
              </h1>
              <div className='main-gradient inline text-transparent bg-clip-text text-5xl tracking-tight font-semibold text-black sm:text-8xl font-outfit my-10 leading-normal z-40'>
                <TypeAnimation
                        sequence={[
                            'Intuitive User Interfaces', // Types 'One'
                            1500, // Waits 1.5s
                            'Seamless User Experiences', // Deletes 'One' and types 'Two'
                            1500, // Waits 1.5s
                            'Pixel-Perfect Designs', // Types 'Three' without deleting 'Two'
                            1500,
                            'Mobile-Friendly Layouts',
                            1500,
                            'Interactive Web Solutions',
                            1500,
                            () => {
                            console.log('Sequence completed');
                            },
                        ]}
                        wrapper="span"
                        cursor={true}
                        repeat={Infinity}
                        style={{}}
                    />
                </div>
              <p className="mt-6 text-xl sm:text-3xl leading-8 text-black font-outfit">
                Let's turn your dreams <span className='main-gradient font-semibold'>into realities, together.</span>
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#features"
                  className="rounded-md bg-red-500 px-3.5 py-2.5 text-xl text-white shadow-xl shadow-red-300/50 font-outfit w-40 h-15 flex items-center justify-center transform transition hover:scale-105"
                  onClick={(event) => handleNavigationClick(event, "#features")}
                >
                 More Info
                </a>
                <a 
                  href="https://tally.so/r/wLpGWy" 
                  target='_blank'
                  className="text-xl leading-6 text-black font-outfit transform transition hover:scale-105"
                >
                  Book Me<span aria-hidden="true">→</span>
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
                  'polygon(28.29% 33.22%, 37.29% 26.17%, 48.49% 23.83%, 60.42% 26.17%, 66.84% 29.32%, 70.23% 35.62%, 72.52% 47%, 71.96% 53.49%, 70.23% 61.27%, 63% 64.64%, 51.44% 69.65%, 39.01% 67.54%, 28.29% 57.52%, 23.56% 43.63%)',
              }}
            />
          </div>
        </div>
      </div>
    </>
  )
}
