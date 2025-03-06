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
import Footer from "./Footer";
import MobileNav from "./MobileNav";

import { motion } from "framer-motion";
import { div } from "framer-motion/client";
import Scene from "./Model";
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

        <div
          ref={bottomPageRef}
          className="items-center BOTTOM-PAGE   flex-col md:-space-y-24 relative justify-center h-screen mt-10 flex md:px-10"
        >
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
            className="jost font-[500] w-full flex items-center justify-center text-xl md:!mt-24   md:text-base md:text-left z-[10]"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 12,
              delay: 0.2,
            }}
          >
            <div className="flex jost w-full md:flex-row flex-col items-center justify-between  px-10 mt-4 gap-10">
              <div>
                <h1 className=" text-[#2354CF] text-lg leading-3">Email</h1>
                <h2>explore@hausofchaos.co</h2>
              </div>
              {/* <div>
                <h1 className=" text-[#2354CF] text-lg leading-3">Address</h1>
                <h2>4th floor no 9,Seshadri Road ,Teynampet , Chennai -18 </h2>
              </div> */}
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
// import dragme1 from "../assets/svgs/Dragme.svg";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei"; // Removed incorrect useInView import
// import { motion, useInView } from "framer-motion"; // Import useInView from framer-motion
// import { useRef, useEffect, useState } from "react";

// Import SVGs
// import instasvg from "../assets/svgs/insta.svg";
// import facebook from "../assets/svgs/facebook.svg";
// import dragleft from "../assets/svgs/dragmeleft.svg";
// import dragright from "../assets/svgs/dargmeright.svg";
// import bhance from "../assets/svgs/behance.svg";
// import dribble from "../assets/svgs/dribble.svg";
// import svg4 from "../assets/hover/element3-min.png";
// import svg5 from "../assets/hover/element5-min.png";
// import svg6 from "../assets/hover/element6-min.png";

// // GLTF Model Component
// const ITEM_TYPE = {
//   MODEL: "model",
//   IMAGE: "image",
// };

// // Asset Model component with dynamic path loading
// const AssetModel = ({ modelPath, scale = 3, rotation = { x: 0, y: 0, z: 0 } }) => {
//   const { scene } = useGLTF(modelPath);

//   useEffect(() => {
//     if (scene) {
//       scene.rotation.x = rotation.x;
//       scene.rotation.y = rotation.y;
//       scene.rotation.z = rotation.z;
//     }
//   }, [scene, rotation]);

//   return <primitive object={scene} scale={scale} />;
// };


// // The unified container that handles both 3D models and images
// const AssetContainer = ({
//   type,
//   className,
//   link,
//   modelPath = null,
//   imageSrc = null,
//   modelScale = 3.5,
//   onDragStart,
//   modelRotation = { x: 0, y: 0, z: 0 }, // Add this
//   onDragEnd,
//   onClick,
//   index,
// }) => {
//   const controlsRef = useRef();

//   // Disable zoom functionality for 3D models
//   useEffect(() => {
//     if (type === ITEM_TYPE.MODEL && controlsRef.current) {
//       controlsRef.current.enableZoom = false;
//     }
//   }, [type]);

//   // Custom animation parameters based on type and index
//   const getAnimationParams = (index) => {
//     const baseDelay = type === ITEM_TYPE.MODEL ? 0.3 : 0.2;
//     const duration = type === ITEM_TYPE.MODEL ? 1 : 1.5;
//     const customBounce = type === ITEM_TYPE.MODEL ? 1.3 : 1.2;
  
//     return {
//       duration,
//       customBounce,
//       patterns: {
//         y: index % 2 === 0 ? -1200 : -800,
//         rotate: index % 3 === 0 ? 720 : index % 2 === 0 ? 360 : 180,
//         delay: baseDelay * Math.pow(index + 1, 1.2) + Math.random() * 0.8, // More variation
//         damping: index % 2 === 0 ? 12 : 8,
//         stiffness: type === ITEM_TYPE.MODEL ? 80 : 100,
//       },
//     };
//   };
  

//   const { duration, customBounce, patterns } = getAnimationParams();

//   return (
//     <motion.div
//       className={`absolute ${className}`}
//       initial={{ 
//         y: patterns.y, 
//         opacity: 0, 
//         rotate: patterns.rotate 
//       }}
//       animate={{
//         y: 0,
//         opacity: 1,
//         rotate: 0,
//         transition: {
//           type: "spring",
//           duration: duration,
//           delay: patterns.delay,
//           bounce: customBounce,
//           damping: patterns.damping,
//           stiffness: patterns.stiffness,
//         },
//       }}
//       drag
//       dragTransition={{ 
//         bounceStiffness: 200, 
//         bounceDamping: 5 
//       }}
//       dragConstraints={{
//         top: -400,
//         left: -1000,
//         right: 1000,
//         bottom: 200,
//       }}
//       onDragStart={onDragStart}
//       onDragEnd={onDragEnd}
//       onClick={onClick}
//       style={{
//         touchAction: "none",
//         cursor: "default",
//         width: type === ITEM_TYPE.MODEL ? "400px" : "auto",
//         height: type === ITEM_TYPE.MODEL ? "400px" : "auto",
//         overflow: "visible",
//       }}
//       whileHover={{
//         scale: 1.1,
//         cursor: "grab",
//       }}
//       whileDrag={{
//         cursor: "grabbing",
//       }}
//     >
//       {type === ITEM_TYPE.MODEL ? (
//         <Canvas
//           camera={{ position: [0, 15, 0], fov: 30 }}
//           style={{ overflow: "visible", rotate: "180deg" }}
//         >
//           <ambientLight intensity={4} />
//           <pointLight position={[10, 10, 10]} />
//           <OrbitControls
//             ref={controlsRef}
//             enableZoom={false}
//             enablePan={true}
//             enableRotate={true}
//           />
//         <AssetModel modelPath={modelPath} scale={modelScale} rotation={modelRotation} />
//         </Canvas>
//       ) : (
//         <motion.img
//           src={imageSrc}
//           alt="Asset"
//           className="w-full h-full"
//           drag
//           dragConstraints={{
//             top: -400,
//             left: -1000,
//             right: 1000,
//             bottom: 200,
//           }}
//           dragElastic={0.1}
//           whileDrag={{ scale: 1.1 }}
//           whileHover={{ scale: 1.05 }}
//           transition={{
//             type: "spring",
//             stiffness: 400,
//             damping: 20,
//           }}
//         />
//       )}
//     </motion.div>
//   );
// };
// const JobListings = ({ scrollToBottom }) => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });
//   const [isDragging, setIsDragging] = useState(false);

//   const handleClick = (link) => {
//     if (!isDragging) {
//       window.location.href = link;
//     }
//   };

//   // Unified assets array - can contain both model and image types
//   const assets = [
//     {
//       type: ITEM_TYPE.IMAGE,
//       src: svg4,
//       className: "bottom-28 !w-1/4 left-0",
//       link: "/Contact",
//     },
//     {
//       type: ITEM_TYPE.MODEL,
//       modelPath: "/models/linkedin.gltf",
//       className: "-bottom-20 left-20 z-10",
//       link: "https://www.linkedin.com/company/hausofchaos/",
//        modelRotation: { x: Math.PI / 10, y: Math.PI / -1.1, z: Math.PI / 20 },
//     },
//     {
//       type: ITEM_TYPE.MODEL,
//       modelPath: "/models/instagram.gltf", // Assuming you have this model
//       className: "bottom-[14rem] left-[15rem] z-10",
//       link: "https://www.instagram.com/hausofchaos.co/",
//       modelRotation: { x: Math.PI / 25, y: Math.PI / -1.2, z: Math.PI / 20 },

//     },
//     {
//       type: ITEM_TYPE.IMAGE,
//       src: svg5,
//       className: "bottom-28 !w-1/4 left-[25rem]",
//       link: "/Contact",
//     },
//     {
//       type: ITEM_TYPE.MODEL,
//       modelPath: "/models/facebook.gltf", // Assuming you have this model
//       className: "-bottom-16 left-[40rem] z-10",
//       link: "/facebook-page",
//       modelRotation: { x: Math.PI / 10, y: Math.PI / -1.12, z: Math.PI / 10 },

//     },
//     {
//       type: ITEM_TYPE.MODEL,
//       modelPath: "/models/behance.gltf", // Assuming you have this model
//       className: "bottom-60 left-[44rem] z-10",
//       link: "/behance-page",
//       modelRotation: { x: Math.PI / 10, y: Math.PI / 1.2, z: Math.PI / 20 },

//     },
//     {
//       type: ITEM_TYPE.MODEL,
//       modelPath: "/models/dribble.gltf", // Assuming you have this model
//       className: "-bottom-14 -right-6 z-10",
//       link: "/Contact",
//       modelRotation: { x: Math.PI / 20, y: Math.PI / 1.22, z: Math.PI / 40 },

//     },
//     {
//       type: ITEM_TYPE.IMAGE,
//       src: svg6,
//       className: "bottom-60 !w-1/4 right-0",
//       link: "/Contact",
//     },
//   ];

//   return (
//     <div
//       ref={ref}
//       className="w-full h-[100vh] hidden md:flex justify-center items-center relative overflow-hidden"
//     >
//       {isInView && (
//         <>
//          {assets.map((asset, index) => (
//   <AssetContainer
//     key={index}
//     type={asset.type}
//     className={asset.className}
//     link={asset.link}
//     modelPath={asset.type === ITEM_TYPE.MODEL ? asset.modelPath : null}
//     imageSrc={asset.type === ITEM_TYPE.IMAGE ? asset.src : null}
//     modelScale={asset.modelScale || 3.5}
//     modelRotation={asset.modelRotation || { x: 0, y: 0, z: 0 }} // Add this
//     onDragStart={() => setIsDragging(true)}
//     onDragEnd={() => setTimeout(() => setIsDragging(false), 50)}
//     onClick={() => handleClick(asset.link)}
//   />
// ))}

//         </>
//       )}

//       <h1
//         className="absolute cursor-pointer !bottom-2 md:bottom-10 tracking-wide text-[#0000FF] text-center text-2xl md:text-[20px]"
//         onClick={scrollToBottom}
//       >
//         Scroll Down
//       </h1>
//     </div>
//   );
// };

// export default JobListings;

// const images2 = [
//   { src: svg4, className: "  bottom-0 left-0", link: "/Contact" },
//   // { src: linkdsvg, className: " bottom-20 ", link: "https://www.linkedin.com/company/hausofchaos/" },
//   {
//     src: instasvg,
//     className: "  bottom-52 left-0",
//     link: "https://www.instagram.com/hausofchaos.co/",
//   },
//   { src: svg5, className: " bottom-0 right-0 ", link: "/Contact" },
//   { src: facebook, className: " bottom-60 right-0", link: "/facebook-page" },
//   { src: bhance, className: " bottom-40 left-20", link: "/behance-page" },
//   { src: dribble, className: "bottom-72 left-10", link: "/Contact" },
//   { src: svg6, className: "  left-32", link: "/Contact" },
// ];
import dragme1 from "../assets/svgs/Dragme.svg";
import linkdsvg from "../assets/svgs/linkd.svg";
import instasvg from "../assets/svgs/insta.svg";
import facebook from "../assets/svgs/facebook.svg";
import dragleft from "../assets/svgs/dragmeleft.svg";
import dragright from "../assets/svgs/dargmeright.svg";
import bhance from "../assets/svgs/behance.svg";
import dribble from "../assets/svgs/dribble.svg";
import svg4 from "../assets/hover/element3-min.png";
import svg5 from "../assets/hover/element5-min.png";
import svg6 from "../assets/hover/element6-min.png";

import lin from "../assets/lin.png";
import ins from "../assets/ins.png";
// import fab from "../assets/fab.png";
import bhe from "../assets/mail.png";
import dri from "../assets/phone.png";

import arrow from "../assets/down-arrow.png";
const images = [
  { src: svg4, className: "bottom-28 !w-1/4 left-0", link: "/Contact", rotate: 0 },
  { src: lin, className: "bottom-24 !w-[40%] left-10", link: "https://www.linkedin.com/company/hausofchaos/", rotate: -20 },
  { src: ins, className: "bottom-[24rem] !w-[40%] left-[15rem]", link: "https://www.instagram.com/hausofchaos.co/", rotate: -20 },
  { src: svg5, className: "bottom-28 !w-1/4 left-[25rem]", link: "/Contact", rotate: 8 },
  // { src: fab, className: "bottom-0 !w-[40%] left-[40rem]", link: "/facebook-page", rotate: -12 },
  { src: bhe, className: "bottom-60 !w-[40%] left-[40rem]", link: "explore@hausofchaos.co.", rotate: 20 },
  { src: dri, className: "bottom-0 !w-[40%] right-0", link: "/Contact", rotate: 10 },
  { src: svg6, className: "bottom-60 !w-1/4 right-0", link: "/Contact", rotate: 10 },
];
const images2 = [
  { src: svg4, className: "  bottom-0 left-0", link: "/Contact",rotate: 0 },
  { src: lin, className: " bottom-20 ", link: "https://www.linkedin.com/company/hausofchaos/" ,rotate: -20},
  { src: ins, className: "  bottom-52 left-0", link: "https://www.instagram.com/hausofchaos.co/" ,rotate: -20},
  { src: svg5, className: " bottom-0 right-0 ", link: "/Contact",rotate:8 },
  // { src: fab, className: " bottom-60 right-0", link: "/facebook-page",rotate: -12 },
  { src: bhe, className: " bottom-40 left-20", link: "explore@hausofchaos.co.", rotate: 20},
  { src: dri, className: "bottom-72 left-10", link: "/Contact" ,rotate: 10},
  { src: svg6, className: "  left-32", link: "/Contact" ,rotate: 10},
];
const JobListings = ({ scrollToBottom }) => {
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

      <h1 className="absolute  cursor-pointer !bottom-2 md:bottom-10 tracking-wide text-[#0000FF]   text-center text-2xl md:text-[20px]"  onClick={scrollToBottom}>
        <img src={arrow} alt="Arrow" className="w-10" />
      </h1>
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
      // Use your preferred navigation method here
      window.location.href = link;
      // Or with React Router:
      // navigate(link);
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
import heartkey from "../assets/heartkey.png";
import keyvideo from "../assets/key.mp4";

import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md"; // Add this import at the top

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

{
  /* <button className="text-black border-[2px] border-[#000000] rounded-full px-8 font-[700] py-2 mt-4 hover:bg-black hover:text-white transition-all duration-300">
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
        /> */
}
