// next-seo.config.ts

const title = "TercihNet | 2024 YKS Tercih Rehberi – Üniversite ve Bölüm Bilgileri";
const description =
  "2025 YKS tercih süreciniz için en doğru adres. Sayısal, EA ve Sözel puan türlerine göre üniversite ve bölüm sıralamaları, şehir rehberleri, kampüs hayatı ve tercih ipuçları TercihNet'te.";

const config = {
  title,
  defaultTitle: "TercihNet",
  titleTemplate: "%s | TercihNet",
  description,
  canonical: "https://tercihnet.com",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://tercihnet.com",
    site_name: "TercihNet",
    title,
    description,
    images: [
      {
        url: "https://tercihnet.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TercihNet",
      },
    ],
  },
  twitter: {
    handle: "@tercihnet",
    site: "@tercihnet",
    cardType: "summary_large_image",
    title,
    description,
    images: ["https://tercihnet.com/og-image.jpg"],
  },
};

export default config;
