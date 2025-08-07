
import rehber from "../../../../data/rehber.json";
import { notFound } from "next/navigation";
import Image from "next/image";

export default function RehberDetayPage({ params }: { params: { slug: string } }) {
  const item = rehber.find((r) => r.slug === params.slug);
  if (!item) return notFound();

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Image
        src={item.image}
        alt={item.title}
        width={800}
        height={400}
        className="rounded-lg mb-6 object-cover w-full h-auto"
      />
      <h1 className="text-3xl font-bold mb-4">{item.title}</h1>
      <p className="text-lg text-gray-800">{item.description}</p>
    </div>
  );
}
