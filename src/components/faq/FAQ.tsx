"use client";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import { useTranslations } from "next-intl";

const faqKeys = ["time", "texts", "responsive", "editing", "start"] as const;

export default function FAQ() {
  const t = useTranslations("faq");

  return (
    <Section id="faq" className="bg-white">
      <Container>
        <SectionTitle
          subtitle={t("subtitle")}
          title={t("title")}
          description={t("description")}
        />

        <div className="mx-auto mt-12 max-w-3xl space-y-4">
          {faqKeys.map((key) => (
            <div
              key={key}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:border-blue-200 hover:bg-white hover:shadow-md"
            >
              <h3 className="mb-3 text-lg font-semibold text-slate-900">
                {t(`${key}.question`)}
              </h3>

              <p className="leading-7 text-slate-600">
                {t(`${key}.answer`)}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}