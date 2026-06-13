import Hero from "@/components/hero/Hero";
import Services from "@/components/services/Services";
import Projects from "@/components/projects/Projects";
import TechStack from "@/components/techstack/TechStack";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
    <main>
        <Hero />
        <Services />
        <TechStack />
        <Projects />
    </main>
    </div>
  );
}
