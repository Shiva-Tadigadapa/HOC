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
            // isFixed  w-full z-[500] top-0 left-0 ${
            isSection2 ? "bg-white text-black" : "  text-[#000000]"
          } transition-all  py-2 duration-700`}
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
        <div className="   bg-black  z-[1] mx-auto overflow-x-visible  items-center  flex-col  -space-y-24 relative justify-center  h-[214vh] mt-20 rounded-3xl   flex px-10">
          <MainServices />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Contact;

import blackgrid from "../assets/blackgrid.png";
import wiresm from "../assets/wiresm.png";
import plugservicesleft from "../assets/plugservicesleft.png";
import plugservicesright from "../assets/plugservicesright.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
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
    });

    gsap.set(stops, { autoAlpha: 1, scale: 0, transformOrigin: "center" });
    gsap.set(texts, { color: "#676767" }); // Set initial text color to gray

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
          onEnter: () =>
            gsap.to(texts[index], { color: "blue", duration: 0.5 }), // Change text color to blue
          onLeaveBack: () =>
            gsap.to(texts[index], { color: "#676767", duration: 0.5 }), // Change back to gray
        },
      });
    });
  }, []);

  return (
    <>
      <div className="flex items-start overflow-x-visible  w-full justify-start h-full px-16 py-32">
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
        <div className="flex flex-col -space-y-16 uppercase z-[100] text-[108px] font-[1000] text-[#060ebb] alinsa">
          <div className="flex relative">
            <h1 className="z-[100]">Our</h1>
            <img
              src={wiresm}
              className="-ml-2 mt-9 w-[80px] h-[80px] object-cover"
              alt=""
            />
            <img
              src={plugservicesleft}
              className="absolute w-1/3 right-16 -top-10 z-[100]"
              alt=""
            />
            <img
              ref={plugRightRef}
              src={plugservicesright}
              className="absolute w-1/2 scale-90 -right-[116px] mr-2.5 -mt-0.5 -top-12 z-[90]"
              alt=""
              style={{ transformOrigin: "right center" }}
            />
          </div>
          <h1>Services</h1>
        </div>

        <svg
          className="line absolute left-1/2 ml-20    mt-8 transform -translate-x-1/2"
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
          {[
            {
              cx: 300,
              cy: 200,
              label: "CGI + Motions Graphics",
              dis: "We don't pull numbers out of thin air. We size up your project, giving you a clear cost and timeline.",
            },
            {
              cx: 300,
              cy: 600,
              label: "Experiential Mapping",
              dis: "Industry jargon? Not here. We get to the core of your industry and highlight what sets you apart.",
            },
            {
              cx: 300,
              cy: 1000,
              label: "Physical Computing",
              dis: "Clear numbers and deadlines. We value your time and wallet. Team and Resources: Handpicked talent, no seatfillers. We set a game plan that everyone can rally behind.",
            },
            {
              cx: 300,
              cy: 1400,
              label: "Hybrid Communication Solutions",
              dis: "Estimate costs and timeline with laser-like accuracy(within 15% by project's end)",
            },
          ].map((stop, i) => (
            <g key={i}>
              {/* Circle (Stop Point) */}

              <circle
                ref={(el) => (stopsRef.current[i] = el)}
                cx={stop.cx + 8} // Move circle 10px to the right
                cy={stop.cy - 75}
                r="6"
                fill="blue"
                data-svg-origin="308 90"
              ></circle>
              {/* Label inside foreignObject */}

              <foreignObject
                x={stop.cx - 200}
                y={stop.cy - 100}
                width="400"
                height="200"
                className="foreign-label overflow-visible"
              >
                <Label
                  number={i + 1}
                  className="text-white"
                  title={stop.label}
                  description={stop.dis}
                  textRef={(el) => (textRefs.current[i] = el)}
                />
              </foreignObject>
            </g>
          ))}
        </svg>
      </div>
    </>
  );
};
const Label = ({ number, title, description, textRef }) => {
  return (
    <div
      class="flex  gap-4 items-start text-left  jost  ml-60  w-[40vw]  text-gray-500 px-4"
      ref={textRef}
    >
      <div class="font-[500] text-3xl mb-2">{number}</div>

      <div>
        <h1 class="text-3xl uppercase font-[500] mb-2">{title}</h1>
        <p class="text-lg w-[80%] font-[500] ">{description}</p>
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
