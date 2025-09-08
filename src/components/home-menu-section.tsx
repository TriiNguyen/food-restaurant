"use client";

import { useTranslations } from "next-intl";
import MenuImage1 from "@/assets/MenuItem3.png";
import MenuImage2 from "@/assets/MenuItem4.png";
import MenuImage3 from "@/assets/MenuItem7.png";
import MenuImage4 from "@/assets/MenuItem2.png";
import Image from "next/image";

export function HomeMenuSection() {
  const t = useTranslations("about");

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="font-manrope font-bold text-3xl md:text-4xl lg:text-5xl mb-6 text-foreground text-center">
          {t("title")}
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance text-center mb-10">
          {t("subtitle")}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
          <Image src={MenuImage1} alt="Menu Image 1" />
          <Image src={MenuImage2} alt="Menu Image 2" />
          <Image src={MenuImage3} alt="Menu Image 3" />
          <Image src={MenuImage4} alt="Menu Image 4" />
        </div>
      </div>
    </section>
  );
}
