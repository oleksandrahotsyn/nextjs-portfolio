import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { ChevronLeft, ChevronRight } from "lucide-react";

const technologies = [
  { name: "HTML", icon: FaHtml5 },
  { name: "CSS", icon: FaCss3Alt },
  { name: "JavaScript", icon: FaJs },
  { name: "React", icon: FaReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Git", icon: FaGitAlt },
  { name: "Figma", icon: FaFigma },
];

export default function TechStack() {
  return (
    <section className="border-y border-slate-200 bg-white py-6">
      <h2 className="mb-6 text-center text-lg font-semibold text-slate-900">
        Технології, з якими я працюю
      </h2>

      <div className="relative mx-auto flex max-w-6xl items-center px-16">
        <button className="absolute left-4 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md">
          <ChevronLeft className="h-6 w-6 text-slate-500" />
        </button>

        <div className="flex w-full justify-between gap-8 overflow-hidden">
          {technologies.map((tech) => {
            const Icon = tech.icon;

            return (
              <div
                key={tech.name}
                className="flex min-w-20 flex-col items-center gap-2"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 bg-slate-50 text-slate-400">
                  <Icon className="h-6 w-6" />
                </div>

                <p className="text-xs font-semibold text-slate-700">
                  {tech.name}
                </p>
              </div>
            );
          })}
        </div>

        <button className="absolute right-4 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md">
          <ChevronRight className="h-6 w-6 text-slate-500" />
        </button>
      </div>
    </section>
  );
}
