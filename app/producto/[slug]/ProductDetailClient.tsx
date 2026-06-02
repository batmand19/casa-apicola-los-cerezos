'use client';

import { useState } from 'react';
import OptimizedImage from '@/components/OptimizedImage';
import WhatsAppOrderButton from '@/components/WhatsAppOrderButton';
import EmailOrderButton from '@/components/EmailOrderButton';
import TrustBadges from '@/components/TrustBadges';
import CrystallizationInfo from '@/components/CrystallizationInfo';
import ShippingPolicies from '@/components/ShippingPolicies';
import { addToCart as cartAdd } from '@/lib/cart';
import type { Product } from '@/types';

export default function ProductDetailClient({ product }: { product: Product }) {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0].label);
  const [currentImage, setCurrentImage] = useState(product.image);
  const [quantity, setQuantity] = useState(1);

  const selectedPrice = product.sizes.find((s) => s.label === selectedSize)?.price || 0;

  const handleSizeChange = (newSize: string) => {
    setSelectedSize(newSize);
    if (product.images[newSize]) setCurrentImage(product.images[newSize]);
  };

  const handleAddToCart = () => {
    cartAdd(
      { id: product.id, name: product.name, size: selectedSize, price: selectedPrice, image: product.image },
      quantity
    );
    window.dispatchEvent(new CustomEvent('open-cart'));
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
      {/* Image */}
      <div className="relative aspect-[4/3] bg-gradient-to-br from-cream-200 to-earth-100 rounded-3xl overflow-hidden">
        <OptimizedImage
          src={currentImage}
          alt={`${product.name} - ${selectedSize}`}
          className=""
          size="auto"
          aspect="4/3"
          fallbackIcon={product.category === 'Miel' ? '🍯' : '🌼'}
          fallbackLabel={product.name}
          priority={false}
        />
        {product.badge && (
          <span className="absolute top-6 left-6 px-4 py-1.5 text-xs font-bold tracking-[0.15em] uppercase text-white bg-earth-800/80 backdrop-blur-sm rounded-full z-10">
            {product.badge}
          </span>
        )}
      </div>

      {/* Info */}
      <div className="flex flex-col">
        <span className="text-xs font-bold tracking-[0.2em] uppercase text-honey-600 mb-2">{product.category}</span>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-earth-900 mb-4 leading-tight">{product.name}</h1>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {product.tags.map((tag) => (
            <span key={tag} className="product-tag">{tag}</span>
          ))}
        </div>

        {/* Sensory */}
        <div className="space-y-2 mb-6">
          <p className="text-sm text-earth-500"><span className="font-semibold text-earth-700">Color:</span> {product.description.sensory.color}</p>
          <p className="text-sm text-earth-500"><span className="font-semibold text-earth-700">Sabor:</span> {product.description.sensory.sabor}</p>
          <p className="text-sm text-earth-500"><span className="font-semibold text-earth-700">Textura:</span> {product.description.sensory.textura}</p>
        </div>

        {/* Floral */}
        <p className="text-sm text-forest-600 bg-forest-50 rounded-xl px-5 py-3 mb-6 leading-relaxed border border-forest-100">
          🌸 {product.description.floral}
        </p>

        {/* Sizes */}
        <div className="mb-6">
          <p className="text-xs font-semibold text-earth-600 uppercase tracking-wider mb-3">Presentación</p>
          <div className="flex gap-3" role="radiogroup" aria-label="Tamaño del producto">
            {product.sizes.map((size) => (
              <button
                key={size.label}
                onClick={() => handleSizeChange(size.label)}
                className={`size-btn ${selectedSize === size.label ? 'active' : ''}`}
                role="radio"
                aria-checked={selectedSize === size.label}
              >
                <span className="block text-sm font-bold">{size.label}</span>
                <span className="block text-[11px] mt-0.5 text-earth-400">${size.price.toLocaleString('es-CO')}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Quantity */}
        <div className="mb-6">
          <p className="text-xs font-semibold text-earth-600 uppercase tracking-wider mb-3">Cantidad</p>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              disabled={quantity <= 1}
              className="w-11 h-11 flex items-center justify-center rounded-xl border border-cream-300 bg-white text-earth-700 font-bold text-lg transition-all active:scale-95 disabled:opacity-40"
              aria-label="Reducir cantidad"
            >
              −
            </button>
            <span className="w-12 text-center text-lg font-bold text-earth-900 tabular-nums">{quantity}</span>
            <button
              onClick={() => setQuantity((q) => Math.min(10, q + 1))}
              disabled={quantity >= 10}
              className="w-11 h-11 flex items-center justify-center rounded-xl border border-cream-300 bg-white text-earth-700 font-bold text-lg transition-all active:scale-95 disabled:opacity-40"
              aria-label="Aumentar cantidad"
            >
              +
            </button>
            {quantity > 1 && (
              <span className="text-sm text-earth-400">${(selectedPrice * quantity).toLocaleString('es-CO')} total</span>
            )}
          </div>
        </div>

        {/* Price */}
        <div className="flex items-end gap-2 mb-4">
          <span className="price-highlight">${selectedPrice.toLocaleString('es-CO')}</span>
          <span className="text-sm text-earth-400 mb-1">COP</span>
        </div>

        {/* Stock */}
        <div className="flex items-center gap-2 mb-6">
          <span className="badge-stock available">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
            Disponible
          </span>
        </div>

        <TrustBadges />

        {/* Add to cart */}
        <div className="mt-6">
          <button onClick={handleAddToCart} className="btn-primary w-full">
            Agregar al carrito
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" /></svg>
          </button>
        </div>

        {/* Checkout buttons */}
        <div className="mt-4 space-y-3">
          <WhatsAppOrderButton productName={product.name} size={selectedSize} price={selectedPrice} quantity={quantity} type="physical" className="btn-whatsapp w-full" />
          <EmailOrderButton productName={product.name} size={selectedSize} price={selectedPrice} quantity={quantity} type="physical" className="btn-email w-full" />
        </div>

        {/* Almacenamiento */}
        <div className="mt-6 pt-5 border-t border-cream-300">
          <p className="text-xs text-earth-400 flex items-center gap-2">
            <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" /></svg>
            {product.description.almacenamiento}
          </p>
        </div>

        {product.category === 'Miel' && <CrystallizationInfo />}
        <ShippingPolicies />
      </div>
    </div>
  );
}
