# WDK Premium Portfolio 1 contract

Stable template id: `wdk-premium-portfolio-1`

Custom Portfolio renders this template by passing owner content in:

```tsx
<WdkPremiumPortfolio data={portfolioData} />
```

`src/index.ts` exports the component, its props, `templateConfig`, and the portfolio types.

`App.tsx` and `src/data/active-portfolio.ts` are a local preview shell. They are not the integration API. The `USE_TEST_PORTFOLIO` switch is for development only.

`templateConfig` names the template. It does not name the portfolio owner. The id does not change when the owner changes.

## Template-owned

The template controls presentation:

- Page structure and the split hero
- Typography, including Geist and the existing line-break treatment
- Colors, spacing, and the paper background
- Capability pills, buttons, and the social icon row
- The “Project Spotlight” heading
- Sticky live-iframe project stack, iframe interaction, and the “Explore Website” link
- Contact layout, field labels, placeholders, and the “Submit Request” label
- Responsive breakpoints and the mobile hero image switch
- Lenis smooth scrolling and the current Lenis options
- Hover behavior
- How a social platform id is drawn

Fixed labels that stay in the template: “Project Spotlight”, “Explore Website”, “Submit Request”, Name, Email, Company, Project Type, and Project Details.

## Portfolio-owned

The `PortfolioData` object controls content:

- Name, logo, portraits, headline, capability tags, call to action, and email
- Social platform ids and URLs
- Projects: id, title, category, live URL, and tech labels
- Contact eyebrow, heading, description, project types, and form endpoint
- SEO title, description, canonical URL, Open Graph fields, and Twitter fields

Image fields are URLs supplied by the data. The template does not assume a particular filename.

## Not supported by this template yet

- Experience, testimonials, and a services section
- Project screenshots, years, descriptions, or case studies
- A biography section beyond the hero headline
- Analytics
- Custom domains
- SEO, AEO, or GEO management screens
- Publishing
- Custom design controls, theme editing, or per-user animation settings

## Host requirements

These stay outside owner data and are part of presenting the template:

- Font Awesome, loaded by the standalone `index.html`. Icon class names are chosen by `SocialLinks`, not by portfolio data.
- The Geist font import at the top of `src/styles/globals.css`.
- Lenis stylesheet, imported by `useLenis`.
- `html { scroll-behavior: smooth }` and `body { margin: 0; padding: 0 }` in `globals.css`. Lenis scrolls the document, so those two rules are intentionally not scoped. They do not set the template colors or type.
- Every other visual rule is under `[data-template="wdk-premium-portfolio-1"]`.
