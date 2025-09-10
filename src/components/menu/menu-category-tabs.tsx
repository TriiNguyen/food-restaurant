'use client'

import { Button } from '../ui/button'

interface MenuCategoryTabsProps {
  categories: { id: number; name: string }[]
  activeCategoryId: number
  onCategoryChange: (categoryId: number) => void
}

export function MenuCategoryTabs({
  categories,
  activeCategoryId,
  onCategoryChange,
}: MenuCategoryTabsProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8">
      {categories.map((category) => (
        <Button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          variant={activeCategoryId === category.id ? 'default' : 'secondary'}
        >
          {category.name}
        </Button>
      ))}
    </div>
  )
}
