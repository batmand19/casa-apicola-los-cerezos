'use client';

import { useState } from 'react';

export default function CrystallizationInfo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-6 p-5 rounded-2xl bg-cream-50 border border-cream-200">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-start gap-3 text-left group" aria-expanded={isOpen}>
        <span className="flex-shrink-0 mt-0.5 w-9 h-9 rounded-xl bg-honey-100 flex items-center justify-center text-honey-600" aria-hidden="true">❄️</span>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-earth-800 group-hover:text-honey-600 transition-colors">¿Sabías que? La cristalización es natural</p>
          <p className="mt-0.5 text-xs text-earth-400">Nuestra miel no ha sido ultraprocesada. ¡Es garantía de pureza!</p>
        </div>
        <svg className={`flex-shrink-0 mt-1 w-5 h-5 text-earth-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
      </button>
      {isOpen && (
        <div className="mt-4 pt-4 border-t border-cream-200 text-sm text-earth-600 leading-relaxed space-y-3">
          <p className="font-semibold text-earth-800">¿Por qué cristaliza nuestra miel?</p>
          <p>Es una señal de <strong>pureza y autenticidad</strong>. La cristalización es un proceso natural que <strong>no altera sus propiedades ni sabor</strong>.</p>
          <p>Si prefieres textura líquida, calienta el frasco a <strong>baño maría suave</strong> (nunca microondas).</p>
          <p className="text-xs text-earth-400 italic">Dato: La miel es uno de los únicos alimentos que no caduca jamás.</p>
        </div>
      )}
    </div>
  );
}
