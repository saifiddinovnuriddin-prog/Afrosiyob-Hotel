import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import hotelHero from "../assets/CONTACTI.jpg";

import hotel from "../assets/hafrosiyob.jpg";
import hotel1 from "../assets/hotel.jpg";

import res1 from "../assets/Лобби.jpg";
import resep from "../assets/resep.jpg";
import resep1 from "../assets/resep1.jpg";
import resep2 from "../assets/resep2.jpg";
import resep3 from "../assets/hall_view_View08.jpg";
import resep5 from "../assets/hall_view_View09.jpg";
import resep6 from "../assets/hall_view_View10.jpg";
import resep7 from "../assets/hall_view_View11.jpg";
import resep8 from "../assets/hall_view_View12.jpg";
import resep9 from "../assets/hall_view_View13.jpg";

import res2 from "../assets/res_1.jpg";
import res3 from "../assets/res_4.jpg";
import res4 from "../assets/res_6.jpg";
import res5 from "../assets/res_24.jpg";
import res6 from "../assets/res_27.jpg";
import res7 from "../assets/res_40.jpg";
import res8 from "../assets/vip_2.jpg";
import res9 from "../assets/vip_3.jpg";
import res10 from "../assets/vip_4.jpg";

import xona from "../assets/xona.jpg";
import xona1 from "../assets/5_411xona.jpg";
import xona2 from "../assets/6_401xona.jpg";
import xona3 from "../assets/xona1.jpg";
import xona4 from "../assets/room.png";
import xona5 from "../assets/san_uzel1(2)_415xona.jpg";
import xona6 from "../assets/san_uzel3(2)_415xona.jpg";
import xona7 from "../assets/1_411xona.jpg";
import xona8 from "../assets/2_411xona.jpg";
import xona9 from "../assets/5_411xona.jpg";
import xona10 from "../assets/4_411xona.jpg";

import meet from "../assets/meet.JPG";
import meet1 from "../assets/5.JPG";
import meet2 from "../assets/6.JPG";
import meet3 from "../assets/13.JPG";
import meet4 from "../assets/14.JPG";

import sport from "../assets/SPORT ZALL VIEW_View03.jpg";
import sport1 from "../assets/SPORT ZALL VIEW_View04.jpg";
import sport2 from "../assets/SPORT ZALL VIEW_View05.jpg";
import sport3 from "../assets/SPORT ZALL VIEW_View06.jpg";
import sport4 from "../assets/SPORT ZALL VIEW_View07.jpg";

function Gallery() {
  const { t } = useTranslation();

  const images = [
    { src: hotel, category: "hotel" },
    { src: hotel1, category: "hotel" },

    { src: resep, category: "lobby" },
    { src: resep1, category: "lobby" },
    { src: resep2, category: "lobby" },
    { src: resep3, category: "lobby" },
    { src: res1, category: "lobby" },
    { src: resep5, category: "lobby" },
    { src: resep6, category: "lobby" },
    { src: resep7, category: "lobby" },
    { src: resep8, category: "lobby" },
    { src: resep9, category: "lobby" },

    { src: res2, category: "lounge" },
    { src: res3, category: "lounge" },
    { src: res4, category: "lounge" },
    { src: res5, category: "lounge" },
    { src: res6, category: "lounge" },
    { src: res7, category: "lounge" },
    { src: res8, category: "lounge" },
    { src: res9, category: "lounge" },
    { src: res10, category: "lounge" },

    { src: xona, category: "rooms" },
    { src: xona1, category: "rooms" },
    { src: xona2, category: "rooms" },
    { src: xona3, category: "rooms" },
    { src: xona4, category: "rooms" },
    { src: xona5, category: "rooms" },
    { src: xona6, category: "rooms" },
    { src: xona7, category: "rooms" },
    { src: xona8, category: "rooms" },
    { src: xona9, category: "rooms" },
    { src: xona10, category: "rooms" },

    { src: meet, category: "conference" },
    { src: meet1, category: "conference" },
    { src: meet2, category: "conference" },
    { src: meet3, category: "conference" },
    { src: meet4, category: "conference" },

    { src: sport, category: "spa" },
    { src: sport1, category: "spa" },
    { src: sport2, category: "spa" },
    { src: sport3, category: "spa" },
    { src: sport4, category: "spa" },
  ];

  const categories = [
    "all",
    "hotel",
    "lobby",
    "rooms",
    "conference",
    "lounge",
    "spa",
  ];

  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedIndex, setSelectedIndex] = useState(null);

  const filteredImages =
    activeCategory === "all"
      ? images
      : images.filter((img) => img.category === activeCategory);

  const next = () => {
    setSelectedIndex((prev) =>
      prev === filteredImages.length - 1 ? 0 : prev + 1
    );
  };

  const prev = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? filteredImages.length - 1 : prev - 1
    );
  };

  return (
    <div className="bg-white min-h-screen">

      {/* HERO */}
      <div className="relative h-[60vh] md:h-screen">
        <img 
          src={hotelHero} 
          alt="Gallery" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-3xl md:text-6xl font-bold">
            {t("gallery_title")}
          </h1>
          <p className="mt-3 text-lg md:text-xl">
            {t("hotel_name")}
          </p>
        </div>
      </div>

      {/* FILTER BUTTONS */}
      <div className="sticky top-0 bg-white z-20 shadow-sm border-b">
        <div className="flex gap-4 overflow-x-auto px-4 py-4 max-w-7xl mx-auto hide-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap px-5 py-2 border-b-2 text-sm md:text-base font-medium transition-all ${
                activeCategory === cat
                  ? "border-black text-black"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              {t(`gallery_category_${cat}`)}
            </button>
          ))}
        </div>
      </div>

      {/* IMAGE GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4 max-w-7xl mx-auto">
        {filteredImages.map((img, index) => (
          <div
            key={index}
            onClick={() => setSelectedIndex(index)}
            className="overflow-hidden rounded-2xl cursor-pointer group"
          >
            <img
              src={img.src}
              alt=""
              className="w-full h-[240px] object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {/* LIGHTBOX MODAL */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-4">
          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute top-6 right-6 text-white text-4xl hover:text-gray-300 transition z-50"
          >
            ✕
          </button>

          <button
            onClick={prev}
            className="absolute left-6 text-white text-5xl hover:text-gray-300 transition z-50"
          >
            ‹
          </button>

          <img
            src={filteredImages[selectedIndex].src}
            alt="Enlarged view"
            className="max-w-[95%] md:max-w-5xl max-h-[90vh] rounded-2xl object-contain"
          />

          <button
            onClick={next}
            className="absolute right-6 text-white text-5xl hover:text-gray-300 transition z-50"
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
}

export default Gallery;