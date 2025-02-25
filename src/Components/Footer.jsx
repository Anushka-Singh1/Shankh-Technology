import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const footerData = [
  {
    title: "Company",
    links: [
      { name: "Home", path: "/" },
      { name: "About Us", path: "/" },
    ],
  },
  {
    title: "Contact Us",
    links: [{ name: "Email us", path: "mailto:info.shankhtech@gmail.com" }],
  },
  {
    title: "Social Media",
    links: [
      {
        name: "Facebook",
        path: "https://www.facebook.com/profile.php?id=61573195934169",
      },
      { name: "Twitter", path: "https://x.com/Shankh_Tech" },
      { name: "LinkedIn", path: "http://www.linkedin.com/company/shankhtech" },
      {
        name: "Instagram",
        path: "https://www.instagram.com/shankh_technologies/",
      },
    ],
  },
  {
    title: "More",
    links: [
      { name: "Terms and Conditions", path: "/terms-and-conditions" },
      { name: "Privacy Policy", path: "/privacy-policy" },
      { name: "Company details", path: "/company-details" },
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
                  {link.path.startsWith("mailto:") ? (
                    <a href={link.path} className="hover:text-white">
                      {link.name}
                    </a>
                  ) : link.path.startsWith("/") ? (
                    <Link to={link.path} className="hover:text-white">
                      {link.name}
                    </Link>
                  ) : (
                    <a
                      href={link.path}
                      className="hover:text-white"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.name}
                    </a>
                  )}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="text-center text-sm text-gray-400 mt-6">
        &copy; {new Date().getFullYear()} Shankh Technologies Pvt Ltd. All
        rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
