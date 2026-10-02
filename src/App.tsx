import { activePortfolio } from './data/active-portfolio.ts'
import { WdkPremiumPortfolio } from './template/WdkPremiumPortfolio.tsx'

export default function App() {
    return <WdkPremiumPortfolio data={activePortfolio} />
}
