"use client";

import { useState } from "react";

import ProductCard from "./ProductCard";

import ProductFilters from "./ProductFilters";

import { useProducts } from "@/context/ProductContext";

export default function ProductGrid() {

  const { products } = useProducts();

  const [active, setActive] =
    useState("all");

  const filteredProducts =
    active === "all"
      ? products
      : products.filter(
          (product) =>
            product.category === active
        );

  return (
    <>
      <ProductFilters
        active={active}
        setActive={setActive}
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {filteredProducts.map((product) => (
          <ProductCard
            key={product.slug}
            product={product}
          />
        ))}

      </div>
    </>
  );
}