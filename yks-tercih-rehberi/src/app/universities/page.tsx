
import universities from "../../../data/universities.json";
import Link from "next/link";

export default function UniversitiesPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-8">
        Türkiye'deki Üniversiteler
      </h1>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {universities.map((uni) => (
          <li key={uni.slug}>
            <Link
              href={`/universities/${uni.slug}`}
              className="block p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              <span className="font-medium text-gray-800 dark:text-gray-200">
                {uni.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
