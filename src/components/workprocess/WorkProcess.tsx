"use client";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import { useTranslations } from "next-intl";

const steps = [
  { number: "01", key: "discussion" },
  { number: "02", key: "design" },
  { number: "03", key: "development" },
  { number: "04", key: "testing" },
  { number: "05", key: "launch" },
] as const;

export default function WorkProcess() {
  const t = useTranslations("workProcess");

  return (
    <Section id="process" className="bg-slate-50">
      <Container>
        <SectionTitle
          subtitle={t("subtitle")}
          title={t("title")}
          description={t("description")}
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-sm font-bold text-blue-600 group-hover:bg-blue-600 group-hover:text-white">
                {step.number}
              </div>

              <h3 className="mb-3 text-lg font-bold text-slate-900">
                {t(`${step.key}.title`)}
              </h3>

              <p className="text-sm leading-6 text-slate-600">
                {t(`${step.key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}