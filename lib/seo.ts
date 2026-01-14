export const SITE_CONFIG = {
  title: 'Girl Scout Troop 21 - Building Leaders, Creating Memories',
  description: 'Join Girl Scout Troop 21! We empower young Girl Scouts through friendship, confidence, and service. Explore our cookies, badges, events, and international adventures.',
  url: 'https://troop21.girlscouts.org',
  image: '/images/1941Trooop21.jpg',
  author: 'Girl Scout Troop 21',
  locale: 'en_US',
  type: 'website',
};

export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/troope21',
  instagram: 'https://instagram.com/troope21',
  twitter: 'https://twitter.com/troope21',
  email: 'info@troop21girlscouts.org',
};

export const SCHEMA_ORG = {
  organization: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Girl Scout Troop 21',
    url: 'https://troop21.girlscouts.org',
    logo: '/images/1941Trooop21.jpg',
    description: 'Girl Scout Troop building leaders through friendship, confidence, and service',
    sameAs: [
      'https://www.facebook.com/troope21',
      'https://www.instagram.com/troope21',
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Community Center',
      addressLocality: 'Your City',
      addressRegion: 'State',
      postalCode: '12345',
    },
  },
  event: {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: 'Girl Scout Troop 21 Cookie Sale',
    description: 'Annual Girl Scout Cookie Sale to support troop activities',
    startDate: '2026-01-20',
    endDate: '2026-03-31',
    location: {
      '@type': 'Place',
      name: 'Community Center',
    },
  },
};
