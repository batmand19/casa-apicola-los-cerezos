'use client';

import { trackWhatsAppProduct } from '@/lib/tracking';

/*
 * CONFIGURACIÓN — Reemplazar con datos reales:
 * WHATSAPP_NUMBER: Número de WhatsApp Business de Casa Apícola Los Cerezos
 * Formato internacional: 57XXXXXXXXXX (sin espacios, sin +)
 */
const WHATSAPP_NUMBER = '573208065008'; // ← NÚMERO REAL CONFIGURADO

/**
 * Botón "Comprar por WhatsApp" para productos físicos y digitales.
 * @param {Object} props
 * @param {string} props.productName - Nombre del producto
 * @param {string} props.size - Tamaño/selección (ej: "250g", "PDF + EPUB")
 * @param {number} props.price - Precio unitario
 * @param {number} props.quantity - Cantidad (default: 1)
 * @param {string} props.type - 'physical' o 'digital'
 * @param {string} props.className - Clases CSS adicionales
 */
export default function WhatsAppOrderButton({
  productName,
  size = '',
  price = 0,
  quantity = 1,
  type = 'physical',
  className = '',
}) {
  const buildMessage = () => {
    const sizeText = size ? ` (${size})` : '';
    const total = price * quantity;

    if (type === 'digital') {
      return `Hola, quiero comprar la "${productName}".\n\n` +
        `¿Cuál es el precio y cómo puedo pagar?\n\n` +
        `Gracias. 🍯`;
    }

    return `Hola, quiero comprar:\n\n` +
      `📦 ${productName}${sizeText}\n` +
      `💰 Precio unitario: $${price.toLocaleString('es-CO')} COP\n` +
      `🔢 Cantidad: ${quantity}\n` +
      `💵 Total: $${total.toLocaleString('es-CO')} COP\n\n` +
      `¿Está disponible? ¿Cuáles son las opciones de pago y envío?\n\n` +
      `Gracias. 🍯`;
  };

  const handleClick = () => {
    trackWhatsAppProduct(productName, size, price, quantity, type);
    const message = encodeURIComponent(buildMessage());
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-[#25D366] hover:bg-[#20BD5A] rounded-xl shadow-lg shadow-[#25D366]/20 transition-all duration-200 min-h-[48px] ${className}`}
      aria-label={`Comprar ${productName} por WhatsApp`}
    >
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
      Comprar por WhatsApp
    </button>
  );
}
