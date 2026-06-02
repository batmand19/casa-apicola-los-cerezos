'use client';

import { useState, useEffect, useCallback } from 'react';
import OptimizedImage from './OptimizedImage';
import { trackView, trackViewProduct, trackSelectVariant } from '@/lib/tracking';
import { addToCart as cartAdd } from '@/lib/cart';
import WhatsAppOrderButton from './WhatsAppOrderButton';
import EmailOrderButton from './EmailOrderButton';
import TrustBadges from './TrustBadges';
import CrystallizationInfo from './CrystallizationInfo';
import ShippingPolicies from './ShippingPolicies';
import { PRODUCTS } from '@/data/products';

const FREE_SHIPPING_THRESHOLD = 100000;

function ProductCard({ product }) {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0].label);
  const [currentImage, setCurrentImage] = useState(product.image);
  const [quantity, setQuantity] = useState(1);
  const selectedPrice = product.sizes.find((s) => s.label === selectedSize)?.price || 0;
  const qualifiesForFreeShipping = selectedPrice >= FREE_SHIPPING_THRESHOLD;

  const increaseQty = () => setQuantity((q) => Math.min(q + 1, 10));
  const decreaseQty = () => setQuantity((q) => Math.max(q - 1, 1));

  useEffect(() => { trackViewProduct({ id: product.id, name: product.name, category: product.category, size: selectedSize, price: selectedPrice }); }, [product.id, product.name, product.category, selectedSize, selectedPrice, product]);
  const handleSizeChange = useCallback((newSize) => { if (newSize !== selectedSize) { trackSelectVariant({ productId: product.id, productName: product.name, oldSize: selectedSize, newSize, price: product.sizes.find((s) => s.label === newSize)?.price || 0 }); setSelectedSize(newSize); if (product.images[newSize]) setCurrentImage(product.images[newSize]); } }, [selectedSize, product]);

  return (
    <article id={`product-${product.id}`} className="card-premium overflow-hidden group">
      <div className="relative aspect-[4/3] bg-gradient-to-br from-cream-200 to-earth-100 overflow-hidden">
        <OptimizedImage src={currentImage} alt={`${product.name} - ${selectedSize}`} aspect="4/3" fallbackIcon={product.category === 'Miel' ? '🍯' : '🌼'} fallbackLabel={product.name} />
        {product.badge && <span className="absolute top-4 left-4 px-3 py-1 text-[10px] font-bold tracking-[0.15em] uppercase text-white bg-earth-800/80 backdrop-blur-sm rounded-full z-10">{product.badge}</span>}
      </div>

      <div className="p-6 sm:p-8">
        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-honey-600">{product.category}</span>
        <h3 className="font-display text-xl sm:text-2xl font-bold text-earth-900 mt-2 mb-3 leading-tight">{product.name}</h3>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {product.tags.map((tag) => <span key={tag} className="product-tag">{tag}</span>)}
        </div>

        <div className="space-y-1.5 mb-5">
          {Object.entries({ Color: product.description.sensory.color, Sabor: product.description.sensory.sabor }).map(([l, v]) => (
            <p key={l} className="text-sm text-earth-500 flex items-start gap-2"><span className="font-semibold text-earth-700 flex-shrink-0">{l}:</span><span>{v}</span></p>
          ))}
        </div>

        <p className="text-xs text-forest-600 bg-forest-50 rounded-xl px-4 py-3 mb-5 leading-relaxed border border-forest-100">🌸 {product.description.floral}</p>

        <div className="mb-5">
          <p className="text-xs font-semibold text-earth-600 uppercase tracking-wider mb-3">Presentación</p>
          <div className="flex gap-2" role="radiogroup" aria-label="Tamaño del producto">
            {product.sizes.map((size) => (
              <button key={size.label} onClick={() => handleSizeChange(size.label)} className={`size-btn ${selectedSize === size.label ? 'active' : ''}`} role="radio" aria-checked={selectedSize === size.label}>
                <span className="block text-sm font-bold">{size.label}</span>
                <span className="block text-[11px] mt-0.5 text-earth-400">${size.price.toLocaleString('es-CO')}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Selector de cantidad */}
        <div className="mb-5">
          <p className="text-xs font-semibold text-earth-600 uppercase tracking-wider mb-3">Cantidad</p>
          <div className="flex items-center gap-3">
            <button
              onClick={decreaseQty}
              disabled={quantity <= 1}
              className="w-11 h-11 flex items-center justify-center rounded-xl border border-cream-300 bg-white text-earth-700 font-bold text-lg transition-all duration-200 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed hover:border-honey-400"
              aria-label="Reducir cantidad"
            >
              −
            </button>
            <span className="w-12 text-center text-lg font-bold text-earth-900 tabular-nums" aria-live="polite" aria-label="Cantidad actual">{quantity}</span>
            <button
              onClick={increaseQty}
              disabled={quantity >= 10}
              className="w-11 h-11 flex items-center justify-center rounded-xl border border-cream-300 bg-white text-earth-700 font-bold text-lg transition-all duration-200 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed hover:border-honey-400"
              aria-label="Aumentar cantidad"
            >
              +
            </button>
            <span className="text-sm text-earth-400">{quantity > 1 ? `$${(selectedPrice * quantity).toLocaleString('es-CO')} total` : ''}</span>
          </div>
        </div>

        <div className="flex items-end gap-2 mb-4"><span className="price-highlight">${selectedPrice.toLocaleString('es-CO')}</span><span className="text-sm text-earth-400 mb-1">COP</span></div>

        <div className="flex flex-wrap items-center gap-2 mb-6">
          <span className="badge-stock available"><svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg> Disponible</span>
          {qualifiesForFreeShipping && <span className="free-shipping">🚚 Envío gratis</span>}
        </div>

        <TrustBadges />

        <div className="mt-6">
          <button
            onClick={() => {
              cartAdd({ id: product.id, name: product.name, size: selectedSize, price: selectedPrice, image: product.image }, quantity);
              window.dispatchEvent(new CustomEvent('open-cart'));
            }}
            className="btn-primary w-full"
          >
            Agregar al carrito
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" /></svg>
          </button>
        </div>

        <div className="mt-4 space-y-3">
          <WhatsAppOrderButton productName={product.name} size={selectedSize} price={selectedPrice} quantity={quantity} type="physical" className="btn-whatsapp w-full" />
          <EmailOrderButton productName={product.name} size={selectedSize} price={selectedPrice} quantity={quantity} type="physical" className="btn-email w-full" />
          <p className="text-[11px] text-earth-400 text-center">O compra directo por WhatsApp o correo.</p>
        </div>

        <div className="mt-6 pt-5 border-t border-cream-300">
          <p className="text-xs text-earth-400 flex items-center gap-2"><svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" /></svg> {product.description.almacenamiento}</p>
        </div>
        {product.category === 'Miel' && <CrystallizationInfo />}
        <ShippingPolicies />
      </div>
    </article>
  );
}

export default function Products() {
  useEffect(() => { const o = trackView('productos', 0.3); return () => o?.disconnect(); }, []);

  return (
    <section id="productos" className="py-24 sm:py-32 bg-cream-50 paper-texture" aria-labelledby="products-title">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-16 sm:mb-20">
          <span className="inline-block mb-4 text-[11px] font-semibold tracking-[0.25em] uppercase text-honey-600">Nuestros productos</span>
          <div className="divider-elegant mb-6" />
          <h2 id="products-title" className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-earth-900">Directamente del panal a tu mesa</h2>
          <p className="mt-5 text-base sm:text-lg text-earth-500 max-w-2xl mx-auto">Miel y polen de abejas Apis mellifera, cosechados con respeto por la naturaleza en las montañas de Caldas.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {PRODUCTS.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
        <div className="mt-12 text-center"><p className="text-sm text-earth-400">🚚 <strong>Envío gratis</strong> en compras superiores a ${FREE_SHIPPING_THRESHOLD.toLocaleString('es-CO')} COP</p></div>
      </div>
    </section>
  );
}
