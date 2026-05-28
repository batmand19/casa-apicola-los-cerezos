'use client';

import { useEffect, useRef } from 'react';
import { trackView, trackClick } from '@/lib/tracking';

function HoneyWave({ from = '#221c15', to = '#faf8f4', flip = false }) {
  return (
    <div className={`honey-wave ${flip ? 'rotate-180' : ''}`} aria-hidden="true">
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,60 C150,120 350,0 600,60 C850,120 1050,0 1200,60 L1200,120 L0,120 Z" fill={to} />
      </svg>
    </div>
  );
}

export default function Hero() {
  const sectionRef = useRef(null);
  useEffect(() => { const o = trackView('hero', 0.3); return () => o?.disconnect(); }, []);

  const scrollTo = (id) => (e) => {
    e.preventDefault();
    trackClick(`hero_cta_${id}`, `#${id}`);
    const el = document.getElementById(id);
    if (el) { const top = el.getBoundingClientRect().top + window.scrollY - 80; window.scrollTo({ top, behavior: 'smooth' }); }
  };

  return (
    <>
      <section ref={sectionRef} id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden" aria-label="Sección principal">
        {/* Fondo cinematográfico con profundidad */}
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-br from-earth-900 via-earth-800 to-forest-900" />
          <div className="absolute inset-0 hex-pattern opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-honey-500/6 rounded-full blur-[150px] animate-breathe" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-forest-500/5 rounded-full blur-[120px]" />
          {/* Placeholder — /images/hero-apiario.jpg */}
          <div className="absolute inset-0 img-placeholder opacity-15">
            <div className="text-center"><span className="text-7xl block mb-4 opacity-40">🍯</span><p className="text-xs text-earth-500/40">/images/hero-apiario.jpg</p></div>
          </div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 py-32 sm:py-40 text-center">
          <div className="animate-fade-in-up mb-8">
            <span className="inline-flex items-center gap-2.5 px-6 py-2.5 text-[11px] font-semibold tracking-[0.2em] uppercase text-honey-300/90 border border-honey-400/15 rounded-full bg-white/[0.04] backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-honey-400 animate-breathe" />
              Más de 30 años de tradición apícola
            </span>
          </div>

          <h1 className="animate-fade-in-up delay-200 font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-bold text-white leading-[1.08] tracking-tight mb-8">
            Miel pura artesanal{' '}
            <span className="block mt-3">
              <span className="text-honey-400 italic">directamente del apicultor</span>{' '}
              a tu hogar
            </span>
          </h1>

          <p className="animate-fade-in-up delay-300 text-base sm:text-lg md:text-xl text-cream-300/70 max-w-2xl mx-auto mb-6 leading-relaxed font-light">
            Más de tres décadas cuidando abejas{' '}
            <em className="not-italic font-medium text-cream-200">Apis mellifera</em>{' '}
            en las montañas de Boyacá.
          </p>
          <p className="animate-fade-in-up delay-400 text-sm sm:text-base text-cream-300/50 max-w-xl mx-auto mb-12 leading-relaxed">
            Producción responsable, sabor auténtico y tradición familiar colombiana.
          </p>

          <div className="animate-fade-in-up delay-500 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#productos" onClick={scrollTo('productos')} className="btn-primary w-full sm:w-auto">
              Comprar ahora
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
            <a href="#historia" onClick={scrollTo('historia')} className="btn-secondary w-full sm:w-auto">
              Nuestra historia
            </a>
          </div>

          <div className="animate-fade-in-up delay-700 mt-20 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {[
              { icon: '🌿', text: '100% natural' },
              { icon: '🛡️', text: 'Sin conservantes' },
              { icon: '🤲', text: 'Producción artesanal' },
              { icon: '🚚', text: 'Envíos nacionales' },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2.5 text-sm text-cream-300/60">
                <span className="text-base" aria-hidden="true">{item.icon}</span>
                <span className="font-medium tracking-wide">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float" aria-hidden="true">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5">
            <div className="w-1 h-2.5 rounded-full bg-white/50 animate-bounce" />
          </div>
        </div>
      </section>
      <HoneyWave from="#221c15" to="#faf8f4" />
    </>
  );
}
