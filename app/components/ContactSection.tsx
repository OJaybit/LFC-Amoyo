"use client";
import { pacifico } from '@/app/fonts';
import { HiOutlineLocationMarker, HiOutlineMail, HiOutlinePhone } from "react-icons/hi";

export default function ContactSection() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-10 lg:-mt-12">
          <p className={`${pacifico.className} text-4xl text-[#5c6f87]`}>Get In Touch</p>
          <h2 className="text-5xl font-bold text-[#5c6f87] mt-2">
            Our Contact Information
          </h2>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Address */}
          <div className="border rounded-lg p-8 flex items-center gap-6 hover:border-[#075E94] transition">
            <div className="w-20 h-20 rounded-full bg-[#5c6f87] flex items-center justify-center text-white text-3xl hover:bg-[#d6b36b] transition">
              <HiOutlineLocationMarker />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-[#5c6f87]">
                Our Address
              </h3>
              <p className="mt-2 text-lg text-gray-700">
                Hurghada _ Red Sea _ Egypt,
                <br />
                
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="border rounded-lg p-8 flex items-center gap-6 hover:border-[#075E94] transition">
            <div className="w-20 h-20 rounded-full bg-[#5c6f87] flex items-center justify-center text-white text-3xl hover:bg-[#075E94] transition">
              <HiOutlinePhone />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-[#5c6f87]">
                Phone Number
              </h3>
              <p className="mt-2 text-lg text-gray-700">
                +201288062555
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="border rounded-lg p-8 flex items-center gap-6 hover:border-[#075E94] transition">
            <div className="w-20 h-20 rounded-full bg-[#5c6f87] flex items-center justify-center text-white text-3xl hover:bg-[#075E94] transition">
              <HiOutlineMail />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-[#5c6f87]">
                Email
              </h3>
              <p className="mt-2 text-lg text-gray-700">
               sirisand pastors <br /> @gmail.com
              </p>
            </div>
          </div>
        </div>

        {/* Map */}
    <div className="mt-12 rounded-lg overflow-hidden border">
  <iframe
    title="Hurghada, Red Sea, Egypt Map"
    src="https://www.google.com/maps?q=Hurghada,Red%20Sea,Egypt&output=embed"
    width="100%"
    height="450"
    className="border-0"
    loading="lazy"
    allowFullScreen
  />
</div>


      </div>
    </section>
  );
}
