
import { generateSimpleNames, createBasicBrand, checkSimpleDomain, STARTER_FEATURES } from './src/index';

console.log('🚀 @nebulaai/starter-toolkit Demo\n');

// Generate simple names
console.log('📝 Generating simple names for tech industry:');
const names = generateSimpleNames('tech', 5);
names.forEach(name => {
  console.log(`  • ${name.name} (${name.domain}) - ${name.available ? '✅ Available' : '❌ Taken'}`);
});

console.log('\n🎨 Creating basic brand kit:');
const brand = createBasicBrand('QuickTech', 'tech');
console.log(`  • Name: ${brand.name}`);
console.log(`  • Tagline: ${brand.tagline}`);
console.log(`  • Colors: ${brand.colors.join(', ')}`);
console.log(`  • Description: ${brand.description}`);

console.log('\n🌐 Checking domain availability:');
const domainCheck = checkSimpleDomain('myawesomestartup');
console.log(`  • Domain: ${domainCheck.domain}`);
console.log(`  • Available: ${domainCheck.available ? '✅ Yes' : '❌ No'}`);
console.log(`  • Price: ${domainCheck.price}`);

console.log('\n✨ Available features:');
STARTER_FEATURES.forEach(feature => {
  console.log(`  • ${feature}`);
});
