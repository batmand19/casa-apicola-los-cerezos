"use client";

import { useState } from "react";

import AdminStats from "@/components/AdminStats";

import AdminTabs from "@/components/AdminTabs";

import EditProductModal from "@/components/EditProductModal";

import { Product } from "@/types/product";

import { useProducts } from "@/context/ProductContext";

import ExportProductsButton from "@/components/ExportProductsButton";

import Benefits from "@/sections/Benefits";

export default function AdminPage() {

  const {
    products,
    setProducts,
  } = useProducts();

  const [selectedProduct, setSelectedProduct] =
    useState<Product | null>(null);

  const [activeTab, setActiveTab] =
    useState("productos");

  function updateProduct(
    updatedProduct: Product
  ) {

    const exists = products.find(
      (product) =>
        product.slug ===
        updatedProduct.slug
    );

    if (exists) {

      setProducts(
        products.map((product) =>
          product.slug ===
          updatedProduct.slug
            ? updatedProduct
            : product
        )
      );

    } else {

      setProducts([
        ...products,
        updatedProduct,
      ]);

    }
  }

  return (
    <main className="min-h-screen bg-[#f7f1e8] py-32">

      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-16">

          <p className="uppercase tracking-[0.3em] text-sm text-[#8b5e34] mb-4">
            Dashboard
          </p>

          <h1 className="text-5xl mb-8">
            Administración básica
          </h1>

          <button
            onClick={() =>
              setSelectedProduct({
                slug: "",

                name: "",

                image: "/miel.jpg",

                shortDescription: "",

                description: "",

                price: "",

                category: "consumo",

                whatsappMessage: "",
              })
            }
            className="bg-[#c98b2e] text-white px-8 py-4 rounded-full"
          >
            Agregar producto
          </button>

        </div>

        <AdminTabs
          active={activeTab}
          setActive={setActiveTab}
        />
        <div className="mb-10">

          <ExportProductsButton
            products={products}
          />

        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-16">

          <AdminStats
            title="Productos"
            value={products.length.toString()}
          />

          <AdminStats
            title="Categorías"
            value="2"
          />

          <AdminStats
            title="Estado"
            value="Activo"
          />

        </div>

        {activeTab === "productos" && (

          <div className="grid gap-6">

            {products.map((product) => (

              <div
                key={product.slug}
                className="bg-white rounded-3xl p-8 shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-6"
              >

                <div>

                  <h2 className="text-2xl mb-2">
                    {product.name}
                  </h2>

                  <p className="text-[#4b3a2c]">
                    {product.price}
                  </p>

                </div>

                <div className="flex gap-4">

                  <button
                    onClick={() =>
                      setSelectedProduct(product)
                    }
                    className="bg-[#c98b2e] text-white px-6 py-3 rounded-full"
                  >
                    Editar
                  </button>

                  <button
                    onClick={() =>
                      setProducts(
                        products.filter(
                          (item) =>
                            item.slug !== product.slug
                        )
                      )
                    }
                    className="bg-red-600 text-white px-6 py-3 rounded-full"
                  >
                    Eliminar
                  </button>

                </div>

              </div>

            ))}

          </div>

        )}

        {activeTab === "estadisticas" && (

          <div className="bg-white rounded-3xl p-10 shadow-lg">

            <h2 className="text-3xl mb-6">
              Estadísticas
            </h2>

            <p className="text-lg text-[#4b3a2c] mb-4">
              Productos registrados:
              {" "}
              {products.length}
            </p>

            <p className="text-lg text-[#4b3a2c]">
              Categorías activas:
              {" "}
              2
            </p>

          </div>

        )}

      </div>

      {selectedProduct && (

        <EditProductModal
          product={selectedProduct}
          onClose={() =>
            setSelectedProduct(null)
          }
          onSave={updateProduct}
        />

      )}

    </main>
  );
}