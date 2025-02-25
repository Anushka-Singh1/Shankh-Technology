import React from "react";

function CompanyDetails() {
    return (
        <div>
          <h1 className="text-4xl font-bold text-center text-black mb-8 mt-32">
            Company Details
          </h1>
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 bg-white bg-opacity-80 p-6 rounded-lg shadow-lg">
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl font-semibold text-black mb-2">
                Permanent Address
              </h2>
              <p className="text-lg text-gray-700">
                Shankh Technologies Pvt. Ltd. <br />
                28 Daya Samiti, Alok Nagar, Kalyan Nagar, Vikas Nagar, <br />
                Lucknow, Uttar Pradesh - 226022
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl font-semibold text-black mb-2">
                Registered Office
              </h2>
              <p className="text-lg text-gray-700">
                102/103, MSN Complex, Bagalur Main Road, <br />
                Bengaluru, Karnataka - 560053
              </p>
            </div>
          </div>
        </div>
    );
}

export default CompanyDetails;
