"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ContactForm() {
  const t = useTranslations("contactForm");
  const [isSent, setIsSent] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      contact: formData.get("contact"),
      service: formData.get("service"),
      message: formData.get("message"),
      website: formData.get("website"),
    };

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      setIsSent(true);
      form.reset();
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
    >
      <div className="grid gap-5">
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            {t("nameLabel")}
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder={t("namePlaceholder")}
            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            {t("contactLabel")}
          </label>
          <input
            type="text"
            name="contact"
            required
            placeholder={t("contactPlaceholder")}
            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            {t("serviceLabel")}
          </label>

          <select
            name="service"
            required
            defaultValue=""
            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          >
            <option value="" disabled>
              {t("servicePlaceholder")}
            </option>
            <option value="Landing Page">Landing Page</option>
            <option value={t("serviceBusinessCard")}>
              {t("serviceBusinessCard")}
            </option>
            <option value={t("serviceRedesign")}>
              {t("serviceRedesign")}
            </option>
            <option value="Форма заявки / Telegram">
              {t("serviceForm")}
            </option>
            <option value={t("serviceUnknown")}>
              {t("serviceUnknown")}
            </option>
          </select>
        </div>

        <input
          type="text"
          name="website"
          className="absolute -left-[9999px]"
          tabIndex={-1}
          autoComplete="off"
        />

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            {t("messageLabel")}
          </label>
          <textarea
            name="message"
            rows={5}
            placeholder={t("messagePlaceholder")}
            className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          />
        </div>

        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          {t("button")}
          <Send className="h-4 w-4" />
        </button>

        {isSent && (
          <p className="rounded-xl bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
            {t("success")}
          </p>
        )}
      </div>
    </form>
  );
}