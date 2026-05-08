"use client";

import Link from "next/link";

import Image from "next/image";

import { useState } from "react";

import BuyModal from "./BuyModal";

import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({
  product,
}: ProductCardProps) {

  const [open, setOpen] =
    useState(false);

  return (
    <>
      <div className="group flex flex-col h-full bg-white rounded-[32px] overflow-hidden shadow-lg hover:shadow-2xl transition">

        <Link
          href={`/productos/${product.slug}`}
        >

          <div className="relative h-80 overflow-hidden">

            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover group-hover:scale-105 transition duration-500"
            />

          </div>

        </Link>

        <div className="p-8 flex flex-col flex-1">

          <p className="uppercase tracking-[0.2em] text-xs text-[#8b5e34] mb-3">
            {product.category}
          </p>

          <h3 className="text-3xl mb-4">
            {product.name}
          </h3>

          <p className="text-[#4b3a2c] leading-relaxed mb-6 flex-1">
            {product.shortDescription}
          </p>

          <div className="flex items-center justify-between mb-6">

            <span className="text-xl font-semibold text-[#2c2218]">
              {product.price}
            </span>

          </div>

          <button
            onClick={() => setOpen(true)}
            className="w-full bg-[#c98b2e] hover:bg-[#b67c28] transition text-white py-4 rounded-full font-semibold"
          >
            Comprar
          </button>

        </div>

      </div>

      <BuyModal
        open={open}
        onClose={() => setOpen(false)}
        message={product.whatsappMessage}
      />
    </>
  );
}