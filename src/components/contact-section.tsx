'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { useTranslations } from 'next-intl'

export function ContactSection() {
  const t = useTranslations()
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Contact Form */}
          <Card className="w-full md:w-2/3 bg-transparent border-none">
            <CardHeader>
              <CardTitle className="font-manrope text-xl">
                {t('contact.contactForm.title')}
              </CardTitle>
            </CardHeader>
            <CardContent className="px-0 md:px-6">
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      {t('contact.contactForm.YourName')}
                    </label>
                    <Input placeholder={t('contact.contactForm.YourName')} />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      {t('contact.contactForm.YourEmail')}
                    </label>
                    <Input placeholder={t('contact.contactForm.YourEmail')} />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">
                    {t('contact.contactForm.YourPhone')}
                  </label>
                  <Input type="tel" placeholder={t('contact.contactForm.YourPhone')} />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">
                    {t('contact.contactForm.YourMessage')}
                  </label>
                  <Textarea placeholder={t('contact.contactForm.YourMessage')} />
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90">
                  {t('contact.reservation.submit')}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="w-full md:w-1/3  border-none [clip-path:polygon(0_0,calc(100%-4rem)_0,100%_4rem,100%_100%,0_100%)]">
            <CardHeader>
              <CardTitle className="font-manrope text-xl">{t('contact.title')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start space-x-4 bg-black p-4 rounded-xl">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold">{t('contact.address')}</h4>
                  <p className="text-muted-foreground">
                    Hauptstraße 123
                    <br />
                    84453 Mühldorf am Inn
                    <br />
                    Germany
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-black p-4 rounded-xl">
                <Phone className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold">{t('contact.phone')}</h4>
                  <p className="text-muted-foreground">+49 8631 123456</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-black p-4 rounded-xl">
                <Mail className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold">{t('contact.email')}</h4>
                  <p className="text-muted-foreground">info@misshoian-muehldorf.de</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-black p-4 rounded-xl">
                <Clock className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold">{t('contact.hours')}</h4>
                  <div className="text-muted-foreground space-y-1">
                    <p>Monday - Sunday: 11:00 - 22:00</p>
                    <p>Kitchen closes at 21:30</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Map Placeholder */}
        <Card className="mt-12">
          <CardContent className="p-0">
            <div className="w-full h-64 bg-muted rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                <p className="text-muted-foreground">Interactive Map</p>
                <p className="text-sm text-muted-foreground">Hauptstraße 123, Mühldorf am Inn</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
