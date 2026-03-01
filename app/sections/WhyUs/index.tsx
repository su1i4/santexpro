const advantages = [
    {
      number: "01",
      title: "Гарантия качества",
      description: "На все виды работ даём гарантию до 12 месяцев — вы можете быть уверены в результате.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <polyline points="9 12 11 14 15 10"/>
        </svg>
      ),
    },
    {
      number: "02",
      title: "Прозрачные цены",
      description: "Никаких скрытых платежей — стоимость работ согласуется заранее до начала.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="1" x2="12" y2="23"/>
          <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
        </svg>
      ),
    },
    {
      number: "03",
      title: "Точный выезд",
      description: "Приедем в назначенное время — без задержек и пустых обещаний.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12 6 12 12 16 14"/>
        </svg>
      ),
    },
    {
      number: "04",
      title: "Опытные мастера",
      description: "Все специалисты с опытом 5+ лет и профессиональным инструментом.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
        </svg>
      ),
    },
  ];
  
  export default function WhyUs() {
    return (
      <section id="why-us" className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-blue-50 rounded-full blur-[80px]" />
  
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-blue-600 text-sm font-semibold tracking-widest uppercase mb-3">
              Наши преимущества
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900">
              Почему <span className="text-blue-600">выбирают нас</span>
            </h2>
          </div>
  
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {advantages.map((adv) => (
              <div
                key={adv.title}
                className="group relative bg-white border border-gray-100 hover:border-blue-200 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(37,99,235,0.1)] shadow-sm overflow-hidden"
              >
                {/* Number watermark */}
                <div className="absolute -top-3 -right-1 text-7xl font-black text-gray-100 select-none group-hover:text-blue-50 transition-colors duration-300">
                  {adv.number}
                </div>
  
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300">
                    {adv.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{adv.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{adv.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }