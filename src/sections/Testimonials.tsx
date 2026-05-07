import FadeIn from "@/components/FadeIn";

const testimonials = [
  {
    name: "Apicultor Boyacá",
    text:
      "Excelente manejo de las abejas y mucho conocimiento práctico.",
  },

  {
    name: "Cliente de miel",
    text:
      "La miel tiene sabor natural real y se nota la calidad artesanal.",
  },

  {
    name: "Proyecto rural",
    text:
      "La asesoría y acompañamiento fueron muy profesionales.",
  },
];

export default function Testimonials() {
  return (
    <FadeIn>
      <section className="py-24 bg-[#f7f1e8]">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <p className="uppercase tracking-[0.3em] text-sm text-[#8b5e34] mb-4">
              Testimonios
            </p>

            <h2 className="text-4xl md:text-5xl">
              Confianza construida con experiencia.
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {testimonials.map((item) => (
              <div
                key={item.name}
                className="bg-white rounded-3xl p-10 shadow-lg"
              >
                <p className="text-[#4b3a2c] leading-relaxed mb-6">
                  "{item.text}"
                </p>

                <p className="font-semibold">
                  {item.name}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>
    </FadeIn>
  );
}