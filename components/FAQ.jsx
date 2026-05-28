'use client';

import { useState } from 'react';

const FAQ_ITEMS = [
  {
    question: '¿Cómo sé que recibiré mi pedido?',
    answer: 'Una vez nos escribas por WhatsApp o correo, te confirmamos la disponibilidad del producto y el precio total. Solo procedes a pagar después de nuestra confirmación. Te enviamos el comprobante de envío.',
  },
  {
    question: '¿Qué pasa si no tengo WhatsApp?',
    answer: 'Puedes escribirnos por correo electrónico a ventas@casaapicolaloscercez.com. Resolvemos todas tus dudas y coordinamos el pedido por el medio que te sea más cómodo.',
  },
  {
    question: '¿La guía digital llega por correo?',
    answer: 'Sí. Después de confirmar el pago, te enviamos los archivos PDF y EPUB por WhatsApp o correo electrónico en menos de 24 horas (usualmente en 1-2 horas).',
  },
  {
    question: '¿Puedo pagar contraentrega?',
    answer: 'Sí, ofrecemos pago contraentrega solo para envíos dentro de Caldas y Boyacá. En otras ciudades, aceptamos transferencia bancaria o Nequi.',
  },
  {
    question: '¿Cuánto tarda el envío físico?',
    answer: 'Bogotá y principales ciudades: 3-5 días hábiles. Zonas rurales: 5-8 días hábiles. Caldas y Boyacá: 1-3 días hábiles.',
  },
  {
    question: '¿Puedo pagar con tarjeta de crédito?',
    answer: 'Por el momento no aceptamos tarjeta de crédito directamente. Si necesitas esta opción, escríbenos por WhatsApp y buscaremos una solución.',
  },
  {
    question: '¿Qué incluye la guía digital?',
    answer: '25 recetas fáciles con miel, usos medicinales y de belleza, tabla de equivalencias azúcar-miel, y consejos de almacenamiento. Incluye formatos PDF y EPUB.',
  },
  {
    question: '¿Hay garantía de satisfacción?',
    answer: 'Si no estás 100% satisfecho con tu producto físico (sellado) o guía digital (no descargada), te devolvemos tu dinero. Contáctanos y lo resolvemos.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-12 sm:py-16 bg-tierra-50" aria-labelledby="faq-title">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="inline-block mb-3 px-3 py-1 text-xs font-semibold tracking-wider uppercase text-miel-800 bg-miel-100 rounded-full border border-miel-200">
            Ayuda
          </span>
          <h2 id="faq-title" className="text-2xl sm:text-3xl font-bold text-tierra-900">
            Preguntas frecuentes
          </h2>
        </div>

        <div className="space-y-3">
          {FAQ_ITEMS.map((item, i) => (
            <div key={i} className="bg-white rounded-xl border border-tierra-100 overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-tierra-50/50 transition-colors"
                aria-expanded={openIndex === i}
              >
                <span className="text-sm sm:text-base font-medium text-tierra-900 pr-4">
                  {item.question}
                </span>
                <svg
                  className={`w-5 h-5 text-tierra-600 flex-shrink-0 transition-transform duration-200 ${openIndex === i ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === i && (
                <div className="px-5 pb-4 text-sm text-tierra-700 leading-relaxed border-t border-tierra-100 pt-3">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
