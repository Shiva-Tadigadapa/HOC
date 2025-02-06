import React, { useRef, useState, useCallback, useEffect } from "react";
import { motion, useTransform } from "framer-motion";
import swrillpng from "../assets/swrill2.png";

const Swrillmaker = ({ scrollYProgress, targetRef }) => {
  const contentRef = useRef(null);
  const [position, setPosition] = useState({
    targetX: 0,
    targetY: 0,
    targetWidth: 0,
    initialWidth: 0,
  });

  const calculatePosition = useCallback(() => {
    if (!targetRef.current || !contentRef.current) return;

    const targetRect = targetRef.current.getBoundingClientRect();
    const contentRect = contentRef.current.getBoundingClientRect();

    setPosition({
      targetX: targetRect.left - contentRect.left,
      targetY: targetRect.top - contentRect.top,
      targetWidth: targetRect.width,
      initialWidth: contentRect.width,
    });
  }, [targetRef]);

  useEffect(() => {
    calculatePosition();

    const handleResize = () => {
      calculatePosition();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [calculatePosition]);

  // Start animation after 50% of the scroll
  const startProgress = 0.5;

  const x = useTransform(
    scrollYProgress,
    [startProgress, 1],
    [0, position.targetX]
  );
  const y = useTransform(
    scrollYProgress,
    [startProgress, 1],
    [0, position.targetY]
  );

  // Reverse size scaling for big-to-small effect
  const width = useTransform(
    scrollYProgress,
    [startProgress, 1],
    [position.targetWidth, 450] // Start big, end small
  );
  const height = useTransform(
    scrollYProgress,
    [startProgress, 1],
    [200, 400] // Start big, end small
  );

  const borderRadius = useTransform(
    scrollYProgress,
    [startProgress, 1],
    [48, 16]
  ); // Adjust border radius

  return (
    <motion.div
      className="w-[250%]  md:block hidden overflow-visible !z-[100]"
      style={{ x, y, width, height, borderRadius }}
      ref={contentRef}
    >
      {/* Apply rotation directly to the image */}
      <motion.img
        src={swrillpng}
        className="w-full ml-40  -mt-14 !z-[150]"
        alt="Swrill"
        animate={{ rotate: 360 }}
        transition={{
          duration: 10, // Adjust rotation speed
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </motion.div>
  );
};

export default Swrillmaker;
