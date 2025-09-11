# Article Template Structure for RV Blog

## Overview
This document provides the standardized HTML structure and CSS classes that should be applied to all articles in the RV & Camping Gear Pro blog to ensure consistent styling and optimal user experience.

## CSS Classes Reference

### 1. Article Introduction
```html
<div class="article-intro">
  <p><strong>Main value proposition</strong> - Opening statement that hooks the reader.</p>
  <p>Context and background information that establishes expertise.</p>
  <p>Overview of what the article will cover and its benefits.</p>
</div>
```

### 2. Expert Tips and Callouts
```html
<!-- Regular Tip -->
<div class="expert-tip">
  <h4>💡 Pro Tip: [Tip Title]</h4>
  <p>Detailed tip content with actionable advice.</p>
</div>

<!-- Warning Tip -->
<div class="expert-tip warning">
  <h4>⚠️ Important: [Warning Title]</h4>
  <p>Important warning or cautionary information.</p>
</div>
```

### 3. Product Recommendations
```html
<div class="product-recommendation">
  <h3>[Product Name]</h3>
  <p class="product-price"><strong>Price:</strong> $XXX - $XXX</p>
  <p class="product-features"><strong>Features:</strong></p>
  <ul>
    <li>Feature 1</li>
    <li>Feature 2</li>
    <li>Feature 3</li>
  </ul>
  <a href="[Amazon Link]" class="cta-link">View on Amazon →</a>
</div>
```

### 4. FAQ Sections
```html
<h3 class="faq-question">[Question]</h3>
<p class="faq-answer">[Answer]</p>
```

### 5. Call to Action Links
```html
<a href="[Link]" class="cta-link">[Action Text]</a>
```

## Standard Article Structure

### 1. Header
```html
<h1>[Article Title]</h1>
<div class="article-intro">
  <!-- Introduction content -->
</div>
```

### 2. Main Content Sections
```html
---

## [Section Title]

### [Subsection Title]
[Content with proper formatting]

<div class="expert-tip">
  <!-- Tip content -->
</div>

---

## [Next Section Title]
[Content continues...]
```

### 3. Product Recommendations Section
```html
## Top [X] [Product Category] for [Target Audience]

<div class="product-recommendation">
  <h3>1. [Product Name]</h3>
  <p class="product-price"><strong>Price:</strong> $XXX - $XXX</p>
  <p class="product-features"><strong>Features:</strong></p>
  <ul>
    <li>Feature 1</li>
    <li>Feature 2</li>
    <li>Feature 3</li>
  </ul>
  <a href="[Amazon Link]" class="cta-link">View on Amazon →</a>
</div>

<div class="product-recommendation">
  <h3>2. [Next Product]</h3>
  <!-- Similar structure -->
</div>
```

### 4. Comparison Tables
```html
| Feature | Option 1 | Option 2 | Option 3 |
|---------|----------|----------|----------|
| **Feature 1** | Value 1 | Value 2 | Value 3 |
| **Feature 2** | Value 1 | Value 2 | Value 3 |
```

### 5. FAQ Section
```html
## Frequently Asked Questions

<h3 class="faq-question">1. [Question]</h3>
<p class="faq-answer">[Answer]</p>

<h3 class="faq-question">2. [Next Question]</h3>
<p class="faq-answer">[Answer]</p>
```

### 6. Final Call to Action
```html
## Final Thoughts and Call to Action

<p>[Conclusion content]</p>

<a href="[Amazon Search Link]" class="cta-link">[Action Text]</a>

---

<p><em>Affiliate Disclosure: Some links above are Amazon affiliate links. If you purchase through these links, we may earn a small commission at no extra cost to you.</em></p>
```

## Implementation Guidelines

### 1. Content Organization
- Use `---` to separate major sections
- Apply proper heading hierarchy (H1 → H2 → H3)
- Include expert tips and warnings where relevant
- Structure product recommendations consistently

### 2. Styling Application
- Always wrap introductions in `article-intro` div
- Use `expert-tip` and `expert-tip warning` for callouts
- Apply `product-recommendation` class to product sections
- Use `faq-question` and `faq-answer` for FAQ items
- Apply `cta-link` class to Amazon and action links

### 3. Content Quality
- Ensure all Amazon links include proper affiliate tags
- Include relevant product features and pricing
- Add expert tips that provide real value
- Use proper FAQ structure for common questions
- Include clear call-to-action sections

### 4. SEO Considerations
- Use target keywords naturally in headings
- Include relevant internal links
- Structure content for featured snippets
- Add proper meta descriptions
- Include schema markup where applicable

## CSS File Location
The styles are defined in: `src/lib/styles/article-structure.css`

## Testing Checklist
- [ ] Article intro displays with proper styling
- [ ] Expert tips show correct colors and formatting
- [ ] Product recommendations are properly highlighted
- [ ] FAQ sections have consistent styling
- [ ] Amazon links are styled as buttons
- [ ] Tables are responsive and well-formatted
- [ ] Mobile responsiveness works correctly
- [ ] Print styles are appropriate

## Maintenance Notes
- Update CSS classes in this template when making changes
- Test new styles across different articles
- Ensure backward compatibility with existing content
- Document any new CSS classes added
