import { PHONE_LINK, PHONE_NUMBER, WHATSAPP_LINK } from "@/app/lib/constants";

const contacts = [
  {
    href: PHONE_LINK,
    label: "Позвонить",
    sub: PHONE_NUMBER,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .84h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
      </svg>
    ),
    className: "bg-blue-600 hover:bg-blue-700 shadow-[0_8px_25px_rgba(37,99,235,0.35)] hover:shadow-[0_8px_35px_rgba(37,99,235,0.5)]",
    target: "_self",
  },
  {
    href: WHATSAPP_LINK,
    label: "WhatsApp",
    sub: "Напишите нам",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
    className: "bg-green-500 hover:bg-green-600 shadow-[0_8px_25px_rgba(34,197,94,0.35)] hover:shadow-[0_8px_35px_rgba(34,197,94,0.5)]",
    target: "_blank",
  },
  {
    href: "https://t.me/yourusername",
    label: "Telegram",
    sub: "Напишите нам",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
      </svg>
    ),
    className: "bg-sky-500 hover:bg-sky-600 shadow-[0_8px_25px_rgba(14,165,233,0.35)] hover:shadow-[0_8px_35px_rgba(14,165,233,0.5)]",
    target: "_blank",
  },
];

export default function Contacts() {
  return (
    <section id="contacts" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-50 rounded-full blur-[100px]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <span className="inline-block text-blue-600 text-sm font-semibold tracking-widest uppercase mb-3">
          Контакты
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
          Связаться <span className="text-blue-600">с нами</span>
        </h2>
        <p className="text-gray-500 mb-12 max-w-lg mx-auto">
          Выберите удобный способ — отвечаем быстро и всегда готовы помочь!
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-2xl mx-auto">
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.target}
              rel={c.target === "_blank" ? "noopener noreferrer" : undefined}
              className={`group flex-1 flex flex-col items-center gap-2 ${c.className} text-white font-bold px-6 py-5 rounded-2xl transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="group-hover:scale-110 transition-transform duration-200">{c.icon}</div>
              <span className="text-base">{c.label}</span>
              <span className="text-xs font-normal opacity-80">{c.sub}</span>
            </a>
          ))}
        </div>

        <div className="mt-12 inline-flex items-center gap-2 bg-slate-50 border border-gray-200 rounded-full px-5 py-2.5">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-gray-500 text-sm">Работаем <span className="text-gray-900 font-semibold">24 часа в сутки, 7 дней в неделю</span></span>
        </div>
      </div>
    </section>
  );
}