import { PHONE_LINK } from "@/app/lib/constants";

export default function AboutUs() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* <div className="flex-shrink-0">
          <img
            src="/images/master.jpg" 
            alt="Наш мастер"
            className="w-64 h-64 rounded-full object-cover shadow-lg"
          />
        </div> */}

        <div className="flex-1">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            О нас
          </h2>
          <p className="text-gray-600 mb-4">
            Мы команда профессиональных сантехников с большим опытом работы.  
            Берёмся за любые задачи: от мелкого ремонта до комплексного монтажа сантехники.
          </p>
          <p className="text-gray-600 mb-6">
            Наши клиенты доверяют нам за аккуратность, скорость и гарантию качества.
          </p>

          <a
            href={PHONE_LINK}
            className="inline-block bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold text-white transition-colors duration-200"
          >
            Позвонить нам
          </a>
        </div>
      </div>
    </section>
  );
}