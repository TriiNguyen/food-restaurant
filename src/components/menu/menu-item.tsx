import type { MenuItem as MenuItemType } from './menu-data'
import Image from 'next/image'

interface MenuItemProps {
  item: MenuItemType
}

export function MenuItem({ item }: MenuItemProps) {
  return (
    <article className="flex flex-col items-center gap-4 p-4 rounded-lg  hover:bg-muted/50 transition-colors bg-[#171717]">
      <Image
        src={item.image || '/placeholder.svg'}
        alt={item.name}
        className="w-full max-h-[200px] object-cover flex-shrink-0"
        width={80}
        height={80}
      />
      <div className="w-full">
        <h3 className="font-bold text-lg text-primary mb-1 text-left">{item.name}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed text-left">
          {item.description}
        </p>
        <span className="font-bold text-lg text-foreground flex-shrink-0 text-left">
          {item.price}
        </span>
      </div>
    </article>
  )
}
