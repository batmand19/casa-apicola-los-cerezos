"use client";

import { Product } from "@/types/product";

interface Props {
  products: Product[];
}

export default function ExportProductsButton({
  products,
}: Props) {

  function exportData() {

    const blob =
      new Blob(
        [
          JSON.stringify(
            products,
            null,
            2
          ),
        ],
        {
          type:
            "application/json",
        }
      );

    const url =
      URL.createObjectURL(blob);

    const a =
      document.createElement("a");

    a.href = url;

    a.download =
      "catalogo-productos.json";

    a.click();

    URL.revokeObjectURL(url);
  }

  return (
    <button
      onClick={exportData}
      className="bg-[#2c2218] text-white px-6 py-3 rounded-full"
    >
      Exportar catálogo
    </button>
  );
}