'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { trackView, trackViewProduct, trackSelectVariant } from '@/lib/tracking';
import WhatsAppOrderButton from './WhatsAppOrderButton';
import EmailOrderButton from './EmailOrderButton';
import TrustBadges from './TrustBadges';
import CrystallizationInfo from './CrystallizationInfo';
import ShippingPolicies from './ShippingPolicies';

// ============================================================
// Datos de productos
// ============================================================
const PRODUCTS = [
  {
    id: 'miel-multifloral',
    name: 'Miel Multifloral Meliphera',
    category: 'Miel',
    description: {
      floral:
        'Nuestras abejas Meliphera recolectan néctar de Eucalipto (floración: mayo-agosto), Romero (enero-marzo), Salvia (abril-junio), Uva de anís (septiembre-noviembre) y Arrayán (febrero-abril), creando una miel multifloral única de la región cundiboyacense.',
      sensory: {
        color: 'Ámbar claro con reflejos dorados',
        aroma: 'Notas florales con toques herbáceos y un fondo sutil a eucalipto',
        sabor: 'Dulzor equilibrado, con matices frutales y un ligero toque especiado',
        textura: 'Cremosa y suave, con cristalización natural que garantiza pureza',
      },
      usos:
        'Endulza tus infusiones, complementa tus postres, fortalece tu sistema inmunológico, alivia garganta irritada.',
      almacenamiento:
        'Conservar en lugar fresco y seco, alejado de la luz directa. No refrigere.',
    },
    sizes: [
      { label: '250g', price: 35000 },
      { label: '500g', price: 62000 },
      { label: '1kg', price: 110000 },
    ],
    image: '/images/productos/miel-vertiendo.jpg',
    images: {
      '250g': '/images/productos/miel-frasco-250g.jpg',
      '500g': '/images/productos/miel-frasco-500g.jpg',
      '1kg': '/images/productos/miel-frasco-1kg.jpg',
    },
  },
  {
    id: 'polen-apol',
    name: 'Polen Apícola Meliphera',
    category: 'Polen',
    description: {
      floral:
        'Polen multifloral recolectado por nuestras abejas Meliphera de la flora silvestre del Páramo de Rabanal: Eucalipto, Romero, Salvia, Uva de anís y Arrayán. Cada grano es un concentrado de nutrientes de la región cundiboyacense.',
      sensory: {
        color: 'Tonos dorados a anaranjados, granulado fino',
        aroma: 'Fresco, floral, con notas terrosas y un toque dulce',
        sabor: 'Ligeramente dulce con matices florales y un final ligeramente ácido',
        textura: 'Granulado suave, se disuelve fácilmente en líquidos',
      },
      usos:
        'Complemento nutricional ideal para batidos, yogures y ensaladas. Rico en proteínas, vitaminas y antioxidantes.',
      almacenamiento:
        'Conservar en lugar fresco y seco, alejado de la luz directa. No refrigere.',
    },
    sizes: [
      { label: '250g', price: 45000 },
      { label: '500g', price: 82000 },
      { label: '1kg', price: 150000 },
    ],
    image: '/images/productos/polen-granulado-cerrado.jpg',
    images: {
      '250g': '/images/productos/polen-frasco-250g.jpg',
      '500g': '/images/productos/polen-frasco-500g.jpg',
      '1kg': '/images/productos/polen-frasco-1kg.jpg',
    },
  },
];

const FREE_SHIPPING_THRESHOLD = 150000;

// ============================================================
// Componente: ProductCard
// ============================================================
function ProductCard({ product }) {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0].label);
  const [currentImage, setCurrentImage] = useState(product.image);
  const [quantity] = useState(1);
  const [addedFeedback, setAddedFeedback] = useState(false);

  const selectedPrice = product.sizes.find((s) => s.label === selectedSize)?.price || 0;
  const qualifiesForFreeShipping = selectedPrice * quantity >= FREE_SHIPPING_THRESHOLD;

  useEffect(() => {
    trackViewProduct({
      id: product.id,
      name: product.name,
      category: product.category,
      size: selectedSize,
      price: selectedPrice,
    });
  }, [product.id, product.name, product.category, selectedSize, selectedPrice, product]);

  const handleSizeChange = useCallback(
    (newSize) => {
      if (newSize !== selectedSize) {
        trackSelectVariant({
          productId: product.id,
          productName: product.name,
          oldSize: selectedSize,
          newSize,
          price: product.sizes.find((s) => s.label === newSize)?.price || 0,
        });
        setSelectedSize(newSize);
        if (product.images[newSize]) {
          setCurrentImage(product.images[newSize]);
        }
      }
    },
    [selectedSize, product]
  );

  const handleAddToCart = () => {
    addToCart(
      {
        id: product.id,
        name: product.name,
        size: selectedSize,
        price: selectedPrice,
        image: currentImage,
      },
      quantity
    );
    trackAddToCart({
      productId: product.id,
      productName: product.name,
      size: selectedSize,
      price: selectedPrice,
      quantity,
    });
    setAddedFeedback(true);
    setTimeout(() => setAddedFeedback(false), 2000);
  };

  const handleBuyNow = () => {
    addToCart(
      {
        id: product.id,
        name: product.name,
        size: selectedSize,
        price: selectedPrice,
        image: currentImage,
      },
      quantity
    );
    trackBeginCheckout({
      items: [{ id: product.id, name: product.name, size: selectedSize, price: selectedPrice, quantity }],
      total: selectedPrice * quantity,
    });
    alert('Función de checkout próximamente. Por ahora, tu producto ha sido añadido al carrito.');
  };

  return (
    <article
      id={`product-${product.id}`}
      className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-miel-100"
    >
      {/* Galería de imagen — lazy loading, sin priority (solo Hero tiene priority) */}
      <div className="relative aspect-square bg-gradient-to-br from-miel-50 to-miel-100 overflow-hidden group">
        <Image
          src={currentImage}
          alt={`${product.name} - ${selectedSize} de la colección Casa Apícola Los Cerezos`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Placeholder overlay */}
        <div className="absolute inset-0 img-placeholder">
          <div className="text-center p-6">
            <span className="text-5xl" role="img" aria-label={product.name}>
              {product.category === 'Miel' ? '🍯' : '🌼'}
            </span>
            <p className="mt-3 text-sm text-miel-700">{product.name}</p>
            <code className="text-[10px] text-miel-800/60 block mt-1">{currentImage}</code>
          </div>
        </div>
      </div>

      {/* Contenido */}
      <div className="p-5 sm:p-6 md:p-8">
        {/* Título y categoría */}
        <div>
          <span className="inline-block px-2 py-0.5 text-[10px] font-semibold tracking-wider uppercase text-miel-700 bg-miel-100 rounded-full border border-miel-200 mb-2">
            {product.category}
          </span>
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-tierra-900 leading-tight">{product.name}</h3>
        </div>

        {/* Descripción sensorial */}
        <div className="mt-4 space-y-2 text-sm text-tierra-700">
          {Object.entries({
            'Color': product.description.sensory.color,
            'Aroma': product.description.sensory.aroma,
            'Sabor': product.description.sensory.sabor,
            'Textura': product.description.sensory.textura,
          }).map(([label, value]) => (
            <p key={label} className="flex flex-col sm:flex-row sm:items-start gap-0 sm:gap-2">
              <span className="font-semibold text-tierra-800 sm:flex-shrink-0">{label}:</span>
              <span>{value}</span>
            </p>
          ))}
        </div>

        {/* Fuente floral */}
        <div className="mt-4 p-3 sm:p-4 rounded-xl bg-bosque-50 border border-bosque-100">
          <p className="text-sm text-bosque-800 leading-relaxed">
            <span className="font-semibold">Flora cundiboyacense:</span>{' '}
            {product.description.floral}
          </p>
        </div>

        {/* Usos */}
        <div className="mt-4">
          <p className="text-sm text-tierra-700">
            <span className="font-semibold text-tierra-800">Usos:</span>{' '}
            {product.description.usos}
          </p>
        </div>

        {/* Selector de tamaños — touch-friendly */}
        <div className="mt-6">
          <p className="text-sm font-semibold text-tierra-800 mb-3">Selecciona tu tamaño:</p>
          <div className="flex gap-2 sm:gap-3" role="radiogroup" aria-label="Tamaño del producto">
            {product.sizes.map((size) => (
              <button
                key={size.label}
                onClick={() => handleSizeChange(size.label)}
                className={`size-btn ${selectedSize === size.label ? 'active' : ''}`}
                role="radio"
                aria-checked={selectedSize === size.label}
                aria-label={`${size.label} - $${size.price.toLocaleString('es-CO')}`}
              >
                <span className="block text-sm font-bold">{size.label}</span>
                <span className="block text-xs mt-0.5 text-tierra-700/70">
                  ${size.price.toLocaleString('es-CO')}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Precio destacado */}
        <div className="mt-6 flex items-end gap-3">
          <span className="price-highlight">
            ${selectedPrice.toLocaleString('es-CO')}
          </span>
          <span className="text-sm text-tierra-700/60 mb-1">COP</span>
        </div>

        {/* Stock y envío */}
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <span className="badge-stock available">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Disponible · Envío inmediato
          </span>
          {qualifiesForFreeShipping && (
            <span className="free-shipping">
              🚚 Envío gratis
            </span>
          )}
        </div>
        {!qualifiesForFreeShipping && (
          <p className="mt-2 text-xs text-tierra-700/60">
            Envío gratis en compras superiores a ${FREE_SHIPPING_THRESHOLD.toLocaleString('es-CO')}
          </p>
        )}

        {/* Trust Badges */}
        <TrustBadges />

        {/* CTA Buttons — Compra por WhatsApp y Correo */}
        <div className="mt-6 space-y-3">
          <WhatsAppOrderButton
            productName={product.name}
            size={selectedSize}
            price={selectedPrice}
            quantity={1}
            type="physical"
            className="w-full"
          />
          <EmailOrderButton
            productName={product.name}
            size={selectedSize}
            price={selectedPrice}
            quantity={1}
            type="physical"
            className="w-full"
          />
          <p className="text-xs text-tierra-700/50 text-center pt-1">
            Te contactaremos para confirmar disponibilidad y coordinar envío.
          </p>
        </div>

        {/* Almacenamiento */}
        <div className="mt-6 pt-4 border-t border-tierra-100">
          <p className="text-xs text-tierra-700/70 flex items-center gap-2">
            <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
            </svg>
            {product.description.almacenamiento}
          </p>
        </div>

        {/* Cristalización info */}
        {product.category === 'Miel' && <CrystallizationInfo />}

        {/* Políticas de envío */}
        <ShippingPolicies />
      </div>
    </article>
  );
}

// ============================================================
// Componente principal: Products
// ============================================================
export default function Products() {
  useEffect(() => {
    const observer = trackView('productos', 0.3);
    return () => observer?.disconnect();
  }, []);

  return (
    <section
      id="productos"
      className="py-12 sm:py-16 md:py-24 bg-miel-50"
      aria-labelledby="products-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <span className="inline-block mb-4 px-3 py-1 text-xs font-semibold tracking-wider uppercase text-miel-800 bg-miel-100 rounded-full border border-miel-200">
            Nuestros productos
          </span>
          <h2
            id="products-title"
            className="text-3xl sm:text-4xl font-bold text-tierra-900"
          >
            Directamente del panal a tu mesa
          </h2>
          <p className="mt-4 text-base sm:text-lg text-tierra-700/80 max-w-2xl mx-auto">
            Miel y polen 100% puro de abejas Meliphera, cosechados con respeto por
            la naturaleza en las montañas cundiboyacenses.
          </p>
        </div>

        {/* Grid de productos — 1 col mobile, 2 col desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Envío gratis global */}
        <div className="mt-10 sm:mt-12 text-center">
          <p className="text-sm text-tierra-700/70">
            🚚 <strong>Envío gratis</strong> en compras superiores a ${FREE_SHIPPING_THRESHOLD.toLocaleString('es-CO')} COP
          </p>
        </div>
      </div>
    </section>
  );
}
