import React, { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import footerLogo from "../../assets/logo.png";

const Footer = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div id="footer" className="bg-gray-100 dark:bg-gray-950">
      <section className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-3 py-5">
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={footerLogo} alt="Logo" className="max-w-22" />
            </h1>
            <p>
              To revolutionize the industry with innovative solutions that
              deliver top-quality services and enhance user experiences.
            </p>
            <br />
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>Colombo, Sri Lanka</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>+94 70 331 1371</p>
            </div>
            {/* Social Handles */}
            <div className="flex items-center gap-3 mt-6">
              <a href="https://www.instagram.com/quickhire_sl?igsh=b2MwOHYzbnV1YjA1&utm_source=qr">
                <FaInstagram className="text-3xl" />
              </a>
              <a href="#">
                <FaFacebook className="text-3xl" />
              </a>
              <a href="#">
                <FaLinkedin className="text-3xl" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div className="py-16 px-28">
              <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                Links
              </h1>
              <ul className="flex flex-col gap-3">
                <li className="cursor-pointer" onClick={() => scrollToSection("home")}>Home</li>
                <li className="cursor-pointer" onClick={() => scrollToSection("services")}>Services</li>
                <li className="cursor-pointer" onClick={() => scrollToSection("download")}>Download</li>
                <li className="cursor-pointer" onClick={() => scrollToSection("about Us")}>About Us</li>
              
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center py-10 border-t-2 border-gray-300/50">
          © 2025 All rights reserved QuickHireSL
        </div>
      </section>
    </div>
  );
};




export default Footer;
