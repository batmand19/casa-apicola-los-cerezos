'use client';

export default function Error({ error, reset }) {
  return (
    <section className="min-h-[60vh] flex items-center justify-center bg-miel-50 px-5">
      <div className="text-center max-w-md">
        <span className="text-5xl block mb-5" aria-hidden="true">📝</span>
        <h1 className="font-display text-xl sm:text-2xl font-bold text-tierra-900 mb-3">
          Error al cargar el blog
        </h1>
        <p className="text-sm text-tierra-500 leading-relaxed mb-6">
          No pudimos cargar los artículos. Por favor, intenta de nuevo.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button onClick={() => reset()} className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-miel-600 hover:bg-miel-700 rounded-xl transition-all min-h-[48px]">
            Intentar de nuevo
          </button>
          <a href="/blog" className="inline-flex items-center px-6 py-3 text-sm font-semibold text-tierra-700 border border-tierra-200 hover:border-miel-400 rounded-xl transition-all min-h-[48px]">
            Volver al blog
          </a>
        </div>
      </div>
    </section>
  );
}
