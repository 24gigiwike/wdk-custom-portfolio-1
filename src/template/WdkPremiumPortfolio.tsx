import type { CSSProperties } from 'react'
import { Contact } from '../components/Contact.tsx'
import { Hero } from '../components/Hero.tsx'
import { ProjectSpotlight } from '../components/ProjectSpotlight.tsx'
import { templateConfig } from '../data/template-config.ts'
import type { PortfolioData } from '../types/portfolio.ts'
import '../styles/globals.css'
import '../styles/portfolio.css'
import '../styles/contact.css'
import { useLenis } from './useLenis.ts'
import { usePortfolioSeo } from './usePortfolioSeo.ts'

export interface WdkPremiumPortfolioProps {
    data: PortfolioData
}

export function WdkPremiumPortfolio({ data }: WdkPremiumPortfolioProps) {
    useLenis()
    usePortfolioSeo(data.seo)

    const style = {
        '--hero-image': `url("${data.profile.heroImage}")`,
        '--hero-image-mobile': `url("${data.profile.heroImageMobile}")`,
    } as CSSProperties

    return (
        <div data-template={templateConfig.id} style={style}>
            <Hero profile={data.profile} socialLinks={data.socialLinks} />
            <ProjectSpotlight projects={data.projects} />
            <Contact contact={data.contact} />
        </div>
    )
}
