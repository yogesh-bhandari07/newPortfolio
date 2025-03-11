import "./App.css";
import React, { useState } from "react";
import Homepage from "./Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hire from "./Hire";
import TallyFormEmbed from "./TallyForm";
import { Analytics } from "@vercel/analytics/react";
import { MdClose } from "react-icons/md";
import Learn from "./Components/Learn";
import Portfolio from "./Portfolio";

function App() {
  const [showAgency, setShowAgency] = useState(true);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />

          <Route path="/hire" element={<Hire />} />

          <Route path="/form" element={<TallyFormEmbed />} />

          <Route path="/portfolio" element={<Portfolio />} />

          <Route path="/learn" element={<Learn />} />
        </Routes>
      </BrowserRouter>
      <Analytics />
    </>
  );
}

export default App;
