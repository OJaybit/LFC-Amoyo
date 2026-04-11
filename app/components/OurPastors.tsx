'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import { useState, useRef } from 'react';
import { motion, Variants } from 'framer-motion';
import { pacifico } from '@/app/fonts';
import { pastors } from '../data/pastors';

/* ================= SCROLL ANIMATION ================= */
const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 80, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export default function PopularDestinationsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef<any>(null);

  return (
    <section className="px-6 lg:px-20 py-12 relative bg-[#faf6ef]">

      {/* TITLE (SCROLL REVEAL) */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="text-center mb-12"
      >
        <motion.h2
          variants={item}
          className={`${pacifico.className} text-4xl sm:text-5xl text-[#5c6f87]`}
        >
          Meet Our Pastors
        </motion.h2>
      </motion.div>

      {/* ================= SWIPER ================= */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1} // ✅ ONE CARD EVERYWHERE
          spaceBetween={20}
          loop
          speed={800} // 🔥 smoother slide motion
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {pastors.slice(0, 8).map((tour, index) => (
            <SwiperSlide key={index}>
              

      {/* ================= DESKTOP SWIPER ================= */}
      <div className="hidden lg:block">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={32}
          slidesPerView={3}
          loop
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
          onSwiper={(swiper) => (swiperRef.current = <Link href={`/pastors/${tour.slug}`}>
  <button className="px-6 py-2 rounded-lg bg-[#5c6f87] text-white text-sm hover:bg-black transition">
    {'subtitle' in tour && tour.subtitle
      ? tour.subtitle
      : 'Pastors Post'}
  </button>
</Link>
</div>
</motion.div>
</SwiperSlide>
))}   
</Swiper>

{/* ================= CUSTOM DOTS ================= */}
<div className="mt-8 flex just<motion.div
  variants={item}
  className="group max-w-md mx-auto bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm flex flex-col
  hover:-translate-y-3 hover:shadow-xl transition-all duration-500"
>
  {/* IMAGE */}
  <div className="relative w-full h-[260px] overflow-hidden">
    <Image
      src={tour.heroImage}
      alt={tour.cardTitle || tour.title || "Pastor image"}
      fill
      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
    />

    {/* SHINE EFFECT */}
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="
        absolute inset-0
        bg-gradient-to-b from-transparent via-white/25 to-transparent
        translate-y-[-100%]
        group-hover:translate-y-[100%]
        transition-transform duration-1000 ease-out
      " />
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
      <button className="px-6 py-2 rounded-lg bg-[#5c6f87] text-white text-sm hover:bg-black transition">
        {'subtitle' in tour && tour.subtitle
          ? tour.subtitle
          : 'Pastors Post'}
      </button>
    </Link>
  </div>
</motion.div>ify-center gap-3">
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
);swiper)}
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
