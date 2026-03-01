"use client";

import { PHONE_NUMBER, PHONE_LINK } from "@/app/lib/constants";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#services", label: "Услуги" },
    { href: "#why-us", label: "Почему мы" },
    { href: "#about", label: "О нас" },
    { href: "#faq", label: "FAQ" },
    { href: "#contacts", label: "Контакты" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.08)] py-0"
          : "bg-black/20 backdrop-blur-xs"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <nav className="flex items-center justify-between py-4">
          <a href="#hero" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center shadow-[0_4px_12px_rgba(37,99,235,0.4)] group-hover:shadow-[0_4px_20px_rgba(37,99,235,0.6)] transition-all duration-300">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
            </div>
            <span className={`font-black text-xl tracking-tight transition-colors duration-300 ${scrolled ? "text-gray-900" : "text-white"}`}>
              Santex<span className="text-blue-600">Pro</span>
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium">
            {links.map((item) => (
              <li key={item.href} className="relative group">
                <a href={item.href} className={`transition-colors duration-200 ${scrolled ? "text-gray-600 hover:text-gray-900" : "text-white/85 hover:text-white"}`}>
                  {item.label}
                </a>
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-blue-600 rounded-full transition-all duration-300 group-hover:w-full" />
              </li>
            ))}
          </ul>

          <a
            href={PHONE_LINK}
            className="hidden md:flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-200 shadow-[0_4px_14px_rgba(37,99,235,0.35)] hover:shadow-[0_4px_22px_rgba(37,99,235,0.5)]"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .84h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
            {PHONE_NUMBER}
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden flex flex-col gap-1.5 p-2 rounded-lg transition-colors ${scrolled ? "hover:bg-gray-100" : "hover:bg-white/10"}`}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 rounded-full transition-all duration-300 ${scrolled ? "bg-gray-800" : "bg-white"} ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-0.5 rounded-full transition-all duration-300 ${scrolled ? "bg-gray-800" : "bg-white"} ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 rounded-full transition-all duration-300 ${scrolled ? "bg-gray-800" : "bg-white"} ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </nav>

        <div className={`md:hidden overflow-hidden transition-all duration-400 ${menuOpen ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0"}`}>
          <ul className={`flex flex-col gap-1 pt-2 ${scrolled ? "border-t border-gray-100" : "border-t border-white/20"}`}>
            {links.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block py-2.5 px-3 rounded-lg text-sm font-medium transition-all duration-200 ${scrolled ? "text-gray-600 hover:text-gray-900 hover:bg-gray-50" : "text-white/80 hover:text-white hover:bg-white/10"}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <a href={PHONE_LINK} className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-3 rounded-lg transition-all duration-200">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .84h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
                {PHONE_NUMBER}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}