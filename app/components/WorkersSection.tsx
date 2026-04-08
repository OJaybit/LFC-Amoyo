'use client';

import Link from 'next/link';
import Image from 'next/image';
import { workers } from '@/app/data/workers';
import { pacifico } from '@/app/fonts';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import { useRef, useState } from 'react';

export default function WorkersSection() {
  const swiperRef = useRef<any>(null);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <section className="bg-white px-4 lg:px-10 py-16">

      {/* CENTERED CARD WRAPPER */}
      <div className="w-full flex justify-center">
        <div className="w-[95%] lg:w-[80%] bg-[#e9e7df] rounded-3xl p-6 lg:p-10 relative">

          {/* HEADER INSIDE CARD */}
          <h2
            className={`${pacifico.className} text-3xl lg:text-5xl text-[#5c6f87] mb-8`}
          >
            Our Workers
          </h2>

          {/* 🔘 TOP ARROWS (MOBILE) */}
          <div className="flex justify-end mb-4 lg:hidden">
            <div className="flex gap-5 text-3xl">

              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className={`transition ${
                  isBeginning ? 'text-gray-400' : 'text-[#5c6f87]'
                }`}
              >
                ←
              </button>

              <button
                onClick={() => swiperRef.current?.slideNext()}
                className={`transition ${
                  isEnd ? 'text-gray-400' : 'text-[#5c6f87]'
                }`}
              >
                →
              </button>

            </div>
          </div>

          {/* SWIPER */}
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            loop={false}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
          >
            {workers.map((worker, index) => (
              <SwiperSlide key={index}>

                {/* CARD CONTENT */}
                <div className="grid lg:grid-cols-2 gap-10 items-center">

                  {/* ================= LEFT ================= */}
                  <div className="flex flex-col justify-between h-full order-2 lg:order-1">

                    <div>
                      <p className="text-xs tracking-widest text-gray-500 uppercase mb-3">
                        Church Unit
                      </p>

                      <h3 className="text-2xl lg:text-3xl font-bold text-[#2f3b4a] mb-4">
                        {worker.title}
                      </h3>

                      <p className="text-gray-600 leading-relaxed">
                        {worker.description}
                      </p>
                    </div>

                    <Link href={`/workers/${worker.slug}`}>
                      <button className="mt-6 px-6 py-3 bg-[#5c6f87] text-white rounded-full w-fit hover:bg-black transition">
                        See This Unit
                      </button>
                    </Link>
                  </div>

                  {/* ================= RIGHT ================= */}
                  <div className="flex flex-col items-end order-1 lg:order-2">

                    {/* IMAGE */}
                    <div className="relative w-full h-[240px] lg:h-[300px] rounded-2xl overflow-hidden">
                      <Image
                        src={worker.image}
                        alt={worker.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* 🔘 DESKTOP ARROWS */}
                    <div className="hidden lg:flex gap-6 mt-4 text-3xl">

                      <button
                        onClick={() => swiperRef.current?.slidePrev()}
                        className={`transition ${
                          isBeginning
                            ? 'text-gray-400'
                            : 'text-[#5c6f87]'
                        }`}
                      >
                        ←
                      </button>

                      <button
                        onClick={() => swiperRef.current?.slideNext()}
                        className={`transition ${
                          isEnd ? 'text-gray-400' : 'text-[#5c6f87]'
                        }`}
                      >
                        →
                      </button>

                    </div>

                  </div>

                </div>

              </SwiperSlide>
            ))}
          </Swiper>

        </div>
      </div>
    </section>
  );
}