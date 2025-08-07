
import Link from "next/link";
import Image from "next/image";
import rehber from "../../../data/rehber.json";

export default function RehberPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
      {rehber.map((item) => (
        <Link
          href={`/rehber/${item.slug}`}
          key={item.slug}
          className="block bg-white rounded-lg shadow-md hover:shadow-xl transition overflow-hidden"
        >
          <Image
            src={item.image}
            alt={item.title}
            width={400}
            height={200}
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold">{item.title}</h2>
            <p className="text-sm text-gray-600 mt-2 line-clamp-2">{item.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
