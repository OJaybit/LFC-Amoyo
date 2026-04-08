'use client';

import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';
import { pacifico } from '@/app/fonts';

const bgImages = [
  '/bg/bg1.png',
  '/bg/bg2.png',
  '/bg/bg3.png',
  '/bg/bg4.png',
  '/bg/bg5.png',
];

// helper: get exactly 6 images per row
const getSixImages = (start: number) =>
  Array.from({ length: 6 }).map((_, i) => bgImages[(start + i) % bgImages.length]);

/* ================= ANIMATION VARIANTS ================= */

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function BackgroundAnimationPage() {
  return (
    <section className="relative lg:mt-5 mt-10 flex items-center justify-center h-[510px] lg:h-120 bg-white">
      {/* Rounded background container */}
      <div className="relative w-full h-full rounded-t-[100px] overflow-hidden bg-[#faf6ef]">

        {/* ================= CENTERED TEXT ================= */}
        <motion.div
          className="absolute top-28 left-1/2 -translate-x-1/2 text-center px-4 sm:px-10 max-w-3xl"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
        >
          {/* Script title */}
          <motion.p
            variants={item}
            className={`text-lg sm:text-2xl text-[#5c6f87] whitespace-nowrap ${pacifico.className}`}
          >
            Best Recommended Places
          </motion.p>

          {/* Heading */}
          <motion.h2
            variants={item}
            className="mt-3 text-xl sm:text-4xl mb-5 lg:text-5xl font-bold text-[#5c6f87] w-70 lg:w-220 
            lg:-ml-20
            line-clamp-2"
          >
            Popular Destinations we offer for all
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={item}
            className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed break-normal"
          >
           We don't take you to places             we give you experiences. Explore Egypt's amazing diversity on family trips that combine desert adventures with beach relaxation, so together we can create pictures that fill your walls with love
          </motion.p>
        </motion.div>

        {/* ================= TOP ROW ================= */}
        <motion.div
          className="pointer-events-none absolute top-10 left-0 flex w-full justify-center gap-10 sm:gap-24 opacity-10"
          initial={{ y: 0 }}
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        >
          {getSixImages(0).map((img, i) => (
            <Image
              key={`top-${i}`}
              src={img}
              alt=""
              width={80}
              height={80}
              className="object-contain sm:w-[140px] sm:h-[140px]"
            />
          ))}
        </motion.div>

        {/* ================= MIDDLE ROW ================= */}
        <motion.div
          className="pointer-events-none absolute top-1/2 left-0 -translate-y-1/2 flex w-full justify-center gap-10 sm:gap-24 opacity-10"
          initial={{ y: 0 }}
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        >
          {getSixImages(2).map((img, i) => (
            <Image
              key={`middle-${i}`}
              src={img}
              alt=""
              width={80}
              height={80}
              className="object-contain sm:w-[140px] sm:h-[140px]"
            />
          ))}
        </motion.div>

        {/* ================= BOTTOM ROW ================= */}
        <motion.div
          className="pointer-events-none absolute bottom-10 left-0 flex w-full justify-center gap-10 sm:gap-24 opacity-10"
          initial={{ y: 0 }}
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        >
          {getSixImages(4).map((img, i) => (
            <Image
              key={`bottom-${i}`}
              src={img}
              alt=""
              width={80}
              height={80}
              className="object-contain sm:w-[140px]"
            />
          ))}
        </motion.div>

      </div>
    </section>
  );
}
