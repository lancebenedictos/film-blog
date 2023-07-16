"use client";

import { motion, useScroll, useTransform } from "framer-motion";

import {
  CameraIcon,
  Clover,
  Flower2,
  Heart,
  Instagram,
  Leaf,
  MapPin,
  Sprout,
} from "lucide-react";
import { useRef, useState } from "react";

const containerTransition = {
  staggerChildren: 0.05,
};

const waveText =
  "Film by Paula • @filmbypaula_ • Toronto • Papershoot • ".split("");

export default function Home() {
  const firstSectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: firstSectionRef,
    offset: ["start start", "end end"],
  });

  const sec1Images = [
    "/sec1-1.png",
    "/sec1-2.png",
    "/sec1-3.png",
    "/0.jpg",
    "/5.jpg",
  ];
  const xOutputRange = `-${(sec1Images.length - 1) * 100}%`;
  const scale = useTransform(scrollYProgress, [0, 0.6], [1, 1.5]);
  const x = useTransform(scrollYProgress, [0, 0.5], ["0%", xOutputRange]);

  const range = (from: number, to: number, step: number) =>
    [...Array(Math.floor((to - from) / step) + 1)].map(
      (_, i) => from + i * step
    );
  const layerOne = range(0, 10, 1);
  const layerTwo = range(10, 19, 1);
  const layerThree = range(20, 29, 1);
  return (
    <motion.div className={`relative min-h-screen `}>
      <nav className="flex justify-around fixed w-full p-4 top-0 bg-red-300  z-50">
        <a
          href="https://www.instagram.com/filmbypaula_/"
          target="_blank"
          className="flex gap-2 text-white font-semibold"
        >
          <Instagram />
          <p>@filmbypaula_</p>
        </a>
      </nav>
      <header className="h-[100vh] w-full relative bg-red-300  ">
        <div className=" absolute h-full top-0 w-full z-10 flex flex-col">
          <span className="flex flex-col items-center p-16 gap-2">
            <CameraIcon className="w-[40px] h-[40px] text-white" />
          </span>
          <div className="absolute right-2 top-1/2 -translate-y-1/2 -z-10 flex flex-col gap-2 w-1/2 max-w-[500px]">
            <div className="overflow-clip w-full border-white border-4 rounded-md">
              <motion.img
                src="/container.png"
                alt="Container in stakt market"
                className="  w-full "
                initial={{ scale: 1.5 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 5 }}
              />
            </div>
            <span className="flex gap-2">
              <MapPin />
              <p>Stackt Market</p>
            </span>
          </div>
          <div className="mt-auto flex justify-around pb-4">
            <Flower2 />
            <Leaf />
            <Clover />
            <Sprout />
            <Heart />
            <CameraIcon />
            <Flower2 />
            <Leaf />
            <Clover />
            <Sprout />
            <Heart />
            <CameraIcon />
          </div>

          <svg
            viewBox="0 0 975 75"
            xmlns="http://www.w3.org/2000/svg"
            className=" overflow-visible pt-1/2 absolute top-1/2 -translate-y-1/2"
          >
            <path
              d="M1 60.9999C407 328 437 -161 1000 60.9999"
              id="curve"
              fill="transparent"
              className="w-full"
            />
            <motion.text transition={containerTransition}>
              {waveText.map((word, index) => (
                <motion.textPath
                  id="text-path"
                  href="#curve"
                  startOffset={0}
                  initial={{ startOffset: "100%" }}
                  animate={{ startOffset: "-50%" }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "linear",
                    delay: (6 / waveText.length) * index,
                    repeatDelay: 0,
                  }}
                  className=" text-2xl prevent-select mix-blend-overlay z-20"
                  key={index}
                >
                  {word}
                </motion.textPath>
              ))}
            </motion.text>
          </svg>
        </div>
      </header>

      <main>
        <section className="h-[500vh] relative " ref={firstSectionRef}>
          {/* view port */}
          <motion.div
            className="h-[90vh] w-full sticky flex justify-center items-center  overflow-x-hidden top-0 left-0  mb-auto"
            // style={{ position }}
          >
            <motion.div
              className=" w-[500px] aspect-video  flex relative z-20"
              style={{ scale }}
            >
              {sec1Images.map((path, index) => (
                <motion.span
                  key={index}
                  style={{ x }}
                  className="shrink-0 w-full h-full flex flex-col"
                >
                  <span className="bg-black w-full flex justify-around py-1 ">
                    <span className="bg-white h-6 w-3 block rounded-sm"></span>
                    <span className="bg-white h-6 w-3 block rounded-sm"></span>{" "}
                    <span className="bg-white h-6 w-3 block rounded-sm"></span>{" "}
                    <span className="bg-white h-6 w-3 block rounded-sm"></span>{" "}
                    <span className="bg-white h-6 w-3 block rounded-sm"></span>
                    <span className="bg-white h-6 w-3 block rounded-sm"></span>
                  </span>
                  <motion.img
                    src={path}
                    className=" object-cover px-4 bg-black aspect-video"
                  />
                  <span className="bg-black w-full flex justify-around py-1 ">
                    <span className="bg-white h-6 w-3 block rounded-sm"></span>
                    <span className="bg-white h-6 w-3 block rounded-sm"></span>
                    <span className="bg-white h-6 w-3 block rounded-sm"></span>
                    <span className="bg-white h-6 w-3 block rounded-sm"></span>
                    <span className="bg-white h-6 w-3 block rounded-sm"></span>
                    <span className="bg-white h-6 w-3 block rounded-sm"></span>
                  </span>
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </section>
        <section>
          <motion.div className=" w-full h-[100vh] my-auto left-0 z-10 flex flex-col justify-around gap-4 overflow-hidden pt-20">
            <motion.div
              className="flex gap-4 h-1/5 items-center"
              initial={{ x: "0%" }}
              animate={{ x: "-100%" }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
                repeatDelay: 0,
              }}
            >
              {layerOne.map((num) => (
                <motion.img
                  key={num}
                  src={`/${num}.jpg`}
                  className=" object-cover aspect-video h-full shrink-0"
                />
              ))}
            </motion.div>

            <motion.div
              className="flex gap-4 h-1/5 items-center"
              initial={{ x: "-80%" }}
              animate={{ x: "0%" }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
                repeatDelay: 0,
              }}
            >
              {layerTwo.map((num, index) => (
                <motion.img
                  key={num}
                  src={`/${num}.jpg`}
                  className=" object-cover aspect-video h-full shrink-0"
                />
              ))}
            </motion.div>

            <motion.div
              className="flex gap-4 h-1/5 items-center"
              initial={{ x: "0%" }}
              animate={{ x: "-100%" }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
                repeatDelay: 0,
              }}
            >
              {layerThree.map((num) => (
                <motion.img
                  key={num}
                  src={`/${num}.jpg`}
                  className=" object-cover aspect-video h-full shrink-0"
                />
              ))}
            </motion.div>

            <motion.div
              className="flex gap-4 h-1/5 items-center"
              initial={{ x: "-80%" }}
              animate={{ x: "0%" }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
                repeatDelay: 0,
              }}
            >
              {layerOne.map((num) => (
                <motion.img
                  key={num}
                  src={`/${num}.jpg`}
                  className=" object-cover aspect-video h-full shrink-0"
                />
              ))}
            </motion.div>
          </motion.div>
        </section>
      </main>
    </motion.div>
  );
}
