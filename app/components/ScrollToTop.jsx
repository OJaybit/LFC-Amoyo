"use client";

import { useEffect, useState } from "react";
import { HiArrowUp } from "react-icons/hi";

export default function ScrollToTop() {
  const [progress, setProgress] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scrollPercent = (scrollTop / docHeight) * 100;
      setProgress(scrollPercent);
      setShow(scrollTop > 100);  // show after scrolling 100px
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once to set initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className={`scroll-progress ${show ? "show" : ""}`}
      style={{
        background: `conic-gradient(#5c6f87 ${progress}%, #e6e6e6 ${progress}%)`,
      }}
    >
      <span className="scroll-icon">
        <HiArrowUp size={20} />
      </span>
    </button>
  );
}
