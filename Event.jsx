import React, { useState } from "react";
import meet from "../assets/meet.JPG";
import meet1 from "../assets/5.JPG";
import { useTranslation } from "react-i18next";

function Event() {
  const { t } = useTranslation();

  const [form, setForm] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    comment: "",
  });

  // Telegramga yuborish funksiyasi
  const sendToTelegram = async (formData) => {
    const token = "8631082455:AAGqiw0RiN9cmWWSYuMsMKZm4M9OSEDQdts";
    const chatId = "6983052784";

    const text = `
📩 Yangi Event So'rovi

👤 Ism: ${formData.name || "-"}
👤 Familiya: ${formData.surname || "-"}
📧 Email: ${formData.email || "-"}
📞 Telefon: ${formData.phone || "-"}
💬 Izoh: ${formData.comment || "-"}
    `.trim();

    try {
      const res = await fetch(
        `https://api.telegram.org/bot${token}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: chatId,
            text: text,
            parse_mode: "HTML",
          }),
        }
      );

      const data = await res.json();
      if (!data.ok) {
        console.error("Telegram error:", data);
      } else {
        console.log("Telegramga muvaffaqiyatli yuborildi");
      }
    } catch (err) {
      console.error("Telegramga yuborishda xatolik:", err);
    }
  };

  // Formani yuborish
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.phone) {
      alert("Iltimos, ism va telefon raqamini to'ldiring!");
      return;
    }

    await sendToTelegram(form);

    alert("So'rov muvaffaqiyatli yuborildi ✅");

    // Formani tozalash
    setForm({
      name: "",
      surname: "",
      email: "",
      phone: "",
      comment: "",
    });
  };

  return (
    <div className="bg-[#f8f8f8] text-gray-800">
      {/* HERO SECTION */}
      <div className="relative h-screen w-full overflow-hidden">
        <img
          src={meet}
          alt="Event Hall"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white">
            {t("event_title")}
          </h1>
          <p className="mt-4 text-lg sm:text-2xl text-white/90">
            {t("hotel_name")}
          </p>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-sm animate-bounce">
          ↓ Scroll
        </div>
      </div>

      {/* INTRO SECTION */}
      <div className="max-w-5xl mx-auto px-6 py-16 text-center space-y-6">
        <h2 className="text-3xl font-semibold">{t("event_intro_title")}</h2>
        <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
          {t("event_intro_desc")}
        </p>
      </div>

      {/* BALLROOM + CONFERENCE SECTION */}
      <div className="max-w-6xl mx-auto px-6 py-10 space-y-20">
        
        {/* Ballroom */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img
            src={meet}
            alt="Ballroom"
            className="rounded-3xl shadow-xl w-full"
          />

          <div className="space-y-4">
            <h3 className="text-3xl font-serif">{t("ballroom_title")}</h3>
            <p className="text-gray-600">{t("ballroom_desc")}</p>

            <ul className="text-sm text-gray-500 list-disc ml-5 space-y-1">
              {t("ballroom_features", { returnObjects: true })?.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <button className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition">
              {t("request_price")}
            </button>
          </div>
        </div>

        {/* Conference */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <h3 className="text-3xl font-serif">{t("conference_title")}</h3>
            <p className="text-gray-600">{t("conference_desc")}</p>

            <ul className="text-sm text-gray-500 list-disc ml-5 space-y-1">
              {t("conference_features", { returnObjects: true })?.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <button className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition">
              {t("request_price")}
            </button>
          </div>

          <img
            src={meet1}
            alt="Conference Hall"
            className="rounded-3xl shadow-xl w-full"
          />
        </div>
      </div>

      {/* EVENT REQUEST FORM */}
      <form onSubmit={handleSubmit} className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl text-center font-serif mb-8">
            {t("event_form_title")}
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              className="p-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-black transition"
              placeholder={t("name")}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />

            <input
              type="text"
              className="p-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-black transition"
              placeholder={t("surname")}
              value={form.surname}
              onChange={(e) => setForm({ ...form, surname: e.target.value })}
            />
          </div>

          <input
            type="email"
            className="w-full p-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-black transition"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <input
            type="tel"
            className="w-full p-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-black transition"
            placeholder={t("phone")}
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            required
          />

          <textarea
            className="w-full p-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-black transition resize-y"
            placeholder={t("comment")}
            rows="5"
            value={form.comment}
            onChange={(e) => setForm({ ...form, comment: e.target.value })}
          />

          <button
            type="submit"
            className="w-full bg-black text-white py-4 rounded-2xl text-lg font-medium hover:bg-gray-900 transition active:scale-[0.985]"
          >
            {t("send")}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Event;