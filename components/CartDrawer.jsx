'use client';

import { useState, useEffect } from 'react';
import { getCart, updateQuantity, removeFromCart, getCartTotal, getCartCount, clearCart } from '@/lib/cart';
import { trackBeginCheckout } from '@/lib/tracking';

const WHATSAPP_NUMBER = '573208065008';
const EMAIL_VENTAS = 'hcanon@unal.edu.co';

export default function CartDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const refreshCart = () => {
    const c = getCart();
    setCart(c);
    setCartCount(getCartCount());
    setCartTotal(getCartTotal());
  };

  useEffect(() => {
    refreshCart();
    const onOpen = () => setIsOpen(true);
    const onUpdated = () => refreshCart();
    window.addEventListener('open-cart', onOpen);
    window.addEventListener('cart-updated', onUpdated);
    return () => {
      window.removeEventListener('open-cart', onOpen);
      window.removeEventListener('cart-updated', onUpdated);
    };
  }, []);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleIncrease = (item) => {
    updateQuantity(item.id, item.size, item.quantity + 1);
    refreshCart();
  };

  const handleDecrease = (item) => {
    if (item.quantity <= 1) {
      removeFromCart(item.id, item.size);
    } else {
      updateQuantity(item.id, item.size, item.quantity - 1);
    }
    refreshCart();
  };

  const handleRemove = (item) => {
    removeFromCart(item.id, item.size);
    refreshCart();
  };

  const buildWhatsAppMessage = () => {
    const lines = cart.map((item) => {
      const total = item.price * item.quantity;
      return `📦 ${item.name} (${item.size}) x${item.quantity} — $${total.toLocaleString('es-CO')} COP`;
    });
    return [
      'Hola, quiero hacer un pedido:\n',
      ...lines,
      `\n💰 Total: $${cartTotal.toLocaleString('es-CO')} COP`,
      '\n¿Está disponible? ¿Cuáles son las opciones de pago y envío?\n',
      'Gracias. 🍯',
    ].join('\n');
  };

  const buildMailto = () => {
    const lines = cart.map((item) => {
      const total = item.price * item.quantity;
      return `Producto: ${item.name} (${item.size}) x${item.quantity} — $${total.toLocaleString('es-CO')} COP`;
    });
    const body = [
      'Hola,\n',
      'Quiero hacer un pedido:\n',
      ...lines,
      `\nTotal: $${cartTotal.toLocaleString('es-CO')} COP`,
      '\n¿Está disponible? ¿Cuáles son las opciones de pago y envío?\n',
      'Datos de envío:\n',
      'Nombre completo: \nCiudad: \nDirección: \nTeléfono: \n',
      'Gracias.',
    ].join('\n');
    const subject = `Pedido — Carrito (${cartCount} items)`;
    return `mailto:${EMAIL_VENTAS}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleCheckoutWhatsApp = () => {
    trackBeginCheckout({ items: cart, total: cartTotal });
    const msg = encodeURIComponent(buildWhatsAppMessage());
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
  };

  const handleCheckoutEmail = () => {
    trackBeginCheckout({ items: cart, total: cartTotal });
    window.location.href = buildMailto();
  };

  const handleClear = () => {
    clearCart();
    refreshCart();
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-[70] h-full w-full max-w-md bg-white shadow-2xl transform transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        role="dialog"
        aria-modal="true"
        aria-label="Carrito de compras"
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-cream-200">
            <div className="flex items-center gap-3">
              <span className="text-xl" aria-hidden="true">🛒</span>
              <h2 className="font-display text-lg font-bold text-earth-900">
                Tu carrito
                {cartCount > 0 && (
                  <span className="ml-2 inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-honey-500 rounded-full">
                    {cartCount}
                  </span>
                )}
              </h2>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-cream-100 transition-colors"
              aria-label="Cerrar carrito"
            >
              <svg className="w-5 h-5 text-earth-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <span className="text-5xl block mb-4 opacity-40" aria-hidden="true">🍯</span>
                <p className="text-earth-500 font-medium mb-2">Tu carrito está vacío</p>
                <p className="text-sm text-earth-400">Agrega productos para comenzar tu pedido.</p>
                <button
                  onClick={() => setIsOpen(false)}
                  className="mt-6 btn-outline text-sm"
                >
                  Ver productos
                </button>
              </div>
            ) : (
              <ul className="space-y-4">
                {cart.map((item) => (
                  <li key={`${item.id}_${item.size}`} className="flex gap-4 p-4 bg-cream-50 rounded-2xl border border-cream-200">
                    {/* Thumbnail */}
                    <div className="w-16 h-16 flex-shrink-0 rounded-xl bg-gradient-to-br from-cream-200 to-earth-100 flex items-center justify-center text-2xl overflow-hidden">
                      {item.image ? (
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      ) : (
                        <span aria-hidden="true">🍯</span>
                      )}
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h3 className="text-sm font-semibold text-earth-900 truncate">{item.name}</h3>
                          <p className="text-xs text-earth-400">{item.size}</p>
                        </div>
                        <button
                          onClick={() => handleRemove(item)}
                          className="flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full hover:bg-red-50 text-earth-400 hover:text-red-500 transition-colors"
                          aria-label={`Eliminar ${item.name}`}
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>

                      <div className="flex items-center justify-between mt-3">
                        {/* Quantity */}
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleDecrease(item)}
                            className="w-8 h-8 flex items-center justify-center rounded-lg border border-cream-300 bg-white text-earth-700 font-bold text-sm transition-all active:scale-95 disabled:opacity-40"
                            aria-label="Reducir cantidad"
                          >
                            −
                          </button>
                          <span className="w-8 text-center text-sm font-bold text-earth-900 tabular-nums">{item.quantity}</span>
                          <button
                            onClick={() => handleIncrease(item)}
                            className="w-8 h-8 flex items-center justify-center rounded-lg border border-cream-300 bg-white text-earth-700 font-bold text-sm transition-all active:scale-95 disabled:opacity-40"
                            aria-label="Aumentar cantidad"
                          >
                            +
                          </button>
                        </div>

                        {/* Price */}
                        <span className="text-sm font-bold text-earth-800">
                          ${(item.price * item.quantity).toLocaleString('es-CO')}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Footer */}
          {cart.length > 0 && (
            <div className="border-t border-cream-200 px-6 py-5 space-y-4">
              {/* Total */}
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-earth-600">Subtotal</span>
                <span className="font-display text-xl font-bold text-earth-900">${cartTotal.toLocaleString('es-CO')} COP</span>
              </div>
              <p className="text-[11px] text-earth-400 text-center">El envío se calcula al confirmar tu pedido.</p>

              {/* Checkout buttons */}
              <button
                onClick={handleCheckoutWhatsApp}
                className="btn-whatsapp w-full text-sm"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Pedir por WhatsApp
              </button>

              <button
                onClick={handleCheckoutEmail}
                className="btn-email w-full text-sm"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Pedir por correo
              </button>

              <button
                onClick={handleClear}
                className="w-full text-center text-xs text-earth-400 hover:text-red-500 transition-colors py-2"
              >
                Vaciar carrito
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
