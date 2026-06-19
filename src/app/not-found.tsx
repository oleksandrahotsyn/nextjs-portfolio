import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center px-6">
      <div className="max-w-xl text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-600">
          404
        </p>

        <h1 className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl">
          Сторінку не знайдено
        </h1>

        <p className="mb-8 text-slate-600">
          На жаль, такої сторінки не існує.
        </p>

        <Link
          href="/"
          className="inline-flex rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          Повернутися на головну
        </Link>
      </div>
    </section>
  );
}