import FadeIn from "@/components/FadeIn";

const timeline = [
  {
    year: "1990",
    title: "Inicio familiar",
    description:
      "El proyecto comenzó cuando la familia adquirió sus primeras colmenas y aprendió apicultura mediante experiencia práctica.",
  },

  {
    year: "2000",
    title: "Crecimiento del apiario",
    description:
      "La producción de miel y colmenas empezó a crecer en la región de Boyacá.",
  },

  {
    year: "2010",
    title: "Enseñanza y asesoría",
    description:
      "Comenzaron las capacitaciones, visitas a apiarios y acompañamiento a nuevos apicultores.",
  },

  {
    year: "Hoy",
    title: "Tradición y futuro",
    description:
      "Casa Apícola Los Cerezos continúa creciendo con enfoque en calidad, naturaleza y educación.",
  },
];

export default function Timeline() {
  return (
    <FadeIn>
      <section className="py-24 bg-[#ede3d2]">

        <div className="max-w-5xl mx-auto px-6">

          <div className="text-center mb-20">

            <p className="uppercase tracking-[0.3em] text-sm text-[#8b5e34] mb-4">
              Historia
            </p>

            <h2 className="text-4xl md:text-5xl">
              Más de 30 años de tradición apícola.
            </h2>

          </div>

          <div className="space-y-12">

            {timeline.map((item) => (
              <div
                key={item.year}
                className="bg-white rounded-3xl p-10 shadow-lg"
              >
                <p className="text-[#c98b2e] font-semibold mb-3">
                  {item.year}
                </p>

                <h3 className="text-3xl mb-4">
                  {item.title}
                </h3>

                <p className="text-[#4b3a2c] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>
    </FadeIn>
  );
}