import ProductCard from "./ProductCard";

import { products } from "@/data/products";

export default function ProductGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {products.map((product) => (
        <ProductCard
          key={product.slug}
          product={product}
        />
      ))}

    </div>
  );
}