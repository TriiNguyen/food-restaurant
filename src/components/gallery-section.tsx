export function GallerySection() {
  const galleryImages = [
    {
      src: "/vietnamese-pho-bowl-with-beef--herbs--and-steam-ri.png",
      alt: "Traditional Vietnamese Pho",
    },
    {
      src: "/fresh-vietnamese-spring-rolls-with-shrimp-and-herb.png",
      alt: "Fresh Spring Rolls",
    },
    {
      src: "/vietnamese-restaurant-interior-with-traditional-la.png",
      alt: "Restaurant Interior",
    },
    {
      src: "/vietnamese-banh-mi-sandwich-with-grilled-meat-and-.png",
      alt: "Vietnamese Banh Mi",
    },
    {
      src: "/vietnamese-chef-cooking-in-traditional-wok-with-fl.png",
      alt: "Chef Cooking",
    },
    {
      src: "/vietnamese-coffee-drip-filter-with-condensed-milk-.png",
      alt: "Vietnamese Coffee",
    },
  ]

  return (
    <section id="gallery" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-manrope font-bold text-3xl md:text-4xl lg:text-5xl mb-6 text-foreground">Gallery</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
            A visual journey through our authentic Vietnamese dishes and warm, welcoming atmosphere
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
  )
}
