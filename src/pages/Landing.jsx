import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import logo2 from "../assets/logo2.png"; // For section 2
import worldsmall from "../assets/worldsmall.png";
import Home from "./Home";

const Landing = () => {
  const [isSection2, setIsSection2] = useState(false);
  const [isFixed, setIsFixed] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      setIsSection2(scrollPosition > windowHeight * 0.2); // Toggle theme at 20% height
      setIsFixed(scrollPosition < windowHeight); // Navbar stays fixed only in the first section
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <div
        className={`${
          isFixed ? "fixed" : "absolute"
        } w-full z-50 top-0 left-0 ${
          isSection2 ? "bg-white text-black" : "bg-[#0000FF] text-[#F4ECE0]"
        } transition-all duration-700`}
      >
        <div className="flex py-6 jost px-4 md:px-10 justify-between items-start">
          <img
            src={isSection2 ? logo2 : logo}
            className="w-[80px] md:w-[110px] transition-all duration-700"
            alt="Logo"
          />
          <div className="text-[14px] md:text-[19px] font-semibold flex gap-4 md:gap-10 items-center">
            <h1>WORK</h1>
            <h1>ETHOS</h1>
            <h1>CAREERS</h1>
          </div>
          <div className="bg-[#F0F0F0] py-2 px-4 rounded-full relative text-[12px] md:text-[13px] font-semibold text-[#0000FF] flex items-center">
            <h1 className="mr-6 md:mr-9 text-center">CONTACT</h1>
            <img
              className="w-[36px] md:w-[46px] h-[36px] md:h-[46px] absolute right-0"
              src={worldsmall}
              alt="World"
            />
          </div>
        </div>
      </div>

      {/* Section 1 */}
      <div
        className={`${
          isSection2 ? "bg-white text-[#0000FF]" : "bg-[#0000FF] text-[#F4ECE0]"
        } relative transition-all duration-700`}
        style={{ minHeight: "100vh" }}
      >
        {/* Centered Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-1/2 left-1/2 transform md:whitespace-nowrap -translate-x-1/2 -translate-y-1/2 px-4"
        >
          <h1 className="text-[48px] alinsa md:text-[91px] font-[1000] text-center leading-tight md:leading-normal">
            We Design to Disrupt
          </h1>
        </motion.div>

        {/* Footer */}
        <div className="absolute px-4 md:px-20 text-[14px] flex w-full items-center justify-between bottom-4">
          <h1>@Madeintic</h1>
          <h1>SCROLL NOW</h1>
          <h1 className="text-right font-normal leading-[17px]">
            India <br />
            ch 10-01-2025
          </h1>
        </div>
      </div>

      {/* Section 2 */}
      <Home />
    </>
  );
};

export default Landing;
