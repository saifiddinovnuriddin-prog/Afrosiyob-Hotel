import React from "react";
import { useTranslation } from "react-i18next";
import hotelImg from '../assets/CONTACTI.jpg';

function Contact() {
  const { t } = useTranslation();

  return (
    <div className="w-full bg-[#F5F5F5]">

      {/* HERO */}
      <div className="relative h-screen w-full overflow-hidden">
        <img 
          src={hotelImg} 
          alt="Contact" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 text-white">
          <h1 className="text-5xl md:text-7xl font-bold tracking-wide">
            {t("contact_title")}
          </h1>
          <p className="mt-4 text-xl tracking-widest uppercase text-gray-200">
            {t("hotel_name")}
          </p>
        </div>
      </div>

      {/* CONTACT INFO */}
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10">

        {/* ADDRESS */}
        <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
            📍 {t("contact_address_title")}
          </h2>
          <p className="text-gray-600 leading-relaxed">
            {t("contact_address")}
          </p>
        </div>

        {/* PHONES */}
        <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
            📞 {t("contact_phones_title")}
          </h2>
          <div className="space-y-3 text-gray-600">
            <a 
              href="tel:+998555044444" 
              className="block hover:text-black transition"
            >
              {t("contact_hotel_phone")}
            </a>
            <a 
              href="tel:+998555044441" 
              className="block hover:text-black transition"
            >
              {t("contact_restaurant_phone")}
            </a>
            <a 
              href="tel:+998555044445" 
              className="block hover:text-black transition"
            >
              {t("contact_wellness_phone")}
            </a>
          </div>
        </div>

        {/* EMAILS */}
        <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition md:col-span-2">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
            📧 {t("contact_emails_title")}
          </h2>

          <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 text-gray-600">
            <a 
              href="mailto:tashkent@ihg.com" 
              className="hover:text-black transition"
            >
              {t("contact_booking_email")}
            </a>

            <a 
              href="mailto:tasat.sales@ihg.com" 
              className="hover:text-black transition"
            >
              {t("contact_corporate_email")}
            </a>

            <a 
              href="mailto:tasat.wellness@ihg.com" 
              className="hover:text-black transition"
            >
              {t("contact_spa_email")}
            </a>

            <a 
              href="mailto:aziza.tulyaganova@ihg.com" 
              className="hover:text-black transition"
            >
              {t("contact_marketing_email")}
            </a>
          </div>
        </div>

      </div>

      {/* MAP */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-center text-3xl font-bold mb-10">
          📍 {t("contact_map_title")}
        </h2>

        <div className="rounded-3xl overflow-hidden shadow-2xl">
          <iframe
            src="https://www.google.com/maps?q=InterContinental%20Tashkent&output=embed"
            className="w-full h-[450px] border-0"
            loading="lazy"
            title="Hotel Location"
          ></iframe>
        </div>
      </div>

    </div>
  );
}

export default Contact;