
// @nebulaai/starter-toolkit - Simple tools for startup beginners

// Simple ID generator
function generateId(prefix: string): string {
  const timestamp = Date.now();
  const random = Math.floor(Math.random() * 1000);
  return `${prefix}_${timestamp}_${random}`;
}

// Types for our toolkit
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

// Simple name generator for beginners
export function generateSimpleNames(industry: string, count: number = 10): SimpleNameResult[] {
  if (count <= 0) return [];

  const templates = {
    'tech': ['Quick', 'Easy', 'Smart', 'Fast', 'Simple'],
    'creative': ['Bright', 'Fresh', 'Bold', 'Pure', 'Clear'],
    'business': ['Pro', 'Prime', 'Top', 'Best', 'Good']
  };

  const suffixes = ['Tech', 'Lab', 'Hub', 'Co', 'Works', 'Solutions', 'Studio', 'Group'];
  
  const categoryTemplates = templates[industry as keyof typeof templates] || templates.tech;
  const normalizedCategory = Object.keys(templates).includes(industry) ? industry : 'tech';
  
  const results: SimpleNameResult[] = [];
  
  for (let i = 0; i < count; i++) {
    const prefix = categoryTemplates[Math.floor(Math.random() * categoryTemplates.length)];
    const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
    const name = `${prefix}${suffix}`;
    
    results.push({
      id: generateId('simple'),
      name,
      domain: `${name.toLowerCase()}.com`,
      available: Math.random() > 0.3,
      category: normalizedCategory
    });
  }
  
  return results;
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
