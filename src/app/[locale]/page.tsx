import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { MenuSection } from "@/components/menu-section";
import { GallerySection } from "@/components/gallery-section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <GallerySection />
    </main>
  );
}
