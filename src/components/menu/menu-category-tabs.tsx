"use client";

import { Button } from "../ui/button";

interface MenuCategoryTabsProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function MenuCategoryTabs({
  categories,
  activeCategory,
  onCategoryChange,
}: MenuCategoryTabsProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8">
      {categories.map((category) => (
        <Button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-6 py-2 rounded-full font-medium transition-colors cursor-pointer ${
            activeCategory === category
              ? "bg-amber-600 text-white"
              : "bg-muted text-muted-foreground hover:bg-muted/80"
          }`}
        >
          {category}
        </Button>
      ))}
    </div>
  );
}
