'use client'

export function SimpleHeroSection({
  title,
  subtitle,
  image,
}: {
  title: string
  subtitle: string
  image: string
}) {
  return (
    <section className="relative h-[640px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="font-hs-mische font-bold text-4xl md:text-6xl lg:text-7xl mb-6 text-balance">
          {title}
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-balance opacity-90">{subtitle}</p>
      </div>
    </section>
  )
}
