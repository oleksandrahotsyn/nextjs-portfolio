import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import Section from "@/components/layout/Section";
import Contact from "@/components/contact/Contact";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "metadata.contact",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function ContactPage() {
  return (
    <Section>
         <Contact />
    </Section>
  );
}