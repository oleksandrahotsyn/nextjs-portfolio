import Hero from "@/components/hero/Hero";
import Services from "@/components/services/Services";
import Projects from "@/components/projects/Projects";
import TechStack from "@/components/techstack/TechStack";
import About from "@/components/about/About";
import WorkProcess from "@/components/workprocess/WorkProcess";
import Contact from "@/components/contact/Contact";
import FAQ from "@/components/faq/FAQ";

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
