'use client';

import { useState } from 'react';
import { trackNewsletterSignup } from '@/lib/tracking';

export default function LeadMagnet() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setError('Ingresa un correo válido.'); return; }
    const data = { name: name.trim(), email: email.trim(), source: 'lead_magnet_guide', timestamp: new Date().toISOString() };
    console.log('[Lead Magnet]', data);
    try { const existing = JSON.parse(sessionStorage.getItem('cerezos_leads') || '[]'); existing.push(data); sessionStorage.setItem('cerezos_leads', JSON.stringify(existing)); } catch {}
    trackNewsletterSignup(data.email, 'lead_magnet');
    setSubmitted(true);
  };

  return (
    <section className="py-24 sm:py-32 bg-gradient-to-br from-cream-200 via-cream-100 to-earth-50" aria-labelledby="lead-magnet-title">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-cream-300/50">
          <div className="grid grid-cols-1 md:grid-cols-5">
            <div className="md:col-span-2 bg-gradient-to-br from-honey-100 to-honey-200 p-8 sm:p-10 flex flex-col items-center justify-center text-center">
              <span className="text-5xl mb-4 block">🍯</span>
              <h3 className="font-display text-xl font-bold text-earth-900 mb-2">Guía gratuita</h3>
              <p className="text-sm text-earth-600 leading-relaxed">Los 10 usos más creativos de la miel — cocina, salud y belleza.</p>
              <div className="mt-4 px-4 py-2 bg-white/70 rounded-full">
                <p className="text-sm font-semibold text-honey-700">+ 10% descuento</p>
              </div>
            </div>

            <div className="md:col-span-3 p-8 sm:p-10">
              {!submitted ? (
                <>
                  <h3 id="lead-magnet-title" className="font-display text-xl sm:text-2xl font-bold text-earth-900 mb-2">Aprende a sacarle provecho a nuestra miel</h3>
                  <p className="text-sm text-earth-500 mb-6">Recibe la guía (PDF) + código de descuento del 10%. Sin spam.</p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Tu nombre" className="w-full px-4 py-3.5 text-sm border border-cream-300 rounded-xl focus:border-honey-500 focus:ring-0 outline-none min-h-[48px]" />
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Tu correo electrónico" required className="w-full px-4 py-3.5 text-sm border border-cream-300 rounded-xl focus:border-honey-500 focus:ring-0 outline-none min-h-[48px]" />
                    {error && <p className="text-sm text-red-500" role="alert">{error}</p>}
                    <button type="submit" className="btn-primary w-full">Enviar guía y descuento →</button>
                    <p className="text-xs text-earth-400 text-center">Envío de correo, sin spam. Puedes darte de baja cuando quieras.</p>
                  </form>
                </>
              ) : (
                <div className="text-center py-8">
                  <span className="text-5xl block mb-4">✉️</span>
                  <h3 className="font-display text-xl font-bold text-earth-900 mb-2">¡Revisa tu correo!</h3>
                  <p className="text-earth-500">Te enviamos la guía y tu código de descuento. Si no lo encuentras, revisa spam.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
