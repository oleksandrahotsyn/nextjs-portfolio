import Hero from "@/components/hero/Hero";
import Services from "@/components/services/Services";
import Projects from "@/components/projects/Projects";
import TechStack from "@/components/techstack/TechStack";

export default function Home() {
  return (
    <>
        <Hero />
        <Services />
        <TechStack />
        <Projects />
    </>
  );
}
