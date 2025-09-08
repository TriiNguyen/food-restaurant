'use client'

import { Button } from '@/components/ui/button'
import { MapPin, Clock, Phone } from 'lucide-react'
import { useTranslations } from 'next-intl'

export function HeroSection({
  backgroundImage,
  title,
  subtitle,
  isHomePage = false,
}: {
  backgroundImage: string
  title: string
  subtitle: string
  isHomePage: boolean
}) {
  const t = useTranslations('hero')

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="font-manrope font-bold text-4xl md:text-6xl lg:text-7xl mb-6 text-balance">
          {title}
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-balance opacity-90">{subtitle}</p>

        {isHomePage && (
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
            <Button size="lg" variant="destructive">
              {t('cta')}
            </Button>
            <Button size="lg" variant="default">
              {t('reserve')}
            </Button>
          </div>
        )}

        {/* Quick Info */}
        {isHomePage && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-2">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-sm">Muehldorf, Germany</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Clock className="w-5 h-5 text-primary" />
              <span className="text-sm">Open Daily 11:00 - 22:00</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Phone className="w-5 h-5 text-primary" />
              <span className="text-sm">+49 8631 123456</span>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
