import phoCuon from "@/assets/bun-cha.png";
import mewink from "@/assets/mewink.png";
import nemRan from "@/assets/nem-ran.png";
import goiRan from "@/assets/goi-ran.png";
import repning from "@/assets/goi-ra-muu.png";
import goiRaMuu from "@/assets/goi-ra-muu.png";

export function GallerySection() {
  const galleryImages = [
    {
      src: phoCuon.src,
      alt: "Traditional Vietnamese Pho",
    },
    {
      src: mewink.src,
      alt: "Fresh Spring Rolls",
    },
    {
      src: nemRan.src,
      alt: "Restaurant Interior",
    },
    {
      src: goiRan.src,
      alt: "Vietnamese Banh Mi",
    },
    {
      src: repning.src,
      alt: "Chef Cooking",
    },
    {
      src: goiRaMuu.src,
      alt: "Vietnamese Coffee",
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-manrope font-bold text-3xl md:text-4xl lg:text-5xl mb-6 text-foreground">
            Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
            A visual journey through our authentic Vietnamese dishes and warm,
            welcoming atmosphere
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
