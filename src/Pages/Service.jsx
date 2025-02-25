import React from 'react'
import Image from "../assets/Service/Services.svg";

function Service() {
  return (
      <div className='mt-24 md:mt-2 p-8 md:py-32 font-montserrat'>
        <span className="text-2xl md:text-3xl text-zinc-500 block md:mb-2 mb-0 text-center font-semibold">
              Our Services
          </span>
            <p className="text-3xl md:text-5xl text-black font-bold text-center mb-8">
              What We Offer?
            </p>
      <img src={Image} alt="Services" className="w-full" />
    </div>
  )
}

export default Service
