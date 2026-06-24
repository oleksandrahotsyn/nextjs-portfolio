import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("about");
  const stats = [
    { value: "2+", label: t("stats.fullstack") },
    { value: "10+", label: t("stats.projects") },
    { value: "100%", label: t("stats.responsive") },
  ];
  return (
    <Section id="about" className="bg-white">
      <Container>
        <div className="relative overflow-hidden rounded-[36px] border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-white p-8 shadow-sm md:p-12 lg:p-14">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />
          <div className="absolute -bottom-28 -left-24 h-72 w-72 rounded-full bg-blue-100/60 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-blue-600">
                {t("label")}
              </p>

              <h2 className="max-w-md text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                {t("title")}
              </h2>
            </div>

            <div className="space-y-5 text-base leading-7 text-slate-600">
              <p>{t("paragraph1")}</p>
              <p>{t("paragraph2")}</p>
            </div>
          </div>

          <div className="relative mt-10 grid gap-4 border-t border-blue-100 pt-8 sm:grid-cols-3">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-blue-100 bg-white/70 p-5 shadow-sm backdrop-blur"
              >
                <p className="text-3xl font-bold text-blue-600">
                  {item.value}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}


// import Container from "@/components/layout/Container";
// import Section from "@/components/layout/Section";

// const stats = [
//   { value: "2+", label: "роки навчання Fullstack" },
//   { value: "10+", label: "навчальних і командних проєктів" },
//   { value: "100%", label: "адаптивність під різні пристрої" },
// ];

// export default function About() {
//   return (
//     <Section id="about" className="border-y border-slate-200 bg-slate-50">
//       <Container>
//         <div className="mx-auto max-w-5xl rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm md:p-12">
//           <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
//             <div>
//               <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue-600">
//                 Про мене
//               </p>

//               <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
//                 Розробляю сайти з фокусом на дизайн, швидкість і зручність
//               </h2>
//             </div>

//             <div className="space-y-5 text-base leading-7 text-slate-600">
//               <p>
//                 Мене звати Олександра, я Front-End Web Developer. Створюю
//                 сучасні Landing Page та сайти-візитки для експертів, малого
//                 бізнесу й особистих брендів.
//               </p>

//               <p>
//                 Працюю з React, Next.js, TypeScript і Tailwind CSS. Для мене
//                 важливо, щоб сайт не просто виглядав красиво, а був зрозумілим,
//                 швидким, адаптивним і допомагав клієнтам приймати рішення.
//               </p>
//             </div>
//           </div>

//           <div className="mt-10 grid gap-4 border-t border-slate-200 pt-8 sm:grid-cols-3">
//             {stats.map((item) => (
//               <div key={item.label}>
//                 <p className="text-3xl font-bold text-blue-600">{item.value}</p>
//                 <p className="mt-2 text-sm leading-6 text-slate-600">
//                   {item.label}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </Container>
//     </Section>
//   );
// }