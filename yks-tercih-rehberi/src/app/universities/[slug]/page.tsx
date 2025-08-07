// app/universities/[slug]/page.tsx
import { notFound } from "next/navigation";
import universities from "../../../../data/universities.json";

interface Props {
  params: { slug: string };
}

export default function UniversityPage({ params }: Props) {
  const university = universities.find((u) => u.slug === params.slug);

  if (!university) return notFound();

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
        {university.name}
      </h1>

      <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">
        {university.city} • {university.type}
      </p>

      {university.image && (
        <img
          src={university.image}
          alt={university.name}
          className="rounded-xl w-full object-cover mb-8 shadow-sm"
        />
      )}

      <p className="text-gray-800 dark:text-gray-300 leading-relaxed text-base sm:text-lg mb-6">
        {university.description}
      </p>

      <a
        href={university.website}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-blue-600 text-white font-medium px-6 py-3 rounded-full hover:bg-blue-700 transition"
      >
        Resmi Web Sitesi
      </a>
    </main>
  );
}
