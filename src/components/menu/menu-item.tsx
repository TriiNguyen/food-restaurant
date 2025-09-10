import type { MenuItem as MenuItemType } from './menu-data'
import Image from 'next/image'
import { AddIcon } from '../ui/addIcon'

interface MenuItemProps {
  item: MenuItemType
}

export function MenuItem({ item }: MenuItemProps) {
  return (
    <article className="flex flex-col items-center md:gap-4 gap-2 md:p-4 p-2 rounded-lg  hover:bg-muted/50 transition-colors bg-[#171717]">
      <Image
        src={item.image || '/placeholder.svg'}
        alt={item.name}
        className="w-full max-h-[200px] object-cover flex-shrink-0"
        width={80}
        height={80}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="w-full">
        <h3 className=" font-bold text-lg text-primary mb-1 text-left">{item.name}</h3>
        <p className="text-sm text-white leading-relaxed text-left font-sf-pro font-light">
          {item.description}
        </p>
        <div className="flex justify-between mt-2.5">
          <span className="font-normal text-2xl text-primary flex-shrink-0 text-left">
            {item.price}
          </span>
          <AddIcon />
        </div>
      </div>
    </article>
  )
}
