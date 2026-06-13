"use client";

import useEmblaCarousel from "embla-carousel-react";
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
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <section className="py-10">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <h2 className="mb-6 text-center text-lg font-semibold text-slate-900">
          Технології, з якими я працюю
        </h2>
      </div> 
      <div className="relative mx-auto max-w-7xl px-6 sm:px-12">
        <button
          type="button"
          onClick={scrollPrev}
          className="absolute left-0 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md transition hover:shadow-lg"
        >
          <ChevronLeft className="h-6 w-6 text-slate-500" />
        </button>

        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex">
            {technologies.map((tech) => {
              const Icon = tech.icon;

              return (
                <div
                  key={tech.name}
                  className="flex min-w-0 flex-[0_0_33.333%] justify-between sm:flex-[0_0_25%] lg:flex-[0_0_16.666%]"
                  // className="flex min-w-0 flex-[0_0_33.333%] sm:flex-[0_0_25%] lg:flex-[0_0_12.5%]"
                >
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex h-20 w-20 items-center justify-center rounded-xl border border-blue-200 bg-blue-50 text-blue-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                      <Icon className="h-12 w-12" />
                    </div>

                    <p className="text-xs font-semibold text-slate-700">
                      {tech.name}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <button
          type="button"
          onClick={scrollNext}
          className="absolute right-0 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md transition hover:shadow-lg"
        >
          <ChevronRight className="h-6 w-6 text-slate-500" />
        </button>
        </div>


    </section>
  );
}