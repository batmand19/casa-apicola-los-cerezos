import Image from "next/image";
import { notFound } from "next/navigation";

import { products } from "@/data/products";

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export default function ProductPage({
  params,
}: ProductPageProps) {
  const product = products.find(
    (item) => item.slug === params.slug
  );

  if (!product) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-[#f7f1e8] py-24">

      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        <div className="relative h-[500px] rounded-3xl overflow-hidden">

          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />

        </div>

        <div>

          <p className="uppercase tracking-[0.3em] text-sm text-[#8b5e34] mb-4">
            {product.category}
          </p>

          <h1 className="text-5xl mb-8">
            {product.name}
          </h1>

          <p className="text-lg leading-relaxed mb-8 text-[#4b3a2c]">
            {product.description}
          </p>

          <div className="text-3xl font-semibold mb-10">
            {product.price}
          </div>

          <a
            href={`https://wa.me/573XXXXXXXXX?text=${encodeURIComponent(product.whatsappMessage)}`}
            target="_blank"
            className="bg-[#c98b2e] hover:bg-[#b67c28] transition px-8 py-4 rounded-full text-white font-semibold"
          >
            Solicitar información
          </a>

        </div>
      </div>
    </main>
  );
}