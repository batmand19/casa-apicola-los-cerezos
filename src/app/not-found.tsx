import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#f7f1e8] flex items-center justify-center px-6">

      <div className="text-center max-w-2xl">

        <p className="uppercase tracking-[0.3em] text-sm text-[#8b5e34] mb-6">
          Error 404
        </p>

        <h1 className="text-6xl md:text-7xl mb-8">
          Página no encontrada
        </h1>

        <p className="text-lg text-[#4b3a2c] leading-relaxed mb-10">
          La página que buscas no existe o fue movida.
        </p>

        <Link
          href="/"
          className="bg-[#c98b2e] hover:bg-[#b67c28] transition px-8 py-4 rounded-full text-white font-semibold"
        >
          Volver al inicio
        </Link>

      </div>
    </main>
  );
}