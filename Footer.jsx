import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#0f0f0f] text-white pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-3 gap-10">

        {/* Logo + Описание */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-amber-400 tracking-tight">
            Afrosiyob Regency
          </h2>
          <p className="text-gray-400 max-w-xs leading-relaxed">
            {t("footer_description")}
          </p>

          <div className="mt-8 flex gap-4">
            <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition">
              📍
            </div>
            <div>
              <p className="text-sm text-gray-400">Tashkent, Uzbekistan</p>
            </div>
          </div>
        </div>

        {/* Быстрые ссылки */}
        <div>
          <h4 className="text-lg font-semibold mb-5 text-white/90">
            {t("quick_links")}
          </h4>
          <ul className="space-y-3 text-gray-400">
            <li>
              <Link to="/" className="hover:text-amber-400 transition-colors duration-300">
                {t("nav_home")}
              </Link>
            </li>
            <li>
              <Link to="/nomers" className="hover:text-amber-400 transition-colors duration-300">
                {t("nav_rooms")}
              </Link>
            </li>
            <li>
              <Link to="/restaurants" className="hover:text-amber-400 transition-colors duration-300">
                {t("nav_restaurants")}
              </Link>
            </li>
            <li>
              <Link to="/spa" className="hover:text-amber-400 transition-colors duration-300">
                {t("nav_spa")}
              </Link>
            </li>
            <li>
              <Link to="/events" className="hover:text-amber-400 transition-colors duration-300">
                {t("nav_events")}
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-amber-400 transition-colors duration-300">
                {t("nav_gallery")}
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-amber-400 transition-colors duration-300">
                {t("nav_contact")}
              </Link>
            </li>
          </ul>
        </div>

        {/* Контакты */}
        <div>
          <h4 className="text-lg font-semibold mb-5 text-white/90">
            {t("contact_info")}
          </h4>
          <ul className="space-y-4 text-gray-400">
            <li className="flex items-start gap-3">
              <span className="text-amber-400 mt-0.5">📍</span>
              <span>Шахрисабзская улица 2,<br />Ташкент, Узбекистан</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-amber-400">📞</span>
              <a href="tel:+998555044444" className="hover:text-white transition">
                +998 55 504 44 44
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-amber-400">✉️</span>
              <a href="mailto:info@afrosiyobhotel.uz" className="hover:text-white transition">
                info@afrosiyobhotel.uz
              </a>
            </li>
          </ul>

          {/* Социальные сети */}
          <div className="mt-10">
            <h5 className="text-sm text-gray-500 mb-3">Мы в соцсетях</h5>
            <div className="flex gap-4 text-2xl">
              <a href="#" className="hover:text-blue-400 transition"></a>
              <a href="#" className="hover:text-blue-400 transition">📘</a>
              <a href="#" className="hover:text-pink-400 transition">📷</a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-20 right-10 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Нижняя полоса */}
      <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-500 text-sm">
        © 2026 Afrosiyob Regency Hotel. {t("all_rights_reserved")}
      </div>
    </footer>
  );
}

export default Footer;