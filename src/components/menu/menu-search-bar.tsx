"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useTranslations } from "next-intl";

interface MenuSearchBarProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

export function MenuSearchBar({
  searchTerm,
  onSearchChange,
}: MenuSearchBarProps) {
  const t = useTranslations("menu");

  return (
    <div className="relative max-w-md mx-auto mb-12">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
      <Input
        type="text"
        placeholder={t("search")}
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="pl-10 bg-muted border-0 rounded-full"
      />
    </div>
  );
}
