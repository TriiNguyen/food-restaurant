import GalleryImage1 from "@/assets/gallery1.png";
import GalleryImage2 from "@/assets/gallery2.png";
import GalleryImage3 from "@/assets/gallery3.png";
import GalleryImage4 from "@/assets/gallery4.png";
import GalleryImage5 from "@/assets/gallery5.png";
import GalleryImage6 from "@/assets/gallery6.png";

import Image from "next/image";

export function GallerySection() {
  const galleryImages = [
    {
      src: GalleryImage1.src,
      alt: "Gallery Image 1",
    },
    {
      src: GalleryImage2.src,
      alt: "Gallery Image 2",
    },
    {
      src: GalleryImage3.src,
      alt: "Gallery Image 3",
    },
    {
      src: GalleryImage4.src,
      alt: "Gallery Image 4",
    },
    {
      src: GalleryImage5.src,
      alt: "Gallery Image 5",
    },
    {
      src: GalleryImage6.src,
      alt: "Gallery Image 6",
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
              <Image
                src={image.src || "/"}
                alt={image.alt}
                className="w-full h-48 md:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                width={500}
                height={500}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
