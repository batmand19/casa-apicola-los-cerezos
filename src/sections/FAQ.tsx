import FadeIn from "@/components/FadeIn";

const questions = [
  {
    question: "¿La miel es pura?",
    answer:
      "Sí. La miel se produce mediante manejo artesanal y procesos naturales.",
  },

  {
    question: "¿Realizan envíos?",
    answer:
      "Sí, para productos de consumo natural en ciudades principales.",
  },

  {
    question: "¿Ofrecen asesoría apícola?",
    answer:
      "Sí. Se realizan visitas, acompañamiento y enseñanza práctica.",
  },
];

export default function FAQ() {
  return (
    <FadeIn>
      <section className="py-24 bg-[#ede3d2]">

        <div className="max-w-5xl mx-auto px-6">

          <div className="text-center mb-16">

            <p className="uppercase tracking-[0.3em] text-sm text-[#8b5e34] mb-4">
              Preguntas frecuentes
            </p>

            <h2 className="text-4xl md:text-5xl">
              Información importante.
            </h2>

          </div>

          <div className="space-y-6">

            {questions.map((item) => (
              <div
                key={item.question}
                className="bg-white rounded-3xl p-8 shadow-lg"
              >
                <h3 className="text-2xl mb-4">
                  {item.question}
                </h3>

                <p className="text-[#4b3a2c] leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>
    </FadeIn>
  );
}