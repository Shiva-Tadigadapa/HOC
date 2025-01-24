import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo2.png";
import logo1 from "../assets/logo.png";
import swrillpng from "../assets/swrill2.png";
import worldsmall from "../assets/worldsmall.png";
import labsvg from "../assets/labsvg.svg";
import ScrollToMoveImage from "./Services";
import { useScroll } from "framer-motion";

import { useEffect } from "react";
import noswitch from "../assets/noswitch.svg";
import Swrillmaker from "./Services";
const Home = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
});


  const swrillimageref = useRef(null);
  return (
    <>
    <div  ref={ref} className="h-[200vh] relative">

      <div className="bg-white jost relative" style={{ minHeight: "100vh" }}>
  
        <div className="absolute  transform -bottom-40 flex px-10">
          <div>
            <h1 className="text-[48px] salo md:text-[110px] text-[#0000FF] font-[400] text-left leading-tight md:leading-normal">
              WHO WE ARE
            </h1>
            <h2 className="jost text-[40px]  whitespace-nowrap w-[100%] text-left leading-[40px]">
              A seriously playful process-oriented <br /> experience design studio that
              disrupts, <br /> questions, and creates narrative <br /> environments and
              experiences for brands <br /> worldwide
            </h2>
          </div>

          {swrillimageref.current && (
    <Swrillmaker scrollYProgress={scrollYProgress} targetRef={swrillimageref} />
)}

        </div>
      </div>

      <div className="     !z-[-1]    mt-60 flex px-10">
        {/* Adding smooth infinite rotation */}
        <motion.div
          ref={swrillimageref}
          className="w-[100%] !z-[150]  overflow-hidden transform translate-x-[-50px] md:translate-x-[-120px]"
        >
          {/* <img src={swrillpng} className="w-[80%]" alt="Swrill" /> */}
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
        <div className=" text-[22px]  flex gap-4  text-[#2354CF]  leading-[32px]  tracking-widest bottom-[20rem] whitespace-nowrap -right-20    absolute rotate-[90deg]">
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
    </div>

      <SecondSection />
      <ThridSection />
      <FAQ /> 
      <Footer />
    </>
  );
};

export default Home;
// import  {   useState } from "react";
// import { motion } from "framer-motion";
import two from "../assets/plugwhiteb.png";
import three from "../assets/plugwhitebleft.png";
import linelab from "../assets/linelab.png";

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
    if (scrollY > sectionBounds.bottom) return (sectionBounds.bottom - sectionBounds.top) * 0.07; // After section ends
    return (scrollY - sectionBounds.top) * 0.18; // Inside section
  };

  const moveImageTwo = (scrollY) => {
    if (scrollY < sectionBounds.top) return 0; // Before section starts
    if (scrollY > sectionBounds.bottom) return (sectionBounds.bottom - sectionBounds.top) * -0.07; // After section ends
    return (scrollY - sectionBounds.top) * -0.18; // Inside section
  };

  return (
    <div ref={sectionRef} className="overflow-hidden py-20">
      <div className="bg-black py-20 flex flex-col gap-10">
        <div>
          <h1 className="text-[#F4ECE0] text-[110px] leading-[97px] text-center salo">
            Experience Lab
          </h1>
          <h2 className="text-white text-[30px] text-center jost">
            Spaces speak and spaces narrate
          </h2>
        </div>
        <div className="relative flex justify-center items-center gap-10 h-[300px]">
          {/* LineLab Image */}
          <img
            src={linelab}
            className="w-[40%] left-[4rem] top-1/2 -mt-[1.2px] absolute"
            alt="Lab"
          />

          {/* Three Image */}
          <motion.img
            src={three}
            className="w-[10%] z-[10] absolute left-[35%]"
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
            className="w-[14%] z-[2] absolute right-[35%] !-mr-10"
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
        <h1 className="px-20 text-2xl text-white text-center jost">
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
    question: "What services does your firm provide?",
    answer:
      "We specialize in creating immersive brand experiences, including experiential design, branding, communication strategy, and curated touchpoints for brands and companies.",
  },
  {
    id: "02",
    question: "How do I begin working with your team?",
    answer:
      "The first step is to schedule a consultation. This allows us to understand your brand, goals, and target audience before crafting a bespoke solution for your needs.  ",
  },
  {
    id: "03",
    question: "What industries do you typically work with?",
    answer:
      "Our clients span industries such as luxury retail, hospitality, real estate, tech, and more. If your brand seeks to deliver an elevated, meaningful experience, we’d love to collaborate.  ",
  },
  {
    id: "04",
    question: "What does your process look like ?",
    answer:
      "Our process includes a discovery phase, research and strategy development, creative ideation, design execution, and final implementation. Every step is tailored to ensure the experience we create is aligned with your brand’s vision.  ",
  },
  {
    id: "05",
    question: "Will I have input throughout the project?",
    answer:
      "Absolutely. We believe in collaboration and will keep you involved throughout the process to ensure the results resonate with your vision and goals.  ",
  },
  {
    id: "06",
    question: "Do you take on international clients ?",
    answer:
      "Yes, we work with clients globally and have extensive experience managing remote collaborations seamlessly.",
  },
  {
    id: "07",
    question: "How is pricing determined?",
    answer:
      "Pricing is bespoke, tailored to the scope and complexity of the project. After our initial consultation, we’ll provide you with a detailed proposal and estimate.  ",
  },
  {
    id: "08",
    question: "Do you offer retainers for ongoing collaboration?",
    answer:
      "Yes, we provide retainer options for clients looking for continuous support in curating and evolving their brand experiences.",
  },
  {
    id: "09",
    question: "What payment structures do you offer?",
    answer:
      "We typically require a deposit to initiate the project, with the balance divided across key milestones or paid upon completion. Payment plans can also be customized based on your preferences.",
  },
  {
    id: "10",
    question: "What will I receive upon project completion?",
    answer:
      "Depending on the project, you’ll receive a full suite of deliverables, including brand guidelines, digital and print-ready assets, and any experiential components created as part of the project.  ",
  },
  {
    id: "11",
    question: "Do you offer support after the project is complete?",
    answer:
      "Of course! We are happy to collaborate with your in-house team and align with any existing brand guidelines to create cohesive and impactful experiences. ",
  },
  {
    id: "12",
    question: "Can you integrate with our existing team or brand guidelines?",
    answer:
      "Of course! We are happy to collaborate with your in-house team and align with any existing brand guidelines to create cohesive and impactful experiences.  ",
  },
  {
    id: "12",
    question: "Do you provide event-based experiential design services?",
    answer:
      "Yes, we curate and design immersive experiences for events, launches, and activations that bring your brand to life.  ",
  },
  {
    id: "13",
    question: "Do you provide event-based experiential design services?",
    answer:
      "Yes, we curate and design immersive experiences for events, launches, and activations that bring your brand to life.  ",
  },
  {
    id: "14",
    question: "How do you measure the success of a brand experience?",
    answer:
      "We define success based on your goals, which may include metrics such as increased engagement, strengthened client relationships, or elevated brand perception. We’ll work with you to establish benchmarks and assess outcomes.",
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
