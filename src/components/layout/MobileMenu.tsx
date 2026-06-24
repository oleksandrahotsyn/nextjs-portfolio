"use client";

import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("nav");
  const locale = useLocale();
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <button
        type="button"
        aria-label="Відкрити меню"
        onClick={() => setIsOpen(true)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 text-slate-700 lg:hidden"
      >
        <Menu className="h-6 w-6" />
      </button>

      {isOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 z-40 bg-black/50"
            onClick={closeMenu}
          />

          {/* Menu */}
          <div className="fixed right-0 top-0 z-50 flex h-screen w-72 flex-col bg-white p-6 shadow-xl">
            <div className="mb-8 flex justify-end">
              <button
                type="button"
                onClick={closeMenu}
                aria-label="Закрити меню"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <nav className="flex flex-col gap-6 text-lg font-medium">
              <Link href={`/${locale}`}>{t("home")}</Link>
              <Link href={`/${locale}/services`}>{t("services")}</Link>
              <Link href={`/${locale}/projects`}>{t("projects")}</Link>
              <Link href={`/${locale}/faq`}>FAQ</Link>
              <Link href={`/${locale}/contact`}>{t("contact")}</Link>
            </nav>

            <Link
              href="/contact"
              onClick={closeMenu}
              className="mt-8 rounded-full bg-blue-600 px-6 py-3 text-center font-semibold text-white"
            >
              Консультація
            </Link>
          </div>
        </>
      )}
    </>
  );
}