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
import two from "../assets/two.png";
import three from "../assets/three.png";
import linelab from "../assets/linelab.png";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";

import noswitch from "../assets/noswitch.svg";
const Experience = () => {
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
          className={`  absolute w-full z-[500] -top-14 left-0 ${
            isSection2 ? " bg-white/20 backdrop-blur-xl text-black" : "  text-[#000000]"
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
        <div className="items-center flex-col   mt-14 relative justify-center !h-screen  flex ">
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
      <div className="bg-black py-20 flex flex-col   gap-10">
        <div>
          <h1 className="text-[#F4ECE0] text-4xl md:text-[110px] md:leading-[97px] text-center salo">
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
        <h1 className="md:px-20 px-4 md:text-2xl text-white text-center jost">
          Born from our ethos, the Chaos Lab serves as a testing ground for the
          diverse narrative environments we experiment with and explore. Based
          in India, with plans for growth, we embrace a ‘test-and-learn’
          mindset. Our aim is to decode and disrupt conventional norms and
          beliefs in experimental communication and experience design.
        </h1>
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
      className="min-h-screen -mt-2 bg-black text-white relative overflow-hidden"
      onClick={handleClick}
    >
      {/* Grid Overlay */}
      <div
        className="absolute inset-0 opacity-100"
        style={{
          backgroundImage: `url(${gridethos})`,
          backgroundSize: "cover",
        }}
      />

      {/* Main Content */}
      <div className="relative flex flex-col justify-between">
        <div className="flex justify-between items-center px-20 py-10">
          <div className="max-w-xl"></div>

          <div className="max-w-xl flex flex-col items-end">
            <h1 className="font-[1000] -ml-40 text-[100px] whitespace-nowrap">
              PLAY GROUND
            </h1>
            <p className="text-3xl mb-2 font-bold text-white/60">
              Click on the boxes to explore X's and O's
            </p>
            <img src={playground} className="w-[90%]" alt="Playground" />
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
const HausOfChaos = () => {
  return (
    <div className="min-h-[70vh] bg-[#060ebb] text-white relative">
      {/* Grid overlay background */}
      <div
        className="absolute inset-0 opacity-100"
        style={{
          backgroundImage: `url(${grid})`,
          backgroundSize: "cover",
        }}
      />

      {/* Main content container */}
      <div className="relative    px-20 py-48 min-h-screen flex flex-col justify-between">
        {/* Logo and description section */}
        <div className=" flex">
          <div className="max-w-xl ">
            <img src={logo} className="w-40 mb-8" alt="Haus Of Chaos" />

            <p className="text-lg text-left mb-6">
              Die Hauspost liefert dir Trends, Ideen +<br />
              Facts aus der Wirbelwelt des Corporate
              <br />
              Influencer Marketing und Personal
              <br />
              Branding. Immer mit dem "Wieder was
              <br />
              gelernt"-Gefühl. Jeden Freitagnachmittag
              <br />
              zum Gönnenwollen.
            </p>
          </div>

          {/* Newsletter signup form */}
          <div className="max-w-xl mt-20 ml-auto">
            <form className="space-y-4 flex flex-col ">
              <div>
                <input
                  type="text"
                  placeholder="Dein Name*"
                  className="w-full p-4 bg-white/10 backdrop-blur-sm text-white placeholder-white border border-white/20 focus:outline-none focus:border-white/40"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Deine E-Mail-Adresse*"
                  className="w-full mt-10 p-4 bg-white/10 backdrop-blur-sm text-white placeholder-white border border-white/20 focus:outline-none focus:border-white/40"
                />
              </div>
              <p className="text-sm text-left opacity-80">
                Ich verwende MailerLite für den Versand meines Newsletters. Mit
                der Anmeldung bestätigst Du, dass Deine Daten an MailerLite
                übermittelt werden. Wenn Du mehr über die Datenschutzpraktiken
                von MailerLite erfahren möchtest, klick{" "}
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
        <div className="relative pt-16">
          <div className="flex justify-end gap-4 text-sm">
            <a href="#" className="hover:underline">
              LINKEDIN
            </a>
            <span>|</span>
            <a href="#" className="hover:underline">
              AMAZON
            </a>
            <span>|</span>
            <a href="#" className="hover:underline">
              SPOTIFY
            </a>
            <span>|</span>
            <a href="#" className="hover:underline">
              MAIL
            </a>
          </div>
        </div>
        <div className="   absolute left-0 px-10 bottom-10 flex justify-between w-full ">
          <div className="text-sm">2025 © Haus Of chaos Ltd.</div>
          <div className="flex gap-4 text-sm">
            <a href="#" className="hover:underline">
              Impressum
            </a>
            <a href="#" className="hover:underline">
              Datenschutz
            </a>
          </div>
          <div className="">
            Design by{" "}
            <a href="#" className="hover:underline">
              TIC GLOBAL
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
