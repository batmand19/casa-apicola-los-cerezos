import { describe, it, expect, beforeEach } from 'vitest';

// jsdom provides a real localStorage, so we just use it directly
const CART_KEY = 'casa_cerezos_cart';

const { getCart, addToCart, removeFromCart, updateQuantity, getCartCount, getCartTotal, clearCart } = await import('../lib/cart');

describe('Cart utilities', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should return empty cart initially', () => {
    expect(getCart()).toEqual([]);
  });

  it('should add item to cart', () => {
    const product = { id: 'miel', name: 'Miel', size: '500g', price: 30000, image: '/img.jpg' };
    const result = addToCart(product, 1);
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe('miel');
    expect(result[0].quantity).toBe(1);
  });

  it('should increase quantity if item already exists', () => {
    const product = { id: 'miel', name: 'Miel', size: '500g', price: 30000 };
    addToCart(product, 1);
    const result = addToCart(product, 2);
    expect(result).toHaveLength(1);
    expect(result[0].quantity).toBe(3);
  });

  it('should remove item from cart', () => {
    const product = { id: 'miel', name: 'Miel', size: '500g', price: 30000 };
    addToCart(product, 1);
    const result = removeFromCart('miel', '500g');
    expect(result).toHaveLength(0);
  });

  it('should update quantity', () => {
    const product = { id: 'miel', name: 'Miel', size: '500g', price: 30000 };
    addToCart(product, 1);
    const result = updateQuantity('miel', '500g', 5);
    expect(result[0].quantity).toBe(5);
  });

  it('should calculate cart total', () => {
    const product = { id: 'miel', name: 'Miel', size: '500g', price: 30000 };
    addToCart(product, 2);
    expect(getCartTotal()).toBe(60000);
  });

  it('should calculate cart count', () => {
    const product = { id: 'miel', name: 'Miel', size: '500g', price: 30000 };
    addToCart(product, 3);
    expect(getCartCount()).toBe(3);
  });

  it('should clear cart', () => {
    const product = { id: 'miel', name: 'Miel', size: '500g', price: 30000 };
    addToCart(product, 1);
    clearCart();
    expect(getCart()).toHaveLength(0);
  });
});
