import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo2.png";
import swrillpng from "../assets/swrill2.png";
import worldsmall from "../assets/worldsmall.png";
import labsvg from "../assets/labsvg.svg";

const Home = () => {
  return (
    <>
      <div className="bg-white jost relative" style={{ minHeight: "100vh" }}>
        {/* Navbar */}
        <div className="flex py-6 px-4 md:px-10 justify-between items-start">
          <img src={logo} className="w-[80px] md:w-[110px]" alt="Logo" />
          <div className="text-[14px] md:text-[19px] font-semibold text-black block md:flex gap-4 md:gap-10 items-center">
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

        {/* Absolutely Centered Text */}
        <div className="absolute  overflow-hidden transform -bottom-40 flex px-10">
          <div>
            <h1 className="text-[48px] salo md:text-[110px] text-[#0000FF] font-[400] text-left leading-tight md:leading-normal">
              WHO WE ARE
            </h1>
            <h2 className="jost text-[40px] w-[90%] text-left leading-[40px]">
              A seriously playful process-oriented experience design studio that
              disrupts, questions, and creates narrative environments and
              experiences for brands worldwide
            </h2>
          </div>

          {/* Adding smooth infinite rotation */}
          <motion.div
            className="w-[150%] z-[100] overflow-hidden transform translate-x-[-50px] md:translate-x-[60px]"
            animate={{ rotate: 360 }}
            transition={{
              duration: 10, // Adjust rotation speed
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <img src={swrillpng} className="w-full" alt="Swrill" />
          </motion.div>
        </div>
      </div>

      <div className="   overflow-hidden transform  mt-60 flex px-10">
        {/* Adding smooth infinite rotation */}
        <motion.div
          className="w-[100%] z-[100] overflow-hidden transform translate-x-[-50px] md:translate-x-[60px]"
          // animate={{ rotate: 360 }}
          // transition={{
          //   duration: 10, // Adjust rotation speed
          //   repeat: Infinity,
          //   ease: "linear",
          // }}
        >
          <img src={swrillpng} className="w-[80%]" alt="Swrill" />
        </motion.div>
        <div className=" w-full whitespace-nowrap mr-20">
          <h1 className="text-[48px] salo md:text-[110px] text-[#0000FF] font-[400] text-right leading-tight md:leading-normal">
            WHAT WE DO
          </h1>
          <h2 className="jost text-[40px]  w-[100%] text-right  leading-[40px]">
            We dabble in graphic design, <br />
             a smidge of branding and packaging,
            <br />
             and focus extensively on experience design to tie <br />
            everything together seamlessly.
          </h2>
        </div>
        <div className=" text-[22px]  flex gap-4  text-[#2354CF]  leading-[32px]  tracking-widest top-40 whitespace-nowrap -right-20    absolute rotate-[90deg]">
          Scroll To Learn More
          <svg
            width="36"
            height="36"
            className=" -rotate-90"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M35.8803 18C35.8803 27.875 27.875 35.8803 18 35.8803C8.12501 35.8803 0.11969 27.875 0.11969 18C0.11969 8.12503 8.12501 0.119705 18 0.119705C27.875 0.119705 35.8803 8.12503 35.8803 18Z"
              fill="#174DD5"
            />
            <path
              d="M24.396 16.5635L18 22.9595L11.604 16.5635"
              stroke="white"
              stroke-width="1.84978"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <SecondSection />
      <ThridSection />
      <Footer />
    </>
  );
};

export default Home;

const SecondSection = () => {
  return (
    <>
      <div className="  overflow-hidden  py-20">
        <div className=" bg-black  py-20 flex flex-col gap-10">
          <div>
            <h1 className=" text-[#F4ECE0] text-[110px] leading-[97px] text-center salo">
              Experience Lab
            </h1>
            <h2 className=" text-white text-[30px] text-center jost">
              Spaces speak and spaces narrate
            </h2>
          </div>
          <div>
            <img src={labsvg} className="w-full" alt="Lab" />
          </div>
          <h1 className=" px-20 text-2xl text-white text-center jost">
            Born from our ethos, the Chaos Lab serves as a testing ground for
            the diverse narrative environments we experiment with and explore.
            Based in India, with plans for growth, we embrace a ‘test-and-learn’
            mindset. Our aim is to decode and disrupt conventional norms and
            beliefs in experimental communication and experience design.
          </h1>
        </div>
        <Partner />
      </div>
    </>
  );
};

import slider1 from "../assets/slider1.png";
import slider2 from "../assets/slider2.png";
import slider3 from "../assets/slider3.png";
import slider4 from "../assets/slider4.png";
import slider5 from "../assets/slider5.png";

const Partner = () => {
  const LOGOS = [
    <img src={slider1} alt="aurobindo" className="  w-72  h-auto" />,
    <img src={slider2} alt="aurobindo" className="  w-72  h-auto" />,
    <img src={slider3} alt="aurobindo" className="  w-72  h-auto" />,
    <img src={slider4} alt="aurobindo" className="  w-72  h-auto" />,
    <img src={slider5} alt="aurobindo" className="  w-72  h-auto" />,
    <img src={slider1} alt="aurobindo" className="  w-72  h-auto" />,
    <img src={slider2} alt="aurobindo" className="  w-72  h-auto" />,
    <img src={slider3} alt="aurobindo" className="  w-72  h-auto" />,
    <img src={slider4} alt="aurobindo" className="  w-72  h-auto" />,
    <img src={slider5} alt="aurobindo" className="  w-72  h-auto" />,
    <img src={slider1} alt="aurobindo" className="  w-72  h-auto" />,
    <img src={slider2} alt="aurobindo" className="  w-72  h-auto" />,
  ];
  return (
    <div className="w-screen py-10   z-[300] overflow-hidden  md:flex items-center relative justify-center  gap-20 flex-col">
      <div
        className="relative items-center justify-center w-[100%] z-[300] overflow-hidden bg-white 
  before:absolute before:z-[300] before:left-0 before:top-0 before:h-full before:w-[200px] 
  before:bg-[linear-gradient(to_right,rgba(227,222,212,0)_100%)] before:content-[''] 
  after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[200px] 
  after:-scale-x-100 after:bg-[linear-gradient(to_right,rgba(255,0,0,0))] after:content-['']"
      >
        <div className="animate-infinite-slider overflow-hidden gap-10 flex w-[calc(350px*10)]">
          {LOGOS.map((logo, index) => (
            <div
              className="slide flex w-[30%] mx-4 items-center justify-center"
              key={index}
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

import one from "../assets/1.webm";
const ThridSection = () => {
  return (
    <>
      <div className=" relative -mt-20">
        <video id="loader-video" autoPlay muted loop playsInline>
          <source src={one} type="video/webm" />
        </video>
        <div className="  absolute -bottom-10 jost  text-center flex-col flex items-center justify-center w-full ">
          <h1 className=" text-[#5B636D]  font-[500] w-1/2 text-[27px] text-center leading-[34px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </h1>
          <h2 className="  text-[#2354CF] text-[20px] mt-2">
          James Lloyd, BBC Science Focus
          </h2>
        </div>
      </div>
    </>
  );
};

import befooter from "../assets/befooter.png";

const Footer =() =>{
  return (
    <>
      <div className=" py-40">
        <img src={befooter} className="  " alt="" />
      </div>
    </>

  )
}