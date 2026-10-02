export type SocialPlatform =
    | "x"
    | "instagram"
    | "facebook"
    | "youtube"
    | "tiktok"
    | "email";

export type PortfolioProfile = {
    brandName: string;
    logo: string;
    heroImage: string;
    heroImageMobile: string;
    headline: string;
    capabilityTags: string[];
    ctaLabel: string;
    ctaHref: string;
    email: string;
};

export type SocialLink = {
    platform: SocialPlatform;
    url: string;
};

export type Project = {
    id: string;
    title: string;
    category: string;
    url: string;
    tech: string[];
};

export type PortfolioContact = {
    email: string;
    eyebrow: string;
    heading: string;
    description: string;
    projectTypes: string[];
    formEndpoint: string;
};

export type PortfolioSEO = {
    title: string;
    description: string;
    canonicalUrl: string;
    ogTitle: string;
    ogDescription: string;
    ogImage: string;
    twitterTitle: string;
    twitterDescription: string;
    twitterImage: string;
};

export type PortfolioData = {
    profile: PortfolioProfile;
    socialLinks: SocialLink[];
    projects: Project[];
    contact: PortfolioContact;
    seo: PortfolioSEO;
};
