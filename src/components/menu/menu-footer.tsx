import { useTranslations } from "next-intl";

export function MenuFooter() {
  const t = useTranslations("menu");
  return (
    <div className="text-center mt-16">
      <p className="text-muted-foreground mb-4">{t("footer")}</p>
    </div>
  );
}
