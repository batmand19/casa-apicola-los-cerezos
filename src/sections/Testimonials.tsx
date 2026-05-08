const testimonials = [
  {
    name:
      "Cliente en Boyacá",

    text:
      "La miel tiene un sabor completamente diferente a la comercial. Se siente realmente natural.",
  },

  {
    name:
      "Apicultor local",

    text:
      "Héctor tiene muchísimo conocimiento y siempre comparte su experiencia con paciencia.",
  },

  {
    name:
      "Cliente frecuente",

    text:
      "El polen nos ha gustado mucho en la familia. Excelente calidad.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-32 bg-[#fffaf3]">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">

          <p className="uppercase tracking-[0.3em] text-sm text-[#8b5e34] mb-4">
            Confianza
          </p>

          <h2 className="text-5xl">
            Lo que dicen nuestros clientes
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map(
            (testimonial) => (

              <div
                key={testimonial.name}
                className="bg-white rounded-[32px] p-10 shadow-lg"
              >

                <p className="text-[#4b3a2c] leading-relaxed mb-6">
                  “{testimonial.text}”
                </p>

                <p className="font-semibold">
                  {testimonial.name}
                </p>

              </div>

            )
          )}

        </div>

      </div>

    </section>
  );
}