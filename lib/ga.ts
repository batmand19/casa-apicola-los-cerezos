/**
 * Google Analytics 4 - Helper Functions
 * Casa Apícola Los Cerezos
 */

import type { GAItem } from '@/types';

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

/**
 * Verifica si GA4 está habilitado.
 */
export function isGAEnabled(): boolean {
  return typeof GA_MEASUREMENT_ID === 'string' && GA_MEASUREMENT_ID.length > 0;
}

/**
 * Carga el script de GA4 en la página.
 */
export function getGAScript() {
  if (!isGAEnabled()) return null;
  return {
    src: `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`,
    strategy: 'afterInteractive' as const,
  };
}

/**
 * Inicializa GA4 con configuración básica.
 */
export function initGA(): void {
  if (!isGAEnabled() || typeof window === 'undefined') return;

  window.dataLayer = window.dataLayer || [];
  function gtag(...args: unknown[]) { window.dataLayer.push(args); }
  window.gtag = gtag;

  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID!, {
    page_title: document.title,
    page_location: window.location.href,
  });
}

/**
 * Trackea una vista de página.
 */
export function pageview(url: string): void {
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
 */
export function event(eventName: string, eventParams: Record<string, unknown> = {}): void {
  if (!isGAEnabled() || typeof window === 'undefined') {
    console.log(`%c[GA4] event: ${eventName}`, 'color: #4285f4; font-weight: bold;', eventParams);
    return;
  }

  window.gtag('event', eventName, eventParams);
}

/**
 * Vista de producto.
 */
export function viewItem(item: GAItem): void {
  event('view_item', {
    currency: 'COP',
    value: item.price,
    items: [item],
  });
}

/**
 * Vista de lista de productos.
 */
export function viewItemList(items: GAItem[]): void {
  event('view_item_list', {
    item_list_name: 'Productos principales',
    items,
  });
}

/**
 * Añadir al carrito.
 */
export function addToCart(item: GAItem): void {
  event('add_to_cart', {
    currency: 'COP',
    value: (item.price ?? 0) * (item.quantity ?? 1),
    items: [item],
  });
}

/**
 * Iniciar checkout.
 */
export function beginCheckout(items: GAItem[], total: number): void {
  event('begin_checkout', {
    currency: 'COP',
    value: total,
    items,
  });
}

/**
 * Compra completada.
 */
export function purchase(transactionId: string, items: GAItem[], total: number): void {
  event('purchase', {
    transaction_id: transactionId,
    currency: 'COP',
    value: total,
    tax: 0,
    shipping: 0,
    items,
  });
}

/**
 * Lead generado.
 */
export function generateLead(source = 'newsletter'): void {
  event('generate_lead', {
    source,
    currency: 'COP',
    value: 0,
  });
}

/**
 * Búsqueda en sitio.
 */
export function search(searchTerm: string): void {
  event('search', {
    search_term: searchTerm,
  });
}
