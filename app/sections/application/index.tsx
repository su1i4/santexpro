"use client";

import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

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
  const [loading, setLoading] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.phone?.trim()) newErrors.phone = "Введите номер телефона";
    if (!formData.problem.trim()) newErrors.problem = "Опишите проблему";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    setLoading(true);

    try {
      const response = await fetch("https://backend.prosantex.com/api/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phoneNumber: formData.phone,
          comment: formData.problem,
        }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Ошибка отправки заявки");

      setSubmitted(true);
    } catch (err) {
      console.error(err);
      alert("Ошибка при отправке заявки на сервер");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({ phone: "", problem: "" });
    setErrors({});
    setSubmitted(false);
  };

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
            Заполните форму — мы свяжемся с вами в ближайшее время.
          </p>
        </div>

        <div className="bg-white border border-gray-100 rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.06)] p-6 sm:p-8">
          {!submitted ? (
            <div className="flex flex-col gap-5">
              {/* Phone Input */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-gray-700">
                  Номер телефона
                  <span className="text-blue-500">*</span>
                </label>
                <PhoneInput
                  international
                  defaultCountry="KG"
                  value={formData.phone}
                  onChange={(value) => setFormData((prev) => ({ ...prev, phone: value || "" }))}
                  className={`w-full px-4 py-3 rounded-xl border text-gray-900 placeholder-gray-400 text-sm outline-none transition-all duration-200
                    ${errors.phone
                      ? "border-red-300 bg-red-50 focus:border-red-400 focus:ring-2 focus:ring-red-100"
                      : "border-gray-200 bg-gray-50 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 focus:bg-white"
                    }`}
                  placeholder="+996 XXX XXX XXX"
                />
                {errors.phone && <p className="text-xs text-red-500 mt-0.5">{errors.phone}</p>}
              </div>

              {/* Problem Textarea */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-gray-700">
                  Описание проблемы
                  <span className="text-blue-500">*</span>
                </label>
                <textarea
                  name="problem"
                  value={formData.problem}
                  onChange={(e) => setFormData((prev) => ({ ...prev, problem: e.target.value }))}
                  placeholder="Например: течёт кран на кухне уже 2 дня..."
                  rows={4}
                  className={`w-full px-4 py-3 rounded-xl border text-gray-900 placeholder-gray-400 text-sm outline-none transition-all duration-200 resize-none
                    ${errors.problem
                      ? "border-red-300 bg-red-50 focus:border-red-400 focus:ring-2 focus:ring-red-100"
                      : "border-gray-200 bg-gray-50 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 focus:bg-white"
                    }`}
                />
                {errors.problem && <p className="text-xs text-red-500 mt-0.5">{errors.problem}</p>}
              </div>

              <button
                onClick={handleSubmit}
                disabled={loading}
                className={`mt-2 w-full bg-blue-600 text-white font-bold py-4 rounded-xl transition-all duration-300 ${
                  loading ? "opacity-60 cursor-not-allowed" : "hover:bg-blue-700"
                }`}
              >
                {loading ? "Отправка..." : "Отправить"}
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center text-center py-8 gap-5">
              <h3 className="text-2xl font-black text-gray-900 mb-2">Заявка отправлена!</h3>
              <p className="text-gray-500 text-sm max-w-xs">
                Ваша заявка успешно отправлена на Telegram-бот. Мы свяжемся с вами в ближайшее время.
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