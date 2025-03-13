import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import worldsmall from "../assets/worldsmall.png";
 
import logo2 from "../assets/logo2.png";
 
import MobileNav from "./MobileNav";

import { motion } from "framer-motion";
// import { div } from "framer-motion/client";
// import Scene from "./Model";
const Contact = () => {
  const [isSection2, setIsSection2] = useState(false);
  const [isFixed, setIsFixed] = useState(true);
  const [isToggled, setIsToggled] = useState(true);

  const bottomPageRef = useRef(null);
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
  const scrollToBottom = () => {
    bottomPageRef.current?.scrollIntoView({ behavior: "smooth" });
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
        <JobListings scrollToBottom={scrollToBottom} />
        <JobListings2 scrollToBottom={scrollToBottom} />

     
        {/* <Footer /> */}
      </div>
    </>
  );
};

import svg4 from "../assets/hover/element3-min.png";
import svg5 from "../assets/hover/element5-min.png";
import svg6 from "../assets/hover/element6-min.png";

import lin from "../assets/lin.png";
import ins from "../assets/ins.png";
// import fab from "../assets/fab.png";
import bhe from "../assets/mail.png";
// import dri from "../assets/phone.png";

import arrow from "../assets/down-arrow.png";
const images = [
  { src: svg4, className: "bottom-80 !w-1/4 left-0", link: "/Contact", rotate: 0 },
  { src: lin, className: "bottom-10 !w-[40%] -left-10", link: "https://www.linkedin.com/company/hausofchaos/", rotate: -20 },
  { src: ins, className: "bottom-[24rem] !w-[40%] left-[25rem]", link: "https://www.instagram.com/hausofchaos.co/", rotate: -20 },
  { src: svg5, className: "bottom-28 !w-1/4 left-[30rem]", link: "/Contact", rotate: 8 },
  // { src: fab, className: "bottom-0 !w-[40%] left-[40rem]", link: "/facebook-page", rotate: -12 },
  { src: bhe, className: "bottom-20 !w-[40%] right-[4rem]", link: "mailto:explore@hausofchaos.co", rotate: 20 },
  // { src: dri, className: "bottom-0 !w-[40%] right-0", link: "/Contact", rotate: 10 },
  { src: svg6, className: "bottom-80 !w-1/4 right-40", link: "/Contact", rotate: 10 },
];
const images2 = [
  { src: svg4, className: "  bottom-20 left-0", link: "/Contact",rotate: 0 },
  { src: lin, className: " top-[55%]  right-0", link: "https://www.linkedin.com/company/hausofchaos/" ,rotate: -20},
  { src: ins, className: "  top-[50%] left-0", link: "https://www.instagram.com/hausofchaos.co/" ,rotate: -20},
  { src: svg5, className: " bottom-20 right-0 ", link: "/Contact",rotate:8 },
  // { src: fab, className: " bottom-60 right-0", link: "/facebook-page",rotate: -12 },
  { src: bhe, className: " bottom-40 left-20", link: "mailto:explore@hausofchaos.co", rotate: 20},
  // { src: dri, className: "bottom-72 left-10", link: "/Contact" ,rotate: 10},
  { src: svg6, className: " top-52 left-48", link: "/Contact" ,rotate: 10},
];

const JobListings = ({ scrollToBottom }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isDragging, setIsDragging] = useState(false);

  const handleClick = (link) => {
    if (!isDragging) {
      // Handle mailto links differently
      if (link.startsWith('mailto:')) {
        window.location.href = link;
      } else {
        window.open(link, '_blank');
      }
    }
  };

  return (
    <div ref={ref} className="w-full h-[100vh] hidden md:flex justify-center items-center relative overflow-hidden">
    {isInView &&
  images.map((img, index) => (
    <motion.img
      key={index}
      src={img.src}
      alt={`img-${index}`}
      className={`absolute w-1/2 md:w-auto ${img.className}`}
      initial={{ 
        y: -1000, 
        opacity: 0, 
        rotate: img.rotate // Custom initial rotation
      }}
      animate={{ 
        y: 0, 
        opacity: 1, 
        rotate: img.rotate, // Maintain assigned rotation
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
        rotate: img.rotate + 5, // Slightly more tilt on hover
        cursor: "grab"
      }}
      whileDrag={{
        cursor: "grabbing"
      }}
    />
  ))}

      {/* <h1 className="absolute  cursor-pointer !bottom-2 md:bottom-10 tracking-wide text-[#0000FF]   text-center text-2xl md:text-[20px]"  onClick={scrollToBottom}>
        <img src={arrow} alt="Arrow" className="w-10" />
      </h1> */}
      {/* <div className=" absolute">Scroll Down</div> */}
    </div>
    
  );
};
const JobListings2 = ({ scrollToBottom }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isDragging, setIsDragging] = useState(false);

  const handleClick = (link) => {
    if (!isDragging) {
      // Handle mailto links differently
      if (link.startsWith('mailto:')) {
        window.location.href = link;
      } else {
        window.location.href = link;
      }
    }
  };

  return (
    <div
      ref={ref}
      className="w-full h-[100vh] md:hidden flex justify-center items-center relative overflow-hidden"
    >
      {isInView &&
        images2.map((img, index) => (
          <motion.img
            key={index}
            src={img.src}
            alt={`img-${index}`}
            className={`absolute  w-1/2 md:w-auto  ${img.className}`}
            initial={{ y: -1000, opacity: 0, 
              rotate: img.rotate  }}
            animate={{
              y: 0,
              rotate: img.rotate, // Maintain assigned rotation
              opacity: 1,
              
              transition: {
                type: "spring",
                duration: 1.5,
                delay: index * 0.2,
                bounce: 0.2,
                damping: 10,
                stiffness: 100,
              },
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
              cursor: "grab",

            }}
            whileDrag={{
              cursor: "grabbing",
            }}
          />
        ))}

      <h1
        className="absolute  md:block hidden cursor-pointer !bottom-2 md:bottom-10 tracking-wide text-[#0000FF]   text-center text-2xl md:text-[20px]"
        onClick={scrollToBottom}
      >
        Scroll Down
      </h1>
      {/* <div className=" absolute">Scroll Down</div> */}
    </div>
  );
};

export default Contact;

import { useInView } from "framer-motion";
import { useRef } from "react";
