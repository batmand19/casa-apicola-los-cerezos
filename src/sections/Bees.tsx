import FadeIn from "@/components/FadeIn"

export default function Bees() {
  return (
    <FadeIn>
    <section className="py-24 bg-[#ede3d2]">

      <div className="max-w-5xl mx-auto px-6 text-center">

        <p className="uppercase tracking-[0.3em] text-sm text-[#8b5e34] mb-4">
          Naturaleza y equilibrio
        </p>

        <h2 className="text-4xl md:text-5xl mb-8 leading-tight">
          Las abejas son fundamentales para la vida y el campo colombiano.
        </h2>

        <p className="text-lg md:text-xl leading-relaxed text-[#4b3a2c] max-w-3xl mx-auto">
          Más allá de producir miel, las abejas cumplen un papel esencial
          en la polinización, la biodiversidad y el equilibrio natural.
          La apicultura responsable ayuda a proteger ecosistemas y fortalecer
          el desarrollo rural.
        </p>

      </div>
    </section>
    </FadeIn>
  );
}