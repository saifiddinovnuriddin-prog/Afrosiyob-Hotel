import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { format, differenceInDays } from "date-fns";
import { useTranslation } from "react-i18next";

import res4 from "../assets/res_6.jpg";
import parking from "../assets/parking.png";
import bas from "../assets/bas.jpg";
import wifi from "../assets/wifii.webp";

function BookingPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [bookingData, setBookingData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const data = localStorage.getItem("selectedBooking");
    if (data) {
      try {
        setBookingData(JSON.parse(data));
      } catch (error) {
        console.error("Booking data parse qilishda xatolik:", error);
      }
    }
    setLoading(false);
  }, []);

  const handleContinue = () => {
    if (bookingData) {
      navigate("/paynet");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#f8f9fa]">
        <div className="w-12 h-12 border-4 border-blue-400 border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-xl text-gray-600 font-medium">{t("loading")}</p>
      </div>
    );
  }

  if (!bookingData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f8f9fa]">
        <div className="text-center bg-white p-10 rounded-[32px] shadow-lg">
          <div className="text-6xl mb-4">📑</div>
          <p className="text-2xl font-bold text-gray-800 mb-2">{t("no_booking_data")}</p>
          <p className="text-gray-500 mb-6">{t("no_booking_message")}</p>
          <Link 
            to="/bookingroom" 
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            ← {t("back_to_rooms")}
          </Link>
        </div>
      </div>
    );
  }

  const checkIn = new Date(bookingData.checkIn);
  const checkOut = new Date(bookingData.checkOut);
  const nights = Math.max(1, differenceInDays(checkOut, checkIn));

  const services = [
    {
      type: "food",
      title: t("service_food"),
      image: res4,
      dynamicTitle: (data) =>
        data?.withBreakfast
          ? t("breakfast_included")
          : t("breakfast_not_included"),
      description: t("breakfast_description"),
      status: bookingData?.withBreakfast ? "Free" : "Optional",
    },
    {
      type: "spa",
      title: t("service_spa"),
      image: bas,
      extra: (
        <div className="grid grid-cols-2 gap-2 text-xs mt-3">
          <div className="bg-pink-50 text-pink-700 p-2 rounded-lg">👩 {t("women_time")}</div>
          <div className="bg-blue-50 text-blue-700 p-2 rounded-lg">👨 {t("men_time")}</div>
        </div>
      ),
      description: t("spa_description"),
    },
    {
      type: "parking",
      title: t("service_parking"),
      image: parking,
      description: t("parking_description"),
    },
  ];

  return (
    <div className="bg-[#f0f2f5] min-h-screen font-sans pb-20">
      {/* HEADER */}
      <div className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button 
            onClick={() => navigate(-1)} 
            className="flex items-center gap-2 text-gray-500 hover:text-black font-medium transition"
          >
            <span className="text-xl">←</span> {t("back")}
          </button>
          
          <h1 className="text-xl font-bold text-gray-900 hidden md:block">
            {t("additional_services")}
          </h1>

          <button
            onClick={handleContinue}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-2xl font-bold shadow-lg shadow-blue-200 transition transform active:scale-95"
          >
            {t("next")} →
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-10 flex flex-col lg:flex-row gap-8">
        {/* LEFT SIDE - Room Info & Services */}
        <div className="flex-1 space-y-8">
          {/* Selected Room Card */}
          <div className="bg-white rounded-[32px] overflow-hidden shadow-sm border border-gray-100 flex flex-col md:flex-row">
            <div className="md:w-80 h-56 md:h-auto overflow-hidden relative">
              <img 
                src={bookingData.roomImg} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                alt="Room" 
              />
              <div className="absolute top-4 left-4">
                <span className="bg-blue-600/90 backdrop-blur-md text-white px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest shadow-lg">
                  {t("selected_room")}
                </span>
              </div>
            </div>

            <div className="p-8 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start">
                  <h2 className="text-2xl font-black text-gray-900 tracking-tight">
                    {bookingData.roomTitle}
                  </h2>
                  <div className="flex items-center gap-1 text-orange-500">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>

                {/* Room Features */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <span className="text-lg">📏</span>
                    <span className="text-xs font-bold">{bookingData.roomSize || "20"} m²</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <span className="text-lg">👥</span>
                    <span className="text-xs font-bold">{t("up_to_3_guests")}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <span className="text-lg">🛌</span>
                    <span className="text-xs font-bold">Double Bed</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <span className="text-lg">🚿</span>
                    <span className="text-xs font-bold">{t("shower_bath")}</span>
                  </div>
                </div>

                {/* Amenities Tags */}
                <div className="flex flex-wrap gap-2 mt-8">
                  {[
                    { label: t("wifi"), icon: "📶" },
                    { label: t("smart_tv"), icon: "📺" },
                    { label: t("air_conditioner"), icon: "❄️" },
                    { label: t("safe"), icon: "🛡️" },
                    { label: t("mini_bar"), icon: "🍷" }
                  ].map((item) => (
                    <span 
                      key={item.label} 
                      className="bg-gray-50 border border-gray-100 text-gray-600 px-4 py-2 rounded-2xl text-[11px] font-bold flex items-center gap-2 hover:bg-white hover:shadow-sm transition-all"
                    >
                      <span>{item.icon}</span>
                      {item.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 px-2">{t("hotel_services")}</h3>

          {/* Services List */}
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
            {services.map((item, i) => (
              <div key={i} className="bg-white rounded-[28px] p-6 flex flex-col md:flex-row gap-6 shadow-sm border border-gray-100 hover:shadow-md transition">
                <div className="w-full md:w-44 h-44 rounded-2xl overflow-hidden shrink-0">
                  <img src={item.image} className="w-full h-full object-cover" alt="" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <h4 className="text-xl font-bold text-gray-900">
                      {item.dynamicTitle ? item.dynamicTitle(bookingData) : item.title}
                    </h4>
                    {item.status && (
                      <span className="text-blue-600 font-bold text-sm">{item.status}</span>
                    )}
                  </div>
                  <p className="text-gray-600 mt-2 leading-relaxed">{item.description}</p>
                  {item.extra}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE - Booking Summary */}
        <div className="w-full lg:w-[400px]">
          <div className="bg-white rounded-[32px] p-8 shadow-xl shadow-gray-200/50 sticky top-28 border border-gray-50">
            <h3 className="font-bold text-xl mb-8 text-gray-900">{t("booking_details")}</h3>

            <div className="space-y-6">
              <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-2xl">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-xl flex items-center justify-center text-xl shadow-lg shadow-blue-100">📅</div>
                <div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">{t("dates")}</div>
                  <div className="text-sm font-bold text-gray-800">
                    {format(checkIn, "dd MMM")} — {format(checkOut, "dd MMM yyyy")}
                  </div>
                  <div className="text-xs text-blue-600 font-semibold">
                    {nights} {t("nights", { count: nights })}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500 font-medium">{bookingData.roomTitle}</span>
                  <span className="font-bold text-gray-900">
                    {(bookingData.totalPrice / nights).toLocaleString("ru-RU")} UZS
                  </span>
                </div>
                
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500 font-medium">{t("number_of_nights")}</span>
                  <span className="font-bold text-gray-900">x{nights}</span>
                </div>

                {bookingData.withBreakfast && (
                  <div className="flex justify-between text-sm text-green-600 font-medium">
                    <span>{t("breakfast_buffet")}</span>
                    <span>{t("included")}</span>
                  </div>
                )}
                
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500 font-medium">{t("taxes_fees")}</span>
                  <span className="font-bold text-gray-800">0 UZS</span>
                </div>
              </div>

              <div className="border-t border-dashed pt-6 mt-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-900 font-bold text-xl">{t("total")}</span>
                  <div className="text-right">
                    <p className="text-3xl font-black text-blue-600 leading-none">
                      {bookingData.totalPrice.toLocaleString("ru-RU")}
                    </p>
                    <p className="text-xs font-bold text-gray-400 mt-1 uppercase">UZS</p>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={handleContinue}
              className="mt-10 w-full bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-[20px] font-bold text-lg shadow-lg shadow-blue-100 transition transform active:scale-95 flex items-center justify-center gap-3"
            >
              {t("proceed_to_payment")} 💳
            </button>
            
            <p className="text-center text-[10px] text-gray-400 mt-4 uppercase tracking-widest font-bold">
              {t("best_price_guarantee")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingPage;