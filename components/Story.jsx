'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { trackView, trackClick } from '@/lib/tracking';

const fotos = [
  { src: '/images/colmenas-meliphera-caldas.jpg', alt: 'Colmenas en las montañas de Caldas, Casa Apícola Los Cerezos', caption: 'Nuestro apiario en las montañas' },
  { src: '/images/cosecha-miel-familiar.jpg', alt: 'Familia cosechando miel artesanal en Caldas-Boyacá', caption: 'Tradición familiar' },
  { src: '/images/flor-arrayan-boyaca.jpg', alt: 'Flor de Arrayán del Páramo de Rabanal', caption: 'Flora cundiboyacense' },
];

const timeline = [
  { icon: '🏠', title: 'Cómo empezó', text: 'Hace más de 15 años, unas pocas colmenas en el patio trasero se convirtieron en una misión.' },
  { icon: '👨‍👩‍👧‍👦', title: 'Tradición familiar', text: 'Tres generaciones cuidando abejas Meliphera con el mismo amor y respeto.' },
  { icon: '🌿', title: 'Filosofía artesanal', text: 'Sin antibióticos, sin prisas, respetando los ciclos naturales de la colmena.' },
  { icon: '🐝', title: 'Cuidado de las abejas', text: 'Dejamos suficiente miel para que las colonias sobrevivan el invierno.' },
  { icon: '🍯', title: 'Proceso de producción', text: 'Filtrado suave, envasado sin calor excesivo, preservando cada enzima natural.' },
];

export default function Story() {
  useEffect(() => {
    const observer = trackView('historia', 0.3);
    return () => observer?.disconnect();
  }, []);

  const handleCtaClick = (e) => {
    e.preventDefault();
    trackClick('story_cta', '#productos');
    const el = document.getElementById('productos');
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="historia" className="py-24 sm:py-32 bg-cream-100" aria-labelledby="story-title">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Header editorial */}
        <div className="text-center mb-20">
          <span className="inline-block mb-4 text-[11px] font-semibold tracking-[0.25em] uppercase text-honey-600">
            Nuestra historia
          </span>
          <div className="divider-elegant mb-6" />
          <h2 id="story-title" className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-earth-900 leading-tight max-w-3xl mx-auto">
            La historia detrás de cada frasco
          </h2>
          <p className="mt-6 text-base sm:text-lg text-earth-500 max-w-2xl mx-auto leading-relaxed">
            Una familia, unas abejas, y una montaña que guarda el secreto de la miel más pura de Colombia.
          </p>
        </div>

        {/* Timeline visual */}
        <div className="relative max-w-4xl mx-auto mb-24">
          {/* Línea conectora */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-honey-300 to-transparent md:-translate-x-px" aria-hidden="true" />

          <div className="space-y-12 md:space-y-16">
            {timeline.map((step, i) => {
              const isEven = i % 2 === 0;
              return (
                <div key={i} className={`relative flex items-start gap-6 md:gap-0 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Contenido */}
                  <div className={`flex-1 md:w-1/2 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16'} pl-16 md:pl-0`}>
                    <div className="group">
                      <span className="text-3xl mb-3 block" aria-hidden="true">{step.icon}</span>
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-earth-900 mb-2 group-hover:text-honey-600 transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-sm sm:text-base text-earth-500 leading-relaxed">{step.text}</p>
                    </div>
                  </div>

                  {/* Nodo */}
                  <div className="absolute left-0 md:relative md:left-auto md:w-0 flex items-center justify-center">
                    <div className="z-10 w-12 h-12 rounded-full bg-gradient-to-br from-honey-400 to-honey-600 text-white flex items-center justify-center shadow-lg shadow-honey-500/30 text-lg">
                      {step.icon}
                    </div>
                  </div>

                  <div className="hidden md:block md:w-1/2" aria-hidden="true" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Contenido editorial: 2 columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Texto */}
          <article className="space-y-6">
            <p className="text-base sm:text-lg text-earth-600 leading-[1.8]">
              En las montañas de <strong className="text-earth-800">Caldas</strong>, cerca del límite con <strong className="text-earth-800">Boyacá</strong>, nuestra familia comenzó este viaje hace más de 15 años. Lo que empezó como unas pocas colmenas de abejas <em className="not-italic font-semibold text-earth-800">Apis mellifera</em> en el patio trasero se convirtió en una misión: proteger estas abejas y su flora.
            </p>
            <p className="text-base sm:text-lg text-earth-600 leading-[1.8]">
              La <em className="not-italic font-semibold text-earth-800">Apis mellifera</em> es la especie de abeja con mayor distribución en el mundo. Hoy, nuestras colmenas prosperan en la zona de amortiguamiento del{' '}
              <strong className="text-forest-700">Páramo de Rabanal</strong>, donde la diversidad floral es asombrosa.
            </p>
            <p className="text-base sm:text-lg text-earth-600 leading-[1.8]">
              Las abejas recolectan néctar de{' '}
              <strong>Eucalipto</strong>, <strong>Romero</strong>,{' '}
              <strong>Salvia</strong> silvestre, <strong>Uva de anís</strong> y{' '}
              <strong>Arrayán</strong>, creando mieles con perfiles de sabor únicos en cada cosecha.
            </p>

            <div className="pt-4">
              <a href="#productos" onClick={handleCtaClick} className="inline-flex items-center gap-2 text-sm font-semibold text-honey-600 hover:text-honey-700 transition-colors group min-h-[44px]">
                Apoya la apicultura local
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </article>

          {/* Galería */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" role="group" aria-label="Galería de fotos">
            <figure className="sm:col-span-2 relative aspect-[16/10] rounded-2xl overflow-hidden shadow-xl group">
              <Image src={fotos[0].src} alt={fotos[0].alt} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px" className="object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <figcaption className="text-sm font-medium text-white">{fotos[0].caption}</figcaption>
              </div>
              <div className="absolute inset-0 img-placeholder">
                <div className="text-center p-4">
                  <span className="text-3xl block mb-2">🏔️</span>
                  <code className="text-[10px] text-earth-500/60">{fotos[0].src}</code>
                </div>
              </div>
            </figure>

            {fotos.slice(1).map((foto, i) => (
              <figure key={i} className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg group">
                <Image src={foto.src} alt={foto.alt} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 25vw, 300px" className="object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <span className="text-xs font-medium text-white">{foto.caption}</span>
                </div>
                <div className="absolute inset-0 img-placeholder">
                  <div className="text-center p-3">
                    <span className="text-2xl block mb-1">📸</span>
                    <code className="text-[9px] text-earth-500/60">{foto.src}</code>
                  </div>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
