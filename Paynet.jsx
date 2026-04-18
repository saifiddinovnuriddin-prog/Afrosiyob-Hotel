import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Paynet() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    lastName: "",
    firstName: "",
    middleName: "",
    countryCode: "+998",
    phone: "",
    email: "",
    citizenship: "UZ",
    comment: "",
    arrivalTime: "14:00",
  });

  const [check2, setCheck2] = useState(false);
  const [bookingData, setBookingData] = useState(null);
  const [loading, setLoading] = useState(false);

  const SHEETS_URL = "https://script.google.com/macros/s/AKfycbxH5Doy-f5v-hFWfceHJ__p_J5YZ_k2bwQyPoZs2g8PPThGrUPrdA8WESk-qit2uPINvA/exec";

  useEffect(() => {
    const data = localStorage.getItem("selectedBooking");
    if (data) {
      setBookingData(JSON.parse(data));
    } else {
      navigate("/bookingroom");
    }
  }, [navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone") {
      const onlyNums = value.replace(/[^0-9]/g, "");
      setFormData((prev) => ({ ...prev, [name]: onlyNums }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    if (!check2) return;

    setLoading(true);

    const fullPhoneNumber = formData.countryCode + formData.phone;

    const fullData = { 
      ...formData, 
      phone: fullPhoneNumber,
      ...bookingData,
      submittedAt: new Date().toLocaleString(),
      status: "Kutilmoqda"
    };

    const params = new URLSearchParams({
      firstName: formData.firstName,
      lastName: formData.lastName,
      phone: fullPhoneNumber,
      email: formData.email,
      citizenship: formData.citizenship,
      roomTitle: bookingData.roomTitle,
      checkIn: bookingData.checkIn,
      checkOut: bookingData.checkOut,
      totalPrice: bookingData.totalPrice,
      comment: formData.comment,
      arrivalTime: formData.arrivalTime
    });

    try {
      await fetch(`${SHEETS_URL}?${params.toString()}`, {
        method: "GET",
        mode: "no-cors",
      });

      localStorage.setItem("selectedBookingFull", JSON.stringify(fullData));
      
      setTimeout(() => {
        setLoading(false);
        navigate("/chek");
      }, 1000);

    } catch (error) {
      console.error("Xatolik yuz berdi:", error);
      alert(t("submission_error"));
      setLoading(false);
    }
  };

  if (!bookingData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <p className="mt-4 text-gray-500 font-medium">{t("preparing")}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#f4f7fa] min-h-screen font-sans pb-20">
      <div className="bg-white border-b mb-8">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <h1 className="text-2xl font-bold text-gray-900">{t("complete_booking")}</h1>
          <p className="text-gray-500 text-sm mt-1">{t("enter_personal_info")}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col lg:flex-row gap-8">
        
        {/* Левая часть — Форма */}
        <div className="flex-1">
          <div className="bg-white rounded-[32px] p-8 shadow-sm border border-gray-100">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold italic">1</div>
              <h2 className="text-xl font-bold">{t("main_information")}</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">{t("last_name")} *</label>
                  <input 
                    type="text" 
                    name="lastName" 
                    value={formData.lastName} 
                    onChange={handleInputChange}
                    placeholder={t("example_lastname")}
                    className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-50 transition-all outline-none" 
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">{t("first_name")} *</label>
                  <input 
                    type="text" 
                    name="firstName" 
                    value={formData.firstName} 
                    onChange={handleInputChange}
                    placeholder={t("example_firstname")}
                    className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-50 transition-all outline-none" 
                    required 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">{t("phone_number")} *</label>
                  <div className="flex relative">
                    <div className="absolute left-2 top-1/2 -translate-y-1/2 z-10 border-r pr-1">
                      <select
                        name="countryCode"
                        value={formData.countryCode}
                        onChange={handleInputChange}
                        className="bg-transparent text-gray-700 font-semibold outline-none cursor-pointer text-sm pl-2"
                      >
                        <option value="+998">🇺🇿 +998</option>
                        <option value="+7">🇷🇺 +7</option>
                        <option value="+7">🇰🇿 +7</option>
                        <option value="+996">🇰🇬 +996</option>
                        <option value="+992">🇹🇯 +992</option>
                        <option value="+993">🇹🇲 +993</option>
                        <option value="+90">🇹🇷 +90</option>
                        <option value="+1">🇺🇸 +1</option>
                        <option value="+49">🇩🇪 +49</option>
                        <option value="+44">🇬🇧 +44</option>
                        <option value="+971">🇦🇪 +971</option>
                        <option value="+82">🇰🇷 +82</option>
                        <option value="+86">🇨🇳 +86</option>
                      </select>
                    </div>
                    <input 
                      type="tel" 
                      name="phone" 
                      placeholder={t("enter_phone")}
                      value={formData.phone} 
                      onChange={handleInputChange}
                      className="w-full bg-gray-50 border border-gray-200 rounded-2xl pl-32 pr-5 py-4 focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-50 transition-all outline-none"
                      required 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">{t("email_optional")}</label>
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="example@mail.com"
                    value={formData.email} 
                    onChange={handleInputChange}
                    className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-50 transition-all outline-none" 
                  />
                </div>
              </div>

              <div className="space-y-2 mt-8">
                <label className="text-sm font-bold text-gray-700 ml-1">{t("citizenship")}</label>
                <div className="relative">
                  <select 
                    name="citizenship" 
                    value={formData.citizenship} 
                    onChange={handleInputChange}
                    className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 focus:bg-white outline-none cursor-pointer appearance-none pr-12"
                  >
                    <optgroup label={t("main_group")}>
                      <option value="UZ">🇺🇿 {t("uzbekistan")}</option>
                    </optgroup>
                    <optgroup label={t("cis_group")}>
                      <option value="RU">🇷🇺 {t("russia")}</option>
                      <option value="KZ">🇰🇿 {t("kazakhstan")}</option>
                      <option value="KG">🇰🇬 {t("kyrgyzstan")}</option>
                      <option value="TJ">🇹🇯 {t("tajikistan")}</option>
                      <option value="TM">🇹🇲 {t("turkmenistan")}</option>
                      <option value="AF">🇦🇫 {t("afghanistan")}</option>
                      <option value="AZ">🇦🇿 {t("azerbaijan")}</option>
                      <option value="BY">🇧🇾 {t("belarus")}</option>
                      <option value="UA">🇺🇦 {t("ukraine")}</option>
                      <option value="GE">🇬🇪 {t("georgia")}</option>
                    </optgroup>
                    <optgroup label={t("europe_group")}>
                      <option value="TR">🇹🇷 {t("turkey")}</option>
                      <option value="DE">🇩🇪 {t("germany")}</option>
                      <option value="GB">🇬🇧 {t("uk")}</option>
                      <option value="FR">🇫🇷 {t("france")}</option>
                      <option value="IT">🇮🇹 {t("italy")}</option>
                      <option value="ES">🇪🇸 {t("spain")}</option>
                      <option value="CH">🇨🇭 {t("switzerland")}</option>
                      <option value="NL">🇳🇱 {t("netherlands")}</option>
                    </optgroup>
                    <optgroup label={t("asia_group")}>
                      <option value="CN">🇨🇳 {t("china")}</option>
                      <option value="KR">🇰🇷 {t("south_korea")}</option>
                      <option value="JP">🇯🇵 {t("japan")}</option>
                      <option value="IN">🇮🇳 {t("india")}</option>
                      <option value="AE">🇦🇪 {t("uae")}</option>
                      <option value="SA">🇸🇦 {t("saudi_arabia")}</option>
                      <option value="MY">🇲🇾 {t("malaysia")}</option>
                      <option value="SG">🇸🇬 {t("singapore")}</option>
                      <option value="TH">🇹🇭 {t("thailand")}</option>
                    </optgroup>
                    <optgroup label={t("america_group")}>
                      <option value="US">🇺🇸 {t("usa")}</option>
                      <option value="CA">🇨🇦 {t("canada")}</option>
                      <option value="OTHER">🏳️ {t("other_countries")}</option>
                    </optgroup>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                    <svg className="fill-current h-5 w-5" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
              </div>

              {/* Время прибытия */}
              <div className="pt-8 border-t border-dashed mt-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-bold">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">{t("arrival_time")}</h2>
                    <p className="text-gray-500 text-xs">{t("arrival_time_note")}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input 
                    type="time" 
                    name="arrivalTime"
                    value={formData.arrivalTime}
                    onChange={handleInputChange}
                    className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-6 py-4 focus:bg-white focus:border-blue-600 outline-none transition-all cursor-pointer font-bold text-gray-700"
                  />
                  <div className="bg-orange-50 p-4 rounded-2xl flex items-center">
                    <p className="text-orange-700 text-[11px] leading-tight font-medium">
                      {t("early_checkin_note")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Дополнительные пожелания */}
              <div className="pt-8 border-t border-dashed">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold italic">2</div>
                  <h2 className="text-xl font-bold">{t("additional_requests")}</h2>
                </div>
                <textarea 
                  name="comment"
                  value={formData.comment}
                  onChange={handleInputChange}
                  className="w-full bg-gray-50 border border-gray-200 rounded-[24px] px-6 py-5 h-32 focus:bg-white outline-none focus:border-blue-600 transition-all resize-none"
                  placeholder={t("comment_placeholder")} 
                />
              </div>

              {/* Согласие */}
              <div className="bg-blue-50/50 p-6 rounded-3xl space-y-4">
                <label className="flex items-center gap-4 cursor-pointer group">
                  <input 
                    type="checkbox" 
                    checked={check2} 
                    onChange={() => setCheck2(!check2)} 
                    className="w-6 h-6 rounded-lg accent-blue-600" 
                    required 
                  />
                  <span className="text-sm text-gray-700 font-medium select-none">
                    {t("privacy_agreement")}
                  </span>
                </label>
              </div>

              <button 
                type="submit" 
                disabled={loading || !check2}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white py-5 rounded-2xl text-xl font-black transition-all shadow-xl shadow-blue-100 active:scale-[0.98] flex items-center justify-center gap-3"
              >
                {loading ? t("submitting") : t("confirm_booking")}
              </button>
            </form>
          </div>
        </div>

        {/* Правая часть — Сводка */}
        <div className="w-full lg:w-[380px]">
          <div className="bg-white rounded-[32px] overflow-hidden shadow-lg border border-gray-50 sticky top-10">
            <div className="p-6 bg-gray-900 text-white">
              <h3 className="text-lg font-bold">{t("your_choice")}</h3>
              <p className="text-gray-400 text-xs mt-1 uppercase tracking-tighter">Afrosiyob Regency Hotel</p>
            </div>
            
            <div className="p-8 space-y-6">
              <div>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">{t("room_type")}</p>
                <p className="text-lg font-bold text-gray-800 leading-tight">{bookingData.roomTitle}</p>
              </div>

              <div className="flex justify-between items-center py-4 border-y border-dashed">
                <div>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{t("dates")}</p>
                  <p className="font-bold text-gray-700 text-sm">{bookingData.checkIn} — {bookingData.checkOut}</p>
                </div>
                <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-lg text-xs font-bold">
                  {bookingData.nights || 1} {t("nights_short")}
                </div>
              </div>

              <div className="pt-6 border-t border-gray-100 flex justify-between items-end">
                <div>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{t("total_amount")}</p>
                  <p className="text-3xl font-black text-blue-600">{(bookingData.totalPrice || 0).toLocaleString()}</p>
                </div>
                <p className="text-xs font-bold text-gray-400 mb-1">UZS</p>
              </div>

              <div className="bg-green-50 rounded-2xl p-4 border border-green-100">
                <p className="text-green-700 text-[11px] font-bold text-center leading-snug">
                  {t("no_prepayment_note")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Paynet;