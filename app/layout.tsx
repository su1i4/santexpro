import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin", "cyrillic"] });

const BASE_URL = "https://santexpro.com"; 

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Сантехник в Бишкеке — Вызов мастера 24/7 | SantexPro",
    template: "%s | SantexPro — Сантехник в Бишкеке",
  },

  description:
    "Сантехник в Бишкеке — выезд от 30 минут, бесплатная диагностика, гарантия 12 месяцев. Устраняем протечки, меняем сантехнику, прочищаем трубы. Работаем 24/7. Звоните!",

  keywords: [
    "сантехник Бишкек",
    "вызвать сантехника Бишкек",
    "сантехник на дом Бишкек",
    "сантехнические услуги Бишкек",
    "устранение протечек Бишкек",
    "прочистка канализации Бишкек",
    "замена унитаза Бишкек",
    "замена смесителя Бишкек",
    "сантехник 24 часа Бишкек",
    "аварийный сантехник Бишкек",
    "замена труб Бишкек",
    "сантехник Бишкек недорого",
    "срочный вызов сантехника Бишкек",
    "сантехник Кыргызстан",
    "сантехник Аламединский район",
    "сантехник Свердловский район",
    "сантехник Первомайский район",
    "сантехник Ленинский район",
    "суу түтүк чебер Бишкек",
    "сантехник иш Бишкек",
  ],

  authors: [{ name: "SantexPro", url: BASE_URL }],
  creator: "SantexPro",
  publisher: "SantexPro",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: BASE_URL,
    languages: {
      "ru-KG": BASE_URL,
      "ky-KG": BASE_URL,
      "x-default": BASE_URL,
    },
  },

  openGraph: {
    type: "website",
    locale: "ru_KG",
    url: BASE_URL,
    siteName: "SantexPro — Сантехник в Бишкеке",
    title: "Сантехник в Бишкеке — Вызов мастера 24/7 | SantexPro",
    description:
      "Профессиональный сантехник в Бишкеке. Быстрый выезд, бесплатная диагностика, гарантия 12 месяцев. Работаем 24/7 по всему Бишкеку.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SantexPro — Сантехник в Бишкеке 24/7",
        type: "image/jpeg",
      },
    ],
    countryName: "Kyrgyzstan",
  },

  twitter: {
    card: "summary_large_image",
    title: "Сантехник в Бишкеке 24/7 | SantexPro",
    description:
      "Быстрый выезд сантехника по Бишкеку. Бесплатная диагностика, гарантия 12 месяцев.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
    shortcut: "/favicon.ico",
  },

  manifest: "/manifest.json",

  verification: {
    google: "ЗАМЕНИ_НА_СВОЙ_КОД",
    yandex: "ЗАМЕНИ_НА_СВОЙ_КОД",
  },

  category: "home services",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" dir="ltr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        <meta name="geo.region" content="KG-GB" />
        <meta name="geo.placename" content="Бишкек, Кыргызстан" />
        <meta name="geo.position" content="42.8746;74.5698" />
        <meta name="ICBM" content="42.8746, 74.5698" />

        <meta httpEquiv="Content-Language" content="ru, ky" />
        <meta name="language" content="Russian, Kyrgyz" />

        <meta name="format-detection" content="telephone=yes" />

        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="SantexPro" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="msapplication-TileColor" content="#2563eb" />

        <link rel="preload" as="image" href="/images/Plumber.jpg" fetchPriority="high" />
      </head>
      <body className={`${geist.className} antialiased`}>{children}</body>
    </html>
  );
}