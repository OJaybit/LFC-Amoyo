'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { pacifico } from '@/app/fonts';
import { tours } from '../data/pastors';


export default function PopularDestinationsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef<any>(null);



  return (
    <section className="px-6 lg:px-20 py-2 mt-15 relative">
      {/* SECTION TITLE */}
      <div className="text-center mb-8">
        <h2 className={`${pacifico.className} text-4xl text-[#0A7BBE]`}>
          Our Tours
        </h2>
        <p className="text-6xl text-[#0A7BBE] mt-2">
          Discover Our Best Tours
        </p>
      </div>

      {/* SLIDER */}
      <Swiper
        modules={[Autoplay]}
        spaceBetween={32}
        slidesPerView={1}
        loop
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        breakpoints={{
          640: { slidesPerView: 1 },
          1024: { slidesPerView: 3 },
        }}
        className="Our-Tours mt-10"
      >
        {tours.slice(0, 8).map((tour, index) => (
          <SwiperSlide key={index}>
            <div className="group bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm flex flex-col h-full">
              {/* IMAGE */}
              <div className="relative w-full h-100 overflow-hidden bg-gray-100">

                <Image
                  src={tour.heroImage}
                  alt={tour.cardTitle || "Tour image"}

                  fill
                  sizes="(max-width: 768px) 90vw, (max-width: 1024px) 50vw, 33vw"
                 className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"

                  priority
                />
                {/* Shine Effect (Top → Bottom) */}
<div className="absolute inset-0 pointer-events-none overflow-hidden">
  <div
    className="
      absolute inset-0
      bg-gradient-to-b from-transparent via-white/25 to-transparent
      translate-y-[-100%]
      group-hover:translate-y-[100%]
      transition-transform
      duration-1000
      ease-out
    "
  />
</div>

              </div>

              {/* CONTENT */}
              <div className="p-6 flex flex-col flex-1">
                <Link href={`/tours/${tour.slug}`}>
                  <h3 className="font-semibold text-lg text-gray-600 leading-snug hover:text-[#0A7BBE] transition-colors cursor-pointer">
                    {tour.cardTitle}
                  </h3>
                </Link>

                <div className="mt-auto pt-6 flex items-center justify-between">
                  <span className="text-gray-600 flex items-center gap-2">
                    ⏱ 
                  </span>

                  <Link
                    href={`/tours/${tour.slug}`}
                    className="min-h-[48px] px-6 rounded-full border border-[#0A7BBE] text-[#0A7BBE] font-medium hover:bg-[#0A7BBE] hover:text-white transition-colors flex items-center"
                  >
                    See Trips →
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* DOTS */}
      <div className="mt-10 flex justify-center gap-3">
        {tours.slice(0, 8).map((_, idx) => (
          <button
            key={idx}
            onClick={() => swiperRef.current?.slideToLoop(idx)}
            className={`h-3 w-3 -mt-2 rounded-full transition ${
              idx === currentIndex
                ? 'bg-[#0a7bbe]'
                : 'border border-[#2a4b4b]'
            }`}
          />
        ))}
      </div>

        {/* ================= MOBILE VIDEO */}
<div
  className="
    block md:hidden
    mt-16
    mx-auto
    h-[750px]
    w-[105%]
    -ml-2
    rounded-[32px]
    overflow-hidden
    border border-gray-200
    shadow-lg
    relative
  "
>
   {/* FALLBACK IMAGE */}
  <div
    className="absolute inset-0 bg-cover bg-center scale-105"
    style={{ backgroundImage: "url('/hero-poster1.jpg')" }}
  />
  <video
    src="/images/tours/video2.mp4"
    autoPlay
    muted
      poster="/hero-poster1.png"
    loop
    playsInline
    className="w-full h-full object-cover"
  />
</div>
    </section>
  );
}
