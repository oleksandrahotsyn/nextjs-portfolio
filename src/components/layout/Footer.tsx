import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 py-10 text-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-white"
        >
          SH<span className="text-blue-500">↗</span>
        </Link>

        {/* Description */}
        <p className="max-w-md text-sm text-slate-400">
          Створюю сучасні Landing Page та сайти-візитки для експертів,
          фрилансерів і малого бізнесу.
        </p>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-6 text-sm text-slate-400">
          <a href="#about" className="transition hover:text-white">
            Про мене
          </a>
          <a href="#services" className="transition hover:text-white">
            Послуги
          </a>
          <a href="#projects" className="transition hover:text-white">
            Проєкти
          </a>
          <a href="#contact" className="transition hover:text-white">
            Контакти
          </a>
        </nav>

        {/* Socials */}
        <div className="flex gap-6">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 transition hover:text-white"
          >
            GitHub
          </a>

          <a
            href="https://t.me/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 transition hover:text-white"
          >
            Telegram
          </a>

          <a
            href="mailto:hello@example.com"
            className="text-slate-400 transition hover:text-white"
          >
            Email
          </a>
        </div>

        {/* Copyright */}
        <div className="w-full border-t border-slate-800 pt-6">
          <p className="text-xs text-slate-500">
            © {year} SH Web Developer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}