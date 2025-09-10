'use client'

import { BookingForm } from '@/components/booking-form'
import { SimpleHeroSection } from '@/components/simple-hero-section'
import { useTranslations } from 'next-intl'
import HeroImage from '@/assets/booking-hero-section.png'

export default function ReservationPage() {
  const t = useTranslations('reservation')
  return (
    <section>
      <SimpleHeroSection title={t('title')} subtitle={t('subtitle')} image={HeroImage.src} />
      <BookingForm />
    </section>
  )
}
