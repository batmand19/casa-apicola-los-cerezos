'use client';

import { useState } from 'react';
import { trackNewsletterSignup } from '@/lib/tracking';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
    const data = { email: email.trim(), source: 'footer_newsletter', timestamp: new Date().toISOString() };
    console.log('[Newsletter Footer]', data);
    try { const existing = JSON.parse(sessionStorage.getItem('cerezos_newsletter') || '[]'); existing.push(data); sessionStorage.setItem('cerezos_newsletter', JSON.stringify(existing)); } catch {}
    trackNewsletterSignup(email.trim(), 'footer');
    setSubmitted(true);
  };

  return (
    <footer className="bg-earth-900 text-cream-300 pt-20 pb-8" role="contentinfo">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Newsletter premium */}
        <div className="mb-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-earth-800 to-earth-900 border border-earth-700/50">
          <div className="max-w-xl mx-auto text-center">
            <span className="text-3xl block mb-4">🍯</span>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-cream-100 mb-2">
              Únete a nuestra colmena
            </h3>
            <p className="text-sm text-cream-400/70 mb-6">
              Recibe recetas, beneficios y ofertas exclusivas. 10% de descuento en tu primera compra.
            </p>
            {!submitted ? (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Tu correo electrónico" required className="flex-1 px-5 py-3.5 text-sm bg-earth-700/50 border border-earth-600/50 rounded-full text-cream-100 placeholder-cream-500/40 focus:border-honey-500 focus:ring-0 outline-none transition-colors min-h-[48px]" />
                <button type="submit" className="px-6 py-3.5 text-sm font-semibold text-earth-900 bg-honey-400 hover:bg-honey-300 rounded-full transition-all duration-300 min-h-[48px] whitespace-nowrap">
                  Obtener 10%
                </button>
              </form>
            ) : (
              <p className="text-sm text-honey-400 font-medium">¡Gracias! Revisa tu correo para tu código de descuento.</p>
            )}
          </div>
        </div>

        {/* Grid principal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Marca */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-honey-400 to-honey-600 flex items-center justify-center text-white text-sm shadow-md">🍯</div>
              <div>
                <span className="block text-sm font-bold text-cream-100">Casa Apícola</span>
                <span className="block text-[10px] font-medium tracking-[0.15em] uppercase text-honey-400">Los Cerezos</span>
              </div>
            </div>
            <p className="text-sm text-cream-400/60 leading-relaxed max-w-xs">
              Miel pura y polen de abejas Meliphera, cosechados en las montañas de Caldas.
            </p>
            <div className="flex gap-3 mt-5">
              <a href="https://instagram.com/casapicolaloscercez" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-earth-800 hover:bg-honey-600 flex items-center justify-center transition-colors duration-300" aria-label="Instagram">
                <svg className="w-4 h-4 text-cream-300" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
              </a>
              <a href="https://facebook.com/casapicolaloscercez" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-earth-800 hover:bg-honey-600 flex items-center justify-center transition-colors duration-300" aria-label="Facebook">
                <svg className="w-4 h-4 text-cream-300" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              </a>
              <a href="https://wa.me/573208065008" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-earth-800 hover:bg-[#25D366] flex items-center justify-center transition-colors duration-300" aria-label="WhatsApp">
                <svg className="w-4 h-4 text-cream-300" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              </a>
            </div>
          </div>

          {/* Navegación */}
          <nav aria-label="Navegación">
            <h4 className="text-[11px] font-bold tracking-[0.2em] uppercase text-cream-200 mb-4">Navegación</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#hero" className="text-cream-400/60 hover:text-honey-400 transition-colors">Inicio</a></li>
              <li><a href="#historia" className="text-cream-400/60 hover:text-honey-400 transition-colors">Nuestra historia</a></li>
              <li><a href="#productos" className="text-cream-400/60 hover:text-honey-400 transition-colors">Productos</a></li>
              <li><a href="/blog" className="text-cream-400/60 hover:text-honey-400 transition-colors">Blog</a></li>
            </ul>
          </nav>

          {/* Recursos */}
          <div>
            <h4 className="text-[11px] font-bold tracking-[0.2em] uppercase text-cream-200 mb-4">Recursos</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="/blog/cristalizacion-miel-calidad" className="text-cream-400/60 hover:text-honey-400 transition-colors">¿Por qué cristaliza la miel?</a></li>
              <li><a href="/blog/guia-usos-miel-cocina-medicina-belleza" className="text-cream-400/60 hover:text-honey-400 transition-colors">Guía de usos</a></li>
              <li><a href="/guia-digital" className="text-cream-400/60 hover:text-honey-400 transition-colors">Guía de recetas</a></li>
            </ul>
          </div>

          {/* Ubicación */}
          <div>
            <h4 className="text-[11px] font-bold tracking-[0.2em] uppercase text-cream-200 mb-4">Ubicación</h4>
            <p className="text-sm text-cream-400/60 leading-relaxed">
              Montañas de Caldas, cerca al límite con Boyacá. Zona de amortiguamiento del Páramo de Rabanal. Región cundiboyacense, Colombia.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-earth-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream-500/40">&copy; {currentYear} Casa Apícola Los Cerezos. Todos los derechos reservados.</p>
          <p className="text-xs text-cream-500/40">Apicultura sostenible &middot; Caldas-Boyacá</p>
        </div>
      </div>
    </footer>
  );
}
