import FadeIn from "@/components/FadeIn";
import ProductGrid from "@/components/ProductGrid";

export default function Products() {
  return (
    <FadeIn>
      <section
        id="productos"
        className="py-24 bg-[#f7f1e8]"
      >
        <div className="max-w-7xl mx-auto px-6">

          <div className="mb-16 text-center">

            <p className="uppercase tracking-[0.3em] text-sm text-[#8b5e34] mb-4">
              Productos
            </p>

            <h2 className="text-4xl md:text-5xl">
              Productos naturales y apicultura artesanal.
            </h2>

          </div>

          <ProductGrid />

        </div>
      </section>
    </FadeIn>
  );
}