/**
 * Sistema de carrito - Casa Apícola Los Cerezos
 * Almacén local con localStorage
 */

const CART_KEY = 'casa_cerezos_cart';

/**
 * Obtener el carrito actual
 */
export function getCart() {
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
function saveCart(cart) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  // Disparar evento custom para que otros componentes reaccionen
  window.dispatchEvent(new CustomEvent('cart-updated', { detail: { cart } }));
}

/**
 * Agregar producto al carrito
 * @param {Object} product - { id, name, size, price, image }
 * @param {number} quantity - Cantidad a agregar
 */
export function addToCart(product, quantity = 1) {
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
export function removeFromCart(productId, size) {
  const cart = getCart().filter(
    (item) => !(item.id === productId && item.size === size)
  );
  saveCart(cart);
  return cart;
}

/**
 * Actualizar cantidad de un item
 */
export function updateQuantity(productId, size, quantity) {
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
export function getCartCount() {
  return getCart().reduce((sum, item) => sum + item.quantity, 0);
}

/**
 * Obtener total del carrito en pesos colombianos
 */
export function getCartTotal() {
  return getCart().reduce((sum, item) => sum + item.price * item.quantity, 0);
}

/**
 * Limpiar todo el carrito
 */
export function clearCart() {
  saveCart([]);
}
