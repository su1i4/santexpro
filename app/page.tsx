import type { Metadata } from "next";
import JsonLd from "@/app/components/Ld";
import Banner from "@/app/sections/banner";
import Services from "@/app/sections/services";
import WhyUs from "@/app/sections/WhyUs";
import AboutUs from "@/app/sections/AboutUs";
import FAQ from "@/app/sections/FAQ";
import Application from "@/app/sections/application";
import Contacts from "@/app/sections/contacts";
import Footer from "@/app/components/Footer";

// Страничная мета — переопределяет layout если нужно
export const metadata: Metadata = {
  title: "Сантехник в Бишкеке — Вызов мастера 24/7 | SantexPro",
  description:
    "Сантехник в Бишкеке — выезд от 30 минут, бесплатная диагностика, гарантия 12 месяцев. Устраняем протечки, меняем сантехнику, прочищаем трубы. Работаем 24/7. Звоните!",
  alternates: {
    canonical: "https://prosantex.com",
  },
};

export default function HomePage() {
  return (
    <>
      {/* Структурированные данные — невидимы, но читаются Google */}
      <JsonLd />

      {/*
        Семантическая разметка:
        - <header> внутри Banner
        - <main> — основной контент страницы (один на странице)
        - <section> с aria-labelledby для каждой секции
        - <footer> внизу
        Это улучшает доступность и SEO
      */}
      <main id="main-content">
        {/* Hero — Banner содержит Navbar (<header>) внутри */}
        <Banner />

        {/* Услуги */}
        <section
          id="services"
          aria-labelledby="services-title"
          itemScope
          itemType="https://schema.org/Service"
        >
          <Services />
        </section>

        {/* Преимущества */}
        <section id="why-us" aria-labelledby="why-us-title">
          <WhyUs />
        </section>

        {/* О нас */}
        <section
          id="about"
          aria-labelledby="about-title"
          itemScope
          itemType="https://schema.org/LocalBusiness"
        >
          <AboutUs />
        </section>

        {/* FAQ */}
        <section
          id="faq"
          aria-labelledby="faq-title"
          itemScope
          itemType="https://schema.org/FAQPage"
        >
          <FAQ />
        </section>

        {/* Форма заявки */}
        <section id="application" aria-labelledby="application-title">
          <Application />
        </section>

        {/* Контакты */}
        <section
          id="contacts"
          aria-labelledby="contacts-title"
          itemScope
          itemType="https://schema.org/ContactPage"
        >
          <Contacts />
        </section>
      </main>

      <Footer />
    </>
  );
}