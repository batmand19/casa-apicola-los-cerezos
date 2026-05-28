'use client';

import OptimizedImage from './OptimizedImage';
export default function NuestroEntorno() {
  return (
    <section className="relative overflow-hidden" aria-labelledby="environment-title">
      {/* Fondo cinematográfico */}
      <div className="absolute inset-0 bg-gradient-to-br from-forest-800 via-forest-900 to-earth-900" aria-hidden="true" />
      <div className="absolute inset-0 hex-pattern opacity-20" aria-hidden="true" />
      <div className="absolute top-0 left-0 w-[600px] h-[400px] bg-honey-500/5 rounded-full blur-[120px]" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 py-24 sm:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Imagen */}
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
            <OptimizedImage src="/images/entorno-montanas.jpg" alt="Montañas de Caldas-Boyacá al amanecer" aspect="4/3" fallbackIcon="🏔️" fallbackLabel="Montañas de Caldas" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10" />
          </div>

          {/* Texto */}
          <div>
            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-honey-400/70">Nuestro hogar</span>
            <div className="w-12 h-0.5 bg-gradient-to-r from-honey-400/50 to-transparent my-5" />
            <h2 id="environment-title" className="font-display text-3xl sm:text-4xl font-bold text-cream-50 mb-6 leading-tight">
              Las montañas de Caldas
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-cream-300/60 leading-relaxed">
              <p>
                Nuestro apiario se encuentra en la zona de amortiguamiento del{' '}
                <strong className="text-cream-100">Páramo de Rabanal</strong>, donde la diversidad floral es asombrosa.
              </p>
              <p>
                Aquí, entre nieblas matutinas y el canto de las aves, las abejas{' '}
                <em className="not-italic text-cream-200">Apis mellifera</em> encuentran la flora perfecta:
                Eucalipto, Romero, Salvia, Uva de anís y Arrayán.
              </p>
              <p>
                Un entorno que no solo produce miel excepcional, sino que merece ser protegido.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
