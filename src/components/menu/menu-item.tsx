'use client'

import type { MenuItem as MenuItemType } from './menu-data'
import Image from 'next/image'
import { AddIcon } from '../ui/addIcon'
import { MinusIcon } from '../ui/minusIcon'
import { useState } from 'react'

interface MenuItemProps {
  item: MenuItemType
}

export function MenuItem({ item }: MenuItemProps) {
  const [quantity, setQuantity] = useState(0)
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
          <span className="font-normal font-hs-mische md:text-2xl text-lg text-primary flex-shrink-0 text-left">
            {item.price}
          </span>
          <div className="flex items-center gap-4">
            {quantity > 0 && <MinusIcon onClick={() => setQuantity(quantity - 1)} />}
            {quantity > 0 && (
              <span className="font-normal md:text-2xl text-lg text-white flex-shrink-0 text-left font-hs-mische">
                {quantity}
              </span>
            )}
            <AddIcon onClick={() => setQuantity(quantity + 1)} />
          </div>
        </div>
      </div>
    </article>
  )
}
