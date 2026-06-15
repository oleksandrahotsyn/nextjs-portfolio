import Hero from "@/components/hero/Hero";
import Services from "@/components/services/Services";
import Projects from "@/components/projects/Projects";
import TechStack from "@/components/techstack/TechStack";
import About from "@/components/about/About";
import WorkProcess from "@/components/workprocess/WorkProcess";
import FAQ from "@/components/faq/FAQ";
import Contact from "@/components/contact/Contact";

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
