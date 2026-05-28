'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { trackView, trackClick } from '@/lib/tracking';

const fotos = [
  {
    src: '/images/colmenas-meliphera-caldas.jpg',
    alt: 'Colmenas de abejas Apis mellifera en las montañas de Caldas, Casa Apícola Los Cerezos',
    caption: 'Nuestras colmenas en las montañas de Caldas',
  },
  {
    src: '/images/cosecha-miel-familiar.jpg',
    alt: 'Familia cosechando miel artesanal en la zona de Caldas-Boyacá',
    caption: 'Cosecha familiar, tradición de más de 15 años',
  },
  {
    src: '/images/flor-arrayan-boyaca.jpg',
    alt: 'Flor de Arrayán silvestre en la zona de amortiguamiento del Páramo de Rabanal, Boyacá',
    caption: 'Arrayán silvestre del Páramo de Rabanal',
  },
];

export default function Story() {
  useEffect(() => {
    const observer = trackView('historia', 0.5);
    return () => observer?.disconnect();
  }, []);

  const handleCtaClick = (e) => {
    e.preventDefault();
    trackClick('story_cta', '#productos', { label: 'Apoya la apicultura local' });
    const target = document.getElementById('productos');
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="historia"
      className="py-12 sm:py-16 md:py-24 bg-white"
      aria-labelledby="story-title"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12 md:mb-16">
          <span className="inline-block mb-4 px-3 py-1 text-xs font-semibold tracking-wider uppercase text-bosque-700 bg-bosque-50 rounded-full border border-bosque-200">
            Nuestra historia
          </span>
          <h2
            id="story-title"
            className="text-3xl sm:text-4xl font-bold text-tierra-900 leading-tight"
          >
            La historia detrás de cada frasco
          </h2>
        </div>

        {/* Contenido en 2 columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-start">
          {/* Columna de texto */}
          <article className="space-y-5 text-[0.9375rem] sm:text-lg text-tierra-700 leading-relaxed">
            <p>
              En las montañas de <strong className="text-tierra-900">Caldas</strong>,
              cerca del límite con <strong className="text-tierra-900">Boyacá</strong>,
              nuestra familia comenzó este viaje hace más de 15 años. Lo que empezó como
              unas pocas colmenas de abejas{' '}
              <em className="font-semibold not-italic text-tierra-800">Apis mellifera</em>{' '}
              en el patio trasero se convirtió en una misión: proteger estas abejas y su flora.
            </p>

            <p>
              La <em className="not-italic font-semibold text-tierra-800">Apis mellifera</em>{' '}
              es la especie de abeja con mayor distribución en el mundo. Originaria de Europa,
              África y parte de Asia, fue introducida en América y Oceanía. Hoy, nuestras
              colmenas de <em className="not-italic font-semibold text-tierra-800">Apis mellifera</em>{' '}
              prosperan en la zona de amortiguamiento del{' '}
              <strong className="text-bosque-700">Páramo de Rabanal</strong>, donde la
              diversidad floral es asombrosa.
            </p>

            <p>
              Aquí, las abejas recolectan néctar de{' '}
              <strong>Eucalipto</strong>, <strong>Romero</strong>,{' '}
              <strong>Salvia</strong> silvestre, <strong>Uva de anís</strong> y{' '}
              <strong>Arrayán</strong>, creando mieles con perfiles de sabor únicos en
              cada cosecha.
            </p>

            <p>
              Practicamos apicultura sostenible: no usamos antibióticos, respetamos los
              ciclos naturales de las abejas{' '}
              <em className="not-italic font-semibold text-tierra-800">Apis mellifera</em>,
              y dejamos suficiente miel para que las colonias sobrevivan el invierno. Cada
              frasco que recibes representa este equilibrio entre tradición familiar y
              conservación ambiental.
            </p>

            {/* CTA */}
            <div className="pt-4">
              <a
                href="#productos"
                onClick={handleCtaClick}
                className="inline-flex items-center text-base sm:text-lg font-semibold text-miel-700 hover:text-miel-800 transition-colors group min-h-[44px]"
                aria-label="Ver productos y apoyar la apicultura local"
              >
                Apoya la apicultura local
                <svg
                  className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </article>

          {/* Columna de fotos — lazy loading, sizes responsivos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" role="group" aria-label="Galería de fotos de Casa Apícola Los Cerezos">
            {/* Foto grande */}
            <figure className="sm:col-span-2 relative aspect-[16/10] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={fotos[0].src}
                alt={fotos[0].alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                className="object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 img-placeholder">
                <div className="text-center p-4">
                  <svg className="w-12 h-12 mx-auto mb-2 text-miel-700/50" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-xs">{fotos[0].caption}</span>
                  <br />
                  <code className="text-[10px] text-miel-800/60">colmenas-meliphera-caldas.jpg</code>
                </div>
              </div>
              <figcaption className="sr-only">{fotos[0].caption}</figcaption>
            </figure>

            {/* Foto 2 */}
            <figure className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={fotos[1].src}
                alt={fotos[1].alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 25vw, 300px"
                className="object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 img-placeholder">
                <div className="text-center p-3">
                  <svg className="w-10 h-10 mx-auto mb-1 text-miel-700/50" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-[11px]">{fotos[1].caption}</span>
                  <br />
                  <code className="text-[10px] text-miel-800/60">cosecha-miel-familiar.jpg</code>
                </div>
              </div>
              <figcaption className="sr-only">{fotos[1].caption}</figcaption>
            </figure>

            {/* Foto 3 */}
            <figure className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={fotos[2].src}
                alt={fotos[2].alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 25vw, 300px"
                className="object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 img-placeholder">
                <div className="text-center p-3">
                  <svg className="w-10 h-10 mx-auto mb-1 text-miel-700/50" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-[11px]">{fotos[2].caption}</span>
                  <br />
                  <code className="text-[10px] text-miel-800/60">flor-arrayan-boyaca.jpg</code>
                </div>
              </div>
              <figcaption className="sr-only">{fotos[2].caption}</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
