import Link from "next/link";
import Image from "next/image";
import { Send, MessageCircle, Mail } from "lucide-react";
import { FaGithub } from "react-icons/fa";

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
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/oleksandrahotsyn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-full border border-slate-800 p-3 text-slate-400 transition-all duration-300 hover:border-blue-500 hover:text-blue-500 hover:shadow-lg hover:shadow-blue-500/20"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://t.me/SandraHotsy"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className="rounded-full border border-slate-800 p-3 text-slate-400 transition-all duration-300 hover:border-blue-500 hover:text-blue-500 hover:shadow-lg hover:shadow-blue-500/20"
            >
              <Send size={20} />
            </a>

            <a
              href="https://wa.me/380932801670"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="rounded-full border border-slate-800 p-3 text-slate-400 transition-all duration-300 hover:border-blue-500 hover:text-blue-500 hover:shadow-lg hover:shadow-blue-500/20"
            >
              <MessageCircle size={20} />
            </a>

            <a
              href="mailto:oleksandrahotsyn@gmail.com"
              aria-label="Email"
              className="rounded-full border border-slate-800 p-3 text-slate-400 transition-all duration-300 hover:border-blue-500 hover:text-blue-500 hover:shadow-lg hover:shadow-blue-500/20"
            >
              <Mail size={20} />
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