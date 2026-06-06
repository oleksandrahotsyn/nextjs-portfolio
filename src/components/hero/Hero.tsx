import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Image from "next/image";
import { Code2, Rocket, MonitorSmartphone } from "lucide-react";

export default function Hero() {
  return (
    <Section className="border-b border-slate-200 bg-white pt-28 pb-20">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left content */}
          <div>
            <p className="mb-4 text-base font-semibold text-blue-600">
              Привіт, я
            </p>

            <h1 className="mb-6 max-w-xl text-5xl font-bold leading-tight tracking-tight text-slate-950 md:text-6xl">
              Front-End <br />
              Web Developer
            </h1>

            <p className="mb-8 max-w-md text-lg leading-8 text-slate-700">
              Cучасні, швидкі та адаптивні сайти, які допомагають
              бізнесам рости в інтернеті.
            </p>

            <div className="mb-12 flex flex-wrap gap-5">
              <Button>Переглянути роботи</Button>
              <Button variant="secondary">Зв&apos;язатися зі мною</Button>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              <HeroFeature
                icon={<Code2 size={24} />}
                title="Якісний код"
                text="Чистий та структурований код"
              />

              <HeroFeature
                icon={<Rocket size={24} />}
                title="Сучасні технології"
                text="Використовую актуальні інструменти"
              />

              <HeroFeature
                icon={<MonitorSmartphone size={24} />}
                title="Адаптивність"
                text="Сайти коректно працюють на всіх пристроях"
              />
            </div>
          </div>

          {/* Right image */}
          <div className="relative">
            <div className="relative h-[360px] overflow-hidden rounded-xl border border-slate-300 bg-slate-50 shadow-sm md:h-[420px]">
              <Image
                src="/hero-photo.jpg"
                alt="Front-End Web Developer"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

type HeroFeatureProps = {
  icon: React.ReactNode;
  title: string;
  text: string;
};

function HeroFeature({ icon, title, text }: HeroFeatureProps) {
  return (
    <div className="flex gap-3">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-300 text-slate-900">
        {icon}
      </div>

      <div>
        <h3 className="mb-1 text-sm font-bold text-slate-950">{title}</h3>
        <p className="text-xs leading-5 text-slate-600">{text}</p>
      </div>
    </div>
  );
}