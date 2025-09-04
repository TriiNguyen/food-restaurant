"use client";

import { MapPin, Clock, Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import nemRan from "@/assets/nem-ran.png";

export function HeroMenuSection() {
  const t = useTranslations("menu");

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${nemRan.src})`,
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="font-manrope font-bold text-4xl md:text-6xl lg:text-7xl mb-6 text-balance">
          {t("title")}
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-balance opacity-90">
          {t("subtitle")}
        </p>
      </div>
    </section>
  );
}
