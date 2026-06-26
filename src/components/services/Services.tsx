"use client";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import { useTranslations } from "next-intl";


const serviceKeys = [
  "landing",
  "businessCard",
  "redesign",
  "integrations",
] as const;

export default function Services() {
  const t = useTranslations("servises");

  return (
    <Section id="services" className="bg-white py-20">
      <Container>
        <SectionTitle subtitle={t("subtitle")} title={t("title")} />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {serviceKeys.map((key) => (
            <article
              key={key}
              className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-lg font-bold text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                ✓
              </div>

              <h3 className="mb-3 text-xl font-bold text-slate-900">
                {t(`${key}.title`)}
              </h3>

              <p className="text-sm leading-6 text-slate-600">
                {t(`${key}.description`)}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}