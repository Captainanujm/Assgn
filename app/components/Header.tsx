"use client";

import Navbar from "./Navbar";

export default function ContactHeader() {
  return (
    <section className="w-full h-[460px] sm:h-[520px] md:h-[608px] bg-gradient-to-r from-[#985CB6] to-[#630C92] flex flex-col items-center justify-start text-center px-4 pt-4">
      <Navbar />

      <div className="max-w-3xl mt-20 sm:mt-24 md:mt-40">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-7">
          Contact Us
        </h1>
        <p className="text-gray-300 font-medium text-sm md:text-lg leading-relaxed">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam quidem dolor,
          cumque eveniet iure a recusandae vitae molestiae.
        </p>
      </div>
    </section>
  );
}
