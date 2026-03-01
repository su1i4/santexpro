"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Сколько стоит выезд мастера?",
    answer: "Выезд мастера бесплатный — цена работы зависит от объёма и сложности задачи. Стоимость всегда согласуется заранее.",
  },
  {
    question: "Даёте ли гарантию на работы?",
    answer: "Да, на все виды работ предоставляется гарантия сроком до 12 месяцев. Если что-то пойдёт не так — приедем и исправим бесплатно.",
  },
  {
    question: "Работаете ли вы ночью?",
    answer: "Да, мы работаем круглосуточно. Можем приехать в любое время по предварительной договорённости — и днём, и ночью.",
  },
  {
    question: "Какие виды услуг вы предоставляете?",
    answer: "Все виды сантехнических работ: устранение протечек, установка сантехники, чистка и прочистка труб, монтаж водопровода и канализации.",
  },
  {
    question: "Как быстро приедет мастер?",
    answer: "В большинстве случаев мастер приезжает в течение 1-2 часов после звонка. В экстренных ситуациях — быстрее.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute -top-20 right-0 w-72 h-72 bg-blue-50 rounded-full blur-[80px]" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-blue-600 text-sm font-semibold tracking-widest uppercase mb-3">
            Вопросы и ответы
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900">
            Часто <span className="text-blue-600">спрашивают</span>
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-blue-50 border-blue-200 shadow-[0_4px_20px_rgba(37,99,235,0.08)]"
                    : "bg-white border-gray-100 hover:border-gray-200 shadow-sm"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex justify-between items-center px-6 py-5 text-left"
                >
                  <span className={`font-semibold text-base transition-colors duration-200 ${isOpen ? "text-blue-600" : "text-gray-900"}`}>
                    {faq.question}
                  </span>
                  <div
                    className={`flex-shrink-0 ml-4 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-300 ${
                      isOpen ? "bg-blue-600 border-blue-600 rotate-180" : "border-gray-200 bg-white"
                    }`}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={isOpen ? "white" : "#6b7280"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                </button>
                <div className={`transition-all duration-300 ease-in-out ${isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"} overflow-hidden`}>
                  <p className="px-6 pb-5 text-gray-500 leading-relaxed text-sm">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}