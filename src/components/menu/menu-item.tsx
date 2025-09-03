import type { MenuItem as MenuItemType } from "./menu-data";
import { useTranslations } from "next-intl";

interface MenuItemProps {
  item: MenuItemType;
}

export function MenuItem({ item }: MenuItemProps) {
  const t = useTranslations("menu");
  return (
    <article className="flex items-center gap-4 p-4 rounded-lg bg-card hover:bg-muted/50 transition-colors">
      <img
        src={item.image || "/placeholder.svg"}
        alt={t(item.nameKey)}
        className="w-20 h-20 rounded-full object-cover flex-shrink-0"
      />
      <div className="flex-1 min-w-0">
        <h3 className="font-manrope font-bold text-lg text-foreground mb-1">
          {t(item.nameKey)}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {t(item.descriptionKey)}
        </p>
      </div>
      <span className="font-bold text-lg text-foreground flex-shrink-0">
        {item.price}
      </span>
    </article>
  );
}
