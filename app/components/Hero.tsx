"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

/* ---------------- SLIDES DATA (ONLY 2) ---------------- */
const slides = [
  {
    heading: [
      "For God.",
      "For People.",
      "For the City.",
      "For the World.",
    ],
    text: "Welcome to a place where the gospel is central and Jesus is always the lead story. We are a Jesus church and want to gather in worship and scatter to shine His light and love throughout the city and beyond.",
  },
  {
    heading: [
      "Built on Faith.",
      "Driven by Love.",
      "Serving the City.",
      "Reaching the World.",
    ],
    text: "We exist to impact lives through Christ-centered teaching, authentic community, and a Living Faith to transform our world one life at a time.",
  },
];

/* ---------------- HERO ---------------- */
export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-white pt-20 lg:pt-20">
      {/* BOXED HERO */}
      <div className="relative mx-auto w-[96%] lg:w-[100%] max-w-7xl h-[85vh] lg:h-[90vh] overflow-hidden rounded-[40px] shadow-2xl">

        {/* FALLBACK IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{ backgroundImage: "url('/hero-poster.png')" }}
        />

        {/* VIDEO */}
        <video
          className="absolute inset-0 h-full w-full object-cover scale-110 object-[center_60%]"
          src="/hero-video.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        {/* LEFT GRADIENT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

        {/* CONTENT */}
        <div className="relative z-10 flex h-full items-center px-6 sm:px-10 lg:px-16">
          <AnimatePresence mode="wait">
            <TextBlock key={current} slide={slides[current]} />
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

/* ---------------- TEXT BLOCK ---------------- */
function TextBlock({ slide }: { slide: any }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.2 },
        },
      }}
      className="
        w-full
        flex flex-col
        items-start text-left
        max-w-2xl
      "
    >
      {/* HEADING */}
      <div className="space-y-1 sm:space-y-2">
        {slide.heading.map((line: string, i: number) => (
          <motion.h1
            key={i}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
            className="
              text-4xl sm:text-6xl md:text-5xl lg:text-7xl xl:text-6xl
              font-extrabold
              text-white
              leading-tight
            "
          >
            {line}
          </motion.h1>
        ))}
      </div>

      {/* PARAGRAPH */}
      <motion.p
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.7 }}
        className="
          mt-5
          text-1xl sm:text-base lg:text-lg
          text-white/80
          max-w-lg
        "
      >
        {slide.text}
      </motion.p>

      {/* BUTTON */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.7 }}
        className="mt-6 sm:mt-8"
      >
        <Link href="/about">
          <button className="bg-[#5c6f87] hover:bg-black transition px-6 sm:px-8 py-3 sm:py-4 rounded-full text-white font-semibold text-sm sm:text-base">
            Learn More
          </button>
        </Link>
      </motion.div>
    </motion.div>
  );
}
