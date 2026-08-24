/**
 * Single source of truth for NAP, license, and hours.
 *
 * The footer, contact page, and LocalBusiness JSON-LD all read from here, so
 * the site's name/address/phone can't drift out of sync with the Google
 * Business Profile. NAP inconsistency measurably hurts local rankings.
 *
 * Values in [brackets] are client-supplied facts still outstanding.
 */
export const site = {
  name: 'SwiftTemp Climate Solutions',
  shortName: 'SwiftTemp',
  tagline: 'Climate Solutions',
  url: 'https://swift-temp.com',

  phone: '(973) 000-0000',
  phoneHref: 'tel:+19730000000',
  email: 'hello@swift-temp.com',
  address: {
    street: '[123 Main Street]',
    locality: '[Clifton]',
    region: 'NJ',
    postalCode: '[07011]',
    country: 'US',
  },

  /**
   * N.J.A.C. 13:32A-5.1 requires the master contractor's name and the words
   * "Master HVACR contractor Lic. #" followed by the number in ALL advertising,
   * this website included. BLOCKS LAUNCH until filled.
   */
  license: {
    holder: '[Owner Name]',
    number: '[19HC00000000]',
    label: 'NJ Master HVACR contractor Lic. #',
  },

  hours: {
    display: '24/7 emergency service',
    spec: [{
      days: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
      opens: '00:00',
      closes: '23:59',
    }],
  },

  /**
   * No reviews yet. Leave `verified: false` — that suppresses aggregateRating
   * in the JSON-LD and keeps every review module off the site. Flip it to true
   * only once these numbers come from the real Google Business Profile;
   * fabricated ratings are a structured-data violation.
   */
  rating: { verified: false, value: '', count: '' },

  areaServed: ['Bergen County', 'Passaic County', 'Essex County', 'Morris County'],
} as const;

export const fullAddress = () =>
  `${site.address.street}, ${site.address.locality}, ${site.address.region} ${site.address.postalCode}`;

export const licenseLine = () =>
  `${site.license.holder}, ${site.license.label}${site.license.number}`;
