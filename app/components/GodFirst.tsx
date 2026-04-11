'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function AboutUs() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-20 py-12 relative">
      
      {/* ================= HEADING (ALWAYS FIRST) =====
      ============ */}
      <motion.h1
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2f3b4a] leading-tight lg:mt-4 text-center lg:text-left max-w-xl mx-auto lg:mx-0"
      >
        At LFC Amoyo,<br />We Put God First
      </motion.h1>

      {/* ================= GRID ================= */}
      <div className="grid lg:grid-cols-2 gap-10 items-center mt-10">

        {/* ================= IMAGE ================= */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="order-1 lg:order-2"
        >
          <div className="relative w-full h-[260px] lg:-mt-40 sm:h-[360px] lg:h-[480px] rounded-3xl overflow-hidden">
            <Image
              src="/images/pastors/pastors.jpg"
              alt="Worship"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </motion.div>

        {/* ================= TEXT + BUTTON ================= */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-2 lg:order-1 flex flex-col gap-6 items-center lg:items-start lg:-mt-40 text-center lg:text-left"
        >
          {/* Description */}
          <p className="text-gray-600 leading-relaxed text-base sm:text-lg max-w-xl">
            Everything we do is about worshiping Him, walking with Christ
            and alongside others, and sharing His love so lives are changed
            for eternity in Amoyo, Ilorin, Kwara and around the world.
          </p>

          {/* BUTTON */}
          <div className="w-full flex justify-center lg:justify-start">
            <Link href="/aboutus" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-6 sm:px-8 py-3 rounded-md bg-[#5c6f87] text-white font-medium hover:bg-black transition">
                About Us
              </button>
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
