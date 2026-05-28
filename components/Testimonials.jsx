'use client';

import { useEffect } from 'react';
import { trackView, trackClick } from '@/lib/tracking';

export default function Testimonials() {
  useEffect(() => {
    const observer = trackView('familia', 0.3);
    return () => observer?.disconnect();
  }, []);

  return (
    <section id="familia" className="py-24 sm:py-32 bg-earth-900 relative overflow-hidden" aria-labelledby="family-title">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-honey-500/5 rounded-full blur-[100px]" aria-hidden="true" />

      <div className="max-w-4xl mx-auto px-5 sm:px-8 relative z-10 text-center">
        <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-honey-400/80">Más que un producto</span>
        <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-honey-400 to-transparent mx-auto my-6" />
        <h2 id="family-title" className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-cream-50 mb-8">
          Únete a esta familia
        </h2>

        <p className="text-base sm:text-lg text-cream-300/70 leading-relaxed max-w-2xl mx-auto mb-6">
          Más que vender miel, compartimos una tradición familiar construida durante{' '}
          <strong className="text-cream-100">más de tres décadas</strong> alrededor del respeto por las abejas y la naturaleza.
        </p>

        <p className="text-base sm:text-lg text-cream-300/70 leading-relaxed max-w-2xl mx-auto mb-12">
          Cada frasco que recibes es el resultado de años de aprendizaje, capacitación y un compromiso
          genuino con la calidad. No somos una empresa industrial — somos una familia que cuida abejas
          en las montañas de Caldas.
        </p>

        {/* Valores */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {[
            { icon: '👨‍👩‍👧‍👦', title: 'Familiar', text: 'Tres generaciones cuidando abejas con el mismo amor.' },
            { icon: '🤲', title: 'Artesanal', text: 'Cada frasco es único, cosechado a mano con respeto.' },
            { icon: '🌿', title: 'Sostenible', text: 'Prácticas que protegen a las abejas y su ecosistema.' },
          ].map((v) => (
            <div key={v.title} className="p-6 rounded-2xl bg-white/5 border border-cream-100/10">
              <span className="text-3xl block mb-3" aria-hidden="true">{v.icon}</span>
              <h3 className="font-display text-lg font-bold text-cream-100 mb-1">{v.title}</h3>
              <p className="text-sm text-cream-300/60">{v.text}</p>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="https://wa.me/573208065008" target="_blank" rel="noopener noreferrer" onClick={() => trackClick('family_whatsapp', 'whatsapp')} className="btn-whatsapp w-full sm:w-auto">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
            Contactar
          </a>
          <a href="#historia" onClick={(e) => { e.preventDefault(); trackClick('family_apiario', '#historia'); document.getElementById('historia')?.scrollIntoView({ behavior: 'smooth' }); }} className="btn-secondary w-full sm:w-auto">
            Conocer el apiario
          </a>
        </div>
      </div>
    </section>
  );
}
