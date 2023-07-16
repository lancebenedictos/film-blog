"use client";
import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import cameraAnimation from "../public/cameraLoader.json";
import { motion } from "framer-motion";

const animationVariants = {
  off: { opacity: 0 },
  flash: {
    opacity: [0.8, 1, 1, 1, 1, 1],
    transition: { duration: 2 },
  },
};

const containerVariants = {
  flash: {
    opacity: [1, 0.8, 0.5, 0.3, 0.2, 0],
    transitionEnd: {
      display: "none",
    },
    transition: { delay: 4, duration: 1 },
  },
};

function Loader() {
  const [flash, setFlash] = useState(false);
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => {};
  }, []);

  return (
    <motion.div
      className="w-[100vw] h-[100vh] bg-red-300 flex items-center justify-center fixed top-0 left-0 z-[1000] "
      animate="flash"
      variants={containerVariants}
      onAnimationComplete={() => {
        document.body.classList.remove("overflow-hidden");
      }}
    >
      <motion.div
        className="w-[100vw] h-[100vh] fixed top-0 left-0 bg-white z-10"
        variants={animationVariants}
        initial="off"
        animate={flash ? "flash" : "off"}
      ></motion.div>
      <Lottie
        animationData={cameraAnimation}
        loop={false}
        className="w-[200px]"
        onComplete={() => {
          setFlash(true);
        }}
      />
    </motion.div>
  );
}

export default Loader;
