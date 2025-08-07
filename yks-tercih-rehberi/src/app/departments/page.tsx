"use client";

import departments from "../../../data/departments.json";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function DepartmentsPage() {
  const searchParams = useSearchParams();
  const scoreType = searchParams.get("scoreType");
  const university = searchParams.get("university");

  const filteredDepartments = departments.filter((dep) => {
    const matchScore = scoreType ? dep.scoreType === scoreType : true;
    const matchUni = university ? dep.universitySlug === university : true;
    return matchScore && matchUni;
  });

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
          {scoreType ? `${scoreType} Puan Türü` : ""} Bölümler
        </h1>
        {university && (
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Üniversite: <span className="font-medium">{university}</span>
          </p>
        )}
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Toplam {filteredDepartments.length} bölüm listeleniyor
        </p>
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredDepartments.map((dep) => (
          <li
            key={dep.slug}
            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm p-4 hover:shadow-md transition"
          >
            <Link href={`/departments/${dep.slug}`} className="block">
              <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                {dep.department}
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                {dep.university}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
