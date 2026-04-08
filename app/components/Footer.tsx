"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Play, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#2f3e52] text-white pt-32 pb-16 mt-20">

      {/* CURVED TOP */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 200"
          className="w-full h-[140px]"
          preserveAspectRatio="none"
        >
          <path
            fill="#2f3e52"
            d="M0,160 C360,40 1080,40 1440,160 L1440,0 L0,0 Z"
          />
        </svg>
      </div>

      {/* LOGO FLOATING */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#2f3e52] p-3 rounded-xl">
        <Image
          src="/logo.png"
          alt="Logo"
          width={70}
          height={70}
        />
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-5 gap-10">

        {/* COLUMN 1 */}
        <div>
          <h3 className="font-semibold mb-4 text-white/80">Who We Are</h3>
          <ul className="space-y-3 text-lg">
            <li><Link href="/mission" className="hover:text-sky-400">Our Mission</Link></li>
            <li><Link href="/beliefs" className="hover:text-sky-400">Our Beliefs</Link></li>
            <li><Link href="/history" className="hover:text-sky-400">Our History</Link></li>
          </ul>
        </div>

        {/* COLUMN 2 */}
        <div>
          <h3 className="font-semibold mb-4 text-white/80">Ministries</h3>
          <ul className="space-y-3 text-white/80">
            <li><Link href="#">Kids</Link></li>
            <li><Link href="#">Students</Link></li>
            <li><Link href="#">Adults</Link></li>
            <li><Link href="#">Women's</Link></li>
            <li><Link href="#">Men's</Link></li>
            <li><Link href="#">Special Needs</Link></li>
          </ul>
        </div>

        {/* COLUMN 3 */}
        <div>
          <h3 className="font-semibold mb-4 text-white/80">Missions</h3>
          <ul className="space-y-3 text-white/80">
            <li><Link href="#">Missions</Link></li>
            <li><Link href="#">Local</Link></li>
            <li><Link href="#">Global</Link></li>
            <li><Link href="#">Partners</Link></li>
            <li><Link href="#">Stories</Link></li>
          </ul>
        </div>

        {/* COLUMN 4 */}
        <div>
          <h3 className="font-semibold mb-4 text-white/80">Quick Links</h3>
          <ul className="space-y-3 text-white/80">
            <li><Link href="#">Give</Link></li>
            <li><Link href="#">Events</Link></li>
            <li><Link href="#">Download App</Link></li>
            <li><Link href="#">Volunteer</Link></li>
            <li><Link href="#">Articles</Link></li>
            <li><Link href="#">Contact Us</Link></li>
          </ul>
        </div>

        {/* RIGHT CARD */}
        <div className="bg-[#1f2a38] p-6 rounded-2xl space-y-4 shadow-xl">

          <FooterCard icon={<MapPin size={20} />} text="Worship With Us" />
          <FooterCard icon={<Play size={20} />} text="Watch a Message" />
          <FooterCard icon={<Heart size={20} />} text="Give Now" />

        </div>
      </div>
    </footer>
  );
}

/* ---------------- CARD ---------------- */
function FooterCard({ icon, text }: any) {
  return (
    <Link href="#">
      <div className="flex items-center justify-between bg-[#2f3e52] hover:bg-[#3b4f6a] transition p-4 rounded-xl cursor-pointer">
        
        <div className="flex items-center gap-3">
          <div className="bg-[#4a6385] p-3 rounded-full">
            {icon}
          </div>
          <span className="font-medium">{text}</span>
        </div>

        <span className="text-lg">→</span>
      </div>
    </Link>
  );
}