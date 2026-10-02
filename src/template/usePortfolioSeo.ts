import { useLayoutEffect } from 'react'
import type { PortfolioSEO } from '../types/portfolio.ts'

function upsertMeta(attribute: 'name' | 'property', key: string, content: string) {
    const selector = `meta[${attribute}="${key}"]`
    let element = document.head.querySelector(selector)
    if (!element) {
        element = document.createElement('meta')
        element.setAttribute(attribute, key)
        document.head.appendChild(element)
    }
    element.setAttribute('content', content)
}

function upsertCanonical(href: string) {
    let element = document.head.querySelector('link[rel="canonical"]')
    if (!element) {
        element = document.createElement('link')
        element.setAttribute('rel', 'canonical')
        document.head.appendChild(element)
    }
    element.setAttribute('href', href)
}

export function usePortfolioSeo(seo: PortfolioSEO) {
    useLayoutEffect(() => {
        document.title = seo.title
        upsertMeta('name', 'description', seo.description)
        upsertMeta('name', 'robots', 'index, follow')
        upsertCanonical(seo.canonicalUrl)
        upsertMeta('property', 'og:type', 'website')
        upsertMeta('property', 'og:url', seo.canonicalUrl)
        upsertMeta('property', 'og:title', seo.ogTitle)
        upsertMeta('property', 'og:description', seo.ogDescription)
        upsertMeta('property', 'og:image', seo.ogImage)
        upsertMeta('name', 'twitter:card', 'summary_large_image')
        upsertMeta('name', 'twitter:title', seo.twitterTitle)
        upsertMeta('name', 'twitter:description', seo.twitterDescription)
        upsertMeta('name', 'twitter:image', seo.twitterImage)
    }, [seo])
}
