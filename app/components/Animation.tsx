'use client';

import { motion } from 'framer-motion';

const textContent = [
  "Praise God, 2026 is my year of Open Doors in the name of Jesus Christ",
  "Supernatural doors shall be opening to me as I hold fast to the Word and keep making my boast in the Lord",
];

export default function HorizontalScrollText() {
  return (
    <section className="relative overflow-hidden py-6 bg-white -mt-20">
      <motion.div
        className="flex gap-20 whitespace-nowrap"
        initial={{ x: 0 }}
        animate={{ x: ['0%', '-100%'] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 25,
            ease: 'linear',
          },
        }}
      >
        {/* ORIGINAL TEXT */}
        {textContent.map((text, i) => (
          <p
            key={`text-${i}`}
            className="text-lg sm:text-2xl font-semibold text-[#2f3b4a]"
          >
            {text}
          </p>
        ))}

        {/* DUPLICATE FOR LOOP */}
        {textContent.map((text, i) => (
          <p
            key={`text-dup-${i}`}
            className="text-lg sm:text-2xl font-semibold text-[#2f3b4a]"
          >
            {text}
          </p>
        ))}
      </motion.div>
    </section>
  );
}