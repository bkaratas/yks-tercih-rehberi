
import Link from "next/link";
import ScoreTypeModal from "./components/ScoreTypeModal";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_auto] items-center justify-items-center min-h-screen p-6 sm:p-12 bg-white text-black dark:bg-zinc-950 dark:text-white">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start text-center sm:text-left">
        <svg
          width="240"
          height="60"
          viewBox="0 0 240 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="240" height="60" rx="10" fill="#1E3A8A" />
          <path
            d="M20 18L26 28L36 12"
            stroke="#F97316"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <text
            x="50"
            y="38"
            fill="white"
            font-family="Arial, sans-serif"
            font-size="26"
            font-weight="bold"
          >
            TercihNet
          </text>
        </svg>

        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
          2025 YKS Tercih Rehberiniz
        </h1>

        <p className="max-w-2xl text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          Üniversite ve bölüm tercihleriniz için en güncel sıralamalar, şehir
          rehberi, kampüs hayatı ve daha fazlası TercihNet’te.
        </p>

        <div className="flex gap-4 items-center flex-col sm:flex-row w-full sm:w-auto">
          {/* Primary CTA */}
          <ScoreTypeModal />

          {/* Secondary CTA */}
          <Link
            className="rounded-full border border-gray-300 dark:border-gray-700 text-black dark:text-white font-medium px-6 py-3 hover:bg-gray-100 dark:hover:bg-zinc-800 transition"
            href="/rehber"
          >
            Şehir Rehberi
          </Link>
        </div>
      </main>

      <footer className="row-start-3 flex flex-wrap justify-center items-center gap-6 py-6 text-sm text-gray-500 dark:text-gray-500 border-t border-gray-200 dark:border-gray-800 w-full">
        <Link href="/about" className="hover:underline">
          Hakkımızda
        </Link>
        <Link href="/contact" className="hover:underline">
          İletişim
        </Link>
        <a
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Next.js ile geliştirildi
        </a>
      </footer>
    </div>
  );
}
