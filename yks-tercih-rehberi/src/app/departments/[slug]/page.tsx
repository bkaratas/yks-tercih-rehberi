import { notFound } from "next/navigation";
import departments from "../../../../data/departments.json";

interface Props {
  params: { slug: string };
}

export default function DepartmentPage({ params }: Props) {
  const department = departments.find((d) => d.slug === params.slug);

  if (!department) return notFound();

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
          {department.department}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          {department.university} – {department.faculty}
        </p>
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm sm:text-base text-gray-800 dark:text-gray-200 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-8">
        <DetailItem label="Puan Türü" value={department.scoreType} />
        <DetailItem
          label="Son Başarı Sırası"
          value={department.lastSuccess.toLocaleString("tr-TR")}
        />
        <DetailItem label="Taban Puan" value={department.minScore} />
        <DetailItem label="Kontenjan" value={department.quota} />
        <DetailItem label="Eğitim Dili" value={department.language} />
        <DetailItem label="Burs" value={department.grant} />
        <DetailItem label="Şehir" value={department.city} />
        <DetailItem label="Süre" value={department.educationTime} />
      </section>

      <a
        href={`/universities/${department.universitySlug}`}
        className="text-blue-600 dark:text-blue-400 underline hover:opacity-80 transition"
      >
        {department.university} profiline git →
      </a>
    </main>
  );
}

function DetailItem({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="flex flex-col">
      <span className="text-sm text-gray-500 dark:text-gray-400">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}
