import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'

export function BookingForm() {
  const t = useTranslations()
  return (
    <div className="container mx-auto px-4 py-20">
      <h2 className="text-5xl font-normal text-center mb-4 font-hs-mische max-w-4xl mx-auto">
        {t('contact.reservation.heading')}
      </h2>
      <p className="text-xl text-center mb-10 max-w-3xl mx-auto">
        {t('contact.reservation.description')}
      </p>
      <Card className="max-w-4xl mx-auto bg-transparent border-none">
        <CardContent className="md:px-6 px-0">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">
                  {t('contact.reservation.name')}
                </label>
                <Input placeholder={t('contact.reservation.name')} />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">
                  {t('contact.reservation.email')}
                </label>
                <Input type="email" placeholder={t('contact.reservation.email')} />
              </div>
            </div>

            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">
                  {t('contact.reservation.phone')}
                </label>
                <Input type="tel" placeholder={t('contact.reservation.phone')} />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">
                  {t('contact.reservation.guests')}
                </label>
                <Input type="number" min="1" max="20" placeholder="2" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">
                  {t('contact.reservation.date')}
                </label>
                <Input type="date" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">
                  {t('contact.reservation.time')}
                </label>
                <Input type="time" />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">
                {t('contact.reservation.message')}
              </label>
              <Textarea placeholder={t('contact.reservation.message')} rows={4} />
            </div>

            <Button className="w-full bg-primary hover:bg-primary/90">
              {t('contact.reservation.submit')}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
