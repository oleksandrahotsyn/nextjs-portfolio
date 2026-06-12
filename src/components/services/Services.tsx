import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import SectionTitle from "@/components/ui/SectionTitle";

const services = [
  {
    title: "Landing Page",
    description:
      "Односторінковий сайт для презентації послуги, продукту або експерта.",
  },
  {
    title: "Сайт-візитка",
    description:
      "Лаконічний сайт про вас, ваші послуги, переваги та контакти.",
  },
  {
    title: "Редизайн сайту",
    description:
      "Оновлення зовнішнього вигляду сайту, структури та зручності для користувача.",
  },
  {
    title: "Підключення форм",
    description:
      "Підключення форм заявки, кнопок зв’язку, Telegram або простих інтеграцій.",
  },
];

export default function Services() {
  return (
    <Section id="services" className="bg-white py-20">
      <Container>
        <SectionTitle subtitle="Послуги" title="Що я можу зробити для вас" />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-lg font-bold text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                ✓
              </div>

              <h3 className="mb-3 text-xl font-bold text-slate-900">
                {service.title}
              </h3>

              <p className="text-sm leading-6 text-slate-600">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}