// SEO Yardımcıları — Metadata generator ve schema.org JSON-LD oluşturucular
import type { Metadata } from 'next';
import { SITE, CONTACT, MARINAS, SERVICES, FAQS } from './constants';

interface PageMetaProps {
  title: string;
  description: string;
  path?: string;
  keywords?: string;
  ogImage?: string;
}

/** Her sayfa için tutarlı metadata üretir (canonical, OG, Twitter dahil). */
export function pageMeta({
  title,
  description,
  path = '/',
  keywords,
  ogImage = '/og-default.jpg',
}: PageMetaProps): Metadata {
  const url = `${SITE.url}${path}`;
  const fullTitle = path === '/' ? title : `${title} | ${SITE.name}`;
  return {
    title: fullTitle,
    description,
    keywords,
    metadataBase: new URL(SITE.url),
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      locale: SITE.locale,
      url,
      siteName: SITE.name,
      title: fullTitle,
      description,
      images: [{ url: ogImage, width: 1200, height: 630, alt: SITE.name }],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
  };
}

/** LocalBusiness schema — ana sayfada ve layout'ta ziyaretçi başına yüklenir. */
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE.url}/#business`,
  name: SITE.name,
  alternateName: SITE.legalName,
  description: SITE.defaultDescription,
  url: SITE.url,
  logo: `${SITE.url}/logo.png`,
  image: `${SITE.url}/og-default.jpg`,
  telephone: CONTACT.phone,
  email: CONTACT.email,
  priceRange: '$$',
  foundingDate: SITE.founded,
  address: {
    '@type': 'PostalAddress',
    streetAddress: CONTACT.address.street,
    addressLocality: CONTACT.address.district,
    addressRegion: CONTACT.address.city,
    postalCode: CONTACT.address.postalCode,
    addressCountry: CONTACT.address.country,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: CONTACT.geo.lat,
    longitude: CONTACT.geo.lng,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '19:00',
    },
  ],
  sameAs: [CONTACT.social.instagram, CONTACT.social.facebook],
  areaServed: MARINAS.map((m) => ({ '@type': 'Place', name: m })),
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Yat Döşeme ve Dekorasyon Hizmetleri',
    itemListElement: SERVICES.map((s) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: s.title },
    })),
  },
};

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE.url}/#organization`,
  name: SITE.legalName,
  url: SITE.url,
  logo: `${SITE.url}/logo.png`,
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: CONTACT.phone,
    contactType: 'customer service',
    areaServed: 'TR',
    availableLanguage: ['Turkish', 'English'],
  },
  sameAs: [CONTACT.social.instagram, CONTACT.social.facebook],
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE.url}/#website`,
  url: SITE.url,
  name: SITE.name,
  inLanguage: 'tr-TR',
  publisher: { '@id': `${SITE.url}/#organization` },
};

export function serviceSchema(service: typeof SERVICES[number]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.title,
    provider: { '@id': `${SITE.url}/#business` },
    areaServed: { '@type': 'AdministrativeArea', name: 'İstanbul' },
    name: service.title,
    description: service.excerpt,
    url: `${SITE.url}/hizmetler/${service.slug}`,
  };
}

export function breadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE.url}${item.url}`,
    })),
  };
}

export const faqPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a },
  })),
};
