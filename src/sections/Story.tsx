import Image from "next/image";
import FadeIn from "@/components/FadeIn";

export default function Story() {
  return (
    <FadeIn>
    <section
      id="nosotros"
      className="py-24 bg-[#f7f1e8]"
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* IMAGEN */}
        <div className="relative">
          <Image
            src="/padre-apicultor.jpg"
            alt="Apicultor Casa Apícola Los Cerezos"
            width={700}
            height={900}
            className="rounded-3xl object-cover shadow-2xl"
          />
        </div>

        {/* TEXTO */}
        <div>

          <p className="uppercase tracking-[0.3em] text-sm text-[#8b5e34] mb-4">
            Nuestra historia
          </p>

          <h2 className="text-4xl md:text-5xl leading-tight mb-8">
            Más de 30 años dedicados a la apicultura y el cuidado de las abejas.
          </h2>

          <div className="space-y-6 text-lg leading-relaxed text-[#4b3a2c]">

            <p>
              Casa Apícola Los Cerezos nació en la vereda La Playa,
              en Caldas Boyacá, como un proyecto familiar construido
              con trabajo, aprendizaje y experiencia real alrededor
              de las abejas.
            </p>

            <p>
              Lo que comenzó como la adquisición de un apiario en los años 90,
              creció gracias a la dedicación, el conocimiento y el amor por la apicultura
              de una familia que aprendió a través de la práctica y el respeto por la naturaleza.
            </p>

            <p>
              Hoy, además de producir miel y derivados naturales,
              también comparten conocimiento, asesoran apiarios
              y enseñan apicultura a personas y comunidades de la región.
            </p>

          </div>
        </div>
      </div>
    </section>
    </FadeIn>
  );
}