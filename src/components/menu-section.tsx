"use client";

import { useState } from "react";
import { MenuCategoryTabs } from "./menu/menu-category-tabs";
import { MenuSearchBar } from "./menu/menu-search-bar";
import { MenuList } from "./menu/menu-list";
import { MenuFooter } from "./menu/menu-footer";
import { menuItems } from "./menu/menu-data";
import { useTranslations } from "next-intl";

export function MenuSection() {
  const t = useTranslations("menu");
  const [activeCategory, setActiveCategory] = useState("Main Dishes");
  const [searchTerm, setSearchTerm] = useState("");

  const menuCategories = [
    t("categories.appetisers"),
    t("categories.all"),
    t("categories.mainDishes"),
    t("categories.desserts"),
    t("categories.beverages"),
  ];

  const getFilteredItems = () => {
    return menuItems.filter((item) => {
      const matchesCategory =
        activeCategory === t("categories.all") ||
        item.category === activeCategory;
      const matchesSearch =
        item?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item?.description?.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  };

  return (
    <section id="menu" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <header className="text-center mb-16">
          <h2 className="font-manrope font-bold text-3xl md:text-4xl lg:text-5xl mb-6 text-foreground">
            {t("title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
            {t("subtitle")}
          </p>
        </header>

        <MenuCategoryTabs
          categories={menuCategories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <MenuSearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

        <MenuList items={getFilteredItems()} />

        <MenuFooter />
      </div>
    </section>
  );
}
