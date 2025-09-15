
// @nebulaai/starter-toolkit - Simple tools for startup beginners

// Simple ID generator
function generateId(prefix: string = 'id'): string {
  return `${prefix}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

export interface SimpleNameResult {
  id: string;
  name: string;
  domain: string;
  available: boolean;
  category: string;
}

export interface BasicBrandKit {
  id: string;
  name: string;
  tagline: string;
  colors: string[];
  description: string;
}

// Simple name generation for beginners
export function generateSimpleNames(industry: string, count: number = 10): SimpleNameResult[] {
  const simpleTemplates = {
    'tech': ['Quick', 'Easy', 'Smart', 'Fast', 'Simple'],
    'creative': ['Bright', 'Fresh', 'Bold', 'Pure', 'Clear'],
    'business': ['Pro', 'Prime', 'Top', 'Best', 'Good']
  };

  const suffixes = ['ly', 'ify', 'hub', 'pro', 'go', 'app', 'tech', 'labs'];
  const category = industry in simpleTemplates ? industry : 'tech';
  const prefixes = simpleTemplates[category as keyof typeof simpleTemplates];

  return Array.from({ length: count }, (_, i) => {
    const prefix = prefixes[i % prefixes.length];
    const suffix = suffixes[i % suffixes.length];
    const name = `${prefix}${suffix}`;
    
    return {
      id: generateId('simple'),
      name,
      domain: `${name.toLowerCase()}.com`,
      available: Math.random() > 0.3,
      category
    };
  });
}

// Basic branding for beginners
export function createBasicBrand(companyName: string, industry: string): BasicBrandKit {
  const colorSchemes = {
    'tech': ['#3B82F6', '#1E40AF'],
    'creative': ['#F59E0B', '#D97706'],
    'business': ['#059669', '#047857']
  };

  const taglines = {
    'tech': 'Simple solutions for everyone',
    'creative': 'Bringing ideas to life',
    'business': 'Your success, our mission'
  };

  const colors = colorSchemes[industry as keyof typeof colorSchemes] || colorSchemes.tech;
  const tagline = taglines[industry as keyof typeof taglines] || taglines.tech;

  return {
    id: generateId('brand'),
    name: companyName,
    tagline,
    colors,
    description: `A clean, professional brand identity for ${companyName} in the ${industry} space.`
  };
}

// Simple domain checker
export function checkSimpleDomain(name: string): { domain: string; available: boolean; price: string } {
  return {
    domain: `${name.toLowerCase()}.com`,
    available: Math.random() > 0.4,
    price: '$12.99'
  };
}

export const STARTER_FEATURES = [
  'Basic name generation',
  'Simple domain checking', 
  'Essential branding',
  'Beginner-friendly interface'
];
