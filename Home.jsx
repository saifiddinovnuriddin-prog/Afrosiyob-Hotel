import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import hotel from "../assets/hotel.jpg";
import room from "../assets/room.png";
import res3 from '../assets/res_4.jpg'; 
import bas from "../assets/bas.jpg";
import kon from "../assets/konfer.jpg";
import sportz from "../assets/sportz.jpg";
import spa from "../assets/SPA.jpg";
import mas from "../assets/massage.jpg";
import res from "../assets/res.jpg";
import { useTranslation } from "react-i18next";

function Home() {

const { t } = useTranslation();

  const [open, setOpen] = useState(false);
  const [showBtn, setShowBtn] = useState(false);
  const [activee, setActivee] = useState(null);
  const [active, setActive] = useState("conference");

  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setShowBtn(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = () => {
    if (!checkIn || !checkOut) {
      alert("Iltimos, sanani tanlang!");
      return;
    }
    navigate("/rooms", { state: { checkIn, checkOut, adults, children } });
    setOpen(false);
  };

const datas = [
  { titleKey: "facility_conference", img: kon },
  { titleKey: "facility_pool", img: bas },
  { titleKey: "facility_restaurant", img: res },
  { titleKey: "facility_spa", img: spa },
];

const data = {
  conference: { titleKey: "conference_title", img: kon },
  spa: { titleKey: "spa_title", img: mas },
  fitness: { titleKey: "fitness_title", img: sportz },
  sauna: { titleKey: "sauna_title", img: spa },
};


  return (
    <div className="relative w-full bg-[#F5F5F5]">
      <div className="relative h-screen w-full overflow-hidden">
        <img
          src={hotel}
          alt="Hotel"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white leading-tight drop-shadow-2xl">
            {t("welcome")}
          </h1>
          <p className="mt-4 text-lg sm:text-2xl text-white/90 tracking-wide">
            Afrosiyob Regency Hotel
          </p>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-sm animate-bounce">
          ↓ Scroll
        </div>
      </div>


      <div className="bg-[#F5F5F5] py-24">
        <div className="w-full px-6 md:px-12 lg:px-20 space-y-32">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative group overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={room}
                alt="Luxury Room"
                className="w-full h-[520px] md:h-[620px] object-cover transition duration-700 group-hover:scale-110"
              />
            </div>

            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-[#2C2C2C] leading-tight">
                Afrosiyob Regency Hotel
              </h2>

              <div className="space-y-6 text-[#2C2C2C] text-lg leading-relaxed">
              <p className="text-xl text-[#1E6FD9] font-medium">
                {t("subtitle")}
              </p>
                <p>{t("p")}</p>
                <p>{t("p1")}</p>
                <p>{t("p2")}</p>
              </div>

              <button
                className="bg-[#1E6FD9] hover:bg-[#1859b3] text-white px-10 py-4 rounded-2xl font-semibold text-lg transition duration-300 hover:scale-105 shadow-lg"
                onClick={() => navigate("/about")}>
                {t("btn")}
              </button>
            </div>
          </div>

<div className="bg-white rounded-3xl py-12 md:py-20 px-4 md:px-10 shadow-xl border border-gray-100">
  <div className="max-w-7xl mx-auto">
    
    {datas.map((item, index) => (
      <div
        key={index}
        onMouseEnter={() => setActivee(index)}
        onClick={() => setActivee(index)}
        className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 border-b border-gray-200 py-6 md:py-8 px-2 md:px-4 hover:bg-[#F8FAFC] rounded-2xl cursor-pointer transition"
      >
        
        {/* TITLE */}
        <h1 className="text-xl sm:text-2xl md:text-4xl font-light">
          {t(item.titleKey)}
        </h1>

        {/* IMAGE */}
        <div
          className={`transition-all duration-500 overflow-hidden ${
            activee === index
              ? "max-h-40 opacity-100"
              : "max-h-0 opacity-0 md:max-h-40 md:opacity-0"
          }`}
        >
          <img
            src={item.img}
            className="w-full md:w-72 h-40 object-cover rounded-2xl shadow-xl"
            alt=""
          />
        </div>

      </div>
    ))}
  </div>
</div>


<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center bg-white rounded-3xl p-10 md:p-16 shadow-xl border border-gray-100">
<div className="space-y-8">
  
  <h2 className="text-4xl md:text-5xl font-light text-[#2C2C2C] leading-tight">
    {t("overview_title")} <br />
    <span className="text-[#1E6FD9] font-semibold">
      {t("overview_hotel")}
    </span>
  </h2>

  <p className="text-[#2C2C2C] text-lg leading-relaxed">
    {t("overview_p1")}
  </p>

  <p className="text-[#2C2C2C] text-lg leading-relaxed">
    {t("overview_p2_part1")}{" "}
    <span className="text-[#1E6FD9] font-semibold">
      {t("overview_restaurant")}
    </span>{" "}
    {t("overview_and")}{" "}
    <span className="text-[#1E6FD9] font-semibold">
      {t("overview_bar")}
    </span>{" "}
    {t("overview_p2_end")}
  </p>

  <p className="text-[#2C2C2C] text-lg leading-relaxed">
    {t("overview_p3")}
  </p>

</div>

  <div className="relative group overflow-hidden rounded-3xl shadow-2xl">
    <img
      src={res3}
      alt="Rooftop"
      className="w-full h-[480px] md:h-[560px] object-cover transition duration-700 group-hover:scale-110"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

    <div className="absolute bottom-8 left-8 text-white">
      <p className="text-sm uppercase tracking-widest text-[#1E6FD9] mb-2">
        11 этаж
      </p>
      <h3 className="text-3xl font-light">
        Ember Rooftop Bar
      </h3>
    </div>
  </div>
</div>

<div className="bg-white py-16 md:py-28 relative rounded-3xl overflow-hidden border border-gray-100 shadow-xl">
  <div className="w-full px-4 md:px-12 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-16 relative z-10">

    {/* LEFT SIDE */}
    <div className="space-y-6 md:space-y-16 text-center lg:text-left">
      {["conference", "spa"].map((item) => (
        <h2
          key={item}
          onMouseEnter={() => setActive(item)}
          onClick={() => setActive(item)}
          className={`text-xl sm:text-2xl md:text-4xl lg:text-5xl cursor-pointer transition-all duration-500 ${
            active === item
              ? "text-[#1E6FD9] font-semibold scale-105 md:scale-110"
              : "text-gray-400 hover:text-black"
          }`}
        >
          {t(data[item]?.titleKey)}
        </h2>
      ))}
    </div>

    {/* CENTER IMAGE */}
    <div className="relative w-full max-w-[320px] sm:max-w-[400px] md:max-w-[460px] h-[320px] sm:h-[400px] md:h-[560px]">
      <div className="absolute inset-0 bg-[#1E6FD9]/10 blur-3xl rounded-3xl" />

      {data[active] && (
        <>
          <img
            src={data[active].img}
            className="w-full h-full object-cover rounded-3xl shadow-2xl transition-all duration-500"
            alt=""
          />

          <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 bg-white px-4 md:px-6 py-2 md:py-3 rounded-xl md:rounded-2xl text-black text-sm md:text-base font-semibold">
            {t(data[active].titleKey)}
          </div>
        </>
      )}
    </div>

    {/* RIGHT SIDE */}
    <div className="space-y-6 md:space-y-16 text-center lg:text-right">
      {["fitness", "sauna"].map((item) => (
        <h2
          key={item}
          onMouseEnter={() => setActive(item)}
          onClick={() => setActive(item)}
          className={`text-xl sm:text-2xl md:text-4xl lg:text-5xl cursor-pointer transition-all duration-500 ${
            active === item
              ? "text-[#1E6FD9] font-semibold scale-105 md:scale-110"
              : "text-gray-400 hover:text-black"
          }`}
        >
          {t(data[item]?.titleKey)}
        </h2>
      ))}
    </div>

  </div>

  <h1 className="absolute inset-0 flex items-center justify-center text-[60px] sm:text-[90px] md:text-[140px] lg:text-[190px] font-bold text-[#F5F5F5] tracking-widest select-none pointer-events-none">
    SERVICES
  </h1>
</div>


         {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="overflow-hidden rounded-3xl group shadow-2xl">
              <img
                src={room}
                alt="Tashkent"
                className="w-full h-[450px] md:h-[550px] object-cover transition duration-700 group-hover:scale-110"
              />
            </div>

            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-[#2C2C2C]">
                Ташкент — сердце современного Востока
              </h2>

              <p className="text-lg text-[#2C2C2C] leading-relaxed">
                Уникальное сочетание истории и современности, культуры и комфорта.
              </p>

              <button className="border-b-2 border-[#1E6FD9] text-[#1E6FD9] font-semibold text-lg hover:text-[#1859b3] transition pb-1">
                Исследовать Ташкент →
              </button>
            </div>
          </div> */}

        </div>
      </div>

      <style>
        {`
          .animate-fadeIn {
            animation: fadeIn 0.6s ease forwards;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.96); }
            to { opacity: 1; transform: scale(1); }
          }
        `}
      </style>
    </div>
  );
}

export default Home;
