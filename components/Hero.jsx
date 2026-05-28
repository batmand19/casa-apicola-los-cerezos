'use client';

import { useEffect } from 'react';
import { trackView, trackClick } from '@/lib/tracking';

export default function Hero() {
  useEffect(() => {
    const observer = trackView('hero', 0.3);
    return () => observer?.disconnect();
  }, []);

  const handleCtaPrimary = (e) => {
    e.preventDefault();
    trackClick('hero_cta_primary', '#productos', { label: 'Conoce nuestra miel' });
    const target = document.getElementById('productos');
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const handleCtaSecondary = (e) => {
    e.preventDefault();
    trackClick('hero_cta_secondary', '#historia', { label: 'Descubre nuestra historia' });
    const target = document.getElementById('historia');
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-miel-50 via-tierra-50 to-bosque-50 pt-16 sm:pt-0"
      aria-label="Sección principal"
    >
      {/* Decoración de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-miel-200/30 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-bosque-100/40 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24 text-center">
        {/* Badge */}
        <span className="inline-block mb-6 px-4 py-1.5 text-sm font-medium text-miel-800 bg-miel-100 rounded-full border border-miel-200">
          Casa Apícola Los Cerezos &middot; Desde hace más de 15 años
        </span>

        {/* H1 — Responsive: 2rem mobile, 2.5rem tablet, 3rem+ desktop */}
        <h1 className="text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl font-bold text-tierra-900 leading-[1.2] tracking-tight max-w-4xl mx-auto">
          Miel pura de las montañas de{' '}
          <span className="text-miel-600">Caldas</span> –{' '}
          <span className="text-bosque-700">Boyacá</span>
        </h1>

        {/* H2 / Subtítulo */}
        <h2 className="mt-6 text-[1.125rem] sm:text-xl md:text-2xl text-tierra-700 font-normal max-w-2xl mx-auto leading-relaxed">
          Cosechada de forma sostenible por nuestra familia de apicultores,
          directamente de la flora cundiboyacense
        </h2>

        {/* Párrafo de apoyo */}
        <p className="mt-6 text-base sm:text-lg text-tierra-700/80 max-w-xl mx-auto leading-relaxed">
          Nuestras abejas <em className="font-semibold not-italic text-tierra-800">Apis mellifera</em>,
          la especie de abeja con mayor distribución en el mundo, recolectan néctar
          de <strong>Eucalipto</strong>, <strong>Romero</strong>, <strong>Salvia</strong>,{' '}
          <strong>Uva de anís</strong> y <strong>Arrayán</strong>. Cada frasco es
          único y trazable.
        </p>

        {/* CTAs — Mínimo 44px touch targets */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <a
            href="#productos"
            onClick={handleCtaPrimary}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white bg-miel-600 hover:bg-miel-700 active:bg-miel-800 rounded-xl shadow-lg shadow-miel-500/25 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-miel-500 focus-visible:ring-offset-2 min-h-[48px]"
            aria-label="Ver nuestros productos de miel"
          >
            Conoce nuestra miel
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
          <a
            href="#historia"
            onClick={handleCtaSecondary}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-tierra-800 bg-white hover:bg-tierra-50 border-2 border-tierra-200 rounded-xl transition-all duration-200 focus-visible:ring-2 focus-visible:ring-tierra-700 focus-visible:ring-offset-2 min-h-[48px]"
            aria-label="Conocer la historia de Casa Apícola Los Cerezos"
          >
            Descubre nuestra historia
          </a>
        </div>

        {/* Trust signals — Mobile: wrap, Desktop: row */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-8 gap-y-3 text-sm text-tierra-700/70">
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-bosque-600" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
            100% natural
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-bosque-600" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
            Sin antibióticos
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-bosque-600" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
            Apicultura sostenible
          </span>
        </div>
      </div>
    </section>
  );
}
