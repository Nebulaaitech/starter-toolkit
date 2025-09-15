
import { generateSimpleNames, createBasicBrand, checkSimpleDomain, STARTER_FEATURES } from '../src/index';

describe('@nebulaai/starter-toolkit', () => {
  describe('generateSimpleNames', () => {
    test('should generate correct number of names', () => {
      const names = generateSimpleNames('tech', 3);
      expect(names).toHaveLength(3);
    });

    test('should generate names with required properties', () => {
      const names = generateSimpleNames('tech', 1);
      const name = names[0];
      
      expect(name).toHaveProperty('id');
      expect(name).toHaveProperty('name');
      expect(name).toHaveProperty('domain');
      expect(name).toHaveProperty('available');
      expect(name).toHaveProperty('category');
      
      expect(typeof name.id).toBe('string');
      expect(typeof name.name).toBe('string');
      expect(typeof name.domain).toBe('string');
      expect(typeof name.available).toBe('boolean');
      expect(name.category).toBe('tech');
    });

    test('should handle different industries', () => {
      const techNames = generateSimpleNames('tech', 1);
      const creativeNames = generateSimpleNames('creative', 1);
      const businessNames = generateSimpleNames('business', 1);
      
      expect(techNames[0].category).toBe('tech');
      expect(creativeNames[0].category).toBe('creative');
      expect(businessNames[0].category).toBe('business');
    });

    test('should default to tech for unknown industry', () => {
      const names = generateSimpleNames('unknown', 1);
      expect(names[0].category).toBe('tech');
    });

    test('should default to 10 names when count not specified', () => {
      const names = generateSimpleNames('tech');
      expect(names).toHaveLength(10);
    });

    test('should generate unique IDs', () => {
      const names = generateSimpleNames('tech', 5);
      const ids = names.map(n => n.id);
      const uniqueIds = new Set(ids);
      expect(uniqueIds.size).toBe(5);
    });
  });

  describe('createBasicBrand', () => {
    test('should create brand with correct structure', () => {
      const brand = createBasicBrand('TestCorp', 'tech');
      
      expect(brand).toHaveProperty('id');
      expect(brand).toHaveProperty('name');
      expect(brand).toHaveProperty('tagline');
      expect(brand).toHaveProperty('colors');
      expect(brand).toHaveProperty('description');
      
      expect(typeof brand.id).toBe('string');
      expect(brand.name).toBe('TestCorp');
      expect(typeof brand.tagline).toBe('string');
      expect(Array.isArray(brand.colors)).toBe(true);
      expect(typeof brand.description).toBe('string');
    });

    test('should use industry-specific colors and taglines', () => {
      const techBrand = createBasicBrand('TechCorp', 'tech');
      const creativeBrand = createBasicBrand('CreativeCorp', 'creative');
      const businessBrand = createBasicBrand('BusinessCorp', 'business');
      
      expect(techBrand.colors).toEqual(['#3B82F6', '#1E40AF']);
      expect(creativeBrand.colors).toEqual(['#F59E0B', '#D97706']);
      expect(businessBrand.colors).toEqual(['#059669', '#047857']);
      
      expect(techBrand.tagline).toBe('Simple solutions for everyone');
      expect(creativeBrand.tagline).toBe('Bringing ideas to life');
      expect(businessBrand.tagline).toBe('Your success, our mission');
    });

    test('should default to tech industry for unknown industry', () => {
      const brand = createBasicBrand('TestCorp', 'unknown');
      expect(brand.colors).toEqual(['#3B82F6', '#1E40AF']);
      expect(brand.tagline).toBe('Simple solutions for everyone');
    });
  });

  describe('checkSimpleDomain', () => {
    test('should return domain check with correct structure', () => {
      const result = checkSimpleDomain('test');
      
      expect(result).toHaveProperty('domain');
      expect(result).toHaveProperty('available');
      expect(result).toHaveProperty('price');
      
      expect(typeof result.domain).toBe('string');
      expect(typeof result.available).toBe('boolean');
      expect(typeof result.price).toBe('string');
    });

    test('should format domain correctly', () => {
      const result = checkSimpleDomain('MyAwesomeStartup');
      expect(result.domain).toBe('myawesomestartup.com');
    });

    test('should return consistent price', () => {
      const result = checkSimpleDomain('test');
      expect(result.price).toBe('$12.99');
    });
  });

  describe('STARTER_FEATURES', () => {
    test('should export features array', () => {
      expect(Array.isArray(STARTER_FEATURES)).toBe(true);
      expect(STARTER_FEATURES.length).toBeGreaterThan(0);
      STARTER_FEATURES.forEach(feature => {
        expect(typeof feature).toBe('string');
      });
    });
  });
});
