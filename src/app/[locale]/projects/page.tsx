import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import Section from "@/components/layout/Section";
import Projects from "@/components/projects/Projects";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "metadata.projects",
  });

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
  canonical: `/${locale}/projects`,
},
  };
}

export default function ProjectsPage() {
  return (
    <Section>
         <Projects />
    </Section>
  );
}