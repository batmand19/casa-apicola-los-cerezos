'use client';

export default function Error({ error, reset }) {
  return (
    <section className="min-h-screen flex items-center justify-center bg-cream-50 paper-texture px-5">
      <div className="text-center max-w-md">
        <span className="text-6xl block mb-6" aria-hidden="true">⚠️</span>
        <h1 className="font-display text-2xl sm:text-3xl font-bold text-earth-900 mb-3">
          Algo salió mal
        </h1>
        <p className="text-sm text-earth-500 leading-relaxed mb-8">
          Ocurrió un error inesperado. Por favor, intenta de nuevo o vuelve al inicio.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button onClick={() => reset()} className="btn-primary">
            Intentar de nuevo
          </button>
          <a href="/" className="btn-outline">
            Volver al inicio
          </a>
        </div>
      </div>
    </section>
  );
}
