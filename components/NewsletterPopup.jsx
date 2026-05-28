'use client';

import { useState, useEffect, useCallback } from 'react';
import { trackNewsletterSignup } from '@/lib/tracking';

const POPUP_DELAY = 30000; // 30 segundos
const POPUP_KEY = 'cerezos_popup_dismissed';

export default function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  // Verificar si ya se mostró/cerró en esta sesión
  useEffect(() => {
    const dismissed = sessionStorage.getItem(POPUP_KEY);
    if (dismissed) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, POPUP_DELAY);

    return () => clearTimeout(timer);
  }, []);

  // Exit intent detection (solo desktop)
  useEffect(() => {
    const dismissed = sessionStorage.getItem(POPUP_KEY);
    if (dismissed) return;

    const handleMouseLeave = (e) => {
      if (e.clientY <= 0 && !isOpen) {
        setIsOpen(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [isOpen]);

  const close = useCallback(() => {
    setIsOpen(false);
    sessionStorage.setItem(POPUP_KEY, 'true');
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Por favor, ingresa un correo electrónico válido.');
      return;
    }

    const data = {
      name: name.trim(),
      email: email.trim(),
      source: 'newsletter_popup',
      timestamp: new Date().toISOString(),
    };

    console.log('[Newsletter Popup] Suscripción:', data);
    console.log('[Newsletter Popup] PRÓXIMO PASO: Conectar con servicio de email marketing');

    try {
      const existing = JSON.parse(sessionStorage.getItem('cerezos_newsletter') || '[]');
      existing.push(data);
      sessionStorage.setItem('cerezos_newsletter', JSON.stringify(existing));
    } catch { /* ignore */ }

    trackNewsletterSignup(data.email, 'popup');
    setSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Suscríbete a nuestro newsletter"
      onClick={(e) => { if (e.target === e.currentTarget) close(); }}
    >
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden animate-fade-in-up">
        {/* Botón cerrar */}
        <button
          onClick={close}
          className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/80 hover:bg-white text-tierra-700 transition-colors"
          aria-label="Cerrar popup"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header decorativo */}
        <div className="bg-gradient-to-r from-miel-500 to-miel-600 px-6 py-8 text-center text-white">
          <span className="text-4xl block mb-3" aria-hidden="true">🍯</span>
          <h2 className="text-xl sm:text-2xl font-bold mb-1">
            ¡10% de descuento!
          </h2>
          <p className="text-sm text-white/90">
            Suscríbete y recibe nuestra guía de usos de la miel
          </p>
        </div>

        {/* Contenido */}
        <div className="px-6 py-6">
          {!submitted ? (
            <>
              <p className="text-sm text-tierra-700/80 mb-5 text-center leading-relaxed">
                Aprende recetas, beneficios y promociones exclusivas.{' '}
                <strong>Sin spam, solo contenido valioso.</strong>
              </p>

              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Tu nombre (opcional)"
                  className="w-full px-4 py-3 text-sm border-2 border-tierra-200 rounded-xl focus:border-miel-500 focus:ring-0 outline-none transition-colors min-h-[48px]"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Tu correo electrónico"
                  required
                  className="w-full px-4 py-3 text-sm border-2 border-tierra-200 rounded-xl focus:border-miel-500 focus:ring-0 outline-none transition-colors min-h-[48px]"
                />
                {error && (
                  <p className="text-sm text-red-600" role="alert">{error}</p>
                )}
                <button
                  type="submit"
                  className="w-full px-6 py-3.5 text-base font-semibold text-white bg-miel-600 hover:bg-miel-700 active:bg-miel-800 rounded-xl shadow-lg shadow-miel-500/25 transition-all duration-200 min-h-[48px]"
                >
                  Obtener 10% →
                </button>
              </form>

              <p className="text-[11px] text-tierra-700/40 text-center mt-3">
                Puedes darte de baja en cualquier momento. No compartimos tu correo.
              </p>
            </>
          ) : (
            <div className="text-center py-4">
              <span className="text-4xl block mb-3" aria-hidden="true">✉️</span>
              <h3 className="text-lg font-bold text-tierra-900 mb-2">
                ¡Gracias{name ? `, ${name}` : ''}!
              </h3>
              <p className="text-sm text-tierra-700 leading-relaxed">
                Revisa tu correo para tu código de descuento{' '}
                <strong>BIENVENIDA10</strong> y la guía de usos de la miel.
              </p>
              <button
                onClick={close}
                className="mt-4 text-sm text-miel-700 hover:text-miel-800 font-medium"
              >
                Cerrar
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
