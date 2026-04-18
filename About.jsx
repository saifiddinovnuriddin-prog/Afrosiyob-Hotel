import React from "react";
import haf from "../assets/hafrosiyob.JPG";
import xxxl from "../assets/XXXL.webp";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <div className="bg-[#F5F5F5] text-[#2C2C2C]">

      <div className="relative h-screen w-full overflow-hidden">
        <img src={haf} alt="Hotel" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 text-white">
          <h1 className="text-5xl md:text-7xl font-bold tracking-wide">
            AFROSIYOB REGENCY HOTEL
          </h1>
          <p className="mt-4 text-xl tracking-widest uppercase text-gray-200">
            {t("tittle")}
          </p>
        </div>
      </div>

<div className="max-w-5xl mx-auto px-6 py-16 font-serif text-gray-800 leading-relaxed">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl tracking-[0.25em] font-light text-gray-900">
          {t("h1")}
        </h1>
        <div className="w-32 h-px bg-blue-400 mx-auto mt-8"></div>
      </div>

      <div className="space-y-10 text-[17px] max-w-4xl mx-auto">
        <p>{t("p3")}</p>
        <p>{t("p4")}</p>
        <p>{t("p5")}</p>
        <p>{t("p6")}</p>
        <p>{t("p7")}</p>
        <p>{t("p8")}</p>
        <p>{t("p9")}</p>
        <p>{t("p10")}</p>
        <p className="pt-6 border-t border-gray-200">{t("p11")}</p>
      </div>
    </div>

      <div className=" mx-auto ">
        <img src={xxxl} alt="Hotel Feature" className="w-full rounded-2xl shadow-lg object-cover h-[600px]" />
      </div>


      <div className="py-24 bg-white">

      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl tracking-[0.25em] font-light text-gray-900">
          {t("location")}
        </h1>
        <div className="w-32 h-px bg-[#c7b299] mx-auto mt-8"></div>
      </div>

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <img src={haf} alt="Location" className="rounded-2xl shadow-lg object-cover h-[400px] w-full" />
          <div>
            <h1 className="text-2xl mb-4">{t("h11")}</h1>
            <ul className="space-y-2 text-gray-600">
              <li>{t("li")}</li>
              <li>{t("li1")}</li>
              <li>{t("li2")}</li>
              <li>{t("li3")}</li>
              <li>{t("li4")}</li>
              <li>{t("li5")}</li>
            </ul>
          </div>
        </div>
      </div>
<div>
  <h2 className="text-center text-4xl mb-12">{t("find")}</h2>

  <div className="max-w-9xl mx-auto px-6 rounded-2xl overflow-hidden shadow-lg">
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
</div>
</div>
  );
}

export default About;