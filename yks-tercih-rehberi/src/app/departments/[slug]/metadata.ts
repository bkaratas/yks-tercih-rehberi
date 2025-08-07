import { Metadata } from "next";
import departments from "../../../../data/departments.json";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const department = departments.find((d) => d.slug === params.slug);

  if (!department) {
    return {
      title: "Bölüm Bulunamadı | TercihNet",
      description: "Aradığınız bölüm sistemde bulunamadı.",
    };
  }

  return {
    title: `${department.department} | ${department.university} | TercihNet`,
    description: `${department.department} bölümü hakkında başarı sıralaması, taban puanı, kontenjan ve eğitim bilgileri.`,
    openGraph: {
      title: `${department.department} | ${department.university}`,
      description: `Puan türü: ${department.scoreType}, Taban Puan: ${department.minScore}, Sıralama: ${department.lastSuccess}`,
      url: `https://tercihnet.com/departments/${department.slug}`,
    },
    twitter: {
      card: "summary",
      title: `${department.department} | ${department.university}`,
      description: `Sıralama: ${department.lastSuccess}, Puan Türü: ${department.scoreType}`,
    },
  };
}
