import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const footerData = [
  {
    title: "Company",
    links: [
      { name: "Home", path: "/" },
      { name: "About Us", path: "/about" },
      { name: "How we work", path: "#" },
    ],
  },
  {
    title: "Contact Us",
    links: [
      { name: "Help/FAQs", path: "#" },
      { name: "Email us", path: "#" },
    ],
  },
  {
    title: "Social Media",
    links: [
      { name: "Facebook", path: "#" },
      { name: "Twitter", path: "#" },
      { name: "LinkedIn", path: "#" },
    ],
  },
  {
    title: "More",
    links: [
      { name: "Terms and Conditions", path: "#" },
      { name: "Privacy Policies", path: "#" },
      { name: "Company details", path: "#" },
    ],
  },
];

const Footer = () => {
  useEffect(() => {
    document.body.style.overflowX = "hidden";
  }, []);

  return (
    <footer className="bg-black text-white font-montserrat py-8 mt-12 w-full">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-xl font-semibold pb-4">
          {footerData.map((section) => (
            <div key={section.title}>
              <h2 className="mb-2">{section.title}</h2>
              {section.links.map((link, index) => (
                <p key={index} className="text-lg text-gray-300 my-1">
                  {link.path.startsWith("/") ? (
                    <Link to={link.path} className="hover:text-white">
                      {link.name}
                    </Link>
                  ) : (
                    link.name
                  )}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="text-center text-sm text-gray-400 mt-6">
        &copy; Shankh Technologies Pvt Ltd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
