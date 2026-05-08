const benefits = [
  {
    title:
      "100% natural",

    description:
      "Sin químicos, conservantes ni procesos industriales.",
  },

  {
    title:
      "Tradición familiar",

    description:
      "Más de 30 años de experiencia apícola artesanal en Boyacá.",
  },

  {
    title:
      "Cuidado responsable",

    description:
      "Producción respetuosa con las abejas y el entorno natural.",
  },

  {
    title:
      "Calidad artesanal",

    description:
      "Cada cosecha conserva aroma, textura y sabor auténtico.",
  },
];

export default function Benefits() {
  return (
    <section className="py-32 bg-[#fffaf3]">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">

          <p className="uppercase tracking-[0.3em] text-sm text-[#8b5e34] mb-4">
            Nuestra esencia
          </p>

          <h2 className="text-5xl">
            Pureza y tradición en cada cosecha
          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {benefits.map((benefit) => (

            <div
              key={benefit.title}
              className="bg-white rounded-[32px] p-10 shadow-lg"
            >

              <h3 className="text-2xl mb-4">
                {benefit.title}
              </h3>

              <p className="text-[#4b3a2c] leading-relaxed">
                {benefit.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}