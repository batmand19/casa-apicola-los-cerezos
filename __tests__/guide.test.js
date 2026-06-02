import { describe, it, expect } from 'vitest';
import { GUIDE } from '../data/guide-content';

describe('GUIDE data', () => {
  it('should have a title', () => {
    expect(GUIDE.title).toBeTruthy();
  });

  it('should have chapters', () => {
    expect(Array.isArray(GUIDE.chapters)).toBe(true);
    expect(GUIDE.chapters.length).toBeGreaterThan(0);
  });

  it('each chapter should have a number and title', () => {
    GUIDE.chapters.forEach((chapter) => {
      expect(chapter).toHaveProperty('number');
      expect(chapter).toHaveProperty('title');
    });
  });

  it('recipe chapters should have recipes with required fields', () => {
    GUIDE.chapters
      .filter((ch) => ch.recipes)
      .forEach((chapter) => {
        chapter.recipes.forEach((recipe) => {
          expect(recipe).toHaveProperty('name');
          expect(recipe).toHaveProperty('time');
          expect(recipe).toHaveProperty('ingredients');
          expect(recipe).toHaveProperty('steps');
          expect(Array.isArray(recipe.ingredients)).toBe(true);
          expect(Array.isArray(recipe.steps)).toBe(true);
        });
      });
  });
});
