import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

export default function Portfolio() {
  return (
    <>
      <Header />
      <div className="py-20 h-screen max-w-[90rem] mx-auto flex items-center justify-center">
        <iframe
          class="pdf"
          src="https://drive.google.com/file/d/1BpzTAKKeLOkH40J4uakmNnQhQ0aKd6IP/preview"
          className="w-2/3 h-[50rem] rounded-xl"
        ></iframe>
      </div>
      <Footer />
    </>
  );
}
