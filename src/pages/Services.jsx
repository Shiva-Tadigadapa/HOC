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
import Footer from "./Footer";

import grid from "../assets/lines.png";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";
import MobileNav2 from "./MobileNav";
const Contact = () => {
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
      <div className="bg-white jost relative" style={{ minHeight: "100vh" }}>
        {/* Navbar */}
        <div className="md:hidden">
          <MobileNav2 />
        </div>
        <div
          className={`${
            // isFixed  w-full z-[500] top-0 left-0 ${
            isSection2 ? "bg-white text-black" : "  text-[#000000]"
          } transition-all  py-2 duration-700 md:block hidden`}
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
                className={`hover:text-black/50 ${isActiveRoute('/Services') ? 'text-[#060ebb] border-b-2 border-[#060ebb]' : ''}`}
              >
                <h1>SERVICES</h1>
              </Link>
              <Link 
                to={"/Experience"} 
                className={`hover:text-black/50 ${isActiveRoute('/Experience') ? 'text-[#060ebb] border-b-2 border-[#060ebb]' : ''}`}
              >
                <h1>EXPERIENCE LAB</h1>
              </Link>
              <Link 
                to={"/Ethos"} 
                className={`hover:text-black/50 ${isActiveRoute('/Ethos') ? 'text-[#060ebb] border-b-2 border-[#060ebb]' : ''}`}
              >
                <h1>ETHOS</h1>
              </Link>
              <Link 
                to={"/Careers"} 
                className={`hover:text-black/50 ${isActiveRoute('/Careers') ? 'text-[#060ebb] border-b-2 border-[#060ebb]' : ''}`}
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
        {/* Absolutely Centered Text */}
        <div className="  overflow-hidden  bg-black  z-[1] mx-auto overflow-x-visible  items-center  flex-col  -space-y-24 relative justify-center  md:h-[180vh] mt-40 md:mt-20 rounded-t-3xl   flex px-10">
          <MainServices />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
const categories = {
  experience: [
    {
      cx: 300,
      cy: 200,
      label: "CGI + Motions Graphics",
      dis: "We don't pull numbers out of thin air. We size up your project, giving you a clear cost and timeline.",
    },
    {
      cx: 300,
      cy: 550,
      label: "Experiential Mapping",
      dis: "Industry jargon? Not here. We get to the core of your industry and highlight what sets you apart.",
    },
    {
      cx: 300,
      cy: 900,
      label: "Physical Computing",
      dis: "Clear numbers and deadlines. We value your time and wallet. Team and Resources: Handpicked talent, no seatfillers.",
    },
    {
      cx: 300,
      cy: 1250,
      label: "Hybrid Communication Solutions",
      dis: "Estimate costs and timeline with laser-like accuracy(within 15% by project's end)",
    },
  ],
  design: [
    {
      cx: 300,
      cy: 200,
      label: "Brand Identity Design",
      dis: "Creating distinctive visual languages that embody your brand's essence and values.",
    },
    {
      cx: 300,
      cy: 550,
      label: "UI/UX Design",
      dis: "Crafting intuitive and engaging digital experiences that connect with your audience.",
    },
    {
      cx: 300,
      cy: 900,
      label: "Print & Digital Design",
      dis: "Seamlessly bridging traditional and digital design to create cohesive brand experiences.",
    },
    {
      cx: 300,
      cy: 1250,
      label: "Environmental Design",
      dis: "Transforming spaces into immersive brand environments that tell your story.",
    },
  ],
  build: [
    {
      cx: 300,
      cy: 200,
      label: "Web Development",
      dis: "Building robust, scalable websites and applications with cutting-edge technologies.",
    },
    {
      cx: 300,
      cy: 550,
      label: "Mobile Applications",
      dis: "Developing native and cross-platform mobile solutions that engage and perform.",
    },
    {
      cx: 300,
      cy: 900,
      label: "Custom Software",
      dis: "Creating bespoke software solutions tailored to your specific business needs.",
    },
    {
      cx: 300,
      cy: 1250,
      label: "System Integration",
      dis: "Seamlessly connecting different systems and platforms for optimal performance.",
    },
  ],
};
import blackgrid from "../assets/blackgrid.png";
import wiresm from "../assets/wiresm.png";
import plugservicesleft from "../assets/left.png";
import plugservicesright from "../assets/right.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { AnimatePresence } from "framer-motion";
gsap.registerPlugin(ScrollTrigger);
const MainServices = () => {
  const plugRightRef = useRef(null);

  const lineRef = useRef(null);
  const stopsRef = useRef([]);
  const textRefs = useRef([]);
  useEffect(() => {
    // Right plug animation
    gsap.fromTo(
      plugRightRef.current,
      {
        x: 100, // Start off-screen to the right
        // rotation: -15,
        ease: "power4.out",
      },
      {
        x: 0,
        // rotation: 0,
        scrollTrigger: {
          trigger: ".alinsa", // Use the title container as trigger
          start: "top center",
          end: "bottom center",
          scrub: 1,
        },
      }
    );
  }, []);
  useEffect(() => {
    const GreenLine = lineRef.current;
    const stops = stopsRef.current;
    const texts = textRefs.current;
  
    const length = GreenLine.getTotalLength();
  
    gsap.set(GreenLine, {
      strokeWidth: 4,
      strokeDasharray: length,
      strokeDashoffset: length, // Start with the full length hidden
      willChange: "strokeDashoffset", // Improve performance in Safari
    });
  
    gsap.set(stops, { autoAlpha: 1, scale: 0, transformOrigin: "center" });
    gsap.set(texts, { color: "#676767", opacity: 0, willChange: "opacity, transform" });
  
    gsap.to(GreenLine, {
      strokeDashoffset: 0, // Animate to reveal the full path
      ease: "none",
      scrollTrigger: {
        trigger: GreenLine,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  
    stops.forEach((stop, index) => {
      gsap.to(stop, {
        scale: 1,
        duration: 0.5,
        ease: "elastic.out(1, 0.5)",
        scrollTrigger: {
          trigger: stop,
          start: "top 80%",
          end: "top 50%",
          scrub: true,
          onEnter: () => {
            gsap.to(`.label-text-${index} div`, {
              color: "#0000ff", 
              duration: 0.5,
              opacity: 1,
              x: 0,
              transform: "translate3d(0,0,0)", // Fix for Safari rendering issues
            });
            gsap.to(`.label-text-${index} h1`, {
              color: "#F2F2F2", 
              duration: 0.5,
              opacity: 1,
              x: 0,
            });
            gsap.to(`.label-text-${index} p`, {
              color: "#BFBFBF", 
              duration: 0.5,
              opacity: 1,
              x: 0,
            });
          },
          onLeaveBack: () => {
            gsap.to(`.label-text-${index} div`, {
              color: "#242424", 
              duration: 0.5,
              opacity: 0, // Ensure smooth transition
              x: -10, // Slight movement to prevent flickering
            });
            gsap.to(`.label-text-${index} h1`, {
              color: "#242424", 
              duration: 0.5,
              opacity: 0,
              x: -10,
            });
            gsap.to(`.label-text-${index} p`, {
              color: "#242424", 
              duration: 0.5,
              opacity: 0,
              x: -10,
            });
          },
        },
      });
    });
  }, []);
  
  const [active, setActive] = useState("Experience");
  const currentItems = categories[active.toLowerCase()] || [];
  return (
    <>
      <div className="flex  flex-col justify-start items-center   md:items-start overflow-x-visible  w-full md:justify-start h-full md:px-16 py-32 md:py-32">
        {/* Background Grid */}
        <div
          className="absolute z-[-1]  inset-0 opacity-100"
          style={{
            backgroundImage: `url(${grid})`,
            backgroundSize: "cover",
            opacity: "0.1",
          }}
        />

        {/* Title */}
        <div className="flex  items-center  md:items-stretch relative flex-col -space-y-16 uppercase z-[100] text-[108px] font-[1000] text-[#F4ECE0] alinsa">
          <div className="md:flex hidden  relative ">
            <h1 className="z-[100]">Our</h1>
            <img
              src={wiresm}
              className="-ml-2 mt-8 w-[80px] h-[80px] object-cover"
              alt=""
            />
            <img
              src={plugservicesleft}
              className="absolute  w-full left-52 -top-28 scale-[1.2] z-[100]"
              alt=""
            />
            <img
              ref={plugRightRef}
              src={plugservicesright}
              className="absolute w-full scale-[1.3]  -right-[180px] mr-2.5 -mt-0.5 -top-28 z-[90]"
              alt=""
              style={{ transformOrigin: "right center" }}
            />
          </div>
          <h1 className=" md:block hidden">Services</h1>
          <h1 className="  flex items-center  justify-center   !font-[400]  text-5xl  text-center md:hidden">
            Our Services
          </h1>
          <div className="bg-[#242424] px-3 py-3 rounded-[76px] -bottom-16 md:-bottom-16 flex gap-2 absolute text-xs md:text-base jost text-white font-medium">
            {["Experience", "Design"].map((item) => (
              <button
                key={item}
                className={`px-6 py-2 uppercase rounded-[59px] transition-all duration-300 ${
                  active === item
                    ? "bg-[#174DD5] text-white"
                    : "bg-black text-[#C9C9C9] hover:bg-[#174DD5] hover:text-white"
                }`}
                onClick={() => setActive(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <svg
  className="line absolute md:block hidden left-1/2 ml-20 overflow-visible mt-8 transform -translate-x-1/2"
  width="600" 
  height="4000"
  viewBox="0 0 600 4000"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>

          {/* Inactive Path (Gray) */}
          <path
            d="M0.200195 2.24512H268.2C287.056 2.24512 296.484 2.24512 302.342 8.10298C308.2 13.9608 308.2 23.3889 308.2 42.2451V1525.75"
            stroke="#676767"
            strokeWidth="4"
          />

          {/* Active Path (Blue) */}
          <path
            ref={lineRef}
            d="M0.200195 2.24512H268.2C287.056 2.24512 296.484 2.24512 302.342 8.10298C308.2 13.9608 308.2 23.3889 308.2 42.2451V1525.75"
            stroke="#060ebb"
            strokeWidth="4"
          />
          {/* Stops and Texts */}
          <AnimatePresence mode="wait">
            {currentItems.map((item, i) => (
              <motion.g
                key={active + i}
                className="!overflow-visible"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <motion.circle
                  ref={(el) => (stopsRef.current[i] = el)}
                  cx={item.cx + 8}
                  cy={item.cy - 75}
                  r="6"
                  fill="blue"
                  data-svg-origin="308 90"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                />

                <foreignObject
                  x={item.cx - 400}
                  y={item.cy - 100}
                  width="400"
                  height="200"
                  className={`foreign-label !z-[700] label-text-${i} !overflow-visible`}
                >
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <Label
                      number={i + 1}
                      className="text-white"
                      title={item.label}
                      description={item.dis}
                      textRef={(el) => (textRefs.current[i] = el)}
                    />
                  </motion.div>
                </foreignObject>
              </motion.g>
            ))}
          </AnimatePresence>
        </svg>
        <div className="md:hidden w-full items-center justify-center  flex flex-col gap-28 mt-32">
          {currentItems.map((item, i) => (
            <motion.div
              key={active + i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col gap-4 px-4"
            >
              <div className="flex gap-4 items-start">
                <span className="text-[#0000ff] text-2xl font-medium">
                  0{i + 1}
                </span>
                <div>
                  <h2 className="text-white text-2xl font-medium mb-2">
                    {item.label}
                  </h2>
                  <p className="text-[#BFBFBF] text-base">{item.dis}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};
const Label = ({ number, title, description, textRef }) => {
  return (
    <div
      class={`flex gap-4 items-start text-left jost ml-[28rem] w-[40vw] ${
        number === 1 ? "text-white" : "text-[#242424]"
      } px-4`}
      ref={textRef}
    >
      <div
        class={`font-[500] number-text text-3xl mb-2 ${
          number === 1 ? "text-[#0000ff]" : ""
        }`}
      >
        0{number}
      </div>

      <div>
        <h1
          class={`text-3xl uppercase font-[500] mb-2 ${
            number === 1 ? "text-white" : ""
          }`}
        >
          {title}
        </h1>
        <p
          class={`text-lg w-[80%] font-[500] ${
            number === 1 ? "text-[#BFBFBF]" : ""
          }`}
        >
          {description}
        </p>
      </div>
    </div>
  );
};
