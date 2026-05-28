'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { trackView, trackClick } from '@/lib/tracking';

const fotos = [
  { src: '/images/padre-colmena-01.jpg', alt: 'Nuestro padre trabajando en las colmenas de Caldas', caption: 'Más de 30 años cuidando abejas' },
  { src: '/images/cosecha-miel-familiar.jpg', alt: 'La familia cosechando miel artesanal', caption: 'Tradición de familia' },
  { src: '/images/flor-arrayan-boyaca.jpg', alt: 'Flor de Arrayán del Páramo de Rabanal', caption: 'Flora del Páramo' },
];

const milestones = [
  { year: 'Inicio', title: 'La chispa', text: 'El padre de la familia decidió aprender sobre apicultura. Buscó a un apicultor local, aprendió de él y compró las primeras herramientas y colmenas.' },
  { year: 'Años', title: 'Aprendizaje', text: 'Desde casa, junto con el apoyo de la madre, comenzaron a aprender mediante prueba y error, dedicando años al cuidado y crecimiento de las colmenas.' },
  { year: 'Décadas', title: 'Crecimiento', text: 'El conocimiento se fortaleció mediante capacitaciones, cursos y experiencia práctica adquirida durante más de tres décadas de oficio.' },
  { year: 'Hoy', title: 'Tradición viva', text: 'Cada frasco de miel lleva consigo el conocimiento acumulado de generaciones, el respeto por las abejas y la naturaleza de nuestras montañas.' },
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
          <span className="inline-block mb-4 text-[11px] font-semibold tracking-[0.25em] uppercase text-honey-600">Nuestra historia</span>
          <div className="divider-elegant mb-6" />
          <h2 id="story-title" className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-earth-900 leading-tight max-w-3xl mx-auto">
            La historia detrás de cada frasco
          </h2>
          <p className="mt-6 text-base sm:text-lg text-earth-500 max-w-2xl mx-auto leading-relaxed">
            Más de 30 años de tradición familiar, aprendizaje y amor por las abejas en las montañas de Caldas.
          </p>
        </div>

        {/* Timeline editorial */}
        <div className="relative max-w-4xl mx-auto mb-24">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-honey-300 to-transparent md:-translate-x-px" aria-hidden="true" />

          <div className="space-y-12 md:space-y-16">
            {milestones.map((step, i) => {
              const isEven = i % 2 === 0;
              return (
                <div key={i} className={`relative flex items-start gap-6 md:gap-0 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 md:w-1/2 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16'} pl-16 md:pl-0`}>
                    <div className="group">
                      <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-honey-500 mb-2 block">{step.year}</span>
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-earth-900 mb-2 group-hover:text-honey-600 transition-colors duration-300">{step.title}</h3>
                      <p className="text-sm sm:text-base text-earth-500 leading-relaxed">{step.text}</p>
                    </div>
                  </div>
                  <div className="absolute left-0 md:relative md:left-auto md:w-0 flex items-center justify-center">
                    <div className="z-10 w-12 h-12 rounded-full bg-gradient-to-br from-honey-400 to-honey-600 text-white flex items-center justify-center shadow-lg shadow-honey-500/30 text-sm font-bold">
                      {i + 1}
                    </div>
                  </div>
                  <div className="hidden md:block md:w-1/2" aria-hidden="true" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Épocas difíciles — storytelling */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-cream-200 shadow-lg shadow-black/[0.02] mb-20">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="text-3xl block mb-4" aria-hidden="true">🐝</span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-earth-900 mb-3">Cuidado en cada temporada</h3>
            <p className="text-sm text-earth-500">El conocimiento se demuestra en los momentos más difíciles.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: '🌾', title: 'Alimentación', text: 'En épocas de escasez, el padre alimenta las colmenas con mezclas que ha aprendido en capacitaciones y cursos, asegurando la supervivencia de las colonias.' },
              { icon: '🏥', title: 'Salud de las abejas', text: 'Protegemos la salud de cada colonia mediante prácticas responsables, sin antibióticos, respetando los ciclos naturales de la Apis mellifera.' },
              { icon: '🌱', title: 'Compromiso', text: 'Más que producción, es un compromiso con la naturaleza. Cada decisión respeta el equilibrio del ecosistema que nos sustenta.' },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-2xl bg-cream-50 border border-cream-200 text-center group hover:border-honey-300 transition-colors duration-300">
                <span className="text-3xl block mb-3 group-hover:scale-110 transition-transform duration-500" aria-hidden="true">{item.icon}</span>
                <h4 className="font-display text-lg font-bold text-earth-900 mb-2">{item.title}</h4>
                <p className="text-sm text-earth-500 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contenido editorial 2 columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <article className="space-y-6">
            <p className="text-base sm:text-lg text-earth-600 leading-[1.8]">
              La historia comenzó cuando el padre de la familia decidió aprender sobre apicultura. Buscó a un apicultor local, aprendió de él y compró las primeras herramientas y colmenas.
            </p>
            <p className="text-base sm:text-lg text-earth-600 leading-[1.8]">
              Desde casa, junto con el apoyo de la madre, comenzaron a aprender mediante <strong className="text-earth-800">prueba y error</strong>, dedicando años al cuidado y crecimiento de las colmenas.
            </p>
            <p className="text-base sm:text-lg text-earth-600 leading-[1.8]">
              Con el tiempo, el conocimiento se fortaleció mediante <strong className="text-earth-800">capacitaciones, cursos y experiencia práctica</strong> adquirida durante décadas. Hoy, cada frasco lleva consigo ese legado de aprendizaje y dedicación.
            </p>
            <div className="pt-4">
              <a href="#productos" onClick={handleCtaClick} className="inline-flex items-center gap-2 text-sm font-semibold text-honey-600 hover:text-honey-700 transition-colors group min-h-[44px]">
                Conoce nuestros productos
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </div>
          </article>

          {/* Galería */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" role="group" aria-label="Galería de fotos">
            <figure className="sm:col-span-2 relative aspect-[16/10] rounded-2xl overflow-hidden shadow-xl group">
              <Image src={fotos[0].src} alt={fotos[0].alt} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px" className="object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4"><figcaption className="text-sm font-medium text-white">{fotos[0].caption}</figcaption></div>
              <div className="absolute inset-0 img-placeholder"><div className="text-center p-4"><span className="text-3xl block mb-2">👨‍🌾</span><code className="text-[10px] text-earth-500/60">{fotos[0].src}</code></div></div>
            </figure>
            {fotos.slice(1).map((foto, i) => (
              <figure key={i} className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg group">
                <Image src={foto.src} alt={foto.alt} fill sizes="(max-width: 768px) 100vw, 300px" className="object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-3 left-3"><span className="text-xs font-medium text-white">{foto.caption}</span></div>
                <div className="absolute inset-0 img-placeholder"><div className="text-center p-3"><span className="text-2xl block mb-1">📸</span><code className="text-[9px] text-earth-500/60">{foto.src}</code></div></div>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
