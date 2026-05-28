'use client';

import { useState } from 'react';
import OptimizedImage from './OptimizedImage';
import WhatsAppOrderButton from './WhatsAppOrderButton';
import EmailOrderButton from './EmailOrderButton';

const SIZES = [
  { label: '500g', price: 40000 },
  { label: '1kg', price: 75000 },
];

export default function MielRobleSpecial() {
  const [selectedSize, setSelectedSize] = useState('500g');
  const selectedPrice = SIZES.find((s) => s.label === selectedSize)?.price || 40000;

  return (
    <section className="relative overflow-hidden" aria-labelledby="roble-title">
      {/* Fondo premium oscuro */}
      <div className="absolute inset-0 bg-gradient-to-br from-earth-900 via-[#1a150e] to-earth-800" aria-hidden="true" />
      <div className="absolute inset-0 hex-pattern opacity-15" aria-hidden="true" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-honey-600/5 rounded-full blur-[150px]" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 py-24 sm:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Imagen premium */}
          <div className="relative aspect-square max-w-md mx-auto lg:mx-0 rounded-3xl overflow-hidden shadow-2xl shadow-black/30">
            <OptimizedImage src="/images/productos/miel-roble.jpg" alt="Miel de Roble - ámbar oscuro" aspect="1/1" fallbackIcon="🍯" fallbackLabel="Miel de Roble" />
            <div className="absolute top-4 left-4 px-3 py-1.5 text-[10px] font-bold tracking-[0.2em] uppercase text-honey-300 bg-earth-900/60 backdrop-blur-sm rounded-full border border-honey-500/20 z-10">
              Edición exclusiva
            </div>
          </div>

          {/* Contenido */}
          <div>
            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-honey-400/70">Exclusiva</span>
            <div className="w-12 h-0.5 bg-gradient-to-r from-honey-400/50 to-transparent my-5" />
            <h2 id="roble-title" className="font-display text-3xl sm:text-4xl font-bold text-cream-50 mb-6 leading-tight">
              Néctar de Roble
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-cream-300/60 leading-relaxed mb-8">
              <p>
                Nuestras abejas <em className="not-italic text-cream-200">Apis mellifera</em> recolectan
                néctar exclusivo de <strong className="text-cream-100">roble</strong>, produciendo una
                miel con un perfil de sabor completamente único.
              </p>
              <p>
                Su color <strong className="text-honey-400">ámbar oscuro con tonos cobrizos</strong> revela
                su intensidad. El aroma es profundo, con notas amaderadas y un fondo terroso que
                la convierte en una experiencia sensorial diferente a cualquier otra miel.
              </p>
              <p>
                Ideal para paladares exigentes: quesos curados, carnes glaseadas, postres gourmet.
                Una miel que se disfruta con la misma paciencia con la que fue producida.
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {['Ámbar oscuro', 'Sabor intenso', 'Perfil único', 'Edición limitada'].map((tag) => (
                <span key={tag} className="px-3 py-1.5 text-[10px] font-semibold tracking-[0.1em] uppercase text-honey-400/80 border border-honey-500/15 rounded-full bg-honey-500/5">
                  {tag}
                </span>
              ))}
            </div>

            {/* Selector de presentación */}
            <div className="mb-6">
              <p className="text-xs font-semibold text-cream-300/50 uppercase tracking-wider mb-3">Presentación</p>
              <div className="flex gap-3" role="radiogroup" aria-label="Tamaño del producto">
                {SIZES.map((size) => (
                  <button
                    key={size.label}
                    onClick={() => setSelectedSize(size.label)}
                    className={`flex-1 px-5 py-3.5 rounded-xl text-center border transition-all duration-300 ${
                      selectedSize === size.label
                        ? 'border-honey-400 bg-honey-500/10 text-cream-100 shadow-lg shadow-honey-500/10'
                        : 'border-cream-300/10 bg-white/5 text-cream-300/60 hover:border-cream-300/30'
                    }`}
                    role="radio"
                    aria-checked={selectedSize === size.label}
                  >
                    <span className="block text-sm font-bold">{size.label}</span>
                    <span className="block text-[11px] mt-0.5 text-cream-300/40">${size.price.toLocaleString('es-CO')}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Precio */}
            <div className="flex items-end gap-3 mb-8">
              <span className="font-display text-3xl sm:text-4xl font-bold text-cream-100">${selectedPrice.toLocaleString('es-CO')}</span>
              <span className="text-sm text-cream-300/40 mb-1">COP</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <WhatsAppOrderButton productName="Néctar de Roble" size={selectedSize} price={selectedPrice} type="physical" className="btn-whatsapp flex-1" />
              <EmailOrderButton productName="Néctar de Roble" size={selectedSize} price={selectedPrice} type="physical" className="btn-email flex-1" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
