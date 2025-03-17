import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("mgejkqvo");

  if (state.succeeded) {
    return (
      <p className="text-white text-xl font-medium">
        Thanks for sending a message! I'll get back to you within 24 hours!
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      id="contact"
      className="bg-gray-900 w-full px-10 py-10 rounded-md font-outfit flex flex-col items-center justify-center"
    >
      <div className="flex flex-col gap-y-2 gap-8 py-4">
        <div className="grid md:grid-cols-2 w-full gap-8">
          <div className="">
            <label
              htmlFor="name"
              className="block text-left font-semibold mb-2 main-gradient text-lg"
            >
              Your Name
            </label>
            <input
              id="name"
              type="name"
              name="name"
              placeholder="your name"
              required
              className="shadow flex text-center appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <ValidationError
              prefix="Name"
              field="name"
              errors={state.errors}
              className="text-red-500 text-sm"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block main-gradient text-lg text-left font-semibold mb-2"
            >
              Your Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              placeholder="sample@gmail.com"
              className="shadow text-center appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
              className="text-red-500 text-sm"
            />
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="message"
            className="block main-gradient text-lg text-left font-semibold mb-2"
          >
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message goes here"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
            className="text-red-500 text-sm"
          />
        </div>
      </div>

      {/* <button 
        type="submit" 
        disabled={state.submitting}
        className="bg-orange-500 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        {state.submitting ? 'Submitting...' : 'Submit'}
      </button> */}

      <button
        type="submit"
        disabled={state.submitting}
        class="relative inline-flex items-center justify-center px-4 py-2 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-orange-500 rounded-md shadow-md group"
      >
        <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-orange-500 group-hover:translate-x-0 ease">
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </span>
        <span class="absolute flex items-center justify-center w-full h-full text-orange-500 transition-all duration-300 transform group-hover:translate-x-full ease">
          {state.submitting ? "Submitting..." : "Submit"}
        </span>
        <span class="relative invisible">
          {state.submitting ? "Submitting..." : "Submit"}
        </span>
      </button>
    </form>
  );
}

function App() {
  return (
    <div className="flex justify-center items-center">
      <ContactForm />
    </div>
  );
}

export default App;
