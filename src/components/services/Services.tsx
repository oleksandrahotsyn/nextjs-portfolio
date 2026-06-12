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
      "Форми заявки, кнопки зв’язку, Telegram або інші прості інтеграції.",
  },
];

export default function Services() {
  return (
    <Section id="services" className="bg-white">
      <Container>
        <SectionTitle
          subtitle="Послуги"
          title="Що я можу зробити для вас"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="mb-3 text-xl font-semibold text-slate-900">
                {service.title}
              </h3>

              <p className="text-sm leading-6 text-slate-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}