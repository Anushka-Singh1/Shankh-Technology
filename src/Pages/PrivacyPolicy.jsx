import React from "react";
import Image from "../assets/PrivacyPolicy/privacy-policy.svg";
function PrivacyPolicy() {
  return (
    <div className="mt-24 md:mt-2 p-8 md:py-32 font-montserrat flex flex-col items-center">
      <div className="text-2xl md:text-3xl text-black font-bold text-center">
        Shankh Privacy Policy
      </div>
      <div className="flex flex-col md:flex-row">
        <img src={Image} alt="Privacy Policy" className="w-[1/2] h-[20%]" />
        <div className="flex-grow p-4 md:p-8 text-justify text-xl  w-[1/2]">
          <div className="mb-4">
            At Shankh Technologies Pvt. Ltd., we value your privacy and are
            committed to protecting your personal information. When you visit
            our website or reach out for our IT solutions, we may collect basic
            information like your name, contact details, and any relevant
            project inquiries to better assist you.
          </div>
          <div className="mb-4">
            We use this information solely to communicate with you, understand
            your needs, and provide the best possible services. We do not sell
            or share your data with third parties, except as necessary to
            deliver our services or comply with legal obligations. By using our
            website, you agree to the collection and use of your information as
            described in this policy.
          </div>
          We may update this policy as needed, and any changes will be posted on
          this page
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
