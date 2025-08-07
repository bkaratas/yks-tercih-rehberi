
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TercihNet | 2025 YKS Tercih Rehberi",
  description:
    "Üniversite tercihlerinize rehberlik edecek en güncel kaynak. 2025 YKS puan türlerine göre bölüm ve üniversite sıralamaları, şehir rehberi, kampüs bilgileri ve daha fazlası TercihNet’te.",
  openGraph: {
    title: "TercihNet | 2025 YKS Tercih Rehberi",
    description:
      "Üniversite tercih süreciniz için en doğru adres: sıralamalar, bölümler, şehir rehberi, kampüs hayatı.",
    url: "https://tercihnet.com",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TercihNet",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TercihNet",
    description:
      "YKS 2025 tercih süreciniz için bölümler, üniversiteler ve daha fazlası.",
    site: "@tercihnet",
  },
};
