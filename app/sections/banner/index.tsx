"use client"

import { WHATSAPP_LINK } from "@/app/lib/constants";
import Navbar from "@/app/components/Navbar";
import { IoLogoWhatsapp } from "react-icons/io";

export default function Banner() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex flex-col overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(
            135deg,
            rgba(0,0,0,0.75) 0%,
            rgba(0,20,60,0.65) 50%,
            rgba(0,0,0,0.55) 100%
          ),
          url('/images/Plumber.jpg')
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
      {/* Blue glow */}
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[140px]" />

      <Navbar />

      <div className="relative z-10 flex-1 flex items-center px-4 sm:px-6 lg:px-10 max-w-6xl mx-auto w-full pt-24">
        <div className="text-white max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-white/15 border border-white/25 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm text-white/90 font-medium">Работаем 24/7 — всегда на связи</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            Сантехник
            <br />
            <span className="text-blue-400">в Бишкеке</span>
          </h1>

          <p className="mt-5 text-lg sm:text-xl text-white/75 leading-relaxed animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            Быстрый выезд, честные цены, гарантия на все работы.
            <br className="hidden sm:block" />
            Решим любую проблему с сантехникой за один визит.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "300ms" }}>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 bg-green-500 hover:bg-green-400 px-7 py-4 rounded-xl font-bold text-white text-base transition-all duration-300 shadow-[0_8px_30px_rgba(34,197,94,0.45)] hover:shadow-[0_8px_40px_rgba(34,197,94,0.65)] hover:-translate-y-0.5"
            >
              <IoLogoWhatsapp className="text-2xl group-hover:scale-110 transition-transform" />
              Вызвать сантехника
            </a>
            <a
              href="#services"
              className="flex items-center justify-center gap-2 border border-white/30 hover:border-white/60 hover:bg-white/10 px-7 py-4 rounded-xl font-semibold text-white text-base transition-all duration-300 backdrop-blur-sm"
            >
              Наши услуги
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-4 sm:gap-8 animate-fade-in-up" style={{ animationDelay: "400ms" }}>
            {[
              { value: "500+", label: "Клиентов" },
              { value: "5 лет", label: "Опыта" },
              { value: "12 мес", label: "Гарантия" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-black text-blue-400">{stat.value}</div>
                <div className="text-xs sm:text-sm text-white/50 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 flex justify-center pb-8 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/25 rounded-full flex items-start justify-center pt-2">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fade-in-up 0.7s ease-out both; }
      `}</style>
    </section>
  );
}