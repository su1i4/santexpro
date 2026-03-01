import { PHONE_LINK, PHONE_NUMBER, WHATSAPP_LINK } from "@/app/lib/constants";

const navLinks = [
  { href: "#services", label: "Услуги" },
  { href: "#why-us", label: "Почему мы" },
  { href: "#about", label: "О нас" },
  { href: "#faq", label: "FAQ" },
  { href: "#contacts", label: "Контакты" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#hero" className="flex items-center gap-2 mb-4 group">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center shadow-[0_4px_12px_rgba(37,99,235,0.4)] group-hover:shadow-[0_4px_20px_rgba(37,99,235,0.6)] transition-all duration-300">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
              </div>
              <span className="font-black text-xl text-white">Santex<span className="text-blue-400">Pro</span></span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Профессиональные сантехнические услуги в Бишкеке. Быстро, качественно, с гарантией.
            </p>
            <div className="flex gap-3">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-gray-800 border border-gray-700 hover:border-green-500/60 hover:bg-green-600/10 flex items-center justify-center text-gray-400 hover:text-green-400 transition-all duration-200"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
              <a
                href="https://t.me/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-gray-800 border border-gray-700 hover:border-sky-500/60 hover:bg-sky-600/10 flex items-center justify-center text-gray-400 hover:text-sky-400 transition-all duration-200"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Навигация</h4>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Услуги</h4>
            <ul className="flex flex-col gap-2">
              {["Устранение протечек", "Замена сантехники", "Чистка труб", "Монтаж систем"].map((s) => (
                <li key={s}>
                  <a href="#services" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Контакты</h4>
            <div className="flex flex-col gap-3">
              <a href={PHONE_LINK} className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors duration-200 group">
                <div className="w-7 h-7 rounded-md bg-blue-600/20 flex items-center justify-center text-blue-400 flex-shrink-0 group-hover:bg-blue-600/30 transition-colors">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .84h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                </div>
                {PHONE_NUMBER}
              </a>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <div className="w-7 h-7 rounded-md bg-gray-800 flex items-center justify-center text-gray-500 flex-shrink-0">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                Ежедневно, 24/7
              </div>
              <div className="flex items-start gap-2 text-gray-400 text-sm">
                <div className="w-7 h-7 rounded-md bg-gray-800 flex items-center justify-center text-gray-500 flex-shrink-0 mt-0.5">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                Бишкек, Кыргызстан
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">© {new Date().getFullYear()} SantexPro. Все права защищены.</p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-gray-500 text-xs">Онлайн — готовы принять заявку</span>
          </div>
        </div>
      </div>
    </footer>
  );
}