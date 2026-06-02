import Link from 'next/link';

export const metadata = {
  title: 'Página no encontrada',
  description: 'La página que buscas no existe o fue movida.',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-cream-50 paper-texture px-5">
      <div className="text-center max-w-md">
        <span className="text-7xl block mb-6" aria-hidden="true">🍯</span>
        <h1 className="font-display text-6xl sm:text-7xl font-bold text-earth-900 mb-4">404</h1>
        <h2 className="font-display text-xl sm:text-2xl font-bold text-earth-800 mb-3">
          Esta página se escondió en la colmena
        </h2>
        <p className="text-sm text-earth-500 leading-relaxed mb-8">
          La página que buscas no existe, fue movida o nunca estuvo aquí.
          Pero tranquilo, nuestra miel sigue intacta.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="btn-primary"
          >
            Volver al inicio
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            href="/blog"
            className="btn-outline"
          >
            Ir al blog
          </Link>
        </div>
      </div>
    </section>
  );
}
