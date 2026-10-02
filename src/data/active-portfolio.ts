import { portfolioData } from './portfolio-data.ts'
import { portfolioDataTest } from './portfolio-data-test.ts'
import type { PortfolioData } from '../types/portfolio.ts'

// Local preview only. Custom Portfolio should pass PortfolioData into
// WdkPremiumPortfolio and should not use this switch.
const USE_TEST_PORTFOLIO = false

export const activePortfolio: PortfolioData = USE_TEST_PORTFOLIO
    ? portfolioDataTest
    : portfolioData
