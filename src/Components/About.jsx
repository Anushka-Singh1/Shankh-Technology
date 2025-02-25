import React from 'react'
import Image from "../assets/About/Shankh-About.svg";

function About() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-6 font-montserrat mt-4">
      <div className="w-full md:w-1/2 text-center md:text-left">
        <div className="text-4xl text-black mb-6 p-8">
          <span className="text-black font-bold text-6xl">About</span>
          <span className="text-[#C89116] font-bold text-6xl"> Us.</span>
        </div>
        <img
          alt="Plan Your Way"
          src={Image}
          className="w-full max-w-[80%] h-auto mx-auto md:mx-0 mb-8 mt-6"
        />
      </div>

      <div className="w-full md:w-1/2 text-black text-2xl leading-relaxed">
        <p>
          We don’t just build websites and apps; we craft digital experiences
          that inspire and empower. As a dynamic IT solutions company, we blend
          artistry with technology to design and develop products that push
          boundaries and turn ambitious ideas into reality.
        </p>

        <p className="mt-4">
          From sleek, user-friendly interfaces to robust, high-performance
          systems, our team of creators, coders, and visionaries work
          hand-in-hand to shape the future of your brand. Whether you’re
          launching a startup or elevating an enterprise, we turn every
          challenge into an opportunity to innovate and lead.
        </p>
      </div>
    </div>
  );
}

export default About
