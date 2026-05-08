"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { Product } from "@/types/product";

import { products as initialProducts } from "@/data/products";

interface ProductContextType {
  products: Product[];

  setProducts:
    React.Dispatch<
      React.SetStateAction<Product[]>
    >;
}

const ProductContext =
  createContext<ProductContextType | null>(
    null
  );

export function ProductProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [products, setProducts] =
    useState<Product[]>([]);

  useEffect(() => {
    const saved =
      localStorage.getItem(
        "products"
      );

    if (saved) {
      setProducts(JSON.parse(saved));
    } else {
      setProducts(initialProducts);
    }
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      localStorage.setItem(
        "products",
        JSON.stringify(products)
      );
    }
  }, [products]);

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export function useProducts() {
  const context =
    useContext(ProductContext);

  if (!context) {
    throw new Error(
      "useProducts must be used inside ProductProvider"
    );
  }

  return context;
}