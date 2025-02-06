import React from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import tvpng from "../assets/tv.png";
import worldsmall from "../assets/worldsmall.png";
import logo from "../assets/logo.png";
import logo2 from "../assets/logo2.png";
import { Link } from "react-router-dom";

import logo1 from "../assets/logo.png";
import befooter from "../assets/befooter.png";

import { useState, useEffect, useRef } from "react";

const Ethos = () => {
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
        <div className="    items-end   h-full mt-20  bottom-0 flex px-10">
          <div className="  capitalize  w-[100%]">
            <h2 className="jost text-[26px] text-left leading-[40px]">
              <span className=" text-[45px]  salo uppercase  text-[#060ebb]">
                {" "}
                Haus Of Chaos{" "}
              </span>{" "}
              <span className="   whitespace-nowrap">
                is a process-oriented design firm <br /> that prioritizes {" "}
                innovative forms of communication. <br /> Embracing the concept of{" "}
                
                <span className=" text-[45px]  uppercase salo text-[#060ebb]">
                  {" "}
                  Organized Chaos
                </span>
                <br />
                <span className=" whitespace-nowrap">
                  —akin to chaos theory—our philosophy centers   on <br />
                  challenging conventional{" "}
                </span>
              </span>
              <span className="  text-[45px]  salo uppercase text-[#060ebb]">
                {" "}
                Design{" "}
              </span>{" "}
              paradigms and <br /> integrating the intangible aspects of
              interdisciplinary <br /> design, particularly
              <span className=" text-[45px]  uppercase salo text-[#060ebb]">
                {" "}
                 Transmedia Approaches.
              </span>
            </h2>
          </div>

          {/* Adding smooth infinite rotation */}
          <motion.div
            className="w-[80%]  z-[100]  relative -left-10 top-52 overflow-hidden"
            animate={{ rotate: 360 }}
          >
            <img src={tvpng} className="w-full" alt="Swrill" />
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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Trigger animation once when in view

  return (
    <div className="mt-40 ">
      <div
        ref={ref}
        className=" bg-[#060ebb]   p-8 relative overflow-hidden flex items-center justify-between w-full"
      >
        <div className="px-14   flex flex-col items-start justify-center mt-40 text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-white  alinsa text-[110px] font-bold tracking-wide">
              FOUNDER
            </h1>
          </motion.div>

          <div className="flex w-[88%] -mt-6 flex-col lg:flex-row justify-between items-start gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:w-1/2"
            >
              <p className="text-white text-[26px] jost leading-[37px] mb-8">
                As Experience designers, we never remain neutral. The more
                compelling the story, the greater the influence we hold. Haus of
                Chaos is the intersection of a graphic design house and an
                experimental studio, enabling us to dive into new, experimental
                forms of communication—disrupting and redefining existing norms.
              </p>
              <div className="flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 px-6 py-3 rounded-full font-medium"
                >
                  E-mail
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-6 py-3 rounded-full font-medium"
                >
                  LinkedIn
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
              className="lg:w-1/2 relative  h-full"
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
// import logo1 from "../assets/logo.png";
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

const FAQ_DATA = [
  {
    id: "01",
    question:
      "WIR HABEN UNS BEI AGENTUREN SCHON DIE FINGER VERBRANNT. WIESO IST HAUS OF CHAOS BESSER?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus.",
  },
  {
    id: "02",
    question: "WIESO IST CORPORATE INFLUENCER MARKETING SO WIRKUNGSVOLL?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus.",
  },
  {
    id: "03",
    question:
      "WIR HABEN KAUM/KEINE ZEIT FÜR CONTENT CREATION. WELCHE LÖSUNG GIBT ES IN DEM FALL?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus.",
  },
  {
    id: "04",
    question: "UNSER MARKETINGBUDGET LÄSST KEINE GROSEN SPRÜNGE ZU. WAS TUN?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus.",
  },
  {
    id: "05",
    question: "WIE KÖNNEN WIR UNS DIE ZUSAMMENARBEIT MIT DIR VORSTELLEN?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus.",
  },
  {
    id: "06",
    question: "WELCHES INVEST KOMMT AUF UNS ZU?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus.",
  },
  {
    id: "07",
    question:
      "KATIE, WO BEKOMME ICH DEIN NEUES BUCH ZUM CORPORATE INFLUENCER MARKETING?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus.",
  },
  {
    id: "08",
    question:
      "WIR HABEN INTERNATIONALE KUNDSCHAFT. BEKOMME ICH AUCH ÜBERSETZUNGEN?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus.",
  },
];

const FAQItem = ({ item, isOpen, onToggle }) => {
  return (
    <div className="border-b max-w-2xl border-blue-100/10">
      <button
        className="flex w-full items-center justify-between py-6 text-left"
        onClick={onToggle}
      >
        <div className="flex items-center">
          <span className="text-[#2354CF] font-bold mr-4 text-[32px]">
            {item.id}
          </span>
          <span className="text-white text-2xl">{item.question}</span>
        </div>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          className="text-blue-500 text-2xl ml-4"
        >
          <svg
            width="33"
            height="32"
            viewBox="0 0 33 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_20_2512)">
              <g clip-path="url(#clip1_20_2512)">
                <path
                  d="M19.5509 28.6184L21.5812 26.5881V20.9292H27.2401L29.2704 18.8989H19.5509V28.6184Z"
                  fill="#2354CF"
                />
                <path
                  d="M15.4759 1.01491C15.4759 3.95236 15.4759 12.016 15.4759 14.8238C12.7113 14.8238 4.54689 14.8238 1.66703 14.8238L0.651886 15.8389L1.66703 16.8541H15.4759C15.4759 17.9196 15.4759 29.2807 15.4759 30.663L16.4911 31.6781L17.5063 30.663V16.8541H31.3151L32.3303 15.8389L31.3151 14.8238C29.8752 14.8238 18.615 14.8238 17.5063 14.8238V1.01491L16.4911 -0.000244141L15.4759 1.01491Z"
                  fill="#2354CF"
                />
                <path
                  d="M3.71173 18.8989L5.74203 20.9292H11.401V26.5881L13.4312 28.6184V18.8989H3.71173Z"
                  fill="#2354CF"
                />
                <path
                  d="M13.4312 12.7793V3.05981L11.401 5.09011V10.7491H5.74203L3.71173 12.7793H13.4312Z"
                  fill="#2354CF"
                />
                <path
                  d="M19.5509 12.7793H29.2704L27.2401 10.7491H21.5812V5.09011L19.5509 3.05981V12.7793Z"
                  fill="#2354CF"
                />
              </g>
            </g>
            <defs>
              <clipPath id="clip0_20_2512">
                <rect
                  width="32"
                  height="32"
                  fill="white"
                  transform="translate(0.330017)"
                />
              </clipPath>
              <clipPath id="clip1_20_2512">
                <rect
                  width="32"
                  height="32"
                  fill="white"
                  transform="translate(0.330017)"
                />
              </clipPath>
            </defs>
          </svg>
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 pl-12  text-left text-gray-300">{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="min-h-screen  mt-1  bg-black ">
      <div className=" justify-evenly flex  mx-auto py-32">
        <div className="mb-12  text-left ">
          <h2 className="text-[#2354CF] font-sans text-[90px] ">FAQS</h2>
          <p className="text-[#F4ECE0] text-[15px] font-bold">
            HÄUFIG GESTELLTE FRAGEN
          </p>
        </div>

        <div className="space-y-2">
          {FAQ_DATA.map((item) => (
            <FAQItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() => handleToggle(item.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
