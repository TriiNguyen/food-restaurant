'use client'

import { useState } from 'react'
import { MenuCategoryTabs } from './menu/menu-category-tabs'
import { MenuSearchBar } from './menu/menu-search-bar'
import { MenuList } from './menu/menu-list'
import { MenuFooter } from './menu/menu-footer'
import { menuItems } from './menu/menu-data'
import { useTranslations } from 'next-intl'

export function MenuSection() {
  const t = useTranslations('menu')
  const [activeCategory, setActiveCategory] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')

  const menuCategories = [
    { id: 1, name: t('categories.appetisers') },
    { id: 3, name: t('categories.mainDishes') },
    { id: 4, name: t('categories.desserts') },
    { id: 5, name: t('categories.beverages') },
  ]

  return (
    <section id="menu" className=" bg-background">
      <div className="container mx-auto px-4">
        <header className="text-center mb-16">
          <h2 className="font-manrope font-bold text-3xl md:text-4xl lg:text-5xl mb-6 text-foreground">
            {t('title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
            {t('subtitle')}
          </p>
        </header>

        <MenuCategoryTabs
          categories={menuCategories}
          activeCategoryId={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <MenuSearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

        <MenuList items={menuItems} />

        <MenuFooter />
      </div>
    </section>
  )
}
