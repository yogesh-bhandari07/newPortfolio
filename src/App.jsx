import './App.css'
import React, {useState} from 'react';
import Homepage from './Homepage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hire from './Hire';
import TallyFormEmbed from './TallyForm';
import { Analytics } from '@vercel/analytics/react';
import { MdClose } from "react-icons/md";
import Learn from './Components/Learn';
import Portfolio from './Portfolio'

function App() {

  const [showAgency, setShowAgency] = useState(true)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route 
            index 
            element={<Homepage />}
          />

        <Route 
            path="/hire"
            element={<Hire />}
          />

          <Route 
            path="/form"
            element={<TallyFormEmbed />}
          />

          <Route 
            path="/portfolio"
            element={<Portfolio />}
          />

          <Route 
            path="/learn"
            element={<Learn />}
          />


          
        </Routes>

        

        
      </BrowserRouter>
      <Analytics />

      {showAgency && (
        <div className="z-50 max-w-[30rem] border-4 border-orange-900 p-4 hidden lg:flex font-outfit gap-y-2 bg-orange-50 shadow-xl rounded-xl fixed bottom-5 right-5 slide-in-right">
          
          <MdClose className="w-4 h-4 absolute top-2 right-2 cursor-pointer text-[#431407] hover:rotate-90 duration-300" onClick={() => setShowAgency(false)} />

          <div className='col-span-8 text-[#50281d]'>
            <h1 className="one-title font-medium">I started my own Web Development Agency!</h1>
            <p className="text-sm w-[90%]">
              If you're looking for an affordable, stunning website tailored to your needs, <a href="https://pranavkonjeti.com" target='_blank' className='underline font-medium text-blue-800'>visit my agency</a> and book a consultation call.
            </p>
          </div>

          {/* <a href="https://thryvedesign.com" target='_blank' className="px-2 text-xs xl:text-sm mt-1 py-1 bg-amber-700 w-max rounded-md text-white mx-auto">
            I'm Interested!
          </a> */}
        </div>
      )}

    </>
  )
}

export default App
