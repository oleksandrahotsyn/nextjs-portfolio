import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import ProjectCard from "@/components/ui/ProjectCard";

const projects = [
  {
    title: "Green Harvest",
    description:
      "Командний проєкт лендингу для сервісу органічних овочів. Адаптивний дизайн та сучасний користувацький інтерфейс.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "/projects/green-harvest.jpg",
    link: "https://bahioiiia.github.io/P14-GreenHarvest/",
  },
  {
    title: "Leleka Website",
    description:
      "Командний проєкт корпоративного сайту. Брала участь у налаштуванні SEO-метаданих та реалізації форми зворотного зв'язку.",
    technologies: ["React", "Vite", "JavaScript", "CSS"],
    image: "/projects/leleka.jpg",
    link: "https://leleka-website.vercel.app/",
  },
  {
    title: "Fullstack Developer Portfolio",
    description:
      "Командний проєкт портфоліо. У проєкті виконувала роль Team Lead та брала участь у розробці інтерфейсу.",
    technologies: ["HTML", "CSS", "JavaScript", "GitHub"],
    image: "/projects/portfolio-fsdev.jpg",
    link: "https://oleksandrahotsyn.github.io/P09-PortfolioFSDev/",
  },
  {
    title: "WebStudio",
    description:
      "Адаптивний багатосторінковий сайт вебстудії з мобільним меню та сучасною версткою.",
    technologies: ["HTML", "CSS", "SASS", "JavaScript"],
    image: "/projects/webstudio.jpg",
    link: "https://oleksandrahotsyn.github.io/markup-hw-06/",
  },
];

export default function Projects() {
  return (
    <Section id="projects">
      <Container>
        <SectionTitle subtitle="Портфоліо" title="Мої проєкти" />

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </Container>
    </Section>
  );
}