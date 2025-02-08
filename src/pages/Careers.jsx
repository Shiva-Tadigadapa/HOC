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
const Careers = () => {
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
  const [isToggled, setIsToggled] = useState(false);

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
              <Link to={"/Experience"} className=" hover:text-black/50">
                <h1>EXPERIENCE LAB</h1>
              </Link>
              <Link to={"/Ethos"} className=" hover:text-black/50">
                <h1>ETHOS</h1>
              </Link>
              <Link to={"/Careers"} className=" hover:text-black/50">
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
        {/* Absolutely Centered Text */}
        <div className="items-center flex-col -space-y-24 relative justify-center h-screen mt-20 flex px-10">
          {/* Hand Image Animation */}
          <motion.img
            src={hand}
            className="w-[70px] md:w-[150px] absolute z-[1] left-10 md:left-1/4 ml-20 top-60 md:top-28"
            alt="Hand"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 120, damping: 10 }}
          />

          {/* UFO Image Animation */}
          <motion.img
            src={ufo}
            className="w-[100px] md:w-[150px] absolute z-[20] !-mt-[7.5rem] top-1/2"
            alt="UFO"
            initial={{ x: 0, opacity: 0 }} // Start slightly off-screen right
            animate={{ x: 300, opacity: 1 }} // Spring animation into position
            transition={{ type: "spring", stiffness: 120, damping: 10 }}
            onAnimationComplete={() => {
              // After initial animation, start continuous movement
              document
                .getElementById("ufo")
                .animate(
                  [
                    { transform: "translateX(300px)" },
                    { transform: "translateX(500px)" },
                    { transform: "translateX(400px)" },
                    { transform: "translateX(300px)" },
                  ],
                  {
                    duration: 6000, // Total loop duration
                    iterations: Infinity, // Loop forever
                    easing: "linear",
                  }
                );
            }}
            id="ufo"
          />

          {/* <motion.img
  src={ufo}
  className="w-[100px] md:w-[150px] absolute z-[20] top-1/2"
  alt="UFO"
  initial={{ x: -200, opacity: 0 }} // Start from the left
  animate={{ x: [0, 300, -300, 0] }} // Moves right, then left, then back
  transition={{ 
    duration: 6, // Adjust speed as needed
    repeat: Infinity, // Infinite loop
    ease: "linear"
  }}
/> */}

          {/* CAREERS Title Animation */}
          <motion.h1
            className="font-[1000] px-10  !mt-20 md:leading-[0px] text-8xl md:text-[260px] alinsa text-[#060ebb] z-[10]"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            CAREERS
          </motion.h1>

          {/* Tagline Animation */}
          <motion.p
            className="jost font-[500] !mt-24 lowercase md:text-[60px] z-[10]"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            WANT TO JOIN THE CHAOS ?
          </motion.p>
        </div>
        <JobListings />
        <Footer />
      </div>
    </>
  );
};

export default Careers;

import { useInView } from "framer-motion";
import { useRef } from "react";

const JobListings = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Trigger animation only once when in view

  const positions = [
    "UI/UX Designer // Product Designer",
    "Motion Designer",
    "Illustrator/Multimedia Designer",
    "Experimental Graphic Designer",
    "Experimental Graphic Designer",
    "Experimental Graphic Designer",
    "Experimental Graphic Designer",
  ];

  return (
    <div className="md:px-10 px-2 py-10">
      <div
        ref={ref}
        className="min-h-screen rounded-[20px] bg-black text-white p-4 md:p-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex  md:flex-row flex-col mx-auto md:px-10 py-10 md:py-20 gap-10"
        >
          <div className="mb-12 md:w-[55%] text-left">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="md:text-[50px] text-4xl md:leading-[50px] font-bold jost mb-6"
            >
              <span className="text-blue-600 ">E-mail us</span> if you are a
              creative open to learning, nurturing, growing, and fostering the
              ethos of the company, "order in chaos".
            </motion.h1>

            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#060ebb] px-6 py-3 rounded-full font-medium transition-colors duration-300 hover:bg-blue-600"
              >
                E-MAIL NOW
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white px-6 py-3 rounded-full font-medium transition-colors duration-300 hover:bg-white hover:text-black"
              >
                VIEW LINKEDIN
              </motion.button>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="space-y-4  md:mt-20 text-right md:w-[45%]"
          >
            {positions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 * index }}
                whileHover={{ x: 10 }}
                className="border-b border-gray-800 py-4 cursor-pointer transition-colors duration-300 hover:text-[#060ebb]"
              >
                <h2 className="text-xl font-medium">{position}</h2>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
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
         
          </div>
        </div>
        <div className="   absolute left-0 px-4 md:px-10 bottom-6 md:bottom-10 flex flex-col md:flex-row  items-start md:gap-0 gap-3 md:justify-between w-full ">
          <div className="text-sm md:block hidden">
            2025 © Haus Of chaos Ltd.
          </div>
          {/* <div className="md:flex gap-4 text-sm  hidden">
            <a href="#" className="hover:underline">
              RIA
            </a>
            <a href="#" className="hover:underline">
              Datenschutz
            </a>
          </div> */}
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
