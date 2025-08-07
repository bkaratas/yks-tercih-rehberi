
import { Metadata } from "next";
import universities from "../../../../data/universities.json";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const university = universities.find((u) => u.slug === params.slug);

  if (!university) {
    return {
      title: "Üniversite Bulunamadı | TercihNet",
      description: "Aradığınız üniversite sistemde bulunamadı.",
    };
  }

  return {
    title: `${university.name} | TercihNet`,
    description: university.description,
    openGraph: {
      title: `${university.name} | TercihNet`,
      description: university.description,
      url: `https://tercihnet.com/universities/${university.slug}`,
      images: [
        {
          url: university.image || "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: university.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: university.name,
      description: university.description,
      images: [university.image],
    },
  };
}
