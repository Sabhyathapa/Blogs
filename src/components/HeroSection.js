import React from "react";

const HeroSection = () => (
  <section className="w-full min-h-screen bg-[#dbdbdb] flex flex-col items-center justify-center font-times">
    <h1 className="text-[64px] md:text-[72px] text-center font-thin mb-12 text-white-900 leading-tight tracking-tight">
      Thoughts, stories and<br />ideas from Narrate
    </h1>
    <form className="flex flex-col items-center w-full max-w-xl">
      <div className="flex w-full">
        <input
          type="email"
          placeholder="Your email"
          className="flex-1 px-6 py-4 rounded-l-lg text-lg border-none focus:ring-2 focus:ring-black outline-none bg-white shadow-md font-times font-light"
        />
        <button
          type="submit"
          className="bg-[#a8fc48] hover:bg-green-200 text-gray-800 px-10 py-4 rounded-r-lg text-lg font-thin transition-colors shadow-md font-times"
        >
          Submit
        </button>
      </div>
      <span className="text-gray-500 text-sm mt-3 font-times font-light">Good stuff, no spam</span>
    </form>
  </section>
);

export default HeroSection; 