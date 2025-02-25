import React from 'react'
import Image from "../assets/Hero/Shankh-Hero.svg";

function Hero() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center mt-20 p-12 font-montserrat">
      <div className=" w-full md:w-1/2">
        <span className="text-4xl md:text-6xl font-bold text-black block md:mb-4 mb-0">
          Transforming Vision
        </span>
        <span className=" text-4xl md:text-6xl font-bold text-black">into</span>
        <span className="text-4xl md:text-6xl font-bold text-[#C89116]"> Innovation.
        </span>
        <p className="text-xl text-[#3C3C3C] mt-8">
          From Designing to development, our team is dedicated to turning your
          ideas into extraordinary realities.
        </p>
        <button className="bg-[#C89116] text-white px-6 py-2 mt-4 rounded-lg">
          Know More
        </button>
      </div>
      <div className=" w-full md:w-1/2">
        <img src={Image} alt="Hero" className="w-full" />
      </div>
    </div>
  );
}

export default Hero
