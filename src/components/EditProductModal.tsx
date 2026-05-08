"use client";

import { Product } from "@/types/product";

import { useState } from "react";

import ImageUploader from "./ImageUploader";

interface Props {
  product: Product;

  onClose: () => void;

  onSave: (product: Product) => void;
}

export default function EditProductModal({
  product,
  onClose,
  onSave,
}: Props) {
    const [image, setImage] =
  useState(
    product.image || "/miel.jpg"
  );
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-6 overflow-y-auto">

      <div className="bg-white rounded-3xl p-10 w-full max-w-2xl">

        <h2 className="text-3xl mb-8">
          {product.slug
            ? "Editar producto"
            : "Nuevo producto"}
        </h2>
            const imagePreview =
            product.image || "/miel.jpg";
        <form
          className="space-y-6"
          onSubmit={(e) => {
            e.preventDefault();

            const form =
              e.currentTarget;

            const formData =
              new FormData(form);

            onSave({
              slug:
                (
                  formData.get(
                    "slug"
                  ) as string
                )
                  .toLowerCase()
                  .replace(/\s+/g, "-"),

              name:
                formData.get(
                  "name"
                ) as string,

                image,

              shortDescription:
                formData.get(
                  "shortDescription"
                ) as string,

              description:
                formData.get(
                  "description"
                ) as string,

              price:
                formData.get(
                  "price"
                ) as string,

              category:
                formData.get(
                  "category"
                ) as
                  | "consumo"
                  | "apicultores",

              whatsappMessage:
                formData.get(
                  "whatsappMessage"
                ) as string,
            });

            onClose();
          }}
        >

          <input
            name="slug"
            placeholder="Slug"
            defaultValue={product.slug}
            className="w-full border rounded-2xl px-5 py-4"
          />

          <input
            name="name"
            placeholder="Nombre"
            defaultValue={product.name}
            className="w-full border rounded-2xl px-5 py-4"
          />

        <ImageUploader
        value={image}
        onChange={setImage}
        />

          <input
            name="price"
            placeholder="$25.000"
            defaultValue={product.price}
            className="w-full border rounded-2xl px-5 py-4"
          />

          <select
            name="category"
            defaultValue={product.category}
            className="w-full border rounded-2xl px-5 py-4"
          >
            <option value="consumo">
              Consumo
            </option>

            <option value="apicultores">
              Apicultores
            </option>
          </select>

          <textarea
            name="shortDescription"
            rows={2}
            placeholder="Descripción corta"
            defaultValue={
              product.shortDescription
            }
            className="w-full border rounded-2xl px-5 py-4"
          />

          <textarea
            name="description"
            rows={5}
            placeholder="Descripción completa"
            defaultValue={
              product.description
            }
            className="w-full border rounded-2xl px-5 py-4"
          />

          <textarea
            name="whatsappMessage"
            rows={3}
            placeholder="Mensaje WhatsApp"
            defaultValue={
              product.whatsappMessage
            }
            className="w-full border rounded-2xl px-5 py-4"
          />

          <div className="flex gap-4">

            <button
              type="submit"
              className="bg-[#c98b2e] text-white px-6 py-3 rounded-full"
            >
              Guardar
            </button>

            <button
              type="button"
              onClick={onClose}
              className="bg-[#2c2218] text-white px-6 py-3 rounded-full"
            >
              Cancelar
            </button>

          </div>

        </form>

      </div>
    </div>
  );
}