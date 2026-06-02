/**
 * Sistema de carrito - Casa Apícola Los Cerezos
 * Almacén local con localStorage
 */

import type { CartItem, CartProduct } from '@/types';

const CART_KEY = 'casa_cerezos_cart';

/**
 * Obtener el carrito actual
 */
export function getCart(): CartItem[] {
  if (typeof window === 'undefined') return [];
  try {
    const data = localStorage.getItem(CART_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

/**
 * Guardar el carrito
 */
function saveCart(cart: CartItem[]): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  window.dispatchEvent(new CustomEvent('cart-updated', { detail: { cart } }));
}

/**
 * Agregar producto al carrito
 */
export function addToCart(product: CartProduct, quantity = 1): CartItem[] {
  const cart = getCart();
  const key = `${product.id}_${product.size}`;
  const existing = cart.find((item) => `${item.id}_${item.size}` === key);

  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      size: product.size,
      price: product.price,
      image: product.image || '',
      quantity,
    });
  }

  saveCart(cart);
  return cart;
}

/**
 * Remover producto del carrito
 */
export function removeFromCart(productId: string, size: string): CartItem[] {
  const cart = getCart().filter(
    (item) => !(item.id === productId && item.size === size)
  );
  saveCart(cart);
  return cart;
}

/**
 * Actualizar cantidad de un item
 */
export function updateQuantity(productId: string, size: string, quantity: number): CartItem[] {
  const cart = getCart();
  const item = cart.find(
    (item) => item.id === productId && item.size === size
  );
  if (item) {
    if (quantity <= 0) {
      return removeFromCart(productId, size);
    }
    item.quantity = quantity;
  }
  saveCart(cart);
  return cart;
}

/**
 * Obtener total de items en el carrito
 */
export function getCartCount(): number {
  return getCart().reduce((sum, item) => sum + item.quantity, 0);
}

/**
 * Obtener total del carrito en pesos colombianos
 */
export function getCartTotal(): number {
  return getCart().reduce((sum, item) => sum + item.price * item.quantity, 0);
}

/**
 * Limpiar todo el carrito
 */
export function clearCart(): void {
  saveCart([]);
}
