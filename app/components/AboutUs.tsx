'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { pacifico } from '@/app/fonts';

export default function AboutUs() {
  return (
    <section className="w-full px-6 lg:px-20 py-10 mt-20">
      <div className="grid lg:grid-cols-2 gap-16 items-center">

        {/* ================= TEXT SIDE (MOBILE FIRST) ================= */}
        <div className="order-1 lg:order-2 flex flex-col -mt-40 gap-10 max-w-xl">
          {/* Script title */}
          <p
            className={`text-lg sm:text-2xl text-[#5c6f87] mt-30 whitespace-nowrap ${pacifico.className}`}
          >
            About Us
          </p>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl font-bold text-[#5c6f87] -mt-5 leading-tight">
            Experience Egypt<br /> Like Never Before
          </h1>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed -mt-5">
<span className=" block mt-3 ">

Our promise: To be your trusted guide in nature's embrace. We promise your family a seamless blend of excitement and safety, from the refreshing breezes of the Red Sea to the magic of the desert and mountains.
</span>

<span className='block mt-5'>
  Let us transform your holidays into legendary tales to be told to your children and grandchildren. Join SIRISANDTOURS, where every trip is the beginning of a new love story with Egypt.
</span>
<span className=" block mt-5  ml-3 ">
  
SIRISANDTOURS " sky to sea "          <br /> your next adventure is calling...
</span>
          </p>

          {/* Features */}
          <div className="flex flex-col gap-8">
            {/* Exclusive Trip */}
            <div className="flex gap-4 items-start group">
              <div
                className="w-12 h-12 min-w-[48px] rounded-full bg-[#E9D09A]
                           group-hover:bg-[#5c6f87]
                           transition-colors duration-300"
              />
              <div>
                <h3 className="font-semibold text-lg text-[#5c6f87]">
                  Exclusive Trip
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Between the magic of the desert and the tranquility of the waves, we design bespoke itineraries that combine adventure and privacy to suit your family's aspirations.
                </p>
              </div>
            </div>

            {/* Professional Guide */}
            <div className="flex gap-4 items-start group">
              <div
                className="w-12 h-12 min-w-[48px] rounded-full bg-[#E9D09A]
                           group-hover:bg-[#5c6f87]
                           transition-colors duration-300"
              />
              <div>
                <h3 className="font-semibold text-lg text-[#5c6f87]">
                  Professional Guide
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                 Travel companions with local expertise who transform every tour into an enjoyable experience and ensure your family's safety and comfort every step of the way.
                </p>
              </div>
            </div>
          </div>

          {/* Learn More BUTTON */}
          <button
            className="
              relative overflow-hidden w-fit px-8 py-4 rounded-full
              border border-[#5c6f87]
              text-[#5c6f87] font-semibold
              group
            "
          >
            {/* background slide */}
            <span
              className="
                absolute inset-0 bg-[#5c6f87]
                translate-x-[-100%]
                group-hover:translate-x-0
                transition-transform duration-500 ease-out
              "
            />

            {/* content */}
            <span className="relative z-10 flex items-center gap-3 group-hover:text-white transition-colors duration-300">
              Learn More
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </span>
          </button>
        </div>

        {/* ================= IMAGE SIDE ================= */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="order-2 mt-20 lg:-mt-40 lg:order-1 w-full flex flex-col gap-6"
        >
          {/* TOP IMAGE */}
          <div
            className="relative w-full h-[320px] sm:h-[380px] lg:h-[520px] overflow-hidden rounded-[40px]"
          >
            <Image
src="/images/gallery/7.jpg"
              alt="Tour Group"
              fill
              sizes="(max-width: 768px) 90vw, 40vw"
              className="object-cover"
            />
          </div>

  {/* middle IMAGE */}
          <div
            className="hidden sm:block
  relative w-full h-[220px] sm:h-[380px] lg:h-[520px] overflow-hidden rounded-[40px]"
          >
            <Image
src="/images/gallery/4.jpg"
              alt="Tour Group"
              fill
              sizes="(max-width: 768px) 90vw, 40vw"
              className="object-cover"
            />
          </div>
          
          {/* BOTTOM IMAGE (Animated) */}
          <motion.div
            className="
              relative w-full h-[240px] sm:h-[280px] lg:h-[320px]
              overflow-hidden
              border-[5px] border-white
              shadow-2xl
              rounded-[40px]
            "
            animate={{
              x: [-20, 20, -20], // move left -> right -> left
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src="/images/gallery/1.jpg"

              alt="Sunset Tour"
              fill
              sizes="
              (max-width: 768px) 90vw, 40vw"
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
