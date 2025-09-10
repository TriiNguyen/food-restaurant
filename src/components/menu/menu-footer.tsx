import { useTranslations } from 'next-intl'

export function MenuFooter() {
  const t = useTranslations('menu')
  return (
    <div className="text-center mt-16">
      <p className="text-muted-foreground mb-10 font-sf-pro font-light italic">{t('footer')}</p>
    </div>
  )
}
