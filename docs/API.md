
# API Documentation

## generateSimpleNames(industry, count?)

### Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| industry | `string` | Yes | - | Industry type for name generation |
| count | `number` | No | 10 | Number of names to generate |

### Supported Industries

- `'tech'` - Technology companies (Quick, Easy, Smart, Fast, Simple)
- `'creative'` - Creative businesses (Bright, Fresh, Bold, Pure, Clear) 
- `'business'` - Professional services (Pro, Prime, Top, Best, Good)

### Return Type

```typescript
interface SimpleNameResult {
  id: string;           // Unique identifier (format: "simple_[timestamp]_[random]")
  name: string;         // Generated company name
  domain: string;       // Suggested domain (.com)
  available: boolean;   // Simulated availability (70% chance true)
  category: string;     // Normalized industry category
}
```

### Edge Cases

- **Unknown industry**: Defaults to `'tech'` category
- **Zero count**: Returns empty array
- **Negative count**: Returns empty array
- **Large count**: Performance may degrade with very large numbers (>1000)

### Examples

```typescript
// Basic usage
const names = generateSimpleNames('tech', 3);

// Unknown industry fallback
const names = generateSimpleNames('unknown', 5); // Uses 'tech' templates

// Edge cases
generateSimpleNames('tech', 0);  // Returns []
generateSimpleNames('tech', -5); // Returns []
```

## createBasicBrand(companyName, industry)

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| companyName | `string` | Yes | Your company name |
| industry | `string` | Yes | Industry for color/tagline selection |

### Return Type

```typescript
interface BasicBrandKit {
  id: string;           // Unique identifier (format: "brand_[timestamp]_[random]")
  name: string;         // Company name (unchanged)
  tagline: string;      // Industry-appropriate tagline
  colors: string[];     // Hex color palette [primary, secondary]
  description: string;  // Generated description
}
```

### Color Schemes

| Industry | Primary | Secondary | Description |
|----------|---------|-----------|-------------|
| tech | `#3B82F6` | `#1E40AF` | Blue tones for trust/innovation |
| creative | `#F59E0B` | `#D97706` | Orange tones for creativity/energy |
| business | `#059669` | `#047857` | Green tones for growth/stability |

### Edge Cases

- **Empty company name**: Uses empty string in output
- **Unknown industry**: Falls back to tech colors/tagline
- **Special characters**: Preserved in company name

### Examples

```typescript
// Standard usage
const brand = createBasicBrand('TechCorp', 'tech');

// Fallback behavior
const brand = createBasicBrand('', 'unknown'); // Empty name, tech defaults
```

## checkSimpleDomain(name)

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| name | `string` | Yes | Domain name (without .com) |

### Return Type

```typescript
{
  domain: string;      // Formatted domain with .com
  available: boolean;  // Simulated availability (60% chance true)
  price: string;       // Fixed price "$12.99"
}
```

### Domain Processing

- Converts to lowercase
- Appends `.com` extension
- No validation of domain format

### Edge Cases

- **Empty string**: Returns `.com` as domain
- **Special characters**: Not sanitized, passed through
- **Unicode**: Not handled, may cause issues

### Examples

```typescript
// Standard usage
checkSimpleDomain('MyStartup'); // Returns: { domain: 'mystartup.com', ... }

// Edge cases
checkSimpleDomain('');          // Returns: { domain: '.com', ... }
checkSimpleDomain('my-startup'); // Returns: { domain: 'my-startup.com', ... }
```

## STARTER_FEATURES

A constant array of feature descriptions:

```typescript
const STARTER_FEATURES: string[] = [
  'Basic name generation',
  'Simple domain checking', 
  'Essential branding',
  'Beginner-friendly interface'
];
```

## Error Handling

All functions are designed to be fault-tolerant:

- No exceptions thrown for invalid inputs
- Graceful fallbacks for edge cases
- Deterministic behavior for same inputs (except random elements)

## Performance Considerations

- Name generation: O(n) where n is count
- Brand creation: O(1) constant time
- Domain checking: O(1) constant time
- Memory usage scales linearly with output size
