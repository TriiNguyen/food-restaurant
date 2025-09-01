import { MenuItem } from "./menu-item"
import type { MenuItem as MenuItemType } from "./menu-data"

interface MenuListProps {
  items: MenuItemType[]
}

export function MenuList({ items }: MenuListProps) {
  return (
    <main className="grid gap-4 max-w-4xl mx-auto">
      {items.map((item) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </main>
  )
}
