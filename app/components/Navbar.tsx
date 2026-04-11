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
        <div className="flex items-center -mt-2 gap-3">
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
              <Link href="#">Lfc worldwide</Link>
              <Link href="/ourpastors">Our Leaders</Link>
              <Link href="/give">GIVE</Link>
            </div>
{/* CONTENT */}
<div className="relative z-40 flex flex-col lg:grid lg:grid-cols-2 h-full px-6 lg:px-16 pb-16 justify-center">

  {/* TITLE (mobile + desktop) */}
  <div className="mb-6 lg:mb-0">
    <h1 className="text-2xl lg:text-3xl font-semibold mb-2">
      LFC Amoyo
    </h1>

    <p className="text-sm text-white/70">
      For God. For People. For the City. For the World.
    </p>
  </div>

  {/* 🔥 MOBILE TWO-SECTIONS LAYOUT */}
  <div className="grid grid-cols-2 gap-6 lg:hidden mt-8">

    {/* LEFT SECTION */}
    <div className="space-y-6">

      <div>
        <h3 className="text-white/60 mb-3 text-xs">Our House</h3>
        <ul className="space-y-2 text-sm">
          <li><Link href="/story">About Us</Link></li>
          <li><Link href="/beliefs">Mission Statements</Link></li>
          <li><Link href="/leadership">Leadership</Link></li>
          <li><Link href="/careers">Join Workers</Link></li>
        </ul>
      </div>

      <div>
        <h3 className="text-white/60 mb-3 text-xs">Movement</h3>
        <ul className="space-y-2 text-sm">
          <li><Link href="/conferences">Conferences</Link></li>
          <li><Link href="/records">Records</Link></li>
          <li><Link href="/equip">Equip</Link></li>
        </ul>
      </div>

    </div>

    {/* RIGHT SECTION */}
    <div className="space-y-6">

      <div>
        <h3 className="text-white/60 mb-3 text-xs">Locations</h3>
        <ul className="space-y-2 text-sm">
          <li><Link href="#">Amoyo</Link></li>
          <li><Link href="#">Ilorin</Link></li>
          <li><Link href="#">Kwara</Link></li>
          <li><Link href="#">Nigeria</Link></li>
        </ul>
      </div>

      {/* QUICK INFO CARD */}
      <div className="p-3 border border-white/10 rounded-lg bg-white/5">
        <p className="text-xs text-white/60">
          Join us every Sunday for worship and word.
        </p>
      </div>

    </div>
  </div>

  {/* DESKTOP (UNCHANGED - KEEP YOUR ORIGINAL) */}
  <div className="hidden lg:block">
    <div className="border-t border-white/20 mb-8 mt-6" />

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">

      <div>
        <h3 className="text-white/60 mb-3">Our House</h3>
        <ul className="space-y-2">
          <li><Link href="/story">AboutUs</Link></li>
          <li><Link href="/beliefs">Mission statements</Link></li>
          <li><Link href="/leadership">Our Leadership</Link></li>
          <li><Link href="/careers">Join Our Workers</Link></li>
        </ul>
      </div>

      <div>
        <h3 className="text-white/60 mb-3">Locations</h3>
        <ul className="space-y-2">
          <li><Link href="/515">Opposite</Link></li>
          <li><Link href="/cumberland">Complex</Link></li>
          <li><Link href="/trilith">Amoyo</Link></li>
          <li><Link href="/dc">Ilorin, Kwara</Link></li>
        </ul>
      </div>

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
  </div>

  {/* SOCIAL */}

<div className="flex gap-4 mt-10 text-white/70 text-sm">
  <Link href="https://t.me/livingfaithamoyo" target="_blank" className="hover:text-white transition">
    Telegram
  </Link>

  <Link href="https://www.facebook.com/livingfaithamoyo" target="_blank" className="hover:text-white transition">
    Instagram
  </Link>

  <Link href="https://facebook.com/Lfcamoyo" target="_blank" className="hover:text-white transition">
    Facebook
  </Link>
</div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
