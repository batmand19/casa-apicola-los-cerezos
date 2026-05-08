import Image from "next/image";

import { notFound } from "next/navigation";

import type { Metadata } from "next";

import { products } from "@/data/products";

import { generateWhatsAppLink } from "@/lib/whatsapp";

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {

  const { slug } = await params;

  return {
    title: `${slug} | Casa Apícola Los Cerezos`,

    description:
      "Producto artesanal apícola de Boyacá.",
  };
}

export default async function ProductPage({
  params,
}: ProductPageProps) {

  const { slug } = await params;

  const product = products.find(
    (item) => item.slug === slug
  );

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#f7f1e8] py-32">

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

        <div className="relative h-[500px] rounded-[32px] overflow-hidden">

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

          <p className="text-xl text-[#4b3a2c] mb-8">
            {product.price}
          </p>

          <p className="text-lg leading-relaxed text-[#4b3a2c] mb-10">
            {product.description}
          </p>

          <a
            href={generateWhatsAppLink(
              product.whatsappMessage
            )}
            target="_blank"
            className="inline-flex items-center gap-3 bg-[#c98b2e] hover:bg-[#b67c28] transition px-8 py-4 rounded-full text-white font-semibold shadow-lg"
          >
            Solicitar información
          </a>

        </div>

      </div>

    </main>
  );
}