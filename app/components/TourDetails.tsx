"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tabs = [
  { id: "overview", label: "Trip Overview" },
  { id: "itinerary", label: "Itinerary Details" },
  { id: "included", label: "What’s Included" },
  { id: "excluded", label: "What’s Not Included" },
  { id: "reviews", label: "Traveler Reviews" },
];

export default function TourDetails({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  const [activeTab, setActiveTab] = useState<string | null>("overview");

  return (
    <section className="w-full px-4 md:px-12 py-10">
      {/* TITLE */}
      <h1 className="text-3xl md:text-4xl font-bold mb-3">
        {title}
      </h1>

      <p className="text-gray-600 max-w-3xl mb-8">
        {description}
      </p>

      {/* MEDIA GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {/* LEFT VIDEO */}
        <div className="overflow-hidden rounded-[30px] h-[420px] md:h-[520px]">
          <video
            src="/videos/tour.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

        {/* RIGHT IMAGES */}
        <div className="grid grid-rows-2 gap-6 h-[420px] md:h-[520px]">
          <div className="overflow-hidden rounded-[30px]">
            <img src="/images/tour1.jpg" className="w-full h-full object-cover" />
          </div>
          <div className="overflow-hidden rounded-[30px]">
            <img src="/images/tour2.jpg" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* TABS */}
      <div className="flex flex-wrap gap-3 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() =>
              setActiveTab(activeTab === tab.id ? null : tab.id)
            }
            className={`px-5 py-2 rounded-full border transition-all ${
              activeTab === tab.id
                ? "bg-[#E9D09A]"
                : "bg-gray-100 hover:bg-[#E9D09A]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* TAB CONTENT */}
      <AnimatePresence mode="wait">
        {activeTab && (
          <motion.div
            key={activeTab}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="overflow-hidden bg-gray-50 rounded-2xl p-6 mb-12"
          >
            {activeTab === "overview" && (
              <p>
                Discover ancient temples, salt lakes, desert safari adventures,
                and authentic Egyptian culture across breathtaking locations.
              </p>
            )}

            {activeTab === "itinerary" && (
              <ul className="list-disc ml-5 space-y-2">
                <li>Day 1 – Arrival & City Tour</li>
                <li>Day 2 – Desert Safari</li>
                <li>Day 3 – Cultural Sites</li>
                <li>Day 4 – Departure</li>
              </ul>
            )}

            {activeTab === "included" && (
              <ul className="list-disc ml-5 space-y-2">
                <li>Hotel Pickup</li>
                <li>Tour Guide</li>
                <li>Lunch</li>
                <li>Transport</li>
              </ul>
            )}

            {activeTab === "excluded" && (
              <ul className="list-disc ml-5 space-y-2">
                <li>Personal Expenses</li>
                <li>Tips</li>
              </ul>
            )}

            {activeTab === "reviews" && (
              <div>
                ⭐⭐⭐⭐⭐ Amazing experience!
                <br />
                ⭐⭐⭐⭐ Great tour and guide.
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ACTION BUTTONS */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button className="bg-[#0a7bbe] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#E9D09A] hover:text-black transition">
          Book Now
        </button>

        <a
          href="https://wa.me/234XXXXXXXXXX"
          target="_blank"
          className="bg-green-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-[#E9D09A] hover:text-black transition text-center"
        >
          WhatsApp
        </a>
      </div>
    </section>
  );
}
