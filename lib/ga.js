/**
 * Google Analytics 4 - Helper Functions
 * Casa Apícola Los Cerezos
 *
 * CONFIGURACIÓN:
 * 1. Crea un archivo .env.local en la raíz del proyecto:
 *    NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
 *
 * 2. Obtén tu Measurement ID en:
 *    https://analytics.google.com → Administrador → Flujos de datos → Web
 *
 * 3. Para debug, instala la extensión "Google Analytics Debugger" de Chrome.
 *
 * NOTA: En desarrollo (localhost), GA4 NO carga a menos que
 * NEXT_PUBLIC_GA_MEASUREMENT_ID esté definido.
 */

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

/**
 * Verifica si GA4 está habilitado.
 */
export function isGAEnabled() {
  return typeof GA_MEASUREMENT_ID === 'string' && GA_MEASUREMENT_ID.length > 0;
}

/**
 * Carga el script de GA4 en la página.
 * Usar en layout.js con next/script strategy="afterInteractive".
 */
export function getGAScript() {
  if (!isGAEnabled()) return null;
  return {
    src: `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`,
    strategy: 'afterInteractive',
  };
}

/**
 * Inicializa GA4 con configuración básica.
 * Llamar una vez después de cargar el script.
 */
export function initGA() {
  if (!isGAEnabled() || typeof window === 'undefined') return;

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = gtag;

  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID, {
    page_title: document.title,
    page_location: window.location.href,
  });
}

/**
 * Trackea una vista de página.
 * Llamar en cada cambio de ruta (app router usa useEffect).
 * @param {string} url - URL de la página
 */
export function pageview(url) {
  if (!isGAEnabled() || typeof window === 'undefined') {
    console.log(`%c[GA4] pageview: ${url}`, 'color: #4285f4; font-weight: bold;');
    return;
  }

  window.gtag('event', 'page_view', {
    page_path: url,
    page_title: document.title,
    page_location: window.location.href,
  });
}

/**
 * Envía un evento personalizado a GA4.
 * @param {string} eventName - Nombre del evento
 * @param {Object} eventParams - Parámetros del evento
 */
export function event(eventName, eventParams = {}) {
  if (!isGAEnabled() || typeof window === 'undefined') {
    console.log(`%c[GA4] event: ${eventName}`, 'color: #4285f4; font-weight: bold;', eventParams);
    return;
  }

  window.gtag('event', eventName, eventParams);
}

// ============================================================
// Eventos predefinidos para ecommerce (GA4)
// ============================================================

/**
 * Vista de producto.
 */
export function viewItem(item) {
  event('view_item', {
    currency: 'COP',
    value: item.price,
    items: [{
      item_id: item.id,
      item_name: item.name,
      item_category: item.category,
      price: item.price,
      item_variant: item.size,
    }],
  });
}

/**
 * Vista de lista de productos.
 */
export function viewItemList(items) {
  event('view_item_list', {
    item_list_name: 'Productos principales',
    items: items.map((item, i) => ({
      item_id: item.id,
      item_name: item.name,
      item_category: item.category,
      price: item.price,
      index: i,
    })),
  });
}

/**
 * Añadir al carrito.
 */
export function addToCart(item) {
  event('add_to_cart', {
    currency: 'COP',
    value: item.price * item.quantity,
    items: [{
      item_id: item.id,
      item_name: item.name,
      item_category: item.category,
      price: item.price,
      quantity: item.quantity,
      item_variant: item.size,
    }],
  });
}

/**
 * Iniciar checkout.
 */
export function beginCheckout(items, total) {
  event('begin_checkout', {
    currency: 'COP',
    value: total,
    items: items.map((item) => ({
      item_id: item.id,
      item_name: item.name,
      price: item.price,
      quantity: item.quantity,
    })),
  });
}

/**
 * Compra completada (simulada).
 */
export function purchase(transactionId, items, total) {
  event('purchase', {
    transaction_id,
    currency: 'COP',
    value: total,
    tax: 0,
    shipping: 0,
    items: items.map((item) => ({
      item_id: item.id,
      item_name: item.name,
      price: item.price,
      quantity: item.quantity,
    })),
  });
}

/**
 * Lead generado (newsletter, descarga).
 */
export function generateLead(source = 'newsletter') {
  event('generate_lead', {
    source,
    currency: 'COP',
    value: 0,
  });
}

/**
 * Búsqueda en sitio.
 */
export function search(searchTerm) {
  event('search', {
    search_term: searchTerm,
  });
}
