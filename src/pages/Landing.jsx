import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";
import logo2 from "../assets/logo2.png"; // For section 2
import worldsmall from "../assets/worldsmall.png";
import Home from "./Home";
import { Link } from "react-router-dom";
import CursorHover from "../utils/Hover";
import MobileNav3 from "./MobileNav3";


const Landing = () => {
  const [isSection2, setIsSection2] = useState(false);
  const [isFixed, setIsFixed] = useState(true);
  const [currentText, setCurrentText] = useState(0);

  const texts = [
    <div
      dangerouslySetInnerHTML={{
        __html: "We Design tO  DisRupt",
      }}
    />,
    <div>
      We build narrative <br />
      environments for brands
    </div>,
  ];

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length); // Cycle through texts
    }, 4000); // Change text every 3 seconds
    return () => clearInterval(interval);
  }, [texts.length]);

  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <>
      {/* Navbar */}
      <div className="md:hidden">
        <MobileNav3 />
      </div>
      <div
        className={`${
          isFixed ? "fixed" : "absolute"
        } w-full !z-[800] top-0 left-0 ${
          isSection2 ? "bg-white text-black" : "bg-[#060ebb] text-white"
        } transition-all duration-700 md:block hidden`}
      >
        {!isSection2 && <CursorHover />} {/* Render only in section 1 */}
        <div className="flex py-6 jost px-4 md:px-10 justify-between items-start">
          <Link to={"/"}>
            <img
              src={isSection2 ? logo2 : logo}
              className="w-[80px] md:w-[110px] transition-all duration-700"
              alt="Logo"
            />
          </Link>
          <div className="text-[14px] md:text-[19px] font-semibold hidden md:flex gap-4 md:gap-14 items-center">
            <Link to={"./Services"} className="hover:text-white/50">
              <h1>SERVICES</h1>
            </Link>
            <Link to={"./Experience"} className="hover:text-white/50 uppercase">
              <h1>experience lab</h1>
            </Link>
            <Link to={"./Ethos"} className="hover:text-white/50">
              <h1>ETHOS</h1>
            </Link>
            <Link to={"./Careers"} className="hover:text-white/50">
              <h1>CAREERS</h1>
            </Link>
          </div>
          <Link to={"/Contact"}>
            <motion.div
              className={`py-2 px-4 rounded-full relative text-[12px] md:text-[13px] font-semibold flex items-center cursor-pointer ${
                isToggled
                  ? "bg-black text-white"
                  : "bg-[#F0F0F0] text-[#060ebb]"
              }`}
              onClick={handleToggle}
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
            >
              <motion.h1
                className={`mr-6 md:mr-9 text-center`}
                animate={{
                  x: isToggled ? "35px" : "0px",
                  color: isToggled ? "#FFFFFF" : "#060ebb",
                }}
                transition={{ duration: 0.5 }}
              >
                CONTACT
              </motion.h1>
              <motion.img
                className="w-[36px] md:w-[46px] h-[36px] md:h-[46px] absolute"
                src={worldsmall}
                alt="World"
                animate={{
                  x: isToggled ? "-50%" : "150%",
                  rotate: isToggled ? 360 : 0,
                }}
                transition={{ duration: 0.8 }}
              />
            </motion.div>
          </Link>
        </div>
      </div>

      {/* Section 1 */}
      <div
        className={`${
          isSection2 ? "bg-white text-[#060ebb]" : "bg-[#060ebb] text-white"
        } relative cursor-pointer transition-all !z-[700]  duration-700`}
        style={{ minHeight: "100vh" }}
      >
        {/* Centered Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-1/2 left-1/2 transform md:whitespace-nowrap -translate-x-1/2 -translate-y-1/2 px-4"
        >
          <AnimatePresence mode="wait">
            <motion.h1
              key={currentText}
              className="text-[44px] px-20   alinsa uppercase md:text-[80px] font-[1000] text-center leading-tight md:leading-[1]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
            >
              {texts[currentText]}
            </motion.h1>
            {currentText === 0 && (
              <>
              {/* <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="z-[-1] w-full right-[23.5rem] -top-[15.5rem] absolute"
                >
                <Three />
              </motion.div>
                <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="z-[-1] w-full left-[6.1rem] -top-[15rem] absolute"
                >
                <O />
                
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="z-[-1] w-full left-[20rem] -top-[13rem] absolute"
                >
                <R /> */}
                {/* </motion.div> */}
                </>
            )}
          </AnimatePresence>
        </motion.div>
        {/* Footer */}

        {/* <div className="absolute px-4 uppercase md:px-20 jost text-[14px] flex w-full items-center justify-between bottom-4">
          <h1>@Madeintic</h1>
          <h1>SCROLL NOW</h1>
          <h1 className="text-right font-normal leading-[17px]">
            India <br />
            ch 10-01-2025
          </h1>
        </div> */}
      </div>

      {/* Section 2 */}
      <Home />
    </>
  );
};

export default Landing;
