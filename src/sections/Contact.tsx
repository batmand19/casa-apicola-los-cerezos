import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <section
      id="contacto"
      className="py-24 bg-[#2c2218] text-white"
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        <div>

          <p className="uppercase tracking-[0.3em] text-sm text-[#c98b2e] mb-4">
            Contacto
          </p>

          <h2 className="text-5xl leading-tight mb-8">
            Hablemos sobre apicultura, productos y proyectos rurales.
          </h2>

          <p className="text-lg text-[#f4e7cf] leading-relaxed">
            Escríbenos para pedidos, asesorías,
            clases o información sobre nuestros productos.
          </p>

        </div>

        <ContactForm />

      </div>
    </section>
  );
}