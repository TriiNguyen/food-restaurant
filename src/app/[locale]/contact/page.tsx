import { ContactSection } from '@/components/contact-section'
import { SimpleHeroSection } from '@/components/simple-hero-section'
import { useTranslations } from 'next-intl'
import HeroImage from '@/assets/contact-hero-image.png'

export default function ContactPage() {
  const t = useTranslations('contact')

  return (
    <div>
      <SimpleHeroSection title={t('title')} subtitle={t('subtitle')} image={HeroImage.src} />
      <ContactSection />
    </div>
  )
}
