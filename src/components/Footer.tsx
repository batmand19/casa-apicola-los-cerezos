import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1d160f] text-[#f4e7cf] py-20">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">

        {/* BRAND */}
        <div>

          <h3 className="text-3xl mb-4">
            Casa Apícola Los Cerezos
          </h3>

          <p className="leading-relaxed opacity-80">
            Pureza y tradición en cada cosecha.
          </p>

        </div>

        {/* LINKS */}
        <div>

          <h4 className="text-xl mb-4">
            Navegación
          </h4>

          <div className="flex flex-col gap-3 opacity-80">

            <Link href="/">
              Inicio
            </Link>

            <Link href="/consumo">
              Consumo
            </Link>

            <Link href="/apicultores">
              Apicultores
            </Link>

            <Link href="/servicios">
              Servicios
            </Link>

          </div>
        </div>

        {/* LOCATION */}
        <div>

          <h4 className="text-xl mb-4">
            Ubicación
          </h4>

          <div className="opacity-80 leading-relaxed">

            <p>Vereda La Playa</p>

            <p>Caldas, Boyacá</p>

            <p>Colombia</p>

          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 text-sm opacity-60">

        © 2026 Casa Apícola Los Cerezos

      </div>
    </footer>
  );
}