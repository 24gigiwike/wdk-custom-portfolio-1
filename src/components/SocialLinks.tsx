import type { SocialLink, SocialPlatform } from '../types/portfolio.ts'

const socialIconClasses: Record<SocialPlatform, string> = {
    x: 'fa-brands fa-x-twitter',
    instagram: 'fa-brands fa-instagram',
    facebook: 'fa-brands fa-facebook-f',
    youtube: 'fa-brands fa-youtube',
    tiktok: 'fa-brands fa-tiktok',
    email: 'fa-regular fa-envelope',
}

function iconClass(platform: string) {
    if (platform in socialIconClasses) {
        return socialIconClasses[platform as SocialPlatform]
    }
    return null
}

export function SocialLinks({ links }: { links: SocialLink[] }) {
    return (
        <div className="socials">
            {links.map((link) => {
                const icon = iconClass(link.platform)
                return (
                    <a href={link.url} key={`${link.platform}-${link.url}`}>
                        {icon ? <i className={icon} /> : link.platform}
                    </a>
                )
            })}
        </div>
    )
}
