"use client";

interface ProductFiltersProps {
  active: string;
  setActive: (value: string) => void;
}

export default function ProductFilters({
  active,
  setActive,
}: ProductFiltersProps) {
  return (
    <div className="flex flex-wrap gap-4 mb-12">

      <button
        onClick={() => setActive("all")}
        className={`px-6 py-3 rounded-full transition ${
          active === "all"
            ? "bg-[#c98b2e] text-white"
            : "bg-white"
        }`}
      >
        Todos
      </button>

      <button
        onClick={() => setActive("consumo")}
        className={`px-6 py-3 rounded-full transition ${
          active === "consumo"
            ? "bg-[#c98b2e] text-white"
            : "bg-white"
        }`}
      >
        Consumo
      </button>

      <button
        onClick={() => setActive("apicultores")}
        className={`px-6 py-3 rounded-full transition ${
          active === "apicultores"
            ? "bg-[#c98b2e] text-white"
            : "bg-white"
        }`}
      >
        Apicultores
      </button>

    </div>
  );
}