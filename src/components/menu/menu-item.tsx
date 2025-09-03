import type { MenuItem as MenuItemType } from "./menu-data";
import Image from "next/image";

interface MenuItemProps {
  item: MenuItemType;
}

export function MenuItem({ item }: MenuItemProps) {
  return (
    <article className="flex items-center gap-4 p-4 rounded-lg bg-card hover:bg-muted/50 transition-colors">
      <Image
        src={item.image || "/placeholder.svg"}
        alt={item.name}
        className="w-20 h-20 rounded-full object-cover flex-shrink-0"
        width={80}
        height={80}
      />
      <div className="flex-1 min-w-0">
        <h3 className="font-manrope font-bold text-lg text-foreground mb-1">
          {item.name}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {item.description}
        </p>
      </div>
      <span className="font-bold text-lg text-foreground flex-shrink-0">
        {item.price}
      </span>
    </article>
  );
}
