'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X, Phone } from 'lucide-react'
import { LanguageSwitcher } from './language-switcher'
import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import { usePathname } from 'next/navigation'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const t = useTranslations('nav')
  const locale = useLocale()
  const navItems = [
    {
      label: t('home'),
      href: `/${locale}`,
    },

    {
      label: t('menu'),
      href: `/${locale}/menu`,
    },
    {
      label: t('reservation'),
      href: `/${locale}/reservation`,
    },
    {
      label: t('contact'),
      href: `/${locale}/contact`,
    },
  ]

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="w-6 h-6" />
          </button>

          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">MH</span>
            </div>
            <span className="font-manrope font-bold text-xl text-foreground">Miss Hoian</span>
          </div>

          <div className="block md:hidden">
            <LanguageSwitcher />
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <li
                key={item.href}
                className={`text-foreground hover:text-primary transition-colors font-bold ${
                  pathname === item.href ? 'text-primary' : ''
                }`}
              >
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>

          {/* Contact Info, Language Switcher & Reservation Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span>+49 8631 123456</span>
            </div>
            <LanguageSwitcher />
            <Button className="bg-primary hover:bg-primary/90">{t('reservation')}</Button>
          </div>
        </div>

        {/* Mobile Menu */}
      </div>
      {
        <div
          className={`md:hidden py-4 border-t border-border absolute top-0 left-0 w-full h-[100vh] bg-black transform transition-transform duration-300 ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <X
            className="w-6 h-6 text-muted-foreground ml-2.5"
            onClick={() => setIsMenuOpen(false)}
          />
          <ul className="flex flex-col space-y-4 p-4">
            {navItems.map((item) => (
              <li
                key={item.href}
                className={`text-foreground hover:text-primary transition-colors font-bold ${
                  pathname === item.href ? 'text-primary' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
            <div className="pt-4 border-t border-border space-y-4">
              <Button className="w-full bg-primary hover:bg-primary/90">{t('reservation')}</Button>
            </div>
          </ul>
        </div>
      }
    </header>
  )
}
