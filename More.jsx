import React, { useState } from "react";
import { 
  Waves, Dumbbell, Utensils, Leaf, Ban, 
  ParkingCircle, Monitor, Wifi, X, Star, MapPin,
  Clock3, ShieldCheck, Car, Coffee
} from "lucide-react";
import { useTranslation } from "react-i18next";

import xona1 from "../assets/xona.jpg";
import xona2 from "../assets/xona1.jpg";
import hotel from "../assets/hafrosiyob.jpg";
import res1 from "../assets/res_4.jpg";
import bas from "../assets/bas.jpg";
import meet from "../assets/meet.JPG";

const More = ({ isOpen, onClose }) => {
  const { t } = useTranslation();

  // Все хуки должны быть в самом начале компонента!
  const [mainImage, setMainImage] = useState(hotel);

  // Если модальное окно закрыто — возвращаем null ПОСЛЕ хуков
  if (!isOpen) return null;

  const galleryImages = [xona1, xona2, bas, res1, meet];

  const amenities = [
    { icon: <Waves size={22} />, label: t("amenity_infinity_pool"), desc: t("amenity_infinity_pool_desc") },
    { icon: <Dumbbell size={22} />, label: t("amenity_fitness_center"), desc: t("amenity_fitness_center_desc") },
    { icon: <Utensils size={22} />, label: t("amenity_restaurants"), desc: t("amenity_restaurants_desc") },
    { icon: <Coffee size={22} />, label: t("amenity_rooftop_lounge"), desc: t("amenity_rooftop_lounge_desc") },
    { icon: <Wifi size={22} />, label: t("amenity_highspeed_wifi"), desc: t("amenity_highspeed_wifi_desc") },
    { icon: <ParkingCircle size={22} />, label: t("amenity_valet_parking"), desc: t("amenity_valet_parking_desc") },
    { icon: <Monitor size={22} />, label: t("amenity_business_center"), desc: t("amenity_business_center_desc") },
    { icon: <Leaf size={22} />, label: t("amenity_sustainable"), desc: t("amenity_sustainable_desc") },
  ];

  const reviews = [
    { name: "padishah", avatar: "P", rating: 5, text: t("review_1_text") },
    { name: "John D.", avatar: "J", rating: 5, text: t("review_2_text") },
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-md p-2 sm:p-4">
      <div className="bg-white w-full max-w-7xl max-h-[96vh] overflow-y-auto rounded-3xl shadow-2xl relative">

        {/* Header */}
        <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-sm px-6 py-4 border-b flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="text-lg font-semibold text-gray-800">Afrosiyob Regency Hotel</span>
          </div>
          <button 
            onClick={onClose}
            className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors"
          >
            <X size={24} className="text-gray-700" />
          </button>
        </div>

        {/* Галерея */}
        <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-5 gap-3">
          <div className="md:col-span-3 aspect-[16/10] rounded-2xl overflow-hidden shadow-lg">
            <img 
              src={mainImage} 
              className="w-full h-full object-cover" 
              alt="Главное фото" 
            />
          </div>
          <div className="md:col-span-2 grid grid-cols-3 gap-3">
            {galleryImages.map((img, index) => (
              <div 
                key={index} 
                onClick={() => setMainImage(img)}
                className={`aspect-square rounded-xl overflow-hidden cursor-pointer border-4 transition-all ${
                  mainImage === img ? 'border-blue-600 scale-95' : 'border-transparent hover:border-blue-200'
                }`}
              >
                <img src={img} className="w-full h-full object-cover" alt={`Галерея ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 md:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-14">
          
          {/* Основная информация */}
          <div className="lg:col-span-2 space-y-12">
            
            <div className="border-b border-gray-100 pb-8">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div>
                  <h1 className="text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tighter">
                    Afrosiyob Regency Hotel
                  </h1>
                  <div className="flex items-center gap-2 mt-4 text-gray-600">
                    <MapPin size={19} className="text-blue-600" />
                    <span className="text-base">Шахрисабзская улица 2, Ташкент 100000, Узбекистан</span>
                  </div>
                </div>
                <div className="bg-amber-50 border border-amber-100 p-4 rounded-2xl text-center shadow-inner min-w-[130px]">
                  <div className="flex text-yellow-500 justify-center mb-1">
                    {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                  </div>
                  <p className="text-3xl font-bold text-amber-900">4.9</p>
                  <p className="text-xs text-amber-700 font-medium">139 {t("reviews")}</p>
                </div>
              </div>
            </div>

            {/* Удобства */}
            <section>
              <h3 className="text-2xl font-bold text-gray-950 mb-8 tracking-tight">
                {t("world_class_amenities")}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                {amenities.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-5 rounded-2xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
                    <div className="p-3 bg-blue-50 rounded-xl text-blue-700 shadow-sm flex-shrink-0 mt-1">
                      {item.icon}
                    </div>
                    <div>
                      <span className="text-base font-semibold text-gray-900 block">{item.label}</span>
                      <span className="text-sm text-gray-500 block mt-0.5">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Политика отеля */}
            <section className="bg-gray-950 text-white p-8 rounded-3xl shadow-xl">
              <h3 className="text-2xl font-bold mb-8 text-center tracking-tight">
                {t("important_policies")}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-800 p-6 rounded-2xl flex items-center gap-5">
                  <Clock3 size={36} className="text-blue-400" />
                  <div>
                    <p className="text-sm text-gray-400 font-medium">{t("check_in_out")}</p>
                    <p className="text-xl font-semibold">14:00 / 12:00</p>
                  </div>
                </div>

                <div className="bg-red-950/50 border border-red-800 p-6 rounded-2xl flex items-center gap-5">
                  <Ban size={36} className="text-red-400" />
                  <div>
                    <p className="text-sm text-red-300 font-medium tracking-wide uppercase">{t("no_pets")}</p>
                    <p className="text-base text-gray-100 font-normal mt-1">{t("no_pets_desc")}</p>
                  </div>
                </div>

                <div className="bg-gray-800 p-6 rounded-2xl flex items-center gap-5 md:col-span-2">
                  <ShieldCheck size={36} className="text-green-400" />
                  <div>
                    <p className="text-sm text-gray-400 font-medium">{t("safety_security")}</p>
                    <p className="text-base text-gray-100 font-normal">{t("safety_desc")}</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Отзывы */}
            <section>
              <h4 className="text-2xl font-bold text-gray-950 mb-8 tracking-tight">
                {t("guest_experience")}
              </h4>
              <div className="space-y-6">
                {reviews.map((rev, i) => (
                  <div key={i} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-md transition">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-lg">
                          {rev.avatar}
                        </div>
                        <p className="font-semibold text-gray-900">{rev.name}</p>
                      </div>
                      <div className="flex text-yellow-500">
                        {[...Array(rev.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                      </div>
                    </div>
                    <p className="text-gray-700 italic leading-relaxed">«{rev.text}»</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8 lg:sticky lg:top-28 h-fit">
            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-lg">
              <h4 className="text-lg font-bold text-gray-950 mb-4">{t("prime_location")}</h4>
              <div className="rounded-xl overflow-hidden h-48 border border-gray-200 mb-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d5995.247449265627!2d69.285554!3d41.295293!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDE3JzQzLjEiTiA2OcKwMTcnMDguMCJF!5e0!3m2!1sru!2s!4v1775756678000!5m2!1sru!2s"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                <p>{t("location_description")}</p>
              </div>
            </div>

            <div className="bg-[#F0F9FF] p-6 rounded-3xl border border-blue-100">
              <div className="flex items-center gap-3 mb-4 text-blue-700">
                <Car size={24} />
                <h4 className="text-lg font-bold text-gray-950">{t("secure_parking")}</h4>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                {t("parking_description")}
              </p>
            </div>
            
            <div className="bg-emerald-50 p-6 rounded-3xl border border-emerald-100 text-center">
              <Leaf size={32} className="text-emerald-600 mx-auto mb-3" />
              <p className="text-xs text-emerald-800 font-medium uppercase tracking-widest mb-1">
                {t("environmental_commitment")}
              </p>
              <p className="text-2xl font-extrabold text-emerald-950">LEED GOLD</p>
              <p className="text-xs text-emerald-700 mt-1">{t("certified_green")}</p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 py-6 px-10 border-t border-gray-100 text-center text-xs text-gray-400">
          © 2026 Afrosiyob Regency Tashkent. {t("all_rights_reserved")}
        </div>
      </div>
    </div>
  );
};

export default More;