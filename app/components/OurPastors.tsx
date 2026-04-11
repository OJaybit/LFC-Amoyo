'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import { useState, useRef } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import { motion, Variants } from 'framer-motion';

import { pacifico } from '@/app/fonts';
import { pastors } from '../data/pastors';

/* ================= ANIMATION ================= */
const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6 },
  },
};

export default function PopularDestinationsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="px-6 lg:px-20 py-12 bg-[#faf6ef]">

      {/* TITLE */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="text-center mb-10"
      >
        <motion.h2
          variants={item}
          className={`${pacifico.className} text-4xl sm:text-5xl text-[#5c6f87]`}
        >
          Meet Our Pastors
        </motion.h2>
      </motion.div>

      {/* SWIPER */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Swiper
          modules={[Autoplay]}
          loop
          speed={800}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
        >
          {pastors.slice(0, 8).map((pastor, index) => (
            <SwiperSlide key={index}>
              <motion.div
                variants={item}
                className="group bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm flex flex-col h-full hover:-translate-y-2 transition-all duration-300"
              >
                {/* IMAGE */}
                <div className="relative w-full h-[300px] overflow-hidden">
                  <Image
                    src={pastor.heroImage}
                    alt={pastor.cardTitle || pastor.title || 'Pastor image'}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* SHINE EFFECT */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1000" />
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-6 flex flex-col items-center text-center gap-4">
                  <Link href={`/pastors/${pastor.slug}`}>
                    <h3 className="text-xl font-semibold text-[#2f3b4a] hover:text-[#5c6f87] transition">
                      {pastor.cardTitle || pastor.title}
                    </h3>
                  </Link>

                  <Link href={`/pastors/${pastor.slug}`}>
                    <button className="px-6 py-2 rounded-lg bg-[#5c6f87] text-white text-sm hover:bg-black transition">
                      {('subtitle' in pastor && pastor.subtitle)
                        ? pastor.subtitle
                        : 'Pastors Post'}
                    </button>
                  </Link>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* DOT NAVIGATION */}
        <div className="mt-8 flex justify-center gap-3">
          {pastors.slice(0, 8).map((_, idx) => (
            <button
              key={idx}
              onClick={() => swiperRef.current?.slideToLoop(idx)}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? 'bg-[#5c6f87] scale-125'
                  : 'border border-[#2a4b4b] opacity-60'
              }`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
