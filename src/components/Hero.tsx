import type { PortfolioProfile, SocialLink } from '../types/portfolio.ts'
import { Button } from './Button.tsx'
import { CapabilityTags } from './CapabilityTags.tsx'
import { Header } from './Header.tsx'
import { MultilineText } from './MultilineText.tsx'

type HeroProps = {
    profile: PortfolioProfile
    socialLinks: SocialLink[]
}

export function Hero({ profile, socialLinks }: HeroProps) {
    return (
        <div className="container">
            <div className="container-left">
                <Header
                    brandName={profile.brandName}
                    logo={profile.logo}
                    socialLinks={socialLinks}
                />
                <h1>
                    <MultilineText text={profile.headline} />
                </h1>
                <CapabilityTags tags={profile.capabilityTags} />
                <a href={profile.ctaHref}>
                    <Button>{profile.ctaLabel}</Button>
                </a>
            </div>

            <div className="container-right">
                <div className="nav-container-right">
                    <p>
                        <i className="fa-solid fa-bars" />
                    </p>
                </div>
            </div>
        </div>
    )
}
