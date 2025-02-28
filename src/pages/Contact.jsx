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
import Footer from "./Footer"
import MobileNav from "./MobileNav"

import { motion } from "framer-motion";
import { div } from "framer-motion/client";
const Contact = () => {
  const [isSection2, setIsSection2] = useState(false);
  const [isFixed, setIsFixed] = useState(true);
  const [isToggled, setIsToggled] = useState(true);

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

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <>
      <div className="bg-white jost relative" style={{ minHeight: "100vh" }}>
        {/* Conditional Navigation */}
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
        </div>
        {/* Absolutely Centered Text */}
        <JobListings />

        <div className="items-center flex-col md:-space-y-24 relative justify-center h-screen mt-10 flex px-10">
          {/* CONTACT Heading with Spring Animation */}
          <motion.h1
            className="font-[1000] px-10  mt-0 md:!mt-20 md:leading-[0px] text-7xl md:text-[260px] alinsa text-[#060ebb] z-[10]"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 120, damping: 10 }}
          >
            CONTACT
          </motion.h1>

          {/* Tagline with Spring Animation */}
          <motion.div
            className="jost font-[500] w-full flex items-center justify-center text-xl md:!mt-24 lowercase md:text-base md:text-left z-[10]"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 12,
              delay: 0.2,
            }}
          >
           <div className="flex jost w-full md:flex-row flex-col items-center justify-between px-20 mt-4 gap-10">
            <div>
              <h1 className=" text-[#2354CF] text-lg leading-3">Email</h1>
              <h2>explore@hausofchaos.co</h2>
            </div>
            <div >
              <h1 className=" text-[#2354CF] text-lg leading-3">Address</h1>
              <h2>4th floor no 9,Seshadri road ,teynampet ,
              chennai -86 </h2>
            </div>
            <div>
              <h1 className=" text-[#2354CF] text-lg leading-3">Phone</h1>
              <h2>+91 9600931366</h2>
            </div>


           </div>
          </motion.div>
        </div>
        {/* <Footer /> */}
      </div>
    </>
  );
};
import dragme1 from "../assets/svgs/Dragme.svg";
import linkdsvg from "../assets/svgs/linkd.svg";
import instasvg from "../assets/svgs/insta.svg";
import facebook from "../assets/svgs/facebook.svg";
import dragleft from "../assets/svgs/dragmeleft.svg";
import dragright from "../assets/svgs/dargmeright.svg";
import bhance from "../assets/svgs/behance.svg";
import dribble from "../assets/svgs/dribble.svg";

const images = [
  { src: dragleft, className: "bottom-28 left-0", link: "/Contact" },
  { src: linkdsvg, className: "bottom-24 left-10", link: "https://www.linkedin.com/company/hausofchaos/" },
  { src: instasvg, className: "bottom-[24rem] left-[15rem]", link: "https://www.instagram.com/hausofchaos.co/" },
  { src: dragme1, className: "bottom-28 left-[25rem]", link: "/Contact" },
  { src: facebook, className: "bottom-20 left-[40rem]", link: "/facebook-page" },
  { src: bhance, className: "bottom-80 left-[40rem]", link: "/behance-page" },
  { src: dribble, className: "bottom-20 right-20", link: "/Contact" },
  { src: dragright, className: "bottom-60 right-0", link: "/Contact" },
];

const JobListings = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isDragging, setIsDragging] = useState(false);

  const handleClick = (link) => {
    if (!isDragging) {
      // Use your preferred navigation method here
      window.location.href = link;
      // Or with React Router:
      // navigate(link);
    }
  };

  return (
    <div ref={ref} className="w-full h-[100vh] flex justify-center items-center relative overflow-hidden">
      {isInView &&
        images.map((img, index) => (
          <motion.img
            key={index}
            src={img.src}
            alt={`img-${index}`}
            className={`absolute  w-1/2 md:w-auto  ${img.className}`}
            initial={{ y: -1000, opacity: 0, rotate: Math.random() * 360 }}
            animate={{ 
              y: 0, 
              opacity: 1, 
              rotate: 0,
              transition: {
                type: "spring",
                duration: 1.5,
                delay: index * 0.2,
                bounce: 0.2,
                damping: 10,
                stiffness: 100
              }
            }}
            drag
            dragTransition={{ bounceStiffness: 200, bounceDamping: 5 }}
            dragConstraints={{
              top: -400,
              left: -1000,
              right: 1000,
              bottom: 200,
            }}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={() => setTimeout(() => setIsDragging(false), 50)}
            onClick={() => handleClick(img.link)}
            style={{ 
              touchAction: "none",
              cursor: "default",
            }}
            whileHover={{
              scale: 1.1,
              cursor: "grab"
            }}
            whileDrag={{
              cursor: "grabbing"
            }}
          />
        ))}

      {/* <h1 className="absolute bottom-10 md:bottom-10 tracking-wide text-[#0000FF] lowercase text-center text-3xl md:text-[100px]">
        EXPLORE@HOUSEOFCHAOS.CO
      </h1> */}
    </div>
  );
};
 




 

export default Contact;

import { useInView } from "framer-motion";
import { useRef } from "react";
import heartkey from "../assets/heartkey.png";
import keyvideo from "../assets/key.mp4";

import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md'; // Add this import at the top


// <div className="flex items-center gap-6">
//           <MdEmail className="text-black md:text-[60px] text-2xl" />
//           <a className="text-black text-2xl md:text-5xl font-bold hover:text-[#060ebb] transition-colors" href="mailto:explore@hausofchaos.co">
//             explore@hausofchaos.co
//           </a>
//         </div>

//         <div className="flex items-start gap-6">
//           <MdLocationOn className="text-black text-6xl  md:text-[60px] mt-2" />
//           <a className="text-black text-2xl md:text-5xl font-bold text-left hover:text-[#060ebb] transition-colors" href="#">
//             4th Floor,<br className="md:block hidden" />
//             No 9, Seshadri Road,<br className="md:block hidden" />
//             Teynampet,<br className="md:block hidden" />
//             Chennai - 86
//           </a>
//         </div>

//         <div className="flex items-center gap-6">
//           <MdPhone className="text-black text-2xl md:text-[60px]" />
//           <a className="text-black text-2xl md:text-5xl font-bold hover:text-[#060ebb] transition-colors" href="tel:+91 9600931366">
//             +91 9600931366
//           </a>
//         </div>


{/* <button className="text-black border-[2px] border-[#000000] rounded-full px-8 font-[700] py-2 mt-4 hover:bg-black hover:text-white transition-all duration-300">
          JOIN CHAOS
        </button>
      </div>
      <div className="-mt-60 w-full">
        <video
          src={keyvideo}
          autoPlay
          loop
          muted
          playsInline
          className="  md:scale-100 md:w-full h-full object-cover"
        /> */}