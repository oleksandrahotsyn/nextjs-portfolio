import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Послуги", href: "#services" },
  { label: "Проєкти", href: "#projects" },
  { label: "Переваги", href: "#process" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center gap-3 transition-transform duration-300 hover:scale-105"
        >
          <Image
            src="/logo.png"
            alt="SH Web Developer"
            width={100}
            height={50}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium text-slate-700 transition-colors duration-300 hover:text-blue-600"
            >
              {link.label}

              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <Link href="/faq">FAQ</Link>
          <Link href="/contact">Контакти</Link>
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-700 lg:inline-flex"
        >
          Консультація
        </a>

        {/* Mobile Button */}
        <button
          type="button"
          aria-label="Відкрити меню"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 text-slate-700 transition hover:border-blue-500 hover:text-blue-600 lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
