'use client';

import { useState } from 'react';

export default function ShippingPolicies() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-6 border border-tierra-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-5 py-4 bg-tierra-50 hover:bg-tierra-100 transition-colors text-left"
        aria-expanded={isOpen}
      >
        <span className="flex items-center gap-3">
          <svg className="w-5 h-5 text-tierra-700 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
          <span className="text-sm font-semibold text-tierra-800">
            Políticas de envío y devolución
          </span>
        </span>
        <span
          className={`w-5 h-5 text-tierra-600 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          aria-hidden="true"
        >
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>

      {isOpen && (
        <div className="px-5 py-5 text-sm text-tierra-700 leading-relaxed space-y-4 bg-white">
          <div>
            <p className="font-semibold text-tierra-800 mb-2">Envíos</p>
            <p>
              Realizamos envíos a todo el territorio colombiano.
            </p>
            <ul className="mt-2 space-y-1 list-disc list-inside">
              <li><strong>Bogotá y principales ciudades:</strong> 3-5 días hábiles</li>
              <li><strong>Zonas rurales:</strong> 5-8 días hábiles</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-tierra-800 mb-2">Devoluciones</p>
            <p>
              Aceptamos cambios o devoluciones dentro de los <strong>5 días</strong>{' '}
              posteriores a la recepción del producto, siempre que el frasco esté{' '}
              <strong>sin abrir</strong> y en su <strong>empaque original</strong>.
            </p>
          </div>

          <p className="text-xs text-tierra-700/70">
            Para más información, contáctanos a{' '}
            <a href="mailto:info@casaapicolaloscercez.com" className="text-miel-700 hover:text-miel-800 underline">
              info@casaapicolaloscercez.com
            </a>{' '}
            o escríbenos por{' '}
            <a href="https://wa.me/57XXXXXXXXXX" className="text-miel-700 hover:text-miel-800 underline" target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>.
          </p>
        </div>
      )}
    </div>
  );
}
