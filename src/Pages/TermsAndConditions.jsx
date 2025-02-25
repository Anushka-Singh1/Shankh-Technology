import React from 'react'
import Image from "../assets/TermsConditions/terms-conditions.svg";

function TermsAndConditions() {
  return (
    <div className="mt-24 md:mt-2 p-8 md:py-32 font-montserrat flex flex-col items-center">
      <div className="text-2xl md:text-3xl text-black font-bold text-center mb-6">
        Shankh Privacy Policy
          </div>
          <img src={Image}/>
    </div>
  );
}

export default TermsAndConditions
