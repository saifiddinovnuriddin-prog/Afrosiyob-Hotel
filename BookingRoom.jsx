import React, { useState, useEffect, useRef } from "react";
import { format, addDays } from "date-fns";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { 
  Waves, 
  Dumbbell, 
  Utensils, 
  Leaf, 
  PawPrint, 
  Monitor, 
  Wifi 
} from "lucide-react";

import xona1 from "../assets/xona.jpg";
import xona2 from "../assets/xona1.jpg";
import hotel from "../assets/hafrosiyob.jpg";
import res1 from "../assets/res_4.jpg";
import res2 from "../assets/bas.jpg";
import meet from "../assets/meet.JPG";

import SearchPage from "./SearchPage";
import More from "./More";

function BookingRoom() {
  const { t } = useTranslation();

  const [isMoreOpen, setIsMoreOpen] = useState(false);

  const amenities = [
    { icon: <Waves size={20} />, label: t("amenity_pool") },
    { icon: <Dumbbell size={20} />, label: t("amenity_fitness") },
    { icon: <Utensils size={20} />, label: t("amenity_restaurants") },
    { icon: <Leaf size={20} />, label: t("amenity_sustainable") },
    { icon: <PawPrint size={20} />, label: t("amenity_pet_friendly") },
    { icon: <Monitor size={20} />, label: t("amenity_business") },
    { icon: <Wifi size={20} />, label: t("amenity_wifi") },
  ];

  const [selectedRoom, setSelectedRoom] = useState(null);
  const [filteredRooms, setFilteredRooms] = useState([]);
  
  const roomsSectionRef = useRef(null);

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 1),
      key: "selection",
    },
  ]);

  const [guests, setGuests] = useState({
    adults: 2,
    children: 0,
  });

  const allRooms = [
    {
      id: 1,
      title: "Classic Room",
      guestsDesc: t("guests_2"),
      size: "30 sqm",
      basePrice: "5,487,429",
      breakfastPrice: "5,750,000",
      img: xona1,
      maxAdults: 2,
      maxChildren: 1,
    },
    {
      id: 2,
      title: "Luxury Room",
      guestsDesc: t("guests_2"),
      size: "31–35 sqm",
      basePrice: "6,311,929",
      breakfastPrice: "6,600,000",
      img: xona2,
      maxAdults: 2,
      maxChildren: 2,
    },
  ];

  const handleSearch = () => {
    const result = allRooms.filter((room) => {
      return room.maxAdults >= guests.adults && room.maxChildren >= guests.children;
    });

    setFilteredRooms(result);
    setSelectedRoom(null);

    if (roomsSectionRef.current) {
      roomsSectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const result = allRooms.filter((room) => {
      return room.maxAdults >= guests.adults && room.maxChildren >= guests.children;
    });
    setFilteredRooms(result);
  }, [guests]);

  const togglePricePanel = (roomId) => {
    setSelectedRoom(selectedRoom === roomId ? null : roomId);
  };

  const handleSelect = (room, withBreakfast = false) => {
    const basePriceNum = parseInt(room.basePrice.replace(/,/g, ""));
    const breakfastPriceNum = parseInt(room.breakfastPrice.replace(/,/g, ""));

    const diffTime = Math.abs(date[0].endDate - date[0].startDate);
    const nightsCount = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) || 1;

    const pricePerNight = withBreakfast ? breakfastPriceNum : basePriceNum;

    const selectedData = {
      roomId: room.id,
      roomTitle: room.title,
      roomImg: room.img,
      basePrice: basePriceNum,
      breakfastPrice: breakfastPriceNum,
      withBreakfast: withBreakfast,
      totalPrice: pricePerNight * nightsCount, 
      checkIn: format(date[0].startDate, "dd MMM yyyy"),
      checkOut: format(date[0].endDate, "dd MMM yyyy"),
      guests: `${guests.adults} ${t("adults")}, ${guests.children} ${t("children")}`,
      hotel: "AFROSIYOB REGENCY HOTEL",
      nights: nightsCount,
    };

    localStorage.setItem("selectedBooking", JSON.stringify(selectedData));
    window.location.href = "/bookingpage";
  };

  return (
    <div className="bg-[#f5f5f5] min-h-screen font-sans pb-20">
      <div className="relative z-20">
        <SearchPage 
          date={date} 
          setDate={setDate} 
          guests={guests} 
          setGuests={setGuests} 
          onSearch={handleSearch} 
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="relative rounded-3xl overflow-hidden h-[400px] lg:h-[500px] shadow-lg group">
            <img src={hotel} alt="Hotel" className="w-full h-full object-cover transition duration-500 group-hover:scale-105" />
            <div className="absolute bottom-6 left-6 bg-black/60 backdrop-blur-md text-white px-5 py-2 rounded-2xl text-sm border border-white/20">
              ⭐ 4.9 • 136 {t("reviews")}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-3xl overflow-hidden h-[190px] lg:h-[242px] shadow-md">
              <img src={xona2} className="w-full h-full object-cover hover:opacity-90 transition" alt="Room" />
            </div>
            <div className="rounded-3xl overflow-hidden h-[190px] lg:h-[242px] shadow-md">
              <img src={res2} className="w-full h-full object-cover hover:opacity-90 transition" alt="Pool" />
            </div>
            <div className="rounded-3xl overflow-hidden h-[190px] lg:h-[242px] shadow-md">
              <img src={res1} className="w-full h-full object-cover hover:opacity-90 transition" alt="Restaurant" />
            </div>
            <div className="rounded-3xl overflow-hidden h-[190px] lg:h-[242px] relative shadow-md group">
              <img src={meet} alt="Meeting" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition group-hover:bg-black/50">
                <Link 
                  to="/gallery" 
                  className="bg-white/90 backdrop-blur-sm text-black px-6 py-2.5 rounded-full font-semibold shadow-xl transform active:scale-95 transition"
                >
                  {t("see_all_photos")}
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Hotel Info */}
        <div className="max-w-7xl mx-auto px-6 font-sans">
          <div className="py-12 border-b border-gray-200">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight">
                  AFROSIYOB REGENCY <span className="text-blue-600">HOTEL</span>
                </h1>
                <div className="flex items-center gap-2 mt-4 text-gray-600">
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    {t("luxury_stay")}
                  </span>
                  <p className="text-lg">{t("hotel_location")}</p>
                </div>
              </div>
              <div className="flex flex-col items-start md:items-end">
                <div className="flex text-yellow-400 text-2xl mb-1">★★★★★</div>
                <p className="text-gray-500 font-medium">{t("excellence_award")}</p>
              </div>
            </div>
          </div>

          {/* Amenities */}
          <div className="py-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-y-6 gap-x-4">
              {amenities.map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-gray-800">
                  <span className="text-gray-500">{item.icon}</span>
                  <span className="text-sm md:text-base font-medium">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <button 
                onClick={() => setIsMoreOpen(true)}
                className="text-blue-600 text-sm font-medium border-b border-blue-600 hover:border-blue-700 transition"
              >
                {t("more_information")}
              </button>
              <More isOpen={isMoreOpen} onClose={() => setIsMoreOpen(false)} />
            </div>
          </div>
        </div>
      </div>

      {/* Available Rooms Section */}
      <div ref={roomsSectionRef} className="max-w-6xl mx-auto px-4 py-20 scroll-mt-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900">{t("available_rooms")}</h2>
            <p className="text-gray-500 mt-2 text-lg">{t("choose_best_option")}</p>
          </div>
          <div className="bg-white px-6 py-2 rounded-full shadow-sm border border-gray-100 font-medium text-gray-700 mt-4 md:mt-0">
            {filteredRooms.length} {t("options_found")}
          </div>
        </div>

        <div className="space-y-10">
          {filteredRooms.length > 0 ? (
            filteredRooms.map((room) => (
              <div 
                key={room.id} 
                className="bg-white rounded-[40px] shadow-xl shadow-gray-200/50 overflow-hidden border border-gray-100 transition duration-300 hover:shadow-2xl hover:shadow-blue-100"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-[380px] h-[300px] overflow-hidden">
                    <img src={room.img} alt={room.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 p-10 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h3 className="text-3xl font-bold text-gray-900">{room.title}</h3>
                        <span className="text-blue-600 font-bold bg-blue-50 px-4 py-1 rounded-lg text-sm">{room.size}</span>
                      </div>
                      <div className="flex gap-4 mt-4 text-gray-600">
                        <span className="flex items-center gap-1">👤 {room.guestsDesc}</span>
                        <span className="flex items-center gap-1">✨ {t("premium_amenities")}</span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center mt-12">
                      <div>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
                          {t("starting_from")}
                        </p>
                        <p className="text-4xl font-black text-gray-900">
                          {room.basePrice} <span className="text-sm font-medium text-gray-500 uppercase">UZS</span>
                        </p>
                      </div>
                      <button 
                        onClick={() => togglePricePanel(room.id)}
                        className={`px-10 py-4 rounded-2xl font-bold transition duration-300 transform active:scale-95 ${
                          selectedRoom === room.id 
                            ? "bg-gray-900 text-white" 
                            : "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-200"
                        }`}
                      >
                        {selectedRoom === room.id ? t("close_details") : t("select_room")}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Price Panels */}
                {selectedRoom === room.id && (
                  <div className="bg-gray-50/80 backdrop-blur-sm border-t p-10 grid grid-cols-1 lg:grid-cols-2 gap-8 animate-in fade-in slide-in-from-top-4 duration-500">
                    {/* Standard Rate */}
                    <div className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100 flex flex-col justify-between transition hover:border-blue-300">
                      <div>
                        <div className="flex justify-between items-center mb-6">
                          <h4 className="text-xl font-bold">{t("standard_rate")}</h4>
                          <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-md text-xs font-bold uppercase">{t("basic")}</span>
                        </div>
                        <ul className="space-y-3 text-gray-600 mb-10">
                          <li className="flex items-center gap-2">✅ {t("free_wifi")}</li>
                          <li className="flex items-center gap-2">✅ {t("air_conditioning")}</li>
                          <li className="flex items-center gap-2">❌ {t("breakfast_not_included")}</li>
                        </ul>
                      </div>
                      <div className="mt-auto">
                        <div className="mb-6">
                          <span className="text-3xl font-black">{room.basePrice}</span>
                          <span className="ml-2 text-gray-400 text-sm">/ {t("night")}</span>
                        </div>
                        <button 
                          onClick={() => handleSelect(room, false)} 
                          className="w-full bg-gray-900 text-white py-4 rounded-2xl font-bold hover:bg-black transition"
                        >
                          {t("book_room_only")}
                        </button>
                      </div>
                    </div>

                    {/* Premium with Breakfast */}
                    <div className="bg-white p-8 rounded-[32px] shadow-sm border-2 border-green-500/30 flex flex-col justify-between transition hover:border-green-500 relative overflow-hidden">
                      <div className="absolute top-0 right-0 bg-green-500 text-white px-4 py-1 rounded-bl-2xl text-xs font-bold uppercase tracking-tighter">
                        {t("recommended")}
                      </div>
                      <div>
                        <div className="flex justify-between items-center mb-6">
                          <h4 className="text-xl font-bold text-green-700">{t("premium_stay")}</h4>
                          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-md text-xs font-bold uppercase">{t("all_in")}</span>
                        </div>
                        <ul className="space-y-3 text-gray-600 mb-10">
                          <li className="flex items-center gap-2 font-medium text-green-600">🍳 {t("daily_buffet_breakfast")}</li>
                          <li className="flex items-center gap-2 font-medium text-green-600">🏊 {t("free_pool_access")}</li>
                          <li className="flex items-center gap-2 font-medium text-green-600">🚗 {t("free_airport_transfer")}</li>
                        </ul>
                      </div>
                      <div className="mt-auto">
                        <div className="mb-6">
                          <span className="text-3xl font-black text-green-600">{room.breakfastPrice}</span>
                          <span className="ml-2 text-gray-400 text-sm">/ {t("night")}</span>
                        </div>
                        <button 
                          onClick={() => handleSelect(room, true)} 
                          className="w-full bg-green-600 text-white py-4 rounded-2xl font-bold hover:bg-green-700 shadow-lg shadow-green-100 transition"
                        >
                          {t("book_with_breakfast")}
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="text-center py-24 bg-white rounded-[40px] border-2 border-dashed border-gray-200">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900">{t("no_rooms_available")}</h3>
              <p className="text-gray-500 mt-2">{t("change_search_criteria")}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BookingRoom;