import { useI18n } from "@/lib/i18n/context"

export function MenuFooter() {
  const { t } = useI18n()

  return (
    <div className="text-center mt-16">
      <p className="text-muted-foreground mb-4">{t("menu.footer")}</p>
    </div>
  )
}
