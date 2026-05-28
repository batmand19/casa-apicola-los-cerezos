'use client';

import { trackEmailOrder } from '@/lib/tracking';

/*
 * CONFIGURACIÓN — Reemplazar con datos reales:
 * EMAIL_VENTAS: Correo electrónico de ventas de Casa Apícola Los Cerezos
 */
const EMAIL_VENTAS = 'ventas@casaapicolaloscercez.com'; // ← CORREO REAL

/**
 * Botón "Pedir por correo" como alternativa a WhatsApp.
 * @param {Object} props
 * @param {string} props.productName - Nombre del producto
 * @param {string} props.size - Tamaño/selección
 * @param {number} props.price - Precio unitario
 * @param {number} props.quantity - Cantidad
 * @param {string} props.type - 'physical' o 'digital'
 * @param {string} props.className
 */
export default function EmailOrderButton({
  productName,
  size = '',
  price = 0,
  quantity = 1,
  type = 'physical',
  className = '',
}) {
  const buildMailto = () => {
    const sizeText = size ? ` (${size})` : '';
    const total = price * quantity;
    const subject = `Pedido - ${productName}${sizeText}`;

    let body;
    if (type === 'digital') {
      body = `Hola,\n\n` +
        `Quiero comprar la "${productName}".\n\n` +
        `¿Cuál es el precio y cómo puedo pagar?\n\n` +
        `Datos de contacto:\n` +
        `Nombre: \n` +
        `Ciudad: \n` +
        `Teléfono: \n\n` +
        `Gracias.`;
    } else {
      body = `Hola,\n\n` +
        `Quiero comprar:\n\n` +
        `Producto: ${productName}${sizeText}\n` +
        `Precio unitario: $${price.toLocaleString('es-CO')} COP\n` +
        `Cantidad: ${quantity}\n` +
        `Total: $${total.toLocaleString('es-CO')} COP\n\n` +
        `¿Está disponible? ¿Cuáles son las opciones de pago y envío?\n\n` +
        `Datos de envío:\n` +
        `Nombre completo: \n` +
        `Ciudad: \n` +
        `Dirección: \n` +
        `Teléfono: \n\n` +
        `Gracias.`;
    }

    return `mailto:${EMAIL_VENTAS}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleClick = () => {
    trackEmailOrder(productName, size, price, quantity, type);
    window.location.href = buildMailto();
  };

  return (
    <button
      onClick={handleClick}
      className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-miel-800 bg-white hover:bg-miel-50 border-2 border-miel-300 rounded-xl transition-all duration-200 min-h-[48px] ${className}`}
      aria-label={`Pedir ${productName} por correo electrónico`}
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
      Pedir por correo
    </button>
  );
}
