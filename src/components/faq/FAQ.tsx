import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import SectionTitle from "@/components/ui/SectionTitle";

const faqs = [
  {
    question: "Скільки часу займає створення сайту?",
    answer:
      "Зазвичай розробка Landing Page або сайту-візитки займає від 10 до 14 днів. Термін залежить від складності дизайну, кількості блоків та готовності матеріалів.",
  },
  {
    question: "Чи допомагаєте ви з текстами для сайту?",
    answer:
      "Так, я можу допомогти структурувати інформацію, покращити тексти та підказати, що краще написати в кожному блоці.",
  },
  {
    question: "Чи буде сайт адаптивним для телефону?",
    answer:
      "Так, кожен сайт я роблю адаптивним, щоб він добре виглядав на телефоні, планшеті та комп’ютері.",
  },
  {
    question: "Чи можна буде змінювати інформацію після запуску?",
    answer:
      "Так, після запуску можна оновити тексти, фото, послуги або інші блоки сайту за потреби.",
  },
  {
    question: "Що потрібно для початку роботи?",
    answer:
      "Потрібно коротко описати ваш проєкт, підготувати логотип, фото, тексти або приклади сайтів, які вам подобаються.",
  },
];

export default function FAQ() {
  return (
    <Section id="faq" className="bg-white">
      <Container>
        <SectionTitle
          subtitle="FAQ"
          title="Часті запитання"
          description="Відповіді на питання, які найчастіше виникають перед початком роботи над сайтом."
        />

        <div className="mx-auto mt-12 max-w-3xl space-y-4">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:border-blue-200 hover:bg-white hover:shadow-md"
            >
              <h3 className="mb-3 text-lg font-semibold text-slate-900">
                {item.question}
              </h3>

              <p className="leading-7 text-slate-600">{item.answer}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}