'use client';

import { useEffect } from 'react';
import { trackView } from '@/lib/tracking';

const TESTIMONIALS = [
  { name: 'María Rodríguez', location: 'Bogotá', stars: 5, text: 'La miel es deliciosa, se nota que es pura y artesanal. El polen lo agregué a mis batidos y me encanta. Llegó súper bien empacado.', initials: 'MR' },
  { name: 'Carlos Méndez', location: 'Medellín', stars: 5, text: 'Primera vez que pruebo miel de abejas Meliphera. El sabor es increíble, nada que ver con las mieles comerciales. La textura cremosa es una delicia.', initials: 'CM' },
  { name: 'Ana Lucía Bernal', location: 'Cali', stars: 5, text: 'Compramos la miel para aliviar alergias respiratorias en casa. Ha sido muy útil y el sabor encantó a toda la familia. Volveremos a comprar.', initials: 'AB' },
];

function Stars({ count }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} de 5 estrellas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className={`w-4 h-4 ${i < count ? 'text-honey-400' : 'text-earth-200'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  useEffect(() => {
    const observer = trackView('testimonios', 0.3);
    return () => observer?.disconnect();
  }, []);

  return (
    <section id="testimonios" className="py-24 sm:py-32 bg-earth-900 relative overflow-hidden" aria-labelledby="testimonials-title">
      {/* Decoración */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-honey-500/5 rounded-full blur-[100px]" aria-hidden="true" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-honey-400/80">Prueba social</span>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-honey-400 to-transparent mx-auto my-6" />
          <h2 id="testimonials-title" className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-cream-50">
            Lo que dicen nuestros clientes
          </h2>
          <p className="mt-5 text-base text-cream-300/60">
            Más de <strong className="text-cream-100">500 familias colombianas</strong> confían en nuestra miel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <article key={i} className="card-premium p-6 sm:p-8 bg-white/5 border-white/10 hover:bg-white/8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-honey-400 to-honey-600 flex items-center justify-center text-white text-sm font-bold shadow-md">
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-cream-100 text-sm">{t.name}</p>
                  <p className="text-xs text-cream-400/50">{t.location}</p>
                </div>
              </div>
              <Stars count={t.stars} />
              <p className="mt-4 text-sm text-cream-300/70 leading-relaxed">&ldquo;{t.text}&rdquo;</p>
            </article>
          ))}
        </div>

        {/* Contador */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-cream-100/10 bg-white/5">
            <div className="flex -space-x-2">
              {['MR', 'CM', 'AB'].map((init, i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-honey-400 to-honey-600 flex items-center justify-center text-white text-[10px] font-bold border-2 border-earth-900">{init}</div>
              ))}
            </div>
            <p className="text-sm text-cream-300/70"><strong className="text-cream-100">500+</strong> familias</p>
          </div>
        </div>
      </div>
    </section>
  );
}
