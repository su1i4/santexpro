const services = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
      title: "Устранение протечек",
      description: "Быстро и качественно устраняем любые протечки в трубах и сантехнике.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3"/>
          <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
        </svg>
      ),
      title: "Замена сантехники",
      description: "Установка смесителей, унитазов, раковин и другой сантехники под ключ.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z"/>
          <circle cx="12" cy="12" r="3"/>
        </svg>
      ),
      title: "Чистка труб",
      description: "Профессиональная чистка труб, устранение засоров любой сложности.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2"/>
          <path d="M8 21h8M12 17v4"/>
        </svg>
      ),
      title: "Монтаж систем",
      description: "Полный монтаж водопровода, отопления и канализации для дома и офиса.",
    },
  ];
  
  export default function Services() {
    return (
      <section id="services" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
        <div className="absolute -top-32 -right-32 w-80 h-80 bg-blue-50 rounded-full blur-[80px]" />
  
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-blue-600 text-sm font-semibold tracking-widest uppercase mb-3">
              Что мы делаем
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900">
              Наши <span className="text-blue-600">услуги</span>
            </h2>
            <p className="mt-4 text-gray-500 max-w-xl mx-auto">
              Полный спектр сантехнических работ — от мелкого ремонта до комплексного монтажа
            </p>
          </div>
  
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, i) => (
              <div
                key={service.title}
                className="group relative bg-white border border-gray-100 hover:border-blue-200 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(37,99,235,0.1)] shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
                <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }