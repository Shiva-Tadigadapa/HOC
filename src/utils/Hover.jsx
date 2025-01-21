import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import svg1 from "../assets/labstickers/cur1.png";
import svg2 from "../assets/labstickers/cur2.png";
import svg3 from "../assets/labstickers/cur3.png";
import svg4 from "../assets/labstickers/energy3dsign331 3.png";
import svg5 from "../assets/labstickers/SVG-1.png";

  

const CursorHover = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [images, setImages] = useState([]);
    const imagePaths = [
        svg1,
        svg2,
        svg3,
        svg4,
        svg5
    ];
  
    // Throttle control
    const [lastImageTime, setLastImageTime] = useState(0);
    const IMAGE_DELAY = 100; // Minimum time in ms between images
  
    // Track cursor position and add images with throttling
    useEffect(() => {
      const handleMouseMove = (e) => {
        const now = Date.now();
        if (now - lastImageTime < IMAGE_DELAY) return; // Skip if too soon
        setLastImageTime(now);
  
        setCursorPosition({ x: e.clientX, y: e.clientY });
  
        // Add a new image with random direction
        const newImage = {
          id: Math.random(), // Unique ID for each image
          src: imagePaths[Math.floor(Math.random() * imagePaths.length)],
          x: e.clientX,
          y: e.clientY,
          offsetX: Math.random() * 100 - 50, // Random offset for X-axis
          offsetY: Math.random() * 100 - 50, // Random offset for Y-axis
        };
        setImages((prev) => [...prev, newImage]);
  
        // Remove the image after it animates out
        setTimeout(() => {
          setImages((prev) => prev.filter((img) => img.id !== newImage.id));
        }, 1000); // 1 second duration
      };
  
      window.addEventListener("mousemove", handleMouseMove);
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }, [lastImageTime, imagePaths]);
  
    return (
      <div className="pointer-events-none fixed inset-0 z-[9999]">
        {images.map((img) => (
          <motion.img
            key={img.id}
            src={img.src}
            alt="hover-effect"
            className="absolute object-cover w-40 h-40  "
            initial={{
              x: img.x,
              y: img.y,
              opacity: 1,
              scale: 1,
            }}
            animate={{
              x: img.x + img.offsetX,
              y: img.y + img.offsetY,
              opacity: 0,
              scale: 0.5,
            }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        ))}
      </div>
    );
  };
  
  export default CursorHover;
  