import type { PortfolioData } from '../types/portfolio.ts'

// TEST ONLY. Not the default portfolio.
// Fictional owner used to prove the template can render another data set.
//
// Asset limitation: this repository has no neutral logo or portrait.
// logo, heroImage, and heroImageMobile reuse the existing local files.

export const portfolioDataTest = {
    profile: {
        brandName: "Maya Okafor",
        logo: "8.png",
        heroImage: "CoverWDK.jpg",
        heroImageMobile: "CoverWDK-responsive.jpg",
        headline: "Interfaces for independent studios\nClear structure, careful type,\nand websites that stay easy to use.",
        capabilityTags: [
            "INTERFACE DESIGN",
            "FRONTEND"
        ],
        ctaLabel: "Start a Conversation",
        ctaHref: "#contact",
        email: "maya@example.com"
    },

    socialLinks: [
        { platform: "x", url: "https://example.com/maya-x" },
        { platform: "instagram", url: "https://example.com/maya-instagram" },
        { platform: "email", url: "mailto:maya@example.com" }
    ],

    projects: [
        {
            id: "01",
            title: "Northline Studio",
            category: "Studio Website",
            url: "https://example.com/northline",
            tech: ["HTML", "CSS"]
        },
        {
            id: "02",
            title: "Harbor Notes",
            category: "Editorial Site",
            url: "https://example.com/harbor-notes",
            tech: ["HTML", "CSS", "JavaScript"]
        },
        {
            id: "03",
            title: "Field Guide",
            category: "Landing Page",
            url: "https://example.com/field-guide",
            tech: ["HTML", "CSS"]
        }
    ],

    contact: {
        email: "maya@example.com",
        eyebrow: "NEW WORK",
        heading: "Tell me about\nthe next project.",
        description: "Maya Okafor designs and builds calm, practical websites for independent studios and small teams.",
        projectTypes: [
            "Portfolio Site",
            "Product Interface",
            "Design System"
        ],
        formEndpoint: "https://example.com/maya-contact"
    },

    seo: {
        title: "Maya Okafor | Interface Designer and Frontend Developer",
        description: "Maya Okafor designs and builds websites for independent studios and small teams.",
        canonicalUrl: "https://example.com/maya",
        ogTitle: "Maya Okafor | Interface Designer",
        ogDescription: "Selected websites and interfaces by Maya Okafor.",
        ogImage: "https://example.com/maya-share.jpg",
        twitterTitle: "Maya Okafor | Interface Designer",
        twitterDescription: "Selected websites and interfaces by Maya Okafor.",
        twitterImage: "https://example.com/maya-share.jpg"
    }
} satisfies PortfolioData
