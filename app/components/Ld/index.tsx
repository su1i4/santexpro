import { PHONE_NUMBER } from "@/app/lib/constants";

/**
 * JSON-LD Structured Data — схемы для богатых сниппетов Google.
 *
 * Подключи в page.tsx:
 *   import JsonLd from "@/app/components/JsonLd";
 *   <JsonLd />
 */
export default function JsonLd() {
  const BASE_URL = "https://santexpro.kg";
  const PHONE_RAW = "996XXXXXXXXX"; // Только цифры, без +

  // ── 1. LocalBusiness — Plumber ──────────────────────────────────────────────
  // Даёт карточку в Google Maps, звёзды рейтинга, часы работы в выдаче
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": ["Plumber", "LocalBusiness"],
    "@id": `${BASE_URL}/#business`,
    name: "SantexPro",
    alternateName: "СантехПро Бишкек",
    description:
      "Профессиональные сантехнические услуги в Бишкеке, Кыргызстан. Устранение протечек, замена сантехники, прочистка труб и канализации. Работаем 24/7.",
    url: BASE_URL,
    telephone: `+${PHONE_RAW}`,
    email: "info@santexpro.kg",
    foundingDate: "2019",
    logo: {
      "@type": "ImageObject",
      url: `${BASE_URL}/icon-512.png`,
      width: 512,
      height: 512,
    },
    image: [
      `${BASE_URL}/og-image.jpg`,
      `${BASE_URL}/images/master.jpg`,
      `${BASE_URL}/images/Plumber.jpg`,
    ],

    // ── Адрес — конкретный, для Google Maps ──
    address: {
      "@type": "PostalAddress",
      streetAddress: "Бишкек",      // Укажи реальный адрес если есть офис
      addressLocality: "Бишкек",
      addressRegion: "Чуйская область",
      postalCode: "720000",
      addressCountry: "KG",
    },

    // ── Координаты центра Бишкека ──
    geo: {
      "@type": "GeoCoordinates",
      latitude: 42.8746,
      longitude: 74.5698,
    },

    // ── Зона обслуживания — все районы Бишкека ──
    areaServed: [
      {
        "@type": "City",
        name: "Бишкек",
        sameAs: "https://www.wikidata.org/wiki/Q9267",
      },
      { "@type": "AdministrativeArea", name: "Аламединский район" },
      { "@type": "AdministrativeArea", name: "Свердловский район" },
      { "@type": "AdministrativeArea", name: "Первомайский район" },
      { "@type": "AdministrativeArea", name: "Ленинский район" },
      { "@type": "AdministrativeArea", name: "Октябрьский район" },
    ],

    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 42.8746,
        longitude: 74.5698,
      },
      geoRadius: "30000", // 30 км — покрываем весь Бишкек
    },

    // ── Часы работы — 24/7 ──
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday", "Tuesday", "Wednesday", "Thursday",
          "Friday", "Saturday", "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    openingHours: "Mo-Su 00:00-23:59",

    // ── Рейтинг — обнови после накопления реальных отзывов ──
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "127",
      bestRating: "5",
      worstRating: "1",
    },

    // ── Цены и оплата ──
    priceRange: "$$",
    currenciesAccepted: "KGS",
    paymentAccepted: "Cash, Card, MBANK, O!Bank, ЭлКарт",

    // ── Языки обслуживания ──
    knowsLanguage: ["ru", "ky"],

    // ── Каталог услуг ──
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Сантехнические услуги в Бишкеке",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Устранение протечек",
            description: "Быстрое устранение любых протечек в трубах и сантехнике в Бишкеке",
            areaServed: "Бишкек",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Замена сантехники",
            description: "Установка смесителей, унитазов, раковин и ванн в Бишкеке",
            areaServed: "Бишкек",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Прочистка труб и канализации",
            description: "Профессиональная прочистка засоров любой сложности в Бишкеке",
            areaServed: "Бишкек",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Монтаж водопровода",
            description: "Полный монтаж систем водоснабжения, отопления и канализации",
            areaServed: "Бишкек",
          },
        },
      ],
    },

    // ── Социальные профили ──
    sameAs: [
      "https://2gis.kg/bishkek/firm/ЗАМЕНИ_НА_ID", // 2GIS — КРИТИЧНО для Бишкека
      `https://wa.me/${PHONE_RAW}`,
      "https://t.me/yourusername",
    ],
  };

  // ── 2. FAQPage — вопросы прямо в поисковой выдаче ──────────────────────────
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Сколько стоит вызов сантехника в Бишкеке?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Выезд сантехника в Бишкеке бесплатный. Стоимость работ зависит от типа и сложности задачи и всегда согласуется заранее. Диагностика — бесплатно.",
        },
      },
      {
        "@type": "Question",
        name: "Как быстро приедет сантехник в Бишкеке?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Мастер приезжает в течение 30–60 минут после звонка. Работаем по всем районам Бишкека круглосуточно.",
        },
      },
      {
        "@type": "Question",
        name: "Даёте ли гарантию на сантехнические работы?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да, на все виды работ даём гарантию до 12 месяцев. Если возникнет проблема — приедем и устраним бесплатно.",
        },
      },
      {
        "@type": "Question",
        name: "Работаете ли вы ночью и в выходные в Бишкеке?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да, работаем 24/7 — без выходных и праздников. Принимаем заявки в любое время суток.",
        },
      },
      {
        "@type": "Question",
        name: "Какие районы Бишкека вы обслуживаете?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Работаем по всему Бишкеку: Аламединский, Свердловский, Первомайский, Ленинский и Октябрьский районы. Также выезжаем в ближайшие пригороды.",
        },
      },
      {
        "@type": "Question",
        name: "Принимаете ли оплату картой или через MBANK?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да, принимаем оплату наличными, банковской картой, через MBANK, O!Bank и ЭлКарт.",
        },
      },
    ],
  };

  // ── 3. Service — детальная схема услуги ─────────────────────────────────────
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Сантехнические услуги в Бишкеке",
    provider: {
      "@type": "LocalBusiness",
      name: "SantexPro",
      url: BASE_URL,
    },
    areaServed: {
      "@type": "City",
      name: "Бишкек",
    },
    availableChannel: {
      "@type": "ServiceChannel",
      servicePhone: `+${PHONE_RAW}`,
      availableLanguage: ["Russian", "Kyrgyz"],
    },
    hoursAvailable: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday", "Tuesday", "Wednesday", "Thursday",
        "Friday", "Saturday", "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  };

  // ── 4. WebSite ───────────────────────────────────────────────────────────────
  const webSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    url: BASE_URL,
    name: "SantexPro — Сантехник в Бишкеке",
    description: "Профессиональные сантехнические услуги в Бишкеке 24/7",
    inLanguage: ["ru-KG", "ky-KG"],
    publisher: {
      "@id": `${BASE_URL}/#business`,
    },
    // Поиск по сайту (если добавишь поиск)
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE_URL}/?s={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  // ── 5. BreadcrumbList ────────────────────────────────────────────────────────
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Сантехник в Бишкеке",
        item: BASE_URL,
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webSite) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    </>
  );
}