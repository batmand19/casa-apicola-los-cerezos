import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  product: {
    slug: string;
    name: string;
    image: string;
    shortDescription: string;
    price: string;
  };
}

export default function ProductCard({
  product,
}: ProductCardProps) {
  return (
    <div className="group bg-white rounded-[32px] overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 hover:-translate-y-2">

      {/* IMAGE */}
      <div className="relative h-72 overflow-hidden">

        <Image
          src={product.image}
          alt={product.name}
          fill
          loading="lazy"
          className="object-cover group-hover:scale-105 transition duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>

      {/* CONTENT */}
      <div className="p-8">

        <h3 className="text-3xl mb-4">
          {product.name}
        </h3>

        <p className="text-[#4b3a2c] leading-relaxed mb-8">
          {product.shortDescription}
        </p>

        <div className="flex items-center justify-between">

          <span className="text-xl font-semibold">
            {product.price}
          </span>

          <Link
            href={`/productos/${product.slug}`}
            className="bg-[#c98b2e] hover:bg-[#b67c28] transition px-6 py-3 rounded-full text-white font-medium"
          >
            Ver más
          </Link>

        </div>
      </div>
    </div>
  );
}