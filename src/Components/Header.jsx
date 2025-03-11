import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from '../Images/pklogo.png'
import pranavtextlogo from '../Images/pranavlogotext.png'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '#about' },
  { name: 'Skills/Tools', href: '#tools' },
  { name: 'My Work', href: '#work' },
  { name: 'Reach Out', href: '#contact' },
]

export default function Navbar() {
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
      {/* <div className='font-outfit'>
        <div className="py-2 bg-[#58371a] text-white text-center">
          Looking for an affordable, stunning website? I run a web development agency and have worked with over 20 clients to create impactful websites. {' '}
          <a href="https://thryvedesign.com" target='_blank' className='underline text-blue-100'>
            Take me there.
          </a>
        </div>
      </div> */}

      <div className="md:sticky z-40 top-10 mt-10 flex flex-col justify-center items-center mx-10 font-outfit">

        <header className="bg-white/40 max-w-[85rem] backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-2xl w-full z-40">
          <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div className="flex lg:flex-1">
              <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                    className="h-8 w-auto"
                    src={pranavtextlogo}
                    alt=""
                  />
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href} 
                  className="text-md leading-6 text-black transition transform hover:scale-110 font-light"
                  onClick={(event) => handleNavigationClick(event, item.href)}
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end font-light">
              <a 
                href="https://thryvedesign.com" 
                target='_blank'
                className="text-md leading-6 bg-orange-700 text-white px-4 py-2 rounded-lg shadow-md"
              >
                Hire Me <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </nav>

          {/* Mobile Dialog */}
          <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <div className="fixed inset-0 z-40" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-40 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="/" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img
                    className="h-8 w-auto"
                    src={pranavtextlogo}
                    alt=""
                  />
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base  leading-7 text-gray-900 hover:bg-gray-50"
                        onClick={(event) => handleNavigationClick(event, item.href)}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="py-6">
                    <a
                      href="https://thryvedesign.com"
                      target='_blank'
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base  leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Hire Me 
                    </a>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>

        </header>

      </div>
    </>
  )
}
