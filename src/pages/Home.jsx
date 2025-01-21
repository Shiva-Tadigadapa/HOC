import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo2.png";
import logo1 from "../assets/logo.png";
import swrillpng from "../assets/swrill2.png";
import worldsmall from "../assets/worldsmall.png";
import labsvg from "../assets/labsvg.svg";

const Home = () => {
  return (
    <>
      <div className="bg-white jost relative" style={{ minHeight: "100vh" }}>
        {/* Navbar */}

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
      <FAQ />
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

const Footer = () => {
  return (
    <>
      <div className=" ">
        <img src={befooter} className="  " alt="" />
        <HausOfChaos />
      </div>
    </>
  );
};

import grid from "../assets/lines.png";
const HausOfChaos = () => {
  return (
    <div className="min-h-screen bg-[#0000FF] text-white relative">
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
            <img src={logo1} className="w-40 mb-8" alt="Haus Of Chaos" />

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
    <div className="min-h-screen mt-60  bg-black ">
      <div className=" justify-evenly flex  mx-auto py-32">
        <div className="mb-12  text-left ">
          <h2 className="text-[#2354CF] salo text-[90px] ">FAQS</h2>
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
