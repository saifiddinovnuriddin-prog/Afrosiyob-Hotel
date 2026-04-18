import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../assets/logo.png";

function Header() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const langRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);
    setLangOpen(false);
  };

  const navItems = [
    { name: t("nav_hotel"), path: "/about" },
    { name: t("nav_rooms"), path: "/nomers" },
    { name: t("nav_restaurants"), path: "/restaurants" },
    { name: t("nav_events"), path: "/events" },
    { name: t("nav_spa"), path: "/spa" },
    { name: t("nav_gallery"), path: "/gallery" },
    { name: t("nav_contact"), path: "/contact" },
  ];

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/70 backdrop-blur-2xl shadow-xl py-3"
            : "bg-transparent py-6"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={logo}
              alt="Hotel"
              className="w-12 h-12 group-hover:scale-110 transition"
            />
            <div>
              <h1 className="text-white font-bold text-xl tracking-wide">
                Afrosiyob
              </h1>
              <p className="text-blue-400 text-xs tracking-[3px]">
                REGENCY HOTEL
              </p>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-8 text-white text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="relative group hover:text-blue-400 transition"
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4">

            {/* LANGUAGE */}
            <div ref={langRef} className="relative hidden md:block">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/10 transition"
              >
                🌐 {i18n.language?.toUpperCase() || "UZ"}
              </button>

              {langOpen && (
                <div className="absolute right-0 mt-3 bg-black/80 backdrop-blur-xl rounded-xl overflow-hidden shadow-2xl border border-white/10">
                  {["uz", "ru", "en"].map((lng) => (
                    <button
                      key={lng}
                      onClick={() => changeLanguage(lng)}
                      className="block w-full px-5 py-2 text-white hover:bg-blue-500/30 transition"
                    >
                      {lng.toUpperCase()}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* BOOK BUTTON */}
            <button
              onClick={() => navigate("/bookingroom")}
              className="hidden md:block px-6 py-2.5 rounded-xl text-white font-semibold
              bg-gradient-to-r from-blue-600 to-cyan-500
              shadow-lg shadow-blue-500/30 hover:scale-105 transition"
            >
              {t("check_availability")}
            </button>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden flex flex-col gap-1 z-[60]"
            >
              <span className={`w-6 h-0.5 bg-white transition ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
              <span className={`w-6 h-0.5 bg-white transition ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`w-6 h-0.5 bg-white transition ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
            </button>
          </div>
        </nav>
      </header>

      {/* OVERLAY */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 bg-black/60 z-40 transition ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-[85%] max-w-sm z-50
        bg-black/80 backdrop-blur-2xl border-l border-white/10
        transform transition-transform duration-500 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-8 mt-20 flex flex-col gap-6 text-white text-lg">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className="hover:text-blue-400 transition"
            >
              {item.name}
            </Link>
          ))}

          <button
            onClick={() => {
              setMenuOpen(false);
              navigate("/bookingroom");
            }}
            className="mt-6 py-4 rounded-xl font-semibold
            bg-gradient-to-r from-blue-600 to-cyan-500 shadow-lg"
          >
            {t("check_availability")}
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;