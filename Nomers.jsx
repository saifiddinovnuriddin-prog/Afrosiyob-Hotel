import React, { useState, useEffect, useRef } from "react";
import xona from "../assets/room.png";
import xona1 from "../assets/xona.jpg";
import xona2 from "../assets/xona1.jpg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Nomers() {
  const { t } = useTranslation();
  
  const [activeRoom, setActiveRoom] = useState(null);
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.15 }
    );

    refs.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const openModal = (room) => {
    setActiveRoom(room);
  };

  return (
    <div className="bg-[#F5F5F5] text-[#2C2C2C]">

      <div className="relative h-screen">
        <img src={xona} 
          alt="hona" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white text-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              {t("rooms")}
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-gray-200 tracking-wide">
              AFROSIYOB HOTEL
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24 space-y-40">

        <div
          ref={(el) => (refs.current[0] = el)}
          className="opacity-0 translate-y-16 transition-all duration-700"
        >
          <h1 className="absolute text-[100px] md:text-[140px] font-bold text-black/5 select-none pointer-events-none -left-6 top-[-40px]">
            {t("classic_title")}
          </h1>

          <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
            <div
              onClick={() => openModal({
                title: t("classic_title"),
                desc: t("classic_desc"),
                details: t("classic_details"),
                amenities: t("classic_amenities")
              })}
              className="relative overflow-hidden rounded-3xl shadow-2xl cursor-pointer group"
            >
              <img
                src={xona1}
                alt="Classic Room"
                className="w-full h-[520px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 bg-[#1E6FD9]/10 blur-3xl opacity-0 group-hover:opacity-100 transition-all" />
            </div>

            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-light tracking-tight">{t("classic_title")}</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t("classic_desc")}
              </p>
              <p className="text-gray-500 font-medium">{t("classic_details")}</p>

<div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
  {t("classic_amenities", { returnObjects: true }).map((item, i) => (
    <div key={i}>• {item}</div>
  ))}
</div>

<div className="flex gap-6 pt-4">
  <button
    onClick={() =>
      openModal({
        title: t("classic_title"),
        desc: t("classic_desc"),
        details: t("classic_details"),
        amenities: t("classic_amenities", { returnObjects: true })
      })
    }
    className="border-b border-gray-400 pb-1 hover:text-[#1E6FD9] hover:border-[#1E6FD9] transition-colors text-lg"
  >
    {t("details")}
  </button>

<Link to="/bookingroom">
  <button className="bg-[#1E6FD9] hover:bg-blue-700 text-white px-8 py-3.5 rounded-2xl font-medium transition-all active:scale-95"
>{t('book_now')}
</button>
</Link>
              </div>
            </div>
          </div>
        </div>

        <div
          ref={(el) => (refs.current[1] = el)}
          className="opacity-0 translate-y-16 transition-all duration-700"
        >
          <h1 className="absolute text-[100px] md:text-[140px] font-bold text-black/5 select-none pointer-events-none -right-6 top-[-40px]">
            LUXURY SUITE
          </h1>

          <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
            <div
              onClick={() => openModal({
                title: t("luxury_title"),
                desc: "Spacious suite with separate living area and stunning city view.",
                details: "65m² • Lounge • Balcony • Premium service",
                amenities: [
                  "King-size bed",
                  "Private lounge",
                  "Mini bar",
                  "City view balcony",
                  "Luxury bathroom",
                  "24/7 concierge service",
                ]
              })}
              className="relative overflow-hidden rounded-3xl shadow-2xl cursor-pointer group md:order-2"
            >
              <img
                src={xona2}
                alt="Luxury Suite"
                className="w-full h-[520px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 bg-[#1E6FD9]/10 blur-3xl opacity-0 group-hover:opacity-100 transition-all" />
            </div>

            <div className="space-y-8 md:order-1 text-right">
              <h2 className="text-4xl md:text-5xl font-light tracking-tight">
                {t("luxury_title")}
                </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t("luxury_desc")}
              </p>
              <p className="text-gray-500 font-medium">{t("luxury_details")}</p>

<div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm text-right">
  {t("luxury_amenities", { returnObjects: true }).map((item, i) => (
    <div key={i}>• {item}</div>
  ))}
</div>

<div className="flex gap-6 pt-4 justify-end">
  <button
    onClick={() =>
      openModal({
        title: t("luxury_title"),
        desc: t("luxury_desc"),
        details: t("luxury_details"),
        amenities: t("luxury_amenities", { returnObjects: true })
      })
    }
    className="border-b border-gray-400 pb-1 hover:text-[#1E6FD9] hover:border-[#1E6FD9] transition-colors text-lg"
  >
    {t("details")}
  </button>

<Link to="/bookingroom">
  <button className="bg-[#1E6FD9] hover:bg-blue-700 text-white px-8 py-3.5 rounded-2xl font-medium transition-all active:scale-95"
>{t('book_now')}</button>
</Link>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* MODAL */}
      {activeRoom && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full relative animate-scaleIn shadow-2xl overflow-hidden">
            <button
              onClick={() => setActiveRoom(null)}
              className="absolute top-5 right-5 text-2xl text-gray-400 hover:text-gray-600 transition z-10"
            >
              ✕
            </button>

            <div className="p-10">
              <h2 className="text-3xl font-semibold mb-3">{activeRoom.title}</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">{activeRoom.desc}</p>
              <p className="text-gray-500 mb-8">{activeRoom.details}</p>

              <div className="grid grid-cols-2 gap-3 text-sm mb-8">
                {activeRoom.amenities.map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="text-[#1E6FD9]">•</span> {item}
                  </div>
                ))}
              </div>

              <button
                onClick={() => handleBookNow(activeRoom)}
                className="w-full bg-[#1E6FD9] hover:bg-blue-700 text-white py-4 rounded-2xl font-medium transition-all text-lg"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Custom Styles */}
      <style jsx>{`
        .show {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        .animate-scaleIn {
          animation: scaleIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        @keyframes scaleIn {
          from { transform: scale(0.85); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
}

export default Nomers;