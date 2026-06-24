"use client";

import Link from "next/link";
import Image from "next/image";
import MobileMenu from "./MobileMenu";
import { useLocale, useTranslations } from "next-intl";

export default function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link
          href={`/${locale}`}
          className="group flex items-center gap-3 transition-transform duration-300 hover:scale-105"
        >
          <Image
            src="/logo.png"
            alt="SH Web Developer"
            width={100}
            height={50}
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          <Link href={`/${locale}`}>{t("home")}</Link>
          <Link href={`/${locale}/services`}>{t("services")}</Link>
          <Link href={`/${locale}/projects`}>{t("projects")}</Link>
          <Link href={`/${locale}/faq`}>FAQ</Link>
          <Link href={`/${locale}/contact`}>{t("contact")}</Link>
        </nav>

        <a
          href="https://wa.me/380932801670"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl lg:inline-flex"
        >
          {t("consultation")}
        </a>

        <MobileMenu />
      </div>
    </header>
  );
}