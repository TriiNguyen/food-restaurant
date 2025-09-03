"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { LanguageSwitcher } from "./language-switcher";
import Link from "next/link";
import { useTranslations } from "next-intl";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations("nav");

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">
                MH
              </span>
            </div>
            <span className="font-manrope font-bold text-xl text-foreground">
              Miss Hoian
            </span>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-8">
            <li className="text-foreground hover:text-primary transition-colors">
              <Link href="/">{t("home")}</Link>
            </li>

            <li className="text-foreground hover:text-primary transition-colors">
              <Link href="/menu">{t("menu")}</Link>
            </li>
            <li className="text-foreground hover:text-primary transition-colors">
              <Link href="/reservation">{t("reservation")}</Link>
            </li>
            <li className="text-foreground hover:text-primary transition-colors">
              <Link href="/contact">{t("contact")}</Link>
            </li>
          </ul>

          {/* Contact Info, Language Switcher & Reservation Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span>+49 8631 123456</span>
            </div>
            <LanguageSwitcher />
            <Button className="bg-primary hover:bg-primary/90">
              {t("reservation")}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <li className="text-foreground hover:text-primary transition-colors">
                <Link href="/">{t("home")}</Link>
              </li>

              <li className="text-foreground hover:text-primary transition-colors">
                <Link href="/menu">{t("menu")}</Link>
              </li>
              <li className="text-foreground hover:text-primary transition-colors">
                <Link href="/reservation">{t("reservation")}</Link>
              </li>
              <li className="text-foreground hover:text-primary transition-colors">
                <Link href="/contact">{t("contact")}</Link>
              </li>
              <div className="pt-4 border-t border-border space-y-4">
                <LanguageSwitcher />
                <Button className="w-full bg-primary hover:bg-primary/90">
                  {t("reserve")}
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
