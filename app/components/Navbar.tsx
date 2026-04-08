"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [shadowVisible, setShadowVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // ✅ SCROLL (shrink + background only)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ SHADOW → MENU SEQUENCE
  useEffect(() => {
    if (open) {
      setShadowVisible(true);

      const timer = setTimeout(() => {
        setMenuVisible(true);
      }, 220);

      return () => clearTimeout(timer);
    } else {
      setMenuVisible(false);

      const timer = setTimeout(() => {
        setShadowVisible(false);
      }, 320);

      return () => clearTimeout(timer);
    }
  }, [open]);

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className={`
          fixed lg:-top-3 -top-3 left-0 w-full z-50 px-4 lg:px-10
          flex items-center justify-between
          transition-all duration-300
          ${
            scrolled
              ? "py-2 bg-white/70 backdrop-blur-md shadow-sm"
              : "py-3 bg-transparent"
          }
        `}
      >
        {/* LEFT */}
        <div className="flex items-center gap-3">
          {/* LOGO */}
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Logo"
              width={75}
              height={40}
              className="object-contain"
            />
          </Link>
           {/* TEXT (LG ONLY) */}
          <span className="hidden lg:block text-2xl font-semibold text-black whitespace-nowrap">
            Living Faith Church Amoyo
          </span>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3">
          <div id="google_translate_element" />

          <button
            onClick={() => setOpen(true)}
            className="mt-3 lg:mt-1 text-5xl lg:text-5xl text-black"
          >
            <HiOutlineMenu />
          </button>
        </div>
      </motion.nav>

      {/* 🔥 GLASS SHADOW */}
      <AnimatePresence>
        {shadowVisible && (
          <motion.div
            key="shadow"
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed left-0 right-0 h-[90vh] z-40 backdrop-blur-xl bg-black/30"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 92%, 0 100%)",
            }}
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* 🔥 MENU */}
      <AnimatePresence>
        {menuVisible && (
          <motion.div
            key="menu"
            initial={{ y: "-110%", opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: "-110%", opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="fixed left-0 right-0 h-[90vh] z-50 text-white flex justify-center"
          >
            {/* BACKGROUND */}
            <div
              className="absolute inset-0 bg-[#0b0f14]"
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 92%, 0 100%)",
              }}
            />

            {/* CLOSE */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-5 right-5 text-3xl z-50 hover:text-sky-400 transition"
            >
              <HiOutlineX />
            </button>

            {/* TOP LINKS */}
            <div className="absolute top-5 right-16 hidden lg:flex gap-6 text-xs tracking-widest z-50">
              <Link href="/about">ABOUT</Link>
              <Link href="/atlanta">ATLANTA</Link>
              <Link href="/washington">WASHINGTON DC</Link>
              <Link href="/give">GIVE</Link>
            </div>

            {/* CONTENT */}
            <div className="relative z-40 grid lg:grid-cols-2 h-full">
              
              {/* IMAGE */}
              <div className="hidden lg:flex items-center justify-center p-10">
                <Image
                  src="/menu-image.jpg"
                  alt="Event"
                  width={450}
                  height={280}
                  className="rounded-lg object-cover"
                />
              </div>

              {/* RIGHT */}
              <div className="flex flex-col justify-center px-6 lg:px-16 pb-16">
                
                <h1 className="text-2xl lg:text-3xl font-semibold mb-2">
                  LFC Amoyo
                </h1>

                <p className="text-sm text-white/70 mb-6">
                  For God. For People. For the City. For the World.
                </p>

                <div className="border-t border-white/20 mb-8" />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
                  
                  {/* COLUMN 1 */}
                  <div>
                    <h3 className="text-white/60 mb-3">Our House</h3>
                    <ul className="space-y-2">
                      <li><Link href="/story">AboutUs</Link></li>
                      <li><Link href="/beliefs">Mission statements</Link></li>
                      <li><Link href="/leadership">Our Leadership</Link></li>
                      <li><Link href="/careers">Join Our Workers</Link></li>
                    </ul>
                  </div>

                  {/* COLUMN 2 */}
                  <div>
                    <h3 className="text-white/60 mb-3">Locations</h3>
                    <ul className="space-y-2">
                      <li><Link href="/515">opposite</Link></li>
                      <li><Link href="/cumberland">Complex</Link></li>
                      <li><Link href="/trilith">Amoyo</Link></li>
                      <li><Link href="/dc">Ilorin, kwara</Link></li>
                    </ul>
                  </div>

                  {/* COLUMN 3 */}
                  <div>
                    <h3 className="text-white/60 mb-3">Movement</h3>
                    <ul className="space-y-2">
                      <li><Link href="/conferences">Conferences</Link></li>
                      <li><Link href="/records">Records</Link></li>
                      <li><Link href="/equip">Equip</Link></li>
                      <li><Link href="/publishing">Publishing</Link></li>
                      <li><Link href="/resources">Resources</Link></li>
                    </ul>
                  </div>
                </div>

                {/* SOCIAL */}
                <div className="flex gap-4 mt-8 text-white/70 text-sm">
                  <span>YouTube</span>
                  <span>Instagram</span>
                  <span>Facebook</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}