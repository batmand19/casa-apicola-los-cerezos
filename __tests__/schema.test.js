import { describe, it, expect } from 'vitest';
import { organizationSchema, productSchema, articleSchema, breadcrumbSchema } from '../lib/schema';

describe('Schema.org generators', () => {
  describe('organizationSchema', () => {
    it('should return a valid LocalBusiness schema', () => {
      const schema = organizationSchema();
      expect(schema['@context']).toBe('https://schema.org');
      expect(schema['@type']).toBe('LocalBusiness');
      expect(schema.name).toBeTruthy();
      expect(schema.url).toBeTruthy();
      expect(schema.address).toBeDefined();
      expect(schema.geo).toBeDefined();
    });
  });

  describe('productSchema', () => {
    it('should return a valid Product schema', () => {
      const mockProduct = {
        name: 'Miel Multifloral',
        description: 'Miel artesanal',
        image: '/images/miel.jpg',
        lowPrice: 30000,
        highPrice: 60000,
      };
      const schema = productSchema(mockProduct);
      expect(schema['@type']).toBe('Product');
      expect(schema.name).toBe('Miel Multifloral');
      expect(schema.offers).toBeDefined();
      expect(schema.offers.priceCurrency).toBe('COP');
    });
  });

  describe('articleSchema', () => {
    it('should return a valid BlogPosting schema', () => {
      const mockArticle = {
        title: 'Test Article',
        excerpt: 'Test excerpt',
        image: '/images/test.jpg',
        date: '2026-01-01',
        slug: 'test-article',
      };
      const schema = articleSchema(mockArticle);
      expect(schema['@type']).toBe('BlogPosting');
      expect(schema.headline).toBe('Test Article');
      expect(schema.datePublished).toBe('2026-01-01');
    });
  });

  describe('breadcrumbSchema', () => {
    it('should return a valid BreadcrumbList schema', () => {
      const items = [
        { name: 'Inicio', url: '/' },
        { name: 'Blog', url: '/blog' },
      ];
      const schema = breadcrumbSchema(items);
      expect(schema['@type']).toBe('BreadcrumbList');
      expect(schema.itemListElement).toHaveLength(2);
      expect(schema.itemListElement[0].position).toBe(1);
      expect(schema.itemListElement[1].position).toBe(2);
    });
  });
});
