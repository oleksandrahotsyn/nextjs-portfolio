"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [isSent, setIsSent] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSent(true);
    event.currentTarget.reset();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
    >
      <div className="grid gap-5">
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Ваше ім’я
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder="Олександра"
            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Email або телефон
          </label>
          <input
            type="text"
            name="contact"
            required
            placeholder="email або номер телефону"
            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Який сайт потрібен?
          </label>
          <select
            name="service"
            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          >
            <option>Landing Page</option>
            <option>Сайт-візитка</option>
            <option>Редизайн сайту</option>
            <option>Форма заявки / Telegram</option>
            <option>Поки не знаю</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Повідомлення
          </label>
          <textarea
            name="message"
            rows={5}
            placeholder="Коротко опишіть ваш проєкт..."
            className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          />
        </div>

        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Надіслати заявку
          <Send className="h-4 w-4" />
        </button>

        {isSent && (
          <p className="rounded-xl bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
            Дякую! Заявку прийнято. Я зв’яжуся з вами найближчим часом.
          </p>
        )}
      </div>
    </form>
  );
}