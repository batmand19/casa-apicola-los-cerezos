'use client';

import { useState } from 'react';

export default function ShippingPolicies() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-4 border border-cream-200 rounded-2xl overflow-hidden">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-center justify-between px-5 py-4 bg-cream-50 hover:bg-cream-200/50 transition-colors text-left" aria-expanded={isOpen}>
        <span className="flex items-center gap-3">
          <svg className="w-5 h-5 text-earth-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
          <span className="text-sm font-semibold text-earth-800">Políticas de envío</span>
        </span>
        <svg className={`w-5 h-5 text-earth-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
      </button>
      {isOpen && (
        <div className="px-5 py-5 text-sm text-earth-600 leading-relaxed space-y-4 bg-white">
          <div>
            <p className="font-semibold text-earth-800 mb-2">Envíos</p>
            <ul className="space-y-1 list-disc list-inside">
              <li><strong>Bogotá y ciudades:</strong> 3-5 días hábiles</li>
              <li><strong>Zonas rurales:</strong> 5-8 días hábiles</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-earth-800 mb-2">Devoluciones</p>
            <p>Cambios o devoluciones dentro de <strong>5 días</strong>, frasco <strong>sin abrir</strong> y en <strong>empaque original</strong>.</p>
          </div>
          <p className="text-xs text-earth-400">Contáctanos a <a href="mailto:ventas@casaapicolaloscercez.com" className="text-honey-600 hover:text-honey-700 underline">ventas@casaapicolaloscercez.com</a> o por <a href="https://wa.me/573208065008" className="text-honey-600 hover:text-honey-700 underline" target="_blank" rel="noopener noreferrer">WhatsApp</a>.</p>
        </div>
      )}
    </div>
  );
}
