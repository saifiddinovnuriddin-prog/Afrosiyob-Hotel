import React from "react";
import bas from "../assets/bas.jpg";
import pure from "../assets/baseyn vastul.jpg";
import banya from "../assets/banya.jpg";
import sportz from "../assets/SPORTZALL .jpg";
import mass from "../assets/mass.png";
import { useTranslation } from "react-i18next";

function Spa() {
  const { t } = useTranslation();

  return (
    <div className="bg-[#f8f8f8] text-gray-800">
      {/* HERO */}
      <div className="relative h-screen w-full overflow-hidden">
        <img
          src={bas}
          alt="Spa & Wellness"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white leading-tight drop-shadow-2xl">
            {t("spa_welcome")}
          </h1>
          <p className="mt-4 text-lg sm:text-2xl text-white/90 tracking-wide">
            {t("hotel_name")}
          </p>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-sm animate-bounce">
          ↓ Scroll
        </div>
      </div>

      {/* WORKING HOURS */}
      <div className="max-w-5xl mx-auto px-6 py-20 text-center space-y-6">
        <h2 className="text-3xl font-serif">
          {t("spa_hours")}
        </h2>
      </div>

      {/* SECTIONS */}
      <div className="max-w-6xl mx-auto px-6 space-y-24 pb-20">

        {/* Fitness Club */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img
            src={sportz}
            alt="Fitness Club"
            className="rounded-3xl shadow-xl w-full"
          />
          <div className="space-y-4">
            <h3 className="text-3xl font-serif">{t("fitness_title")}</h3>
            <p className="text-gray-600 leading-relaxed">
              {t("fitness_desc1")}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {t("fitness_desc2")}
            </p>
          </div>
        </div>

        {/* Pure Bar & Pool */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h3 className="text-3xl font-serif">{t("pure_title")}</h3>
            <p className="text-gray-600 leading-relaxed">
              {t("pure_desc")}
            </p>
            <button className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition">
              {t("see_menu")}
            </button>
          </div>
          <img
            src={pure}
            alt="Pure Bar & Pool"
            className="rounded-3xl shadow-xl w-full"
          />
        </div>

        {/* SPA & Wellness */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img
            src={banya}
            alt="SPA"
            className="rounded-3xl shadow-xl w-full"
          />
          <div className="space-y-4">
            <h3 className="text-3xl font-serif">{t("spa_title")}</h3>
            <p className="text-gray-600 leading-relaxed">
              {t("spa_desc1")}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {t("spa_desc2")}
            </p>
            <button className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition">
              {t("memberships")}
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h3 className="text-3xl font-serif">{t("premium_title")}</h3>
            <p className="text-gray-600 leading-relaxed">
              {t("premium_desc1")}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {t("premium_desc2")}
            </p>
          </div>
          <img
            src={mass}
            alt="Premium Treatments"
            className="rounded-3xl shadow-xl w-[528px] h-[396px]"
          />
        </div>

      </div>
    </div>
  );
}

export default Spa;