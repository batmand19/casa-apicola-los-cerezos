'use client';

import { useState } from 'react';

const FAQ_ITEMS = [
  { q: '¿Cómo sé que recibiré mi pedido?', a: 'Te confirmamos disponibilidad y precio antes de que pagues. Solo procedes después de nuestra confirmación.' },
  { q: '¿Qué pasa si no tengo WhatsApp?', a: 'Escríbenos a ventas@casaapicolaloscercez.com. Resolvemos todo por correo.' },
  { q: '¿La guía digital llega por correo?', a: 'Sí. Tras confirmar el pago, enviamos PDF y EPUB por WhatsApp o correo en menos de 24 horas.' },
  { q: '¿Puedo pagar contraentrega?', a: 'Sí, solo para envíos dentro de Caldas y Boyacá. En otras ciudades: transferencia o Nequi.' },
  { q: '¿Cuánto tarda el envío?', a: 'Bogotá y ciudades principales: 3-5 días hábiles. Caldas-Boyacá: 1-3 días. Zonas rurales: 5-8 días.' },
  { q: '¿Puedo pagar con tarjeta?', a: 'Por el momento no. Escríbenos por WhatsApp y buscamos una solución.' },
  { q: '¿Qué incluye la guía digital?', a: '25 recetas, usos medicinales y de belleza, tabla de equivalencias azúcar-miel. PDF + EPUB.' },
  { q: '¿Hay garantía?', a: 'Si no estás satisfecho (producto sellado o guía no descargada), te devolvemos tu dinero.' },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-24 sm:py-32 bg-cream-50" aria-labelledby="faq-title">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-12">
          <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-honey-600">Ayuda</span>
          <div className="divider-elegant mb-6" />
          <h2 id="faq-title" className="font-display text-2xl sm:text-3xl font-bold text-earth-900">Preguntas frecuentes</h2>
        </div>

        <div className="space-y-3">
          {FAQ_ITEMS.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl border border-cream-200 overflow-hidden hover:border-honey-300/50 transition-colors duration-300">
              <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="w-full flex items-center justify-between px-6 py-5 text-left" aria-expanded={openIndex === i}>
                <span className="text-sm sm:text-base font-medium text-earth-900 pr-4">{item.q}</span>
                <svg className={`w-5 h-5 text-earth-400 flex-shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5 text-sm text-earth-500 leading-relaxed border-t border-cream-200 pt-4">{item.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
