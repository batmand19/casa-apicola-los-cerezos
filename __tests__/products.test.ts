import { describe, it, expect } from 'vitest';
import { PRODUCTS } from '../data/products';

describe('PRODUCTS data', () => {
  it('should have at least one product', () => {
    expect(PRODUCTS.length).toBeGreaterThan(0);
  });

  it('each product should have required fields', () => {
    PRODUCTS.forEach((product) => {
      expect(product).toHaveProperty('id');
      expect(product).toHaveProperty('name');
      expect(product).toHaveProperty('category');
      expect(product).toHaveProperty('tags');
      expect(product).toHaveProperty('description');
      expect(product).toHaveProperty('sizes');
      expect(product).toHaveProperty('image');
      expect(product).toHaveProperty('images');
    });
  });

  it('each product should have a unique id', () => {
    const ids = PRODUCTS.map((p) => p.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });

  it('each product should have at least one size with a positive price', () => {
    PRODUCTS.forEach((product) => {
      expect(product.sizes.length).toBeGreaterThan(0);
      product.sizes.forEach((size) => {
        expect(size.price).toBeGreaterThan(0);
        expect(size.label).toBeTruthy();
      });
    });
  });

  it('each product should have sensory description', () => {
    PRODUCTS.forEach((product) => {
      expect(product.description.sensory).toHaveProperty('color');
      expect(product.description.sensory).toHaveProperty('sabor');
      expect(product.description.sensory).toHaveProperty('aroma');
      expect(product.description.sensory).toHaveProperty('textura');
    });
  });
});
