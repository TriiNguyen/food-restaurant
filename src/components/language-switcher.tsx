"use client";

import { Locale } from "next-intl";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

import { useLocale } from "next-intl";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { routing } from "@/i18n/routing";

function stripLeadingLocale(pathname: string) {
  const parts = pathname.split("/");
  // parts[0] = "", parts[1] có thể là locale
  return routing.locales.includes(parts[1] as any)
    ? "/" + parts.slice(2).join("/") || "/"
    : pathname || "/";
}

function buildPath(pathname: string, nextLocale: string) {
  const bare = stripLeadingLocale(pathname);
  // as-needed: defaultLocale không có prefix
  if (nextLocale === routing.defaultLocale) return bare === "" ? "/" : bare;
  return bare === "/" ? `/${nextLocale}` : `/${nextLocale}${bare}`;
}

const languages = [
  { code: "en" as const, name: "English", flag: "🇺🇸" },
  { code: "de" as const, name: "Deutsch", flag: "🇩🇪" },
  { code: "vi" as const, name: "Tiếng Việt", flag: "🇻🇳" },
] as const;

export function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);

  const current = useLocale();
  const router = useRouter();
  const pathname = usePathname() ?? "/";
  const search = useSearchParams();

  const onChange = (next: string) => {
    if (next === current) return;
    const base = buildPath(pathname, next);
    const url = search.toString() ? `${base}?${search}` : base;
    router.replace(url, { scroll: false });
  };
  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 text-foreground hover:text-primary"
      >
        <span className="text-lg">
          {languages.find((lang) => lang.code === current)?.flag}
        </span>
        <span className="hidden sm:inline text-sm">
          {languages.find((lang) => lang.code === current)?.name}
        </span>
        <ChevronDown className="w-4 h-4" />
      </Button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 bg-card border border-border rounded-md shadow-lg z-50 min-w-[140px]">
          {languages.map((lang) => (
            <button
              key={lang.code as Locale}
              onClick={() => {
                onChange(lang.code);
                setIsOpen(false);
              }}
              className={`w-full px-3 py-2 text-left text-sm hover:bg-accent hover:text-accent-foreground flex items-center space-x-2 first:rounded-t-md last:rounded-b-md ${
                current === lang.code ? "bg-accent text-accent-foreground" : ""
              }`}
            >
              <span className="text-lg">{lang.flag}</span>
              <span>{lang.name}</span>
            </button>
          ))}
        </div>
      )}

      {/* Backdrop to close dropdown */}
      {isOpen && (
        <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
      )}
    </div>
  );
}
