import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import worldsmall from "../assets/worldsmall.png";
import tvpng from "../assets/tv.png";
import logo from "../assets/logo.png";
import logo2 from "../assets/logo2.png";
import befooter from "../assets/befooter.png";
import hand from "../assets/hand.png";
import ufo from "../assets/ufo.png";
import two from "../assets/two.png";
import three from "../assets/three.png";
import linelab from "../assets/linelab.png";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";
import grid from "../assets/lines.png";
import MobileNav from "./MobileNav2.jsx";
import Footer from "./Footer.jsx";

import noswitch from "../assets/noswitch.svg";
const Experience = () => {
  const location = useLocation();
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

  const isActiveRoute = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      <div className="bg-black jost relative" style={{ minHeight: "100vh" }}>
        {/* Navbar */}
        <div className="md:hidden">
          <MobileNav />
        </div>
        <div className="hidden md:block">
          <div
            className={`${
              isFixed ? "fixed" : "absolute"
            } w-full z-[500] top-0 left-0 ${
              isSection2 ? "bg-black text-white" : "  bg-black text-white"
            } transition-all py-2 duration-700`}
          >
            <div className="flex py-4 jost px-4 md:px-10 justify-between items-start">
              <Link to={"/"}>
                <img
                  src={isSection2 ? logo : logo}
                  className="w-[80px] md:w-[110px] transition-all duration-700"
                  alt="Logo"
                />
              </Link>
              <div className="text-[14px] md:text-[19px] font-semibold flex gap-4 md:gap-14 items-center">
                <Link 
                  to={"/Services"} 
                  className={`hover:text-gray-400 ${isActiveRoute('/Services') ? 'text-[#060ebb] border-b-2 border-[#060ebb]' : ''}`}
                >
                  <h1>SERVICES</h1>
                </Link>
                <Link 
                  to={"/Experience"} 
                  className={`hover:text-gray-400 ${isActiveRoute('/Experience') ? 'text-gray-400 border-b-2 border-text-gray-400' : ''}`}
                >
                  <h1>EXPERIENCE LAB</h1>
                </Link>
                <Link 
                  to={"/Ethos"} 
                  className={`hover:text-gray-400 ${isActiveRoute('/Ethos') ? 'text-[#060ebb] border-b-2 border-[#060ebb]' : ''}`}
                >
                  <h1>ETHOS</h1>
                </Link>
                <Link 
                  to={"/Careers"} 
                  className={`hover:text-gray-400 ${isActiveRoute('/Careers') ? 'text-[#060ebb] border-b-2 border-[#060ebb]' : ''}`}
                >
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
        </div>
        {/* Absolutely Centered Text */}
        <div className="items-center flex-col  bg-black mt-20 md:mt-14 relative justify-center !h-screen  flex ">
          <SecondSection />
        </div>
        {/* <div className="items-center flex-col   -mt-20 relative justify-center !h-screen  flex "> */}
        <Play />
        {/* </div> */}
        <Footer />
      </div>
    </>
  );
};

export default Experience;

import { useInView } from "framer-motion";
import { useRef } from "react";

const SecondSection = () => {
  const sectionRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const [sectionBounds, setSectionBounds] = useState({ top: 0, bottom: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update section bounds on resize or initial load
  useEffect(() => {
    const updateBounds = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollTop = window.scrollY;
        setSectionBounds({
          top: rect.top + scrollTop,
          bottom: rect.bottom + scrollTop,
        });
      }
    };

    updateBounds();
    window.addEventListener("resize", updateBounds);

    return () => window.removeEventListener("resize", updateBounds);
  }, []);

  // Limit movement based on scroll position
  const moveImageOne = (scrollY) => {
    if (scrollY < sectionBounds.top) return 0; // Before section starts
    if (scrollY > sectionBounds.bottom)
      return (sectionBounds.bottom - sectionBounds.top) * 0.07; // After section ends
    return (scrollY - sectionBounds.top) * 0.14; // Inside section
  };

  const moveImageTwo = (scrollY) => {
    if (scrollY < sectionBounds.top) return 0; // Before section starts
    if (scrollY > sectionBounds.bottom)
      return (sectionBounds.bottom - sectionBounds.top) * -0.07; // After section ends
    return (scrollY - sectionBounds.top) * -0.14; // Inside section
  };

  return (
    <div ref={sectionRef} className="overflow-hidden z-[300] ">
      <div className="bg-black  py-[160px] md:py-[120px] flex flex-col   items-center gap-10">
        <div>
          <h1 className="text-[#F4ECE0] text-4xl md:text-[110px] md:leading-[97px] text-center  uppercase alinsa">
            Experience Lab
          </h1>
          <h2 className="text-white md:text-[30px] text-xl text-center jost">
            Spaces speak and spaces narrate
          </h2>
        </div>
        <div className="relative hidden md:flex justify-center items-center gap-10 h-[300px]">
          {/* LineLab Image */}
          <img
            src={linelab}
            className="w-[40%] left-[4rem] top-1/2 -mt-[1.2px] absolute"
            alt="Lab"
          />

          {/* Three Image */}
          <motion.img
            src={three}
            className="w-[40%] z-[10] absolute left-[21%]"
            alt="Lab"
            style={{
              transform: `translateX(${moveImageOne(scrollY)}px)`, // Move based on scrollY
            }}
            transition={{ duration: 0.4 }}
          />

          <img src={noswitch} className="w-full" alt="Lab" />

          {/* Two Image */}
          <motion.img
            src={two}
            className="w-[50%] z-[2] absolute right-[20%] !-mr-10"
            alt="Lab"
            style={{
              transform: `translateX(${moveImageTwo(scrollY)}px)`, // Move based on scrollY
            }}
            transition={{ duration: 0.4 }}
          />

          <img
            src={linelab}
            className="w-[40%] z-[1] right-[1rem] top-1/2 -mt-[5.5px] absolute"
            alt="Lab"
          />
        </div>
        <h1 className="md:px-20  -pt-40 px-10 text-xl md:text-2xl pb-[80px] text-white md:w-[70%] text-center jost">
          Born from our ethos, the Chaos Lab serves as a testing ground for the
          diverse narrative environments we experiment with and explore. Based
          in India, with plans for growth, we embrace a 'test-and-learn'
          mindset. Our aim is to decode + disrupt conventional norms and
          beliefs in experimental communication + experience design.
        </h1>

        <div className="relative md:hidden -mt-40 flex justify-center items-center gap-10 h-[300px]">
          {/* LineLab Image */}
          {/* <img
            src={linelab}
            className="w-[30%] left-[0rem] top-1/2 -mt-[1.2px] absolute"
            alt="Lab"
          /> */}

          {/* Three Image */}
          <motion.img
            src={three}
            className="w-[80%] z-[10] absolute -left-[12%]"
            alt="Lab"
            style={{
              transform: `translateX(${moveImageOne(scrollY)}px)`, // Move based on scrollY
            }}
            transition={{ duration: 0.4 }}
          />

          <img src={noswitch} className="w-full scale-125" alt="Lab" />

          {/* Two Image */}
          <motion.img
            src={two}
            className="w-[100%] z-[2] absolute -right-[15%] !-mr-10"
            alt="Lab"
            style={{
              transform: `translateX(${moveImageTwo(scrollY)}px)`, // Move based on scrollY
            }}
            transition={{ duration: 0.4 }}
          />

          {/* <img
            src={linelab}
            className="w-[40%] z-[1] right-[1rem] top-1/2 -mt-[5.5px] absolute"
            alt="Lab"
          /> */}
        </div>
      </div>
    </div>
  );
};
import gridethos from "../assets/gridethos.png";
import playground from "../assets/playground.png";
import tictacX from "../assets/tictacX.png";
import tictacO from "../assets/tictacO.png";

const Play = () => {
  const [clicks, setClicks] = useState([]);
  const [isXTurn, setIsXTurn] = useState(true); // Explicitly track turns
  const isClicking = useRef(false); // Prevents fast consecutive clicks

  const handleClick = (e) => {
    if (isClicking.current) return; // Prevent rapid clicks
    isClicking.current = true;

    setTimeout(() => {
      isClicking.current = false; // Re-enable clicks after a short delay
    }, 300);

    // Get container position relative to viewport
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const id = Date.now();
    const newClick = {
      id,
      x,
      y,
      type: isXTurn ? "X" : "O", // Strict alternation
    };

    setClicks((prev) => [...prev, newClick]);
    setIsXTurn((prev) => !prev); // Toggle turn

    setTimeout(() => {
      setClicks((prev) => prev.filter((click) => click.id !== id));
    }, 2000);
  };

  return (
    <div
      className="md:min-h-screen -mt-[35px] bg-black text-white relative overflow-hidden"
      onClick={handleClick}
    >
      {/* Grid Overlay */}
      <div
        className="absolute inset-0   -ml-2.5 opacity-50"
        style={{
          backgroundImage: `url(${grid})`,
          backgroundSize: "cover",
        }}
      />

      {/* Main Content */}
      <div className="relative flex flex-col justify-between">
        <div className="flex justify-between items-center px-20 py-10">
          <div className="max-w-xl"></div>

          <div className="max-w-xl relative hidden md:flex flex-col  justify-start items-end">
            <h1 className="font-[1000] alinsa -ml-40 text-[100px] whitespace-nowrap">
              PLAY GROUND
            </h1>
            <p className="text-3xl -mt-10 mb-10  -left-40 top-[155px] absolute !text-left  whitespace-nowrap font-bold text-white/60">
              Click on the boxes to explore X's and O's
            </p>
            <div className="relative w-[130%] mt-10 h-[700px] [perspective:1000px]">
              <AutoFlipImages />
            </div>
          </div>

          <div className= "w-full  py-10 relative md:hidden flex flex-col  text-center   items-center justify-center">
            <h1 className="  alinsa   text-center text-5xl !font-medium whitespace-nowrap">
              PLAY GROUND
            </h1>
            <p className="text-sm   mb-10      text-center whitespace-nowrap font-bold text-white/60">
              Click on the boxes to explore X's and O's
            </p>
            <div className="relative w-[90vw] mt-60 h-[600px] [perspective:1000px]">
              <AutoFlipImages />
            </div>
          </div>
        </div>
      </div>

      {/* Clicked Symbols */}
      {clicks.map(({ id, x, y, type }) => (
        <motion.img
          key={id}
          src={type === "X" ? tictacX : tictacO}
          alt={type}
          className="absolute w-20 h-20"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.3 }}
          style={{ top: y - 40, left: x - 40 }} // Centered positioning
        />
      ))}
    </div>
  );
};
// import playground1 from "../assets/hocpo/05080625-c986-468e-b4c1-1376ff24c56f-min.jpg";
// import playground2 from "../assets/hocpo/54f31009-987f-4ed5-be3c-1500148ef995-min.jpg";
// import playground3 from "../assets/hocpo/831bc518-1ffb-4c9c-a99d-356d62ccb9eb-min.jpg";
import playgorund4 from "../assets/hocpo/TID05717-min.jpg"
import playground5 from "../assets/hocpo/TID05724-min.jpg"
import playground6 from "../assets/hocpo/TID05738-min.jpg"
import playground7 from "../assets/hocpo/TID05735-min.jpg"
import playground8 from "../assets/hocpo/TID05757-min.jpg"

const AutoFlipImages = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [playground8, playgorund4, playground5, playground6, playground7];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full">
      {images.map((image, index) => (
        <motion.div
          key={index}
          className="absolute w-full h-full [transform-style:preserve-3d]"
          initial={{ rotateY: index === currentIndex ? 0 : -180 }}
          animate={{ rotateY: index === currentIndex ? 0 : 180 }}
          transition={{ duration: 0.8 }}
          style={{ 
            zIndex: index === currentIndex ? 1 : 0,
            backfaceVisibility: 'hidden'
          }}
        >
          <img
            src={image}
            alt={`Playground ${index + 1}`}
            className="w-full h-full object-cover rounded-lg"
          />
        </motion.div>
      ))}
    </div>
  );
};
 
 