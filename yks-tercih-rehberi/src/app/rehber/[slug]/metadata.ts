
import universities from "../../../../data/universities.json";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const university = universities.find((u) => u.slug === params.slug);

  if (!university) {
    return {
      title: "Üniversite Bulunamadı",
    };
  }

  return {
    title: `${university.name} | TercihNet`,
    description: `${university.name}, ${university.city} şehrinde bulunan ${university.type.toLowerCase()} bir üniversitedir. ${university.description}`,
    openGraph: {
      title: `${university.name} | TercihNet`,
      description: university.description,
      images: [
        {
          url: `https://tercihnet.com${university.image}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${university.name} | TercihNet`,
      description: university.description,
      images: [`https://tercihnet.com${university.image}`],
    },
  };
}
