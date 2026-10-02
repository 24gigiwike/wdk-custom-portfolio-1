# WDK Premium Portfolio 1

React + TypeScript version of the static template in the parent folder.

The parent HTML, CSS, and JavaScript files remain the visual source of truth. This app does not replace them.

```bash
npm install
npm run dev
```

Owner content lives in `src/data/portfolio-data.ts`. `src/data/active-portfolio.ts` can point at `portfolio-data-test.ts` for a local substitution check. Leave that switch false.

Another application renders the template with `<WdkPremiumPortfolio data={portfolioData} />`. See `TEMPLATE-CONTRACT.md` and `TEMPLATE-SCHEMA.md`. The public exports are in `src/index.ts`.
