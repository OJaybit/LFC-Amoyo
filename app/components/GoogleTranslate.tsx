"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Script from "next/script";

const LANGUAGES = [
  { code: "en", label: "English", flag: "/images/flags/gb.webp" },
  { code: "fr", label: "French", flag: "/images/flags/french-flag.webp" },
  { code: "es", label: "Spanish", flag: "/images/flags/spain.png" },
  { code: "yo", label: "Yoruba", flag: "/images/flags/yoruba.png" },
  
  { code: "ha", label: "Hausa", flag: "/images/flags/hausa.png" },
  { code: "ig", label: "Igbo", flag: "/images/flags/igbo.png" },
  
];

export default function GoogleTranslate() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(LANGUAGES[0]);
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;
  }, []);

  const changeLanguage = (lang: any) => {
    setCurrent(lang);
    setOpen(false);

    const select = document.querySelector(
      ".goog-te-combo"
    ) as HTMLSelectElement | null;

    if (select) {
      select.value = lang.code;
      select.dispatchEvent(new Event("change"));
    }
  };

  return (
    <>
      <div id="google_translate_element" className="hidden" />

      <Script
        src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />

      <Script id="google-translate-init" strategy="afterInteractive">
        {`
          function googleTranslateElementInit() {
            if (window.google && window.google.translate && !window.__gt_initialized) {
              window.__gt_initialized = true;
              new window.google.translate.TranslateElement(
                { pageLanguage: 'en', autoDisplay: false },
                'google_translate_element'
              );
            }
          }
        `}
      </Script>

      {/* ALWAYS VISIBLE*/}
      <div className="fixed z-50 lg:right-9 right-20 top-6 lg:right-35 lg:top-4">
        <button
          onClick={() => setOpen(!open)}
          className="
            flex items-center gap-2 
            bg-white border shadow text-black rounded
            px-2 py-1 text2xl 
            lg:px-3 lg:py-2 lg:text-base
          "
        >
          <Image
            src={current.flag}
            alt=""
            width={18}
            height={12}
            className="lg:w-[20px] lg:h-[14px]"
          />
          <span className="font-semibold uppercase">
            {current.code}
          </span>

          <svg
            className={`w-3 h-3 lg:w-4 lg:h-4 transition-transform duration-200 ${
              open ? "rotate-180" : "rotate-0"
            }`}
            fill="none"
            stroke="black"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {/* Dropdown */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="absolute right-0 mt-2 bg-white border rounded shadow w-48 lg:w-56 text-black"
            >
              {LANGUAGES.map((lang) => (
                <div
                  key={lang.code}
                  onClick={() => changeLanguage(lang)}
                  className="flex items-center gap-3 px-3 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  <Image src={lang.flag} alt="" width={20} height={14} />
                  <span className="text-base lg:text-lg font-medium">
                    {lang.label}
                  </span>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}