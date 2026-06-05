import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Image from "next/image";

export default function Hero() {
  return (
    <Section className="min-h-screen pt-32">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-4 inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600">
              Web Developer
            </p>

            <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
              Створюю сучасні сайти-візитки та Landing Page
            </h1>

            <p className="mb-8 max-w-xl text-lg leading-8 text-slate-600">
              Допомагаю експертам і малому бізнесу запускати стильні, адаптивні
              та швидкі сайти на Next.js.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button>Замовити консультацію</Button>
              <Button variant="secondary">Подивитись проєкти</Button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-4 rounded-3xl bg-blue-100 blur-2xl" />

            <div className="relative overflow-hidden rounded-3xl bg-slate-100 shadow-xl">
              <Image
                src="/hero-photo.jpg"
                alt="Web Developer"
                width={500}
                height={600}
                priority
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}