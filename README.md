
# @nebulaai/starter-toolkit

[![npm version](https://badge.fury.io/js/@nebulaai%2Fstarter-toolkit.svg)](https://badge.fury.io/js/@nebulaai%2Fstarter-toolkit)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Simple tools for startup beginners - generate names, check domains, and create basic branding with ease.

## 🚀 Features

- **Name Generation**: Create startup names with industry-specific templates
- **Domain Checking**: Simulate domain availability checking
- **Basic Branding**: Generate color schemes and taglines for your brand
- **Beginner Friendly**: Simple API designed for learning entrepreneurs
- **Zero Dependencies**: Self-contained package with no external dependencies

## 📦 Installation

```bash
npm install @nebulaai/starter-toolkit
```

## 🎯 Quick Start

```typescript
import { generateSimpleNames, createBasicBrand, checkSimpleDomain } from '@nebulaai/starter-toolkit';

// Generate 5 startup names for tech industry
const names = generateSimpleNames('tech', 5);
console.log(names);

// Create a basic brand kit
const brand = createBasicBrand('MyStartup', 'tech');
console.log(brand);

// Check domain availability
const domain = checkSimpleDomain('mystartup');
console.log(domain);
```

## 📚 API Reference

### `generateSimpleNames(industry, count?)`

Generates simple startup names based on industry templates.

**Parameters:**
- `industry` (string): Industry type (`'tech'`, `'creative'`, `'business'`)
- `count` (number, optional): Number of names to generate (default: 10)

**Returns:** Array of `SimpleNameResult` objects

```typescript
interface SimpleNameResult {
  id: string;
  name: string;
  domain: string;
  available: boolean;
  category: string;
}
```

**Example:**
```typescript
const names = generateSimpleNames('tech', 3);
// Returns: [{ id: 'simple_...', name: 'Quickify', domain: 'quickify.com', available: true, category: 'tech' }, ...]
```

### `createBasicBrand(companyName, industry)`

Creates a basic branding kit with colors, taglines, and descriptions.

**Parameters:**
- `companyName` (string): Your company name
- `industry` (string): Industry type (`'tech'`, `'creative'`, `'business'`)

**Returns:** `BasicBrandKit` object

```typescript
interface BasicBrandKit {
  id: string;
  name: string;
  tagline: string;
  colors: string[];
  description: string;
}
```

**Example:**
```typescript
const brand = createBasicBrand('TechCorp', 'tech');
// Returns: { id: 'brand_...', name: 'TechCorp', tagline: 'Simple solutions for everyone', colors: ['#3B82F6', '#1E40AF'], ... }
```

### `checkSimpleDomain(name)`

Simulates domain availability checking for a given name.

**Parameters:**
- `name` (string): Domain name to check (without .com)

**Returns:** Domain availability object

```typescript
{
  domain: string;
  available: boolean;
  price: string;
}
```

**Example:**
```typescript
const result = checkSimpleDomain('mystartup');
// Returns: { domain: 'mystartup.com', available: true, price: '$12.99' }
```

## 🏗️ Development

### Try the Demo

Run the included demo to see all features:

```bash
# Clone this repo and run
npm run build
npx tsx demo.ts
```

### Build the Package

```bash
npm run build    # Build for production
npm run dev      # Build and watch for changes
npm run test     # Run tests
```

## 📝 Supported Industries

The toolkit includes optimized templates for:

- **Tech**: Modern, clean names with tech-focused suffixes
- **Creative**: Bold, artistic names for creative businesses  
- **Business**: Professional, authoritative names for traditional businesses

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.txt](LICENSE.txt) file for details.

## 🆘 Support

- 📖 [Documentation](https://github.com/nebulaai/toolkit)
- 🐛 [Report Issues](https://github.com/nebulaai/toolkit/issues)
- 💬 [Discussions](https://github.com/nebulaai/toolkit/discussions)

---

Made with ❤️ for learning entrepreneurs
