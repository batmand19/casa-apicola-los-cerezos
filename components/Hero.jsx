'use client';

import { useEffect, useRef } from 'react';
import { trackView, trackClick } from '@/lib/tracking';

export default function Hero() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = trackView('hero', 0.3);
    return () => observer?.disconnect();
  }, []);

  const scrollTo = (id) => (e) => {
    e.preventDefault();
    trackClick(`hero_cta_${id}`, `#${id}`);
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section ref={sectionRef} id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden" aria-label="Sección principal">
      {/* Fondo cinematográfico */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-earth-900 via-earth-800 to-forest-900" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'1\'/%3E%3C/svg%3E")' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-honey-500/8 rounded-full blur-[120px]" />
        {/* Placeholder — reemplazar con /images/hero-apiario.jpg */}
        <div className="absolute inset-0 img-placeholder opacity-20">
          <div className="text-center">
            <span className="text-6xl block mb-4">🍯</span>
            <p className="text-sm text-earth-400/60">/images/hero-apiario.jpg</p>
          </div>
        </div>
      </div>

      {/* Contenido */}
      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 py-32 sm:py-40 text-center">
        <div className="animate-fade-in-up mb-8">
          <span className="inline-flex items-center gap-2 px-5 py-2 text-[11px] font-semibold tracking-[0.2em] uppercase text-honey-300 border border-honey-400/20 rounded-full bg-white/5 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-honey-400 animate-pulse" />
            Más de 30 años de tradición apícola
          </span>
        </div>

        <h1 className="animate-fade-in-up delay-100 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6">
          Miel pura artesanal{' '}
          <span className="block mt-2">
            <span className="text-honey-400">directamente del apicultor</span>{' '}
            a tu hogar
          </span>
        </h1>

        <p className="animate-fade-in-up delay-200 text-base sm:text-lg md:text-xl text-cream-300/80 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Producción responsable, sabor auténtico y tradición familiar colombiana.
          <br className="hidden sm:block" />
          Más de tres décadas cuidando abejas con respeto y conocimiento.
        </p>

        <div className="animate-fade-in-up delay-300 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#productos" onClick={scrollTo('productos')} className="btn-primary w-full sm:w-auto">
            Comprar ahora
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
          <a href="#historia" onClick={scrollTo('historia')} className="btn-secondary w-full sm:w-auto">
            Nuestra historia
          </a>
        </div>

        <div className="animate-fade-in-up delay-400 mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {[
            { icon: '🌿', text: '100% natural' },
            { icon: '🛡️', text: 'Sin conservantes' },
            { icon: '🤲', text: 'Producción artesanal' },
            { icon: '🚚', text: 'Envíos nacionales' },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-2 text-sm text-cream-300/70">
              <span className="text-base" aria-hidden="true">{item.icon}</span>
              <span className="font-medium">{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float" aria-hidden="true">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5">
          <div className="w-1 h-2.5 rounded-full bg-white/60 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
