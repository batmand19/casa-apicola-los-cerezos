'use client';

import { useEffect } from 'react';
import { trackView } from '@/lib/tracking';

const TESTIMONIALS = [
  {
    name: 'María Rodríguez',
    location: 'Bogotá',
    stars: 5,
    text: 'La miel es deliciosa, se nota que es pura y artesanal. El polen lo agregué a mis batidos y me encanta. Llegó súper bien empacado. Recomendado 100%.',
    image: null, // Reemplazar con foto real: '/images/testimonials/maria-rodriguez.jpg'
  },
  {
    name: 'Carlos Méndez',
    location: 'Medellín',
    stars: 5,
    text: 'Primera vez que pruebo miel de abejas Meliphera. El sabor es increíble, nada que ver con las mieles comerciales. La textura cremosa es una delicia.',
    image: null, // Reemplazar con foto real: '/images/testimonials/carlos-mendez.jpg'
  },
  {
    name: 'Ana Lucía Bernal',
    location: 'Cali',
    stars: 4.5,
    text: 'Compramos la miel para aliviar alergias respiratorias en casa. Ha sido muy útil y el sabor encantó a toda la familia. Volveremos a comprar.',
    image: null, // Reemplazar con foto real: '/images/testimonials/ana-lucia-bernal.jpg'
  },
];

function Stars({ count }) {
  const full = Math.floor(count);
  const hasHalf = count % 1 !== 0;
  const empty = 5 - full - (hasHalf ? 1 : 0);

  return (
    <div className="flex gap-0.5" aria-label={`${count} de 5 estrellas`}>
      {Array.from({ length: full }).map((_, i) => (
        <svg key={`f${i}`} className="w-4 h-4 text-miel-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      {hasHalf && (
        <svg className="w-4 h-4 text-miel-500" viewBox="0 0 20 20" aria-hidden="true">
          <defs>
            <linearGradient id="half">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="#e5e7eb" />
            </linearGradient>
          </defs>
          <path fill="url(#half)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      )}
      {Array.from({ length: empty }).map((_, i) => (
        <svg key={`e${i}`} className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function Avatar({ name, image }) {
  const initials = name.split(' ').map((n) => n[0]).join('').slice(0, 2);

  if (image) {
    return (
      <div className="w-12 h-12 rounded-full overflow-hidden bg-miel-100 flex-shrink-0">
        {/* Reemplazar con next/image cuando haya fotos reales */}
        <img src={image} alt={name} className="w-full h-full object-cover" loading="lazy" />
      </div>
    );
  }

  return (
    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-miel-300 to-miel-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
      {initials}
    </div>
  );
}

export default function Testimonials() {
  useEffect(() => {
    const observer = trackView('testimonios', 0.3);
    return () => observer?.disconnect();
  }, []);

  return (
    <section
      id="testimonios"
      className="py-12 sm:py-16 md:py-24 bg-tierra-50"
      aria-labelledby="testimonials-title"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center mb-10 sm:mb-12">
          <span className="inline-block mb-4 px-3 py-1 text-xs font-semibold tracking-wider uppercase text-miel-800 bg-miel-100 rounded-full border border-miel-200">
            Prueba social
          </span>
          <h2
            id="testimonials-title"
            className="text-3xl sm:text-4xl font-bold text-tierra-900"
          >
            Lo que dicen nuestros clientes
          </h2>
          <p className="mt-3 text-lg text-tierra-700/80 max-w-xl mx-auto">
            Más de <strong>500 familias colombianas</strong> confían en nuestra miel artesanal.
          </p>
        </div>

        {/* Grid de testimonios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <article
              key={i}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-miel-100 flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <Avatar name={t.name} image={t.image} />
                <div>
                  <p className="font-semibold text-tierra-900 text-sm">{t.name}</p>
                  <p className="text-xs text-tierra-700/60">{t.location}</p>
                </div>
              </div>

              {/* Estrellas */}
              <div className="mb-3">
                <Stars count={t.stars} />
              </div>

              {/* Texto */}
              <p className="text-sm text-tierra-700 leading-relaxed flex-1">
                &ldquo;{t.text}&rdquo;
              </p>
            </article>
          ))}
        </div>

        {/* Contador de confianza */}
        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-sm border border-miel-100">
            <div className="flex -space-x-2">
              {['MR', 'CM', 'AB'].map((init, i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-miel-300 to-miel-500 flex items-center justify-center text-white text-xs font-bold border-2 border-white">
                  {init}
                </div>
              ))}
            </div>
            <p className="text-sm text-tierra-700">
              <strong className="text-tierra-900">500+</strong> familias confían en nosotros
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
