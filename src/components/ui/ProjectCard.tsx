"use client";

import Image from "next/image";
import Button from "./Button";
import { useTranslations } from "next-intl";

type ProjectCardProps = {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link: string;
};

export default function ProjectCard({
  title,
  description,
  technologies,
  image,
  link,
}: ProjectCardProps) {
  const t = useTranslations("projects");

  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-56 w-full">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </div>

      <div className="p-6">
        <h3 className="mb-3 text-xl font-semibold text-slate-900">
          {title}
        </h3>

        <p className="mb-4 text-sm leading-6 text-slate-600">
          {description}
        </p>

        <div className="mb-6 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600"
            >
              {tech}
            </span>
          ))}
        </div>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>{t("viewProject")}</Button>
        </a>
      </div>
    </article>
  );
}