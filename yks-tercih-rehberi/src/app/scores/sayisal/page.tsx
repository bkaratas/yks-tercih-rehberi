
import React from "react";
import Link from "next/link";

export default function SayisalPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="space-y-6 text-center sm:text-left">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
          2025 YKS Sayısal Bölümleri
        </h1>

        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-3xl">
          Sayısal puanı ile tercih edilebilecek <strong>mühendislik</strong>,
          <strong> sağlık</strong> ve <strong>teknoloji</strong> bölümleri
          hakkında detaylı bilgiler.
        </p>

        <div className="pt-4">
          <Link
            href="/departments?scoreType=SAY"
            className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-3 text-white font-semibold hover:bg-blue-700 transition duration-200 shadow-md"
          >
            Sayısal Bölümleri Gör
          </Link>
        </div>
      </div>
    </main>
  );
}
