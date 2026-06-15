import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import SectionTitle from "@/components/ui/SectionTitle";

const steps = [
  {
    number: "01",
    title: "Обговорення проєкту",
    description:
      "З’ясовуємо цілі сайту, вашу аудиторію, структуру, стиль та основні задачі.",
  },
  {
    number: "02",
    title: "Підготовка дизайну",
    description:
      "Створюю візуальну концепцію, підбираю кольори, шрифти та зручну структуру блоків.",
  },
  {
    number: "03",
    title: "Розробка сайту",
    description:
      "Верстаю адаптивний сайт, який коректно виглядає на телефоні, планшеті та комп’ютері.",
  },
  {
    number: "04",
    title: "Тестування",
    description:
      "Перевіряю кнопки, форми, швидкість завантаження та відображення на різних екранах.",
  },
  {
    number: "05",
    title: "Запуск",
    description:
      "Публікую сайт, підключаю домен або хостинг та допомагаю з першими налаштуваннями.",
  },
];

export default function WorkProcess() {
  return (
    <Section id="process" className="bg-slate-50">
      <Container>
        <SectionTitle
          subtitle="Як проходить робота"
          title="Зрозумілий процес створення сайту"
          description="Ви завжди розумієте, на якому етапі знаходиться проєкт і що буде далі."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-sm font-bold text-blue-600 group-hover:bg-blue-600 group-hover:text-white">
                {step.number}
              </div>

              <h3 className="mb-3 text-lg font-bold text-slate-900">
                {step.title}
              </h3>

              <p className="text-sm leading-6 text-slate-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}