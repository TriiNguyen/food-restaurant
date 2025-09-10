'use client'

import { SimpleHeroSection } from '@/components/simple-hero-section'
import { MenuSection } from '@/components/menu-section'
import { BestChoiceMenu } from '@/components/best-choice-menu'
import HeroImage from '@/assets/menu-hero-image.png'
import { useTranslations } from 'next-intl'

export default function MenuPage() {
  const t = useTranslations('menu')

  return (
    <>
      <SimpleHeroSection title={t('title')} subtitle={t('subtitle')} image={HeroImage.src} />
      <BestChoiceMenu />
      <MenuSection />
    </>
  )
}
