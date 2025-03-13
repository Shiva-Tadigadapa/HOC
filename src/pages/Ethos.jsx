import React from "react";
import { motion, useInView } from "framer-motion";
// import tvpng from "../assets/tv.png";
import worldsmall from "../assets/worldsmall.png";
// import logo from "../assets/logo.png";
import logo2 from "../assets/logo2.png";
import { Link, useLocation } from "react-router-dom";

// import logo1 from "../assets/logo.png";
// import befooter from "../assets/befooter.png";
import Footer from "./Footer";
import MobileNav from "./MobileNav";
import tvideo from "../assets/6.webm";
import safarivideo from "../assets/6.mp4";

import { useState, useEffect, useRef } from "react";

const Ethos = () => {
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
  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();
    const isSafariBrowser =
      /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ||
      ua.includes("iphone") ||
      ua.includes("ipad");

    setIsSafari(isSafariBrowser);
  }, []);

  return (
    <>
      <div
        className="bg-white !z-[1100] jost relative"
        style={{ minHeight: "100vh" }}
      >
        {/* Navbar */}
        <div className="md:hidden">
          <MobileNav />
        </div>
        <div className="hidden md:block">
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
                <Link
                  to={"/Services"}
                  className={`hover:text-black/50 ${
                    isActiveRoute("/Services")
                      ? "text-[#060ebb] border-b-2 border-[#060ebb]"
                      : ""
                  }`}
                >
                  <h1>SERVICES</h1>
                </Link>
                <Link
                  to={"/Experience"}
                  className={`hover:text-black/50 ${
                    isActiveRoute("/Experience")
                      ? "text-[#060ebb] border-b-2 border-[#060ebb]"
                      : ""
                  }`}
                >
                  <h1>EXPERIENCE LAB</h1>
                </Link>
                <Link
                  to={"/Ethos"}
                  className={`hover:text-black/50 ${
                    isActiveRoute("/Ethos")
                      ? "text-[#060ebb] border-b-2 border-[#060ebb]"
                      : ""
                  }`}
                >
                  <h1>ETHOS</h1>
                </Link>
                <Link
                  to={"/Careers"}
                  className={`hover:text-black/50 ${
                    isActiveRoute("/Careers")
                      ? "text-[#060ebb] border-b-2 border-[#060ebb]"
                      : ""
                  }`}
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
        <div className=" !z-[-200]  items-end   md:flex-row flex-col  h-full md:h-full mt-0 md:mt-0  bottom-0 flex px-4 md:px-10">
          <div className="  capitalize   md:mt-0 mt-80  w-[100%]">
            <h2 className="jost md:text-[26px] text-2xl text-left md:block hidden  mb-10  md:-mb-20 md:leading-[40px]">
              <span className=" md:text-[45px]  text-3xl salo uppercase  text-[#060ebb]">
                {" "}
                Haus Of Chaos{" "}
              </span>{" "}
              <span className="   whitespace-nowrap">
                is a process-oriented design firm <br /> that prioritizes{" "}
                innovative forms of communication. <br /> Embracing the concept
                of{" "}
                <span className=" md:text-[45px] text-3xl uppercase salo text-[#060ebb]">
                  {" "}
                  Organized Chaos
                </span>
                <br />
                <span className=" whitespace-nowrap">
                  —akin to chaos theory—our philosophy centers on <br />
                  challenging conventional{" "}
                </span>
              </span>
              <span className="  md:text-[45px] text-3xl salo uppercase text-[#060ebb]">
                {" "}
                Design{" "}
              </span>{" "}
              paradigms <br className=" md:block hidden" /> integrating the
              intangible aspects of interdisciplinary <br /> design,
              particularly
              <span className=" md:text-[45px] text-3xl uppercase salo text-[#060ebb]">
                {" "}
                Transmedia Approaches.
              </span>
            </h2>
            <h2 className="jost text-2xl  md:hidden block text-left">
           <span className="salo uppercase  text-3xl text-[#060ebb]">  Haus Of Chaos </span> is a process-oriented design firm
that prioritizes innovative forms of communication.
Embracing the concept of  <span className="salo uppercase  text-3xl text-[#060ebb]">Organized Chaos </span>
—akin to chaos theory—our philosophy centers on
challenging conventional <span className="salo uppercase  text-3xl text-[#060ebb]"> Design</span> paradigms
integrating the intangible aspects of interdisciplinary
design, particularly <span className="salo uppercase  text-3xl text-[#060ebb]"> Transmedia Approaches.</span>
            </h2>
          </div>

          {/* Adding smooth infinite rotation */}
          <motion.div
            className="w-[80%]  mt-4 md:-mt-10 -top-4 !z-[-800] relative left-10 md:left-16 md:top-[19rem] overflow-hidden"
            animate={{ rotate: 360 }}
          >
            <video
              src={isSafari ? safarivideo : tvideo} // Corrected: Removed `{}` around variables
              autoPlay
              loop
              muted
              playsInline
              className="md:w-[140%]  mb-[6px] h-[20rem] md:h-[45rem] object-cover md:rotate-[-10deg] -rotate-[10deg] md:scale-x-[-1] scale-x-[-1]"
            />
          </motion.div>
        </div>
        <FounderSection />
        {/* <Play /> */}
        {/* <FAQ /> */}
        <Footer />
      </div>
    </>
  );
};

export default Ethos;

import founder from "../assets/RIA3.jpg";
import founder2 from "../assets/FounderBanner.jpg";
const FounderSection = () => {
  const handleEmailClick = () => {
    console.log("Email button clicked"); // Debugging
    window.open("mailto:explore@hausofchaos.co", "_self");
  };
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Trigger animation once when in view

  return (
    <div className="md:mt-40  -mt-20 !z-[1000]  ">
      <div
        ref={ref}
        className=" bg-[#060ebb]  md:pb-0 pb-20  md:p-8 relative overflow-hidden flex items-center justify-between w-full"
      >
        <div className="md:px-14   flex flex-col  md:items-start justify-center mt-20 md:mt-40 text-left">
          <motion.div
            initial={{ scale: 1.2, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{
              duration: 0.8,
              delay: 0.5,
              type: "spring",
              stiffness: 200,
            }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
            className=" lg:w-1/2  !scale-75 w-full md:w-1/2 block md:hidden relative  h-full"
          >
            <div className="relative   -top-20 h-[800px] [perspective:1000px] cursor-pointer group">
              <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front image */}
                <div className="absolute inset-0 h-[80%] w-full">
                  <img
                    src={founder}
                    alt="Founder Front"
                    className="w-full h-full object-cover border-[1rem] block rounded-lg"
                  />
                </div>
                {/* Back image */}
                <div className="absolute inset-0 h-[80%] w-full [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <img
                    src={founder2}
                    alt="Founder Back"
                    className="w-full h-full object-cover object-top border-[1rem] block rounded-lg"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-white md:-ml-10 md:mt-0 -mt-60 text-center  alinsa text-7xl   md:mb-10 md:text-[110px] font-bold tracking-wide">
              FOUNDER
            </h1>
          </motion.div>

          <div className="flex md:w-[88%] w-full md:p-0 p-2  -mt-40 md:-mt-6 flex-col  text-center   lg:flex-row justify-between md:text-left  md:items-start gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:w-1/2 md:-ml-10 md:block flex flex-col items-center"
            >
              <p className="text-white   md:text-[26px] jost  text-lg md:w-full w-[90%] md:leading-[37px] mb-4 md:mb-8">
              As experiential designers, we never remain neutral. The more
                compelling the story, the greater the influence we hold. Haus of
                Chaos is the intersection of a graphic design house and an
                experimental studio, enabling us to dive into new, experimental
                forms of communication—disrupting and redefining existing norms.
              </p>
              <div className="flex text-xs md:text-base   gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 px-6 py-3 rounded-full font-medium"
                  onClick={handleEmailClick}
                >
                  E-mail
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-6 py-3 rounded-full font-medium"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/company/hausofchaos/",
                      "_blank"
                    )
                  }
                >
                  LinkedIn
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 px-6 py-3 rounded-full font-medium"
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/hausofchaos.co/",
                      "_blank"
                    )
                  }
                >
                  Instagram
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ scale: 1.2, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.5,
                type: "spring",
                stiffness: 200,
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              className=" lg:w-1/2 md:block md:w-1/2 hidden relative  h-full"
            >
              <div className="relative left-40 -top-40 h-[800px] [perspective:900px] cursor-pointer group">
                <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Front image */}
                  <div className="absolute inset-0 h-[90%] w-full">
                    <img
                      src={founder}
                      alt="Founder Front"
                      className="w-full h-full object-cover border-[1rem] block rounded-lg"
                    />
                  </div>
                  {/* Back image */}
                  <div className="absolute inset-0 h-[90%] w-full [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <img
                      src={founder2}
                      alt="Founder Back"
                      className="w-full h-full object-cover object-top border-[1rem] block rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
