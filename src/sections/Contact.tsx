import FadeIn from "@/components/FadeIn";

export default function Contact() {
  return (
    <FadeIn>
    <section
      id="contacto"
      className="py-24 bg-[#2c2218] text-white"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">

        <p className="uppercase tracking-[0.3em] text-sm text-[#c98b2e] mb-4">
          Contacto
        </p>

        <h2 className="text-4xl md:text-6xl leading-tight mb-8">
          Llevar la tradición apícola al futuro también es cuidar las abejas.
        </h2>

        <p className="text-lg text-[#f4e7cf] mb-12 leading-relaxed">
          Escríbenos para conocer nuestros productos,
          asesorías, clases o proyectos apícolas.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">

          <a
            href="https://wa.me/573208065008"
            target="_blank"
            className="bg-[#c98b2e] hover:bg-[#b67c28] transition px-8 py-4 rounded-full font-semibold"
          >
            WhatsApp
          </a>

          <a
            href="tel:+573108141518"
            className="border border-white/50 hover:bg-white hover:text-black transition px-8 py-4 rounded-full font-semibold"
          >
            Llamar ahora
          </a>

        </div>
      </div>
    </section>
    </FadeIn>
  );
}