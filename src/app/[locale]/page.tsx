import { HeroSection } from "@/components/hero-section";
import { HomeMenuSection } from "@/components/home-menu-section";
import { GallerySection } from "@/components/gallery-section";
import { useTranslations } from "next-intl";
import banner from "@/assets/banner.jpg";

export default function Home() {
  const t = useTranslations("hero");

  return (
    <main className="min-h-screen">
      <HeroSection
        backgroundImage={banner.src}
        title={t("title")}
        subtitle={t("subtitle")}
        isHomePage={true}
      />
      <HomeMenuSection />
      <GallerySection />
    </main>
  );
}
