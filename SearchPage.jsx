import React, { useState } from "react";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function SearchPage({ date, setDate, guests, setGuests, onSearch }) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [openCalendar, setOpenCalendar] = useState(false);
  const [openGuests, setOpenGuests] = useState(false);

  const handleSearchClick = () => {
    const searchData = {
      destination: "Tashkent, UZ",
      checkIn: format(date[0].startDate, "dd MMM yyyy"),
      checkOut: format(date[0].endDate, "dd MMM yyyy"),
      adults: guests.adults,
      children: guests.children,
    };

    localStorage.setItem("searchData", JSON.stringify(searchData));

    if (onSearch) {
      onSearch();
    } else {
      navigate("/bookingroom");
    }
  };

  return (
    <div className="bg-[#f8f9fa] w-full border-b">
      <div className="max-w-6xl mx-auto py-10 px-4">
        <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
          
          {/* DESTINATION */}
          <div className="flex flex-col w-full md:w-1/4">
            <label className="text-xs text-gray-400 mb-1 uppercase tracking-widest">
              {t("destination")}
            </label>
            <input
              type="text"
              readOnly
              value="Tashkent, UZ"
              className="border-b py-2 focus:outline-none text-lg font-medium bg-transparent"
            />
          </div>

          {/* DATES */}
          <div className="relative w-full md:w-1/3">
            <label className="text-xs text-gray-400 mb-1 uppercase tracking-widest">
              {t("dates")}
            </label>
            <div
              onClick={() => {
                setOpenCalendar(!openCalendar);
                setOpenGuests(false);
              }}
              className="border-b py-2 cursor-pointer text-lg font-medium"
            >
              {`${format(date[0].startDate, "dd MMM yyyy")} — ${format(
                date[0].endDate,
                "dd MMM yyyy"
              )}`}
            </div>

            {openCalendar && (
              <>
                <div
                  className="fixed inset-0 bg-black/20 z-40"
                  onClick={() => setOpenCalendar(false)}
                />
                <div className="absolute top-full left-0 mt-2 z-50 bg-white rounded-2xl shadow-2xl p-4">
                  <DateRange
                    ranges={date}
                    onChange={(item) => setDate([item.selection])}
                    minDate={new Date()}
                    months={2}
                    direction="horizontal"
                    rangeColors={["#60a5fa"]}
                  />
                  <div className="flex justify-end mt-4">
                    <button
                      onClick={() => setOpenCalendar(false)}
                      className="bg-blue-600 text-white px-8 py-3 rounded-2xl font-bold hover:bg-blue-700 transition"
                    >
                      {t("done")}
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* GUESTS */}
          <div className="relative w-full md:w-1/4">
            <label className="text-xs text-gray-400 mb-1 uppercase tracking-widest">
              {t("guests")}
            </label>
            <div
              onClick={() => {
                setOpenGuests(!openGuests);
                setOpenCalendar(false);
              }}
              className="border-b py-2 cursor-pointer text-lg font-medium"
            >
              {guests.adults} {t("adults_short")}, {guests.children} {t("children_short")}
            </div>

            {openGuests && (
              <div className="absolute top-full left-0 mt-2 bg-white shadow-2xl rounded-2xl p-6 w-72 z-50 border">
                {/* Adults */}
                <div className="flex justify-between mb-6 items-center">
                  <span className="font-semibold">{t("adults")}</span>
                  <div className="flex items-center gap-4">
                    <button 
                      className="w-9 h-9 border rounded-full hover:bg-gray-100 flex items-center justify-center text-xl font-light transition"
                      onClick={() => setGuests((p) => ({ ...p, adults: Math.max(1, p.adults - 1) }))}
                    >
                      −
                    </button>
                    <span className="w-6 text-center text-lg font-medium">{guests.adults}</span>
                    <button 
                      className="w-9 h-9 border rounded-full hover:bg-gray-100 flex items-center justify-center text-xl font-light transition"
                      onClick={() => setGuests((p) => ({ ...p, adults: p.adults + 1 }))}
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Children */}
                <div className="flex justify-between items-center">
                  <span className="font-semibold">{t("children")}</span>
                  <div className="flex items-center gap-4">
                    <button 
                      className="w-9 h-9 border rounded-full hover:bg-gray-100 flex items-center justify-center text-xl font-light transition"
                      onClick={() => setGuests((p) => ({ ...p, children: Math.max(0, p.children - 1) }))}
                    >
                      −
                    </button>
                    <span className="w-6 text-center text-lg font-medium">{guests.children}</span>
                    <button 
                      className="w-9 h-9 border rounded-full hover:bg-gray-100 flex items-center justify-center text-xl font-light transition"
                      onClick={() => setGuests((p) => ({ ...p, children: p.children + 1 }))}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* SEARCH BUTTON */}
          <div className="w-full md:w-auto">
            <button
              onClick={handleSearchClick}
              className="w-full bg-blue-600 text-white px-12 py-4 rounded-2xl hover:bg-blue-700 transition-all font-bold text-lg active:scale-95 shadow-lg shadow-blue-200"
            >
              {t("search")}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default SearchPage;