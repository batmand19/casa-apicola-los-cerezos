import ProductGrid from "@/components/ProductGrid";

export default function ConsumoPage() {
  return (
    <main className="min-h-screen bg-[#f7f1e8] py-32">

      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-16">

          <p className="uppercase tracking-[0.3em] text-sm text-[#8b5e34] mb-4">
            Consumo Natural
          </p>

          <h1 className="text-5xl mb-8">
            Productos naturales apícolas.
          </h1>

        </div>

        <ProductGrid />

      </div>
    </main>
  );
}