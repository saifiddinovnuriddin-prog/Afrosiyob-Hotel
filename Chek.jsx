import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Chek() {
  const { t } = useTranslation();
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const saved = localStorage.getItem("selectedBookingFull");
    if (saved) {
      setData(JSON.parse(saved));
    }
  }, []);

  if (!data) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <p className="text-gray-500 mb-4">{t("check_not_found")}</p>
        <button 
          onClick={() => navigate("/")}
          className="bg-black text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-800 transition"
        >
          {t("back_to_home")}
        </button>
      </div>
    );
  }

  // Генерация простого ID для чека
  const bookingId = Math.random().toString(36).substr(2, 9).toUpperCase();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 font-sans">
      {/* Чек в реальном стиле */}
      <div className="bg-white rounded-2xl w-full max-w-sm overflow-hidden shadow-2xl relative">
        
        {/* Верхняя декоративная часть */}
        <div className="bg-black text-white p-6 text-center">
          <div className="text-4xl mb-2">🏨</div>
          <h1 className="text-xl font-bold tracking-widest uppercase">
            {t("booking_successful")}
          </h1>
          <p className="text-gray-400 text-xs mt-1">{t("we_are_waiting_for_you")}</p>
        </div>

        {/* Тело чека */}
        <div className="p-6 space-y-5">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">{t("guest")}:</span>
            <span className="font-semibold text-gray-800">
              {data.firstName} {data.lastName}
            </span>
          </div>
          
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">{t("phone")}:</span>
            <span className="font-semibold text-gray-800">
              {data.phone}
            </span>
          </div>

          <div className="border-t border-dashed border-gray-300 my-5"></div>

          <div>
            <p className="text-xs text-gray-400 uppercase tracking-tighter mb-1">
              {t("room_and_services")}
            </p>
            <p className="font-bold text-gray-800">{data.roomTitle}</p>
          </div>

          <div className="grid grid-cols-2 gap-4 bg-gray-50 p-4 rounded-xl">
            <div>
              <p className="text-[10px] text-gray-400 uppercase">{t("check_in")}</p>
              <p className="text-sm font-semibold">{data.checkIn}</p>
            </div>
            <div>
              <p className="text-[10px] text-gray-400 uppercase text-right">{t("check_out")}</p>
              <p className="text-sm font-semibold text-right">{data.checkOut}</p>
            </div>
          </div>

          <div className="border-t border-dashed border-gray-300 my-5"></div>

          <div className="flex justify-between items-center">
            <span className="text-gray-500">{t("total_amount")}:</span>
            <span className="text-xl font-black text-green-600">
              {data.totalPrice?.toLocaleString()} <small className="text-xs">UZS</small>
            </span>
          </div>

          {/* QR / ID имитация */}
          <div className="flex flex-col items-center pt-6 border-t border-dashed">
            <div className="w-28 h-28 bg-gray-100 rounded-2xl flex items-center justify-center border-2 border-dashed border-gray-300 mb-4">
              <div className="text-center">
                <div className="text-[10px] text-gray-400 font-mono tracking-widest">BOOKING ID</div>
                <div className="text-lg font-bold text-gray-700 mt-1">{bookingId}</div>
              </div>
            </div>
            <p className="text-[11px] text-gray-400 text-center leading-tight max-w-[260px]">
              {t("save_check_note")}
            </p>
          </div>
        </div>

        {/* Нижний декоративный "зубчатый" край */}
        <div className="flex justify-between px-3 -mb-3">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="w-3.5 h-3.5 bg-gray-100 rounded-full"></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Chek;