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
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 transition duration-300">

      <div className="relative h-72">

        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        />

      </div>

      <div className="p-8">

        <h3 className="text-2xl mb-3">
          {product.name}
        </h3>

        <p className="text-[#4b3a2c] mb-6 leading-relaxed">
          {product.shortDescription}
        </p>

        <div className="flex items-center justify-between">

          <span className="font-semibold text-lg">
            {product.price}
          </span>

          <Link
            href={`/productos/${product.slug}`}
            className="bg-[#c98b2e] hover:bg-[#b67c28] transition px-5 py-3 rounded-full text-sm font-semibold text-white"
          >
            Ver más
          </Link>

        </div>
      </div>
    </div>
  );
}