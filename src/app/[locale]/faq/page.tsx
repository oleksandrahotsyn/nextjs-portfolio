import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import Section from "@/components/layout/Section";
import FAQ from "@/components/faq/FAQ";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "metadata.faq",
  });

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
  canonical: `/${locale}/faq`,
}
  };
}

export default function FAQPage() {
  return (
    <Section>
      <FAQ />
    </Section>
  );
}