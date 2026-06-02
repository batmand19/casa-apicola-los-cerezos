import { describe, it, expect } from 'vitest';
import { organizationSchema, productSchema, articleSchema, websiteSchema, breadcrumbSchema } from '../lib/schema';

describe('Schema.org generators', () => {
  describe('organizationSchema', () => {
    it('should return valid LocalBusiness schema', () => {
      const schema = organizationSchema();
      expect(schema['@type']).toBe('LocalBusiness');
      expect(schema.name).toBeTruthy();
      expect(schema.url).toContain('https://');
      expect(schema.address).toHaveProperty('addressLocality');
      expect(schema.geo).toHaveProperty('latitude');
    });
  });

  describe('productSchema', () => {
    it('should return valid Product schema', () => {
      const schema = productSchema({
        name: 'Miel Multifloral',
        description: 'Miel pura de montaña',
        image: '/images/miel.jpg',
        lowPrice: 30000,
        highPrice: 60000,
      });
      expect(schema['@type']).toBe('Product');
      expect(schema.name).toBe('Miel Multifloral');
      expect(schema.offers).toHaveProperty('lowPrice', 30000);
      expect(schema.offers).toHaveProperty('highPrice', 60000);
      expect(schema.offers.priceCurrency).toBe('COP');
    });
  });

  describe('articleSchema', () => {
    it('should return valid BlogPosting schema', () => {
      const schema = articleSchema({
        title: 'Test Article',
        excerpt: 'A test excerpt',
        date: '2026-01-01',
        slug: 'test-article',
      });
      expect(schema['@type']).toBe('BlogPosting');
      expect(schema.headline).toBe('Test Article');
      expect(schema.datePublished).toBe('2026-01-01');
    });
  });

  describe('websiteSchema', () => {
    it('should return valid WebSite schema', () => {
      const schema = websiteSchema();
      expect(schema['@type']).toBe('WebSite');
      expect(schema.potentialAction['@type']).toBe('SearchAction');
    });
  });

  describe('breadcrumbSchema', () => {
    it('should return valid BreadcrumbList schema', () => {
      const schema = breadcrumbSchema([
        { name: 'Inicio', url: '/' },
        { name: 'Blog', url: '/blog' },
        { name: 'Article' },
      ]);
      expect(schema['@type']).toBe('BreadcrumbList');
      expect(schema.itemListElement).toHaveLength(3);
      expect(schema.itemListElement[0].position).toBe(1);
      expect(schema.itemListElement[2].position).toBe(3);
    });
  });
});
