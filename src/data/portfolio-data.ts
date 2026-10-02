import type { PortfolioData } from '../types/portfolio.ts'

// Owner content for this portfolio.
// WDK Premium Portfolio 1 reads this object and does not own these values.
// Business address, phone, hours, and map coordinates are intentionally absent.

export const portfolioData = {
    profile: {
        brandName: "Web Design King",
        logo: "8.png",
        heroImage: "CoverWDK.jpg",
        heroImageMobile: "CoverWDK-responsive.jpg",
        headline: "Premium Websites That Help Businesses Grow\nHigh performance websites\nand digital experiences\nfor brands and businesses.",
        capabilityTags: [
            "FRONTEND",
            "CONVERSION-FOCUSED DESIGN"
        ],
        ctaLabel: "Book A Session",
        ctaHref: "#contact",
        email: "work@webdesignking.online"
    },

    socialLinks: [
        { platform: "x", url: "https://x.com/webdesignking__" },
        { platform: "instagram", url: "https://instagram.com/webdesignking_" },
        { platform: "facebook", url: "https://facebook.com/webdesignkinging" },
        { platform: "youtube", url: "https://youtube.com/@webdesignkinging" },
        { platform: "tiktok", url: "https://tiktok.com/@webdesignking_" },
        { platform: "email", url: "mailto:work@webdesignking.online" }
    ],

    projects: [
        {
            id: "01",
            title: "CM26",
            category: "Luxury Fashion Website",
            url: "https://cm26.vercel.app/",
            tech: ["HTML", "CSS", "JavaScript"]
        },
        {
            id: "02",
            title: "Detailed Group",
            category: "Corporate Website",
            url: "https://www.detailedgroup.co/",
            tech: ["HTML", "CSS", "JavaScript"]
        },
        {
            id: "03",
            title: "Project Three",
            category: "Creative Website",
            url: "https://www.jovipants.com.ng/",
            tech: ["HTML", "CSS"]
        },
        {
            id: "04",
            title: "Project Four",
            category: "Business Website",
            url: "https://jeredengineering.com/",
            tech: ["HTML", "CSS"]
        },
        {
            id: "05",
            title: "Project Five",
            category: "Landing Page",
            url: "https://maison-donne.vercel.app/",
            tech: ["HTML", "CSS"]
        },
        {
            id: "06",
            title: "Project Six",
            category: "Portfolio Website",
            url: "https://www.broadbrand.com.ng/",
            tech: ["HTML", "CSS"]
        },
        {
            id: "07",
            title: "Project Seven",
            category: "Agency Website",
            url: "https://boyfromeden.vercel.app/",
            tech: ["HTML", "CSS"]
        },
        {
            id: "08",
            title: "Project Eight",
            category: "Brand Website",
            url: "https://growly-landingpage.vercel.app/",
            tech: ["HTML", "CSS"]
        },
        {
            id: "09",
            title: "Project Nine",
            category: "Brand Website",
            url: "https://www.molecatchgeosint.com/",
            tech: ["HTML", "CSS"]
        }
    ],

    contact: {
        email: "work@webdesignking.online",
        eyebrow: "START A PROJECT",
        heading: "Let's create something\nexceptional.",
        description: "Have a project in mind? Share your vision and we'll explore how we can build a digital experience that represents your brand.",
        projectTypes: [
            "Website Design",
            "Website Development",
            "Brand Identity",
            "Landing Page",
            "Consultation"
        ],
        formEndpoint: "https://formspree.io/f/mjgqrkbd"
    },

    seo: {
        title: "Premium Web Designer in Nigeria | Conversion-Focused Business Websites | Web Design King | Top Web Design Services",
        description: "Web Design King builds premium, conversion-focused websites that help brands and businesses grow. Based in Nigeria, serving clients worldwide. Offering Top tier Web Design Services.",
        canonicalUrl: "https://webdesignking.online",
        ogTitle: "Web Design King | Award-Winning Web Designer & Developer | Web studio - Agency",
        ogDescription: "High-performance websites, UI/UX design, and high-conversion digital tools. View my latest work.",
        ogImage: "https://res.cloudinary.com/dtkluxukm/image/upload/v1783454017/CoverWDK-responsive_fmvp6b.jpg",
        twitterTitle: "Web Design King | Award-Winning Web Designer & Developer | Web studio - Agency",
        twitterDescription: "High-performance websites, UI/UX design, and high-conversion landing pages.",
        twitterImage: "https://res.cloudinary.com/dtkluxukm/image/upload/v1783454017/CoverWDK-responsive_fmvp6b.jpg"
    }
} satisfies PortfolioData
