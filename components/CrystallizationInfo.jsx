'use client';

import { useState } from 'react';

export default function CrystallizationInfo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-6 p-4 rounded-xl bg-miel-100/60 border border-miel-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-start gap-3 text-left group"
        aria-expanded={isOpen}
      >
        {/* Ícono cristal */}
        <span className="flex-shrink-0 mt-0.5 w-8 h-8 rounded-lg bg-miel-200 flex items-center justify-center text-miel-700" aria-hidden="true">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
        </span>

        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-miel-800 group-hover:text-miel-900 transition-colors">
            ¿Sabías que? La cristalización es natural
          </p>
          <p className="mt-1 text-xs text-miel-700/80">
            Nuestra miel no ha sido ultraprocesada. ¡Es garantía de pureza!
          </p>
        </div>

        <span
          className={`flex-shrink-0 mt-1 w-5 h-5 text-miel-600 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          aria-hidden="true"
        >
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>

      {isOpen && (
        <div className="mt-4 pt-4 border-t border-miel-200 text-sm text-tierra-700 leading-relaxed space-y-3">
          <p className="font-semibold text-tierra-800">
            ¿Por qué cristaliza nuestra miel?
          </p>
          <p>
            Es una señal de <strong>pureza y autenticidad</strong>. La cristalización
            es un proceso natural que ocurre cuando los cristales de glucosa se forman
            lentamente en la miel. Esto <strong>no altera sus propiedades ni sabor</strong>.
          </p>
          <p>
            Si prefieres textura líquida, calienta el frasco a{' '}
            <strong>baño maría suave</strong> (nunca microondas) hasta que se disuelvan
            los cristales. La miel cruda conserva todas sus enzimas y nutrientes naturales.
          </p>
          <p className="text-xs text-miel-700/70 mt-2">
            Dato: La miel es uno de los únicos alimentos que no caduca jamás si se almacena correctamente.
          </p>
        </div>
      )}
    </div>
  );
}
