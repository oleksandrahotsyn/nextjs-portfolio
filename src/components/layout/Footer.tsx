import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 py-10 text-center">
        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center gap-3 transition-transform duration-300 hover:scale-105"
        >
          <Image
            src="/black.png"
            alt="SH Web Developer"
            width={100}
            height={50}
            priority
          />
        </Link>

        {/* Description */}
        <p className="max-w-md text-sm text-slate-400">
          Сучасні Landing Page та сайти-візитки для експертів, фрілансерів і малого бізнесу.
        </p>

        {/* Socials */}
        <div className="flex gap-6">
          <a
            href="https://github.com/oleksandrahotsyn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 transition hover:text-white"
          >
            GitHub
          </a>

          <a
            href="https://t.me/SandraHotsy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 transition hover:text-white"
          >
            Telegram
          </a>

          <a
            href="sandrahotsy@gmail.com"
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