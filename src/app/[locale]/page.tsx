import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import Hero from "@/components/hero/Hero";
import Services from "@/components/services/Services";
import Projects from "@/components/projects/Projects";
import TechStack from "@/components/techstack/TechStack";
import About from "@/components/about/About";
import WorkProcess from "@/components/workprocess/WorkProcess";
import Contact from "@/components/contact/Contact";
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
    namespace: "metadata.home",
  });

  return {
    title: t("title"),
    description: t("description"),
      alternates: {
    canonical: `/${locale}`,
  },
  };
}

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <TechStack />
      <Projects />
      <WorkProcess />
      <FAQ />
      <Contact />
    </>
  );
}
