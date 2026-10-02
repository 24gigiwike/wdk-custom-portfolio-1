# WDK Premium Portfolio 1 schema

The TypeScript types in `src/types/portfolio.ts` are the source of truth. This note describes those types. It does not add fields.

`submitLabel` is not a field. The submit button text is template-owned.

## PortfolioData

### profile

- `brandName` — owner or brand name. Used as the logo alt text.
- `logo` — URL of the header logo.
- `heroImage` — URL of the desktop portrait.
- `heroImageMobile` — URL of the portrait used at the mobile breakpoint.
- `headline` — hero text. Newline characters become line breaks.
- `capabilityTags` — short labels rendered as pills.
- `ctaLabel` — hero button text.
- `ctaHref` — hero button link. The current sample uses `#contact`.
- `email` — owner email address. The visible mail icon uses `socialLinks`, not this field by itself.

### socialLinks[]

- `platform` — one of `x`, `instagram`, `facebook`, `youtube`, `tiktok`, `email`.
- `url` — destination. Email entries use a `mailto:` URL.

The template chooses the icon. An unsupported platform renders as text instead of being dropped.

### projects[]

Rendered in array order as live iframes.

- `id` — display number, such as `01`.
- `title` — project name.
- `category` — short category line.
- `url` — public site loaded in the iframe and used by “Explore Website”.
- `tech` — technology labels. They are rendered in the card and stay hidden with the rest of the desktop metadata.

### contact

- `email` — owner email recorded with the contact content.
- `eyebrow` — small line above the contact heading.
- `heading` — contact heading. Newline characters become line breaks.
- `description` — paragraph under the heading.
- `projectTypes` — options in the project-type select.
- `formEndpoint` — form `action`. The template posts the existing fields there and does not choose the service.

### seo

- `title` — document title.
- `description` — meta description.
- `canonicalUrl` — canonical link and Open Graph URL.
- `ogTitle`
- `ogDescription`
- `ogImage`
- `twitterTitle`
- `twitterDescription`
- `twitterImage`

`og:type` is `website`, the Twitter card is `summary_large_image`, and robots is `index, follow`. Those three values belong to the template, not the owner record.
