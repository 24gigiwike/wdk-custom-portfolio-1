import type { SocialLink } from '../types/portfolio.ts'
import { SocialLinks } from './SocialLinks.tsx'

type HeaderProps = {
    brandName: string
    logo: string
    socialLinks: SocialLink[]
}

export function Header({ brandName, logo, socialLinks }: HeaderProps) {
    return (
        <div className="nav-container-left">
            <div className="nav-container-left-L">
                <img alt={brandName} className="logo" src={logo} />
            </div>
            <div className="nav-container-left-R">
                <SocialLinks links={socialLinks} />
            </div>
        </div>
    )
}
