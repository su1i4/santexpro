"use client";

import { useState } from "react";
import { WHATSAPP_NUMBER } from "@/app/lib/constants";

type FormData = {
  phone: string;
  problem: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

export default function Application() {
  const [formData, setFormData] = useState<FormData>({
    phone: "",
    problem: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.phone.trim()) newErrors.phone = "Введите номер телефона";
    else if (!/^[\d\s\+\-\(\)]{7,}$/.test(formData.phone))
      newErrors.phone = "Некорректный номер";
    if (!formData.problem.trim()) newErrors.problem = "Опишите проблему";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = () => {
    if (!validate()) return;

    const message = `
🔧 *Новая заявка с сайта SantexPro*

📞 *Телефон:* ${formData.phone}
📝 *Проблема:* ${formData.problem}
    `.trim();

    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
    window.open(url, "_blank");
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({ phone: "", problem: "" });
    setErrors({});
    setSubmitted(false);
  };

  const fields = [
    {
      name: "phone" as keyof FormData,
      label: "Номер телефона",
      type: "input",
      inputType: "tel",
      placeholder: "+996 XXX XXX XXX",
    },
    {
      name: "problem" as keyof FormData,
      label: "Описание проблемы",
      type: "textarea",
      placeholder: "Например: течёт кран на кухне уже 2 дня...",
    },
  ];

  return (
    <section id="application" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="relative max-w-2xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="inline-block text-blue-600 text-sm font-semibold tracking-widest uppercase mb-3">
            Онлайн заявка
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900">
            Оставить <span className="text-blue-600">заявку</span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-md mx-auto">
            Заполните форму — мы свяжемся с вами в WhatsApp и приедем в удобное время
          </p>
        </div>

        <div className="bg-white border border-gray-100 rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.06)] p-6 sm:p-8">
          {!submitted ? (
            <div className="flex flex-col gap-5">
              {fields.map((field) => (
                <div key={field.name} className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-gray-700">
                    {field.label}
                    <span className="text-blue-500">*</span>
                  </label>

                  {field.type === "input" ? (
                    <input
                      type={field.inputType}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      className={`w-full px-4 py-3 rounded-xl border text-gray-900 placeholder-gray-400 text-sm outline-none transition-all duration-200
                        ${errors[field.name]
                          ? "border-red-300 bg-red-50 focus:border-red-400 focus:ring-2 focus:ring-red-100"
                          : "border-gray-200 bg-gray-50 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 focus:bg-white"
                        }`}
                    />
                  ) : (
                    <textarea
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      rows={4}
                      className={`w-full px-4 py-3 rounded-xl border text-gray-900 placeholder-gray-400 text-sm outline-none transition-all duration-200 resize-none
                        ${errors[field.name]
                          ? "border-red-300 bg-red-50 focus:border-red-400 focus:ring-2 focus:ring-red-100"
                          : "border-gray-200 bg-gray-50 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 focus:bg-white"
                        }`}
                    />
                  )}

                  {errors[field.name] && (
                    <p className="text-xs text-red-500 mt-0.5">{errors[field.name]}</p>
                  )}
                </div>
              ))}

              <button
                onClick={handleSubmit}
                className="mt-2 w-full bg-blue-600 hover:bg-blue-700s text-white font-bold py-4 rounded-xl transition-all duration-300"
              >
                Отправить
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center text-center py-8 gap-5">
              <h3 className="text-2xl font-black text-gray-900 mb-2">Заявка отправлена!</h3>
              <p className="text-gray-500 text-sm max-w-xs">
                WhatsApp открылся с вашим сообщением. Мастер свяжется с вами в ближайшее время.
              </p>
              <button
                onClick={handleReset}
                className="text-sm text-gray-400 hover:text-gray-600 underline underline-offset-2 transition-colors"
              >
                Отправить ещё одну заявку
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}