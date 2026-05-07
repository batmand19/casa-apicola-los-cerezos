import FadeIn from "@/components/FadeIn";

const services = [
  {
    title: "Asesoría Apícola",
    description:
      "Orientación y acompañamiento para iniciar o fortalecer apiarios rurales.",
  },
  {
    title: "Clases de Apicultura",
    description:
      "Capacitaciones prácticas y educativas sobre manejo responsable de abejas.",
  },
  {
    title: "Fabricación de Colmenas",
    description:
      "Construcción artesanal de cajas, cuadros y colmenas completas.",
  },
  {
    title: "Rescate de Colmenas",
    description:
      "Manejo y reubicación responsable de enjambres y colmenas.",
  },
];

export default function Services() {
  return (
    <FadeIn>
    <section
      id="servicios"
      className="py-24 bg-[#ede3d2]"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[0.3em] text-sm text-[#8b5e34] mb-4">
            Servicios
          </p>

          <h2 className="text-4xl md:text-5xl">
            Experiencia, enseñanza y trabajo apícola.
          </h2>

        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-3xl p-10 shadow-lg"
            >
              <h3 className="text-2xl mb-4">
                {service.title}
              </h3>

              <p className="text-[#4b3a2c] leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
    </FadeIn>
  );
}