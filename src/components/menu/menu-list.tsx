import { MenuItem } from './menu-item'
import type { MenuItem as MenuItemType } from './menu-data'

interface MenuListProps {
  items: MenuItemType[]
}

export function MenuList({ items }: MenuListProps) {
  return (
    <main className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
      {items.map((item) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </main>
  )
}
