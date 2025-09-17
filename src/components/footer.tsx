import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
export function Footer() {
  const t = useTranslations('nav')
  const tFooter = useTranslations('footer')

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Restaurant Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">MH</span>
              </div>
              <span className="font-manrope font-bold text-xl text-foreground">Miss Hoian</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Authentic Vietnamese cuisine in the heart of Mühldorf am Inn. Experience the rich
              flavors and warm hospitality of Vietnam.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-manrope font-semibold text-lg mb-4 text-foreground font-hs-mische">
              {tFooter('quickLinks')}
            </h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link href="/">{t('home')}</Link>
              </li>
              <li>
                <Link href="/menu">{t('menu')}</Link>
              </li>
              <li>
                <Link href="/reservation">{t('reservation')}</Link>
              </li>
              <li>
                <Link href="/contact">{t('contact')}</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-manrope font-semibold text-lg mb-4 text-foreground font-hs-mische">
              {tFooter('contact')}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground text-sm">
                  Hauptstraße 123, 84453 Mühldorf
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground text-sm">+49 8631 123456</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground text-sm">info@misshoian-muehldorf.de</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="font-manrope font-semibold text-lg mb-4 text-foreground font-hs-mische">
              {tFooter('hours')}
            </h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground text-sm">Daily: 11:00 - 22:00</span>
              </div>
              <p className="text-muted-foreground text-sm">Kitchen closes at 21:30</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Miss Hoian Mühldorf. {tFooter('rights')} |
            <span className="ml-1">Authentic Vietnamese Restaurant in Bavaria</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
