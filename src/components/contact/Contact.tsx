import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import ContactForm from "./ContactForm";
import { Mail, MessageCircle } from "lucide-react";

const contacts = [
  {
    icon: Mail,
    title: "Email",
    text: "oleksandrahotsyn@gmail.com",
    href: "mailto:oleksandrahotsyn@gmail.com",
  },
  {
    icon: MessageCircle,
    title: "Telegram",
    text: "@Monrell",
    href: "https://t.me/Monrell",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp / Viber",
    text: "+380 93 280 1670",
    href: "https://wa.me/380932801670",
  },
];

export default function Contact() {
  return (
    <Section id="contact" className="bg-slate-50">
      <Container>
        <SectionTitle
          subtitle="Контакти"
          title="Замовити зворотній зв’язок"
          description="Напишіть мені в Telegram, WhatsApp, Viber або залиште заявку через форму. Я не телефоную без попередньої домовленості."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <ContactForm />

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h3 className="text-2xl font-bold text-slate-900">
              Обговоримо ваш проєкт
            </h3>

            <p className="mt-4 text-slate-600">
              Розкажіть, який сайт вам потрібен: лендінг, сайт-візитка,
              редизайн або форма заявки. Я відповідаю письмово у зручному для
              вас месенджері.
            </p>

            <div className="mt-8 space-y-4">
              {contacts.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.title}
                    href={item.href}
                    target={
                      item.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="flex items-center gap-4 rounded-2xl border border-slate-200 p-4 transition hover:border-blue-200 hover:bg-blue-50/40"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="text-sm font-medium text-slate-500">
                        {item.title}
                      </p>
                      <p className="font-semibold text-slate-900">
                        {item.text}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}