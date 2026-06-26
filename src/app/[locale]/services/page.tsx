import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import Section from "@/components/layout/Section";
import Services from "@/components/services/Services";
import TechStack from "@/components/techstack/TechStack";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "metadata.services",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function ServicesPage() {
  return (
    <Section>
        <Services />
        <TechStack />  
    </Section>
  );
}