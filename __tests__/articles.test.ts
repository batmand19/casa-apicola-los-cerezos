import { describe, it, expect } from 'vitest';
import { ARTICLES } from '../data/articles';

describe('ARTICLES data', () => {
  it('should have at least one article', () => {
    expect(ARTICLES.length).toBeGreaterThan(0);
  });

  it('should have at least 7 articles for good SEO coverage', () => {
    expect(ARTICLES.length).toBeGreaterThanOrEqual(7);
  });

  it('each article should have required fields', () => {
    ARTICLES.forEach((article) => {
      expect(article).toHaveProperty('slug');
      expect(article).toHaveProperty('title');
      expect(article).toHaveProperty('metaTitle');
      expect(article).toHaveProperty('metaDescription');
      expect(article).toHaveProperty('date');
      expect(article).toHaveProperty('readTime');
      expect(article).toHaveProperty('category');
      expect(article).toHaveProperty('image');
      expect(article).toHaveProperty('excerpt');
      expect(article).toHaveProperty('content');
      expect(Array.isArray(article.content)).toBe(true);
    });
  });

  it('each article should have a unique slug', () => {
    const slugs = ARTICLES.map((a) => a.slug);
    const uniqueSlugs = new Set(slugs);
    expect(uniqueSlugs.size).toBe(slugs.length);
  });

  it('each article content should have at least one block', () => {
    ARTICLES.forEach((article) => {
      expect(article.content.length).toBeGreaterThan(0);
    });
  });

  it('each article should have a valid category', () => {
    const validCategories = ['Educación', 'Conservación', 'Guías', 'Salud', 'Cultura'];
    ARTICLES.forEach((article) => {
      expect(validCategories).toContain(article.category);
    });
  });

  it('each article metaDescription should be under 160 chars', () => {
    ARTICLES.forEach((article) => {
      expect(article.metaDescription.length).toBeLessThanOrEqual(160);
    });
  });
});
