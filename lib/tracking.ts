/**
 * Sistema de tracking - Casa Apícola Los Cerezos
 * Integrado con Google Analytics 4 (GA4)
 */

import * as ga from './ga';
import type { TrackViewProduct, TrackSelectVariant, TrackAddToCart, TrackBeginCheckout } from '@/types';

const isDev =
  typeof window !== 'undefined' &&
  (window.location.hostname === 'localhost' ||
    window.location.hostname === '127.0.0.1');

export function trackEvent(eventName: string, params: Record<string, unknown> = {}): void {
  const payload = { event: eventName, timestamp: new Date().toISOString(), ...params };
  if (isDev || typeof window === 'undefined') {
    console.log(`%c[Tracking] ${eventName}`, 'color: #f59e0b; font-weight: bold;', payload);
  }
  ga.event(eventName, params);
}

export function trackView(sectionId: string, threshold = 0.5): IntersectionObserver | null {
  if (typeof window === 'undefined' || typeof IntersectionObserver === 'undefined') return null;
  const element = document.getElementById(sectionId);
  if (!element) return null;
  let hasTracked = false;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !hasTracked) {
        hasTracked = true;
        trackEvent('section_view', { section: sectionId, visibility: Math.round(entry.intersectionRatio * 100) });
      }
    });
  }, { threshold });
  observer.observe(element);
  return observer;
}

export function trackClick(buttonId: string, destination = '', extra: Record<string, unknown> = {}): void {
  trackEvent('cta_click', { button: buttonId, destination, page: typeof window !== 'undefined' ? window.location.pathname : '', ...extra });
}

// Sprint 2
export function trackViewProduct(product: TrackViewProduct): void {
  trackEvent('view_product', { product_id: product.id, product_name: product.name, product_category: product.category, product_size: product.size, price: product.price, currency: 'COP' });
  ga.viewItem({ item_id: product.id, item_name: product.name, item_category: product.category, price: product.price, item_variant: product.size });
}

export function trackSelectVariant(variant: TrackSelectVariant): void {
  trackEvent('select_product_variant', { product_id: variant.productId, product_name: variant.productName, old_size: variant.oldSize, new_size: variant.newSize, price: variant.price, currency: 'COP' });
}

export function trackAddToCart(item: TrackAddToCart): void {
  trackEvent('add_to_cart', { product_id: item.productId, product_name: item.productName, product_size: item.size, price: item.price, quantity: item.quantity, currency: 'COP', value: item.price * item.quantity });
  ga.addToCart({ item_id: item.productId, item_name: item.productName, price: item.price, quantity: item.quantity, item_variant: item.size });
}

export function trackBeginCheckout(checkout: TrackBeginCheckout): void {
  trackEvent('begin_checkout', {
    items: checkout.items.map((i) => ({ product_id: i.id, product_name: i.name, product_size: i.size, price: i.price, quantity: i.quantity })),
    total: checkout.total,
    currency: 'COP',
    value: checkout.total,
  });
  ga.beginCheckout(
    checkout.items.map((i) => ({ item_id: i.id, item_name: i.name, price: i.price, quantity: i.quantity })),
    checkout.total
  );
}

// Sprint 3
export function trackNavClick(linkId: string, href: string, extra: Record<string, unknown> = {}): void {
  trackEvent('click_nav_link', { link_id: linkId, destination: href, ...extra });
}

export function trackMobileMenu(action: string): void {
  trackEvent('mobile_menu', { action });
}

// Sprint 4
export function trackBlogView(): void {
  trackEvent('view_blog', {});
}

export function trackArticleView(slug: string, title: string): void {
  trackEvent('view_article', { slug, title });
}

export function trackDownloadGuide(name: string, email: string): void {
  trackEvent('download_guide', { name, email });
  ga.generateLead('lead_magnet');
}

export function trackBlogLink(linkId: string, href: string): void {
  trackEvent('click_blog_link', { link_id: linkId, destination: href });
}

// Sprint 5
export function trackNewsletterSignup(email: string, source = 'unknown'): void {
  trackEvent('newsletter_signup', { email, source });
  ga.generateLead(source);
}

export function trackWhatsAppClick(): void {
  trackEvent('whatsapp_click', { page: typeof window !== 'undefined' ? window.location.pathname : '' });
}

export function trackShareProduct(platform: string, title: string): void {
  trackEvent('share_product', { platform, title });
}

// Sprint 7
export function trackWhatsAppProduct(productName: string, size: string, price: number, quantity: number, type: string): void {
  trackEvent('click_whatsapp_product', { product_name: productName, size, price, quantity, type });
  ga.generateLead('whatsapp_order');
}

export function trackEmailOrder(productName: string, size: string, price: number, quantity: number, type: string): void {
  trackEvent('click_email_order', { product_name: productName, size, price, quantity, type });
  ga.generateLead('email_order');
}
