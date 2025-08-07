

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6 py-12 text-center">
      <div className="max-w-md">
        <div className="mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto w-40 h-40 text-blue-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v2m0 4h.01M21 12c0 4.97-4.03 9-9 9S3 16.97 3 12 7.03 3 12 3s9 4.03 9 9z"
            />
          </svg>
        </div>

        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
          Sayfa Bulunamadı
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Aradığınız sayfa mevcut değil ya da kaldırılmış olabilir.
        </p>
        <a
          href="/"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
        >
          Ana Sayfaya Dön
        </a>
      </div>
    </main>
  );
}
