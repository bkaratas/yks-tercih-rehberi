
import React from "react";
import Link from "next/link";

export default function EaPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="space-y-6 text-center sm:text-left">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
          2025 YKS Eşit Ağırlık Bölümleri
        </h1>

        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-3xl">
          Eşit Ağırlık puan türüyle tercih edilebilecek <strong>hukuk</strong>, 
          <strong> işletme</strong>, <strong>psikoloji</strong> ve benzeri bölümler; 
          başarı sıralamaları ve kontenjan bilgileriyle birlikte burada.
        </p>

        <div className="pt-4">
          <Link
            href="/departments?scoreType=EA"
            className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-3 text-white font-semibold hover:bg-blue-700 transition duration-200 shadow-md"
          >
            Eşit Ağırlık Bölümleri Gör
          </Link>
        </div>
      </div>
    </main>
  );
}
