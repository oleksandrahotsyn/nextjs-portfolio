"use client";

import { useTranslations } from "next-intl";
import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Image from "next/image";

export default function Hero() {
  const t = useTranslations("hero");
  return (
    <Section className="border-b border-slate-200 bg-gradient-to-br from-blue-50 via-white to-white pt-28 pb-20">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="text-left">
            <p className="mb-3 text-sm font-semibold text-blue-600 md:text-base">
              {t("label")}
            </p>

            <h1 className="mb-5 max-w-2xl text-3xl font-bold leading-tight tracking-tight text-blue-600 sm:text-4xl md:text-5xl lg:text-6xl">
              {t("title")}
            </h1>

            <p className="mb-7 max-w-xl text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              {t("subtitle")}
            </p>

            <a
              href="https://wa.me/380932801670"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>{t("button")}</Button>
            </a>
          </div>

          <div className="flex flex-col items-center">
            <div className="relative h-56 w-56 overflow-hidden rounded-full border-4 border-blue-100 bg-slate-100 shadow-lg sm:h-64 sm:w-64 md:h-80 md:w-80">
                <Image
                  src="/ava.jpg"
                  alt="Portrait of Sandra Hotsy, web developer"
                  fill
                  priority
                  sizes="(max-width: 640px) 224px, (max-width: 768px) 256px, 320px"
                  className="object-cover"
                />
            </div>

            <div className="mt-6 w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
              <p className="mb-4 text-sm font-semibold text-slate-500">
                {t("experience")}
              </p>

              <div className="grid gap-3">
                <HeroBadge text={t("badge1")} />
                <HeroBadge text="Next.js" />
                <HeroBadge text="React" />
                <HeroBadge text="TypeScript" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

type HeroBadgeProps = {
  text: string;
};

function HeroBadge({ text }: HeroBadgeProps) {
  return (
    <div className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700">
      {text}
    </div>
  );
}