"use client";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import ProjectCard from "@/components/ui/ProjectCard";
import { useTranslations } from "next-intl";

export default function Projects() {
  const t = useTranslations("projects");

  const projects = [
    {
      title: "WebStudio",
      description: t("webstudio"),
      technologies: ["HTML", "CSS", "SASS", "JavaScript"],
      image: "/pr1.png",
      link: "https://oleksandrahotsyn.github.io/markup-hw-06/",
    },
    {
      title: "Leleka Website",
      description: t("leleka"),
      technologies: ["React", "Vite", "JavaScript", "CSS"],
      image: "/pr4.jpg",
      link: "https://leleka-website.vercel.app/",
    },
    {
      title: "Fullstack Developer Portfolio",
      description: t("portfolio"),
      technologies: ["HTML", "CSS", "JavaScript", "GitHub"],
      image: "/pr2.png",
      link: "https://oleksandrahotsyn.github.io/P09-PortfolioFSDev/",
    },
    {
      title: "Green Harvest",
      description: t("greenHarvest"),
      technologies: ["HTML", "CSS", "JavaScript"],
      image: "/pr3.png",
      link: "https://bahioiiia.github.io/P14-GreenHarvest/",
    },
  ];

  return (
    <Section id="projects">
      <Container>
        <SectionTitle
          subtitle={t("subtitle")}
          title={t("title")}
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </Container>
    </Section>
  );
}