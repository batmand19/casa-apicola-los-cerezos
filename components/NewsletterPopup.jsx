'use client';

import { useState, useEffect } from 'react';
import { trackNewsletterSignup } from '@/lib/tracking';

const POPUP_DELAY = 30000;
const POPUP_KEY = 'cerezos_popup_dismissed';

export default function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const dismissed = sessionStorage.getItem(POPUP_KEY);
    if (dismissed) return;
    const timer = setTimeout(() => setIsOpen(true), POPUP_DELAY);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const dismissed = sessionStorage.getItem(POPUP_KEY);
    if (dismissed) return;
    const handleMouseLeave = (e) => { if (e.clientY <= 0 && !isOpen) setIsOpen(true); };
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [isOpen]);

  const close = () => { setIsOpen(false); sessionStorage.setItem(POPUP_KEY, 'true'); };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setError('Ingresa un correo válido.'); return; }
    const data = { name: name.trim(), email: email.trim(), source: 'newsletter_popup', timestamp: new Date().toISOString() };
    console.log('[Newsletter Popup]', data);
    try { const existing = JSON.parse(sessionStorage.getItem('cerezos_newsletter') || '[]'); existing.push(data); sessionStorage.setItem('cerezos_newsletter', JSON.stringify(existing)); } catch {}
    trackNewsletterSignup(data.email, 'popup');
    setSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-fade-in" role="dialog" aria-modal="true" onClick={(e) => { if (e.target === e.currentTarget) close(); }}>
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden animate-scale-in">
        <button onClick={close} className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/80 hover:bg-white text-earth-500 transition-colors" aria-label="Cerrar">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        <div className="bg-gradient-to-br from-honey-500 to-honey-600 px-8 py-10 text-center text-white">
          <span className="text-4xl block mb-3">🍯</span>
          <h2 className="font-display text-2xl font-bold mb-1">¡10% de descuento!</h2>
          <p className="text-sm text-white/80">Suscríbete y recibe nuestra guía de usos</p>
        </div>

        <div className="px-8 py-8">
          {!submitted ? (
            <>
              <p className="text-sm text-earth-500 mb-5 text-center">Aprende recetas, beneficios y promociones exclusivas. <strong className="text-earth-700">Sin spam.</strong></p>
              <form onSubmit={handleSubmit} className="space-y-3">
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Tu nombre (opcional)" className="w-full px-4 py-3.5 text-sm border border-cream-300 rounded-xl focus:border-honey-500 focus:ring-0 outline-none transition-colors min-h-[48px]" />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Tu correo electrónico" required className="w-full px-4 py-3.5 text-sm border border-cream-300 rounded-xl focus:border-honey-500 focus:ring-0 outline-none transition-colors min-h-[48px]" />
                {error && <p className="text-sm text-red-500" role="alert">{error}</p>}
                <button type="submit" className="btn-primary w-full">Obtener 10% →</button>
              </form>
              <p className="text-[11px] text-earth-400 text-center mt-3">Puedes darte de baja en cualquier momento.</p>
            </>
          ) : (
            <div className="text-center py-4">
              <span className="text-4xl block mb-3">✉️</span>
              <h3 className="font-display text-xl font-bold text-earth-900 mb-2">¡Gracias{name ? `, ${name}` : ''}!</h3>
              <p className="text-sm text-earth-500">Revisa tu correo para tu código <strong>BIENVENIDA10</strong> y la guía de usos.</p>
              <button onClick={close} className="mt-4 text-sm text-honey-600 hover:text-honey-700 font-medium">Cerrar</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
