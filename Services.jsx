import React from "react";
import { useTranslation } from "react-i18next";

function Services() {
  const { t } = useTranslation();

  const services = [
    t("service_free_wifi"),
    t("service_swimming_pool"),
    t("service_spa_wellness"),
    t("service_restaurant"),
    t("service_24_support"),
    t("service_fitness_center"),
    t("service_conference_halls"),
    t("service_laundry"),
  ];

  return (
    <section className="py-16 px-6 bg-[#f8f9fa]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            {t("our_services")}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t("services_description")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 
                         hover:shadow-xl hover:border-blue-200 transition-all duration-300 
                         flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {index === 0 && "📶"}
                {index === 1 && "🏊"}
                {index === 2 && "🧖"}
                {index === 3 && "🍽️"}
                {index === 4 && "🛎️"}
                {index === 5 && "🏋️"}
                {index === 6 && "🏢"}
                {index === 7 && "🧺"}
              </div>

              <h3 className="font-semibold text-xl text-gray-900 mb-2">
                {service}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {t(`service_desc_${index}`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;