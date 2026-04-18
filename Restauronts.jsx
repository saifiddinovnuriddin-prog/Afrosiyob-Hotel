import hotelImg from "../assets/res.jpg";
import React from "react";
import { useTranslation } from "react-i18next";

function Restauronts() {
  const { t } = useTranslation();

  return (
    <div className="w-full bg-[#F5F5F5]">

      {/* HERO */}
      <div className="relative h-screen w-full overflow-hidden">
        <img
          src={hotelImg}
          alt="Hotel"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-5xl md:text-7xl font-bold text-white">
            {t("restaurant_title")}
          </h1>
          <p className="mt-4 text-xl text-white/90">
            {t("restaurant_subtitle")}
          </p>
        </div>
      </div>

      {/* SECTION 1 */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">

        {/* TEXT */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">
            {t("ember_restaurant")}
          </h2>

          <p className="text-gray-600">
            {t("restaurant_time")}
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            {t("restaurant_desc")}
          </p>

          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {t("restaurant_menu", { returnObjects: true }).map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <button className="mt-4 px-8 py-3 border border-black text-black font-semibold rounded-xl hover:bg-black hover:text-white transition">
            {t("menu_btn")}
          </button>
        </div>

        {/* IMAGE */}
        <img
          src={hotelImg}
          alt="Ember"
          className="w-full h-[500px] object-cover rounded-3xl shadow-xl"
        />
      </div>

      {/* SECTION 2 */}
      <div className="max-w-7xl mx-auto px-6 pb-20 grid md:grid-cols-2 gap-16 items-center">

        {/* IMAGE */}
        <img
          src={hotelImg}
          alt="Bar"
          className="w-full h-[500px] object-cover rounded-3xl shadow-xl order-2 md:order-1"
        />

        {/* TEXT */}
        <div className="space-y-6 order-1 md:order-2">
          <h2 className="text-3xl font-bold">
            {t("bar_title")}
          </h2>

          <p className="text-gray-600">
            {t("bar_time")}
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            {t("bar_desc")}
          </p>

          <p className="text-gray-700">
            {t("bar_extra")}
          </p>

          <p className="italic text-gray-500">
            {t("bar_footer")}
          </p>

          <button className="mt-4 px-8 py-3 border border-black text-black font-semibold rounded-xl hover:bg-black hover:text-white transition">
            {t("menu_btn")}
          </button>
        </div>
      </div>

    </div>
  );
}

export default Restauronts;