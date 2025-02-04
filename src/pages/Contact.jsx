import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import worldsmall from "../assets/worldsmall.png";
import tvpng from "../assets/tv.png";
import logo from "../assets/logo.png";
import logo2 from "../assets/logo2.png";
import befooter from "../assets/befooter.png";
import hand from "../assets/hand.png";
import ufo from "../assets/ufo.png";

import { motion } from "framer-motion";
import { div } from "framer-motion/client";
const Contact = () => {
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
  const [isToggled, setIsToggled] = useState(true);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };
  return (
    <>
      <div className="bg-white jost relative" style={{ minHeight: "100vh" }}>
        {/* Navbar */}
        <div
          className={`${
            isFixed ? "fixed" : "absolute"
          } w-full z-[500] top-0 left-0 ${
            isSection2 ? "bg-white text-black" : "  text-[#000000]"
          } transition-all py-2 duration-700`}
        >
          <div className="flex py-4 jost px-4 md:px-10 justify-between items-start">
            <Link to={"/"}>
              <img
                src={isSection2 ? logo2 : logo2}
                className="w-[80px] md:w-[110px] transition-all duration-700"
                alt="Logo"
              />
            </Link>
            <div className="text-[14px] md:text-[19px] font-semibold flex gap-4 md:gap-14 items-center">
              <Link to={"/Services"} className=" hover:text-black/50">
                <h1>SERVICES</h1>
              </Link>
              <Link to={"/Ethos"} className=" hover:text-black/50">
                <h1>ETHOS</h1>
              </Link>
              <Link to={"/Careers"} className=" hover:text-black/50">
                <h1>CAREERS</h1>
              </Link>
            </div>
            <Link to={"/"}>
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
                  transition={{ duration: 1 }}
                >
                  CONTACT
                </motion.h1>
                <motion.img
                  className="w-[36px] ml-20 md:w-[46px] h-[36px] md:h-[46px] absolute"
                  src={worldsmall}
                  alt="World"
                  animate={{
                    x: isToggled ? "-220%" : "150%",
                    rotate: isToggled ? 360 : 0,
                  }}
                  transition={{ duration: 1 }}
                />
              </motion.div>
            </Link>
          </div>
        </div>
        {/* Absolutely Centered Text */}
        <div className="items-center flex-col -space-y-24 relative justify-center h-screen flex px-10">
  {/* CONTACT Heading with Spring Animation */}
  <motion.h1
    className="font-[1000] text-[260px] alinsa text-[#060ebb] z-[10]"
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ type: "spring", stiffness: 120, damping: 10 }}
  >
    CONTACT
  </motion.h1>

  {/* Tagline with Spring Animation */}
  <motion.p
    className="jost font-[500] lowercase text-[60px] z-[10]"
    initial={{ y: 30, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ type: "spring", stiffness: 100, damping: 12, delay: 0.2 }}
  >
    WANNA JOIN THE CHAOS ?
  </motion.p>
</div>
        <JobListings />
        <Footer />
      </div>
    </>
  );
};

export default Contact;

import { useInView } from "framer-motion";
import { useRef } from "react";
import heartkey from "../assets/heartkey.png";

const JobListings = () => {
  return (
    <div className="px-10 py-10">
      <div className="min-h-screen  flex  items-start justify-start  p-8">
        <div className=" scale-90  gap-6  flex flex-col   items-start justify-start">
          <h1 className=" whitespace-nowrap  font-[600]  text-[50px]  jost  leading-[56px] text-left">
            Email &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;<span className=" -ml-[4px]">:</span>&nbsp;&nbsp;&nbsp;
            <a className="text-[#060ebb]" href="mailto:explore@hausofchaos.co">
              explore@hausofchaos.co
            </a>
          </h1>
          {/* <h1 className="  font-[600]  text-[50px]  jost  leading-[56px] text-left">
            Instagram &nbsp;: &nbsp;&nbsp;
            <a
              className="text-[#060ebb]"
              href="https://www.instagram.com/hausofchaos.co/"
            >
              @hausofchaos.co
            </a>
          </h1>
          <h1 className="  font-[600]  text-[50px]  jost  leading-[56px] text-left">
            LinkedIn &nbsp;&nbsp;&nbsp;<span className=" ml-[2px]">:</span>&nbsp;&nbsp;&nbsp;
            <a
              className="text-[#060ebb]"
              href="https://www.linkedin.com/company/hausofchaos/"
            >
              Haus Of Chaos
            </a>
          </h1> */}
          <h1 className="  font-[600]  text-[50px]  jost  leading-[56px] text-left">
            Address&nbsp;&nbsp;&nbsp;&nbsp; <span className=" -ml-[10px]">:</span>
            <a
              className="text-[#060ebb] ml-12"
              href="#"
            >

              4th Floor <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; No 9, Seshadri Road,
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Teynampet,
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Chennai - 86
            </a>
          </h1>
          <h1 className=" whitespace-nowrap  font-[600]  text-[50px]  jost  leading-[56px] text-left">
            Phone &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;<span className=" -ml-[20px]">:</span>&nbsp;&nbsp;&nbsp;
            <a className="text-[#060ebb]" href=" tel:+91 9600931366">
            +91 9600931366
            </a>
          </h1>
          <button className=" text-[#2354CF]  border-[2px] border-[#000000]  rounded-full px-8 font-[700] py-2 mt-4">
            JOIN CHAOS
          </button>
        </div>
        {/* <img src={heartkey} className=" w-1/2  -mt-40" alt="" /> */}
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <>
      <div className=" ">
        {/* <img src={befooter} className="  " alt="" /> */}
        <HausOfChaos />
      </div>
    </>
  );
};

import grid from "../assets/lines.png";

import logo1 from "../assets/logo.png";

const HausOfChaos = () => {
  return (
    <div className="min-h-screen bg-[#060ebb] text-white relative">
      {/* Grid overlay background */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `url(${grid})`,
          backgroundSize: "cover",
        }}
      />

      {/* Main content container */}
      <div className="relative    px-4 py-20 md:px-20 md:py-48 min-h-screen flex flex-col justify-between">
        {/* Logo and description section */}
        <img
          src={logo1}
          className="w-1/2   md:hidden block  mb-8"
          alt="Haus Of Chaos"
        />

        <div className=" flex">
          <div className="md:max-w-xl ">
            <img
              src={logo1}
              className="md:w-40   md:block hidden  mb-4"
              alt="Haus Of Chaos"
            />

            <p className="text-lg md:block hidden text-left mb-6">
              Step into the chaos of creativity
              <br />
              Where bold ideas and designs collide
              <br />
              Stay ahead with innovative thoughts
              <br />
              Experience transformative journeys
              <br />
              Embrace the unexpected and <br />
              disrupt the norm
            </p>
          </div>

          {/* Newsletter signup form */}
          <div className="max-w-xl mt-20 ml-auto">
            <form className="space-y-4 flex flex-col ">
              <div>
                <input
                  type="text"
                  placeholder="Full Name*"
                  className="w-full p-4 bg-white/10 backdrop-blur-sm text-white placeholder-white border border-white/20 focus:outline-none focus:border-white/40"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email Address*"
                  className="w-full mt-6 p-4 bg-white/10 backdrop-blur-sm text-white placeholder-white border border-white/20 focus:outline-none focus:border-white/40"
                />
              </div>
              <p className="text-sm text-left opacity-80">
                Where ideas collide and stories unfold, Haus of Chaos transforms
                narratives into immersive brand experiences. Explore innovation,
                redefine design, and disrupt the ordinary with us.{" "}
                <a href="#" className="underline">
                  hier
                </a>
                .
              </p>
              <button
                type="submit"
                className="px-12 py-3  w-fit border-2 border-white bg-black text-blue-600 rounded-full hover:bg-black/90 transition-colors"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>

        {/* Footer section */}
        <div className="relative  whitespace-normal md:pt-16 pt-6 md:pb-0 pb-20">
          <div className="flex md:justify-end gap-4 text-sm">
            <a href="mailto:explore@hausofchaos.co" className="hover:underline">
              MAIL
            </a>
            <span>|</span>
            <a
              href="https://www.linkedin.com/company/105575916/"
              className="hover:underline"
            >
              LINKEDIN
            </a>
            <span>|</span>
            <a
              href="https://www.instagram.com/hausofchaos.co/"
              className="hover:underline"
            >
              INSTAGRAM
            </a>
            <span>|</span>
            <a href="#" className="hover:underline">
              SPOTIFY
            </a>
          </div>
        </div>
        <div className="   absolute left-0 px-4 md:px-10 bottom-6 md:bottom-10 flex flex-col md:flex-row  items-start md:gap-0 gap-3 md:justify-between w-full ">
          <div className="text-sm md:block hidden">
            2025 © Haus Of chaos Ltd.
          </div>
          <div className="md:flex gap-4 text-sm  hidden">
            <a href="#" className="hover:underline">
              Impressum
            </a>
            <a href="#" className="hover:underline">
              Datenschutz
            </a>
          </div>
          <div className=" text-sm whitespace-nowrap text-left   md:hidden block ">
            2025 © Haus Of chaos Ltd. <br />
            Impressum | Datenschutz
          </div>
          <div className=" text-sm md:text-base">
            Design by{" "}
            <a
              href="https://theinternetcompany.one/"
              className="hover:underline"
            >
              TIC GLOBAL
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
