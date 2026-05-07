import Link from "next/link";

export default function Categories() {
  return (
    <section className="py-24 bg-[#ede3d2]">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[0.3em] text-sm text-[#8b5e34] mb-4">
            Explora
          </p>

          <h2 className="text-4xl md:text-5xl">
            Productos, conocimiento y apicultura.
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {/* CONSUMO */}
          <Link
            href="/consumo"
            className="bg-white rounded-3xl p-10 shadow-lg hover:-translate-y-2 transition"
          >
            <h3 className="text-3xl mb-6">
              Consumo Natural
            </h3>

            <p className="text-[#4b3a2c] leading-relaxed">
              Miel, polen, propóleo y productos naturales
              para consumo diario y bienestar.
            </p>
          </Link>

          {/* APICULTORES */}
          <Link
            href="/apicultores"
            className="bg-white rounded-3xl p-10 shadow-lg hover:-translate-y-2 transition"
          >
            <h3 className="text-3xl mb-6">
              Apicultores
            </h3>

            <p className="text-[#4b3a2c] leading-relaxed">
              Núcleos, colmenas, asesoría y materiales
              para proyectos apícolas.
            </p>
          </Link>

          {/* EDUCACION */}
          <Link
            href="/servicios"
            className="bg-white rounded-3xl p-10 shadow-lg hover:-translate-y-2 transition"
          >
            <h3 className="text-3xl mb-6">
              Educación
            </h3>

            <p className="text-[#4b3a2c] leading-relaxed">
              Clases, visitas, acompañamiento y enseñanza
              sobre apicultura responsable.
            </p>
          </Link>

        </div>
      </div>
    </section>
  );
}