"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {  pastors, Tour } from "../../data/pastors";  
import { FaWhatsapp } from "react-icons/fa";

export default function TourPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;
  const tour: Tour | undefined = pastors.find((t) => t.slug === slug);

  const [selected, setSelected] = useState<any>(null);

  const BRAND = "#0A7BBE";

  if (!tour) {
    return <div className="p-20 text-center text-2xl">Tour Not Found</div>;
  }

  return (
    <section className="w-full">

      {/* ================= HERO ================= */}
      <div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
        <Image
          src={tour.heroImage || "/fallback.jpg"}
          alt={tour.title}
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold text-center px-4">
            {tour.title}
          </h1>
        </div>
      </div>

      {/* ================= INTRO ================= */}
      <div className="max-w-4xl mx-auto px-6 py-14 text-center">
        <p className="text-gray-600 text-lg leading-relaxed">
          {tour.overview}
        </p>
      </div>

      {/* ================= SECTION TITLE ================= */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[#2f3b4a]">
          Our Experiences
        </h2>
        <p className="text-gray-500 mt-2">
          Discover moments crafted for unforgettable memories
        </p>
      </div>

      {/* ================= GRID ================= */}
      <div className="grid gap-10 px-6 md:px-12 pb-20 sm:grid-cols-2 lg:grid-cols-3">

        {tour.itinerary.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="cursor-pointer group"
            onClick={() => setSelected(item)}
          >
            {/* IMAGE */}
            <div className="relative w-full h-[320px] overflow-hidden rounded-xl">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* subtle overlay */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition" />
            </div>

            {/* TEXT */}
            <div className="mt-4 text-center">
              <h3 className="text-lg font-semibold text-[#2f3b4a] group-hover:text-[#0A7BBE] transition">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                {item.subtitle || "Explore more"}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white max-w-2xl w-full rounded-2xl overflow-hidden"
            >

              {/* IMAGE */}
              <div className="relative h-[250px]">
                <Image
                  src={selected.image}
                  alt={selected.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6 text-center">

                <h2
                  className="text-2xl font-bold mb-3"
                  style={{ color: BRAND }}
                >
                  {selected.title}
                </h2>

                <p className="text-gray-600 mb-4">
                  {selected.description}
                </p>

                {/* highlights */}
                <ul className="text-left mb-6 space-y-2">
                  {selected.highlights?.map((h: string, i: number) => (
                    <li key={i} className="flex gap-2">
                      <span style={{ color: BRAND }}>✓</span> {h}
                    </li>
                  ))}
                </ul>

                {/* BUTTON */}
                <a
                  href={`https://wa.me/201288062555?text=${encodeURIComponent(
                    `Hello, I'm interested in ${selected.title}`
                  )}`}
                  target="_blank"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white"
                  style={{ backgroundColor: BRAND }}
                >
                  <FaWhatsapp />
                  Book Now
                </a>

                {/* CLOSE */}
                <button
                  onClick={() => setSelected(null)}
                  className="block mt-4 text-gray-400 hover:text-black"
                >
                  Close
                </button>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}