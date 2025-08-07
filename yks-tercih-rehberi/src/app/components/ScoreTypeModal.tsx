"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ScoreTypeModal() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  // ESC ile modal kapatma
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      <button
        onClick={openModal}
        className="rounded-full bg-blue-600 text-white font-semibold px-6 py-3 hover:bg-blue-700 transition shadow"
      >
        Bölümleri Keşfet
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center"
          onClick={closeModal}
        >
          <div
            className="bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-xl w-full max-w-sm sm:max-w-md mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold text-center mb-5">
              Hangi puan türünde tercih yapıyorsunuz?
            </h2>

            <div className="grid gap-3">
              <Link
                href="/scores/sayisal"
                className="bg-blue-600 text-white font-medium px-4 py-3 rounded-lg text-center hover:bg-blue-700 transition"
              >
                Sayısal
              </Link>
              <Link
                href="/scores/ea"
                className="bg-green-600 text-white font-medium px-4 py-3 rounded-lg text-center hover:bg-green-700 transition"
              >
                Eşit Ağırlık
              </Link>
              <Link
                href="/scores/sozel"
                className="bg-purple-600 text-white font-medium px-4 py-3 rounded-lg text-center hover:bg-purple-700 transition"
              >
                Sözel
              </Link>
            </div>

            <button
              onClick={closeModal}
              className="mt-6 text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 block w-full text-center"
            >
              Vazgeç
            </button>
          </div>
        </div>
      )}
    </>
  );
}
