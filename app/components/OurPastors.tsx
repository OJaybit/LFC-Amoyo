'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import { useState, useRef } from 'react';
import { motion, Variants } from 'framer-motion';
import { pacifico } from '@/app/fonts';
import { pastors } from '../data/pastors';

/* ================= SAFE ANIMATION ================= */
const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export default function PopularDestinationsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef<any>(null);

  return (
    <section className="px-6 lg:px-20 py-10 lg:mt-10 -mt-10 mb-15 relative">

      {/* TITLE */}
      <div className="text-center mb-10">
        <h2 className={`${pacifico.className} text-5xl sm:text-4xl text-[#5c6f87]`}>
          Meet Our Pasters
        </h2>
      </div>

      {/* ================= MOBILE SWIPER ================= */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="lg:hidden"
      >
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1} // ✅ 1 card on mobile
          loop
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {pastors.slice(0, 4).map((tour, index) => (
            <SwiperSlide key={index}>
              <motion.div
                variants={item}
                className="group bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm flex flex-col hover:-translate-y-2 transition-all duration-300"
              >
                {/* IMAGE */}
                <div className="relative w-full h-[240px] overflow-hidden">
                  <Image
                    src={tour.heroImage}
                    alt={tour.cardTitle || tour.title || "Tour image"}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />

                  {/* SHINE */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/25 to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1000 ease-out" />
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-5 flex flex-col items-center text-center gap-4">
                  <Link href={`/pastors/${tour.slug}`}>
                    <h3 className="text-lg font-semibold text-[#2f3b4a] hover:text-[#5c6f87] transition">
                      {tour.cardTitle || tour.title}
                    </h3>
                  </Link>

                  <Link href={`/pastors/${tour.slug}`}>
                    <button className="px-5 py-2 rounded-lg bg-[#5c6f87] text-white text-sm hover:bg-black transition">
                      {('subtitle' in tour && tour.subtitle)
                        ? tour.subtitle
                        : 'Pastors post'}
                    </button>
                  </Link>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* MOBILE DOTS */}
        <div className="mt-6 flex justify-center gap-3">
          {pastors.slice(0, 4).map((_, idx) => (
            <button
              key={idx}
              onClick={() => swiperRef.current?.slideToLoop(idx)}
              className={`h-3 w-3 rounded-full transition ${
                idx === currentIndex
                  ? 'bg-[#5c6f87]'
                  : 'border border-[#2a4b4b]'
              }`}
            />
          ))}
        </div>
      </motion.div>

      {/* ================= DESKTOP SWIPER ================= */}
      <div className="hidden lg:block">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={32}
          slidesPerView={3}
          loop
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="mt-10"
        >
          {pastors.slice(0, 8).map((tour, index) => (
            <SwiperSlide key={index}>
              <div className="group bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm flex flex-col h-full hover:-translate-y-2 transition-all duration-300">

                {/* IMAGE */}
                <div className="relative w-full h-[300px] overflow-hidden">
                  <Image
                    src={tour.heroImage}
                    alt={tour.cardTitle || tour.title || "Tour image"}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />

                  {/* SHINE */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/25 to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1000 ease-out" />
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-6 flex flex-col items-center text-center gap-4">
                  <Link href={`/pastors/${tour.slug}`}>
                    <h3 className="text-xl font-semibold text-[#2f3b4a] hover:text-[#5c6f87] transition">
                      {tour.cardTitle || tour.title}
                    </h3>
                  </Link>

                  <Link href={`/pastors/${tour.slug}`}>
                    <button className="px-6 py-2 rounded-lg bg-[#5c6f87] text-white hover:bg-black transition">
                      {('subtitle' in tour && tour.subtitle)
                        ? tour.subtitle
                        : 'Pastors Post'}
                    </button>
                  </Link>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* DESKTOP DOTS */}
        <div className="mt-8 flex justify-center gap-3">
          {pastors.slice(0, 8).map((_, idx) => (
            <button
              key={idx}
              onClick={() => swiperRef.current?.slideToLoop(idx)}
              className={`h-3 w-3 rounded-full transition ${
                idx === currentIndex
                  ? 'bg-[#5c6f87]'
                  : 'border border-[#2a4b4b]'
              }`}
            />
          ))}
        </div>
      </div>

    </section>
  );
}