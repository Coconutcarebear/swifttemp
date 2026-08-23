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
  url: 'https://swifttemp.com',

  phone: '(973) 000-0000',
  phoneHref: 'tel:+19730000000',
  email: 'hello@swifttemp.com',
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
   * Only emitted in JSON-LD when `verified` is true. Fabricated ratings are a
   * structured-data violation and can earn a manual action — leave this false
   * until the numbers are pulled from the real Google Business Profile.
   */
  rating: { verified: false, value: '[4.9]', count: '[312]' },

  areaServed: ['Bergen County', 'Passaic County', 'Essex County', 'Morris County'],
} as const;

export const fullAddress = () =>
  `${site.address.street}, ${site.address.locality}, ${site.address.region} ${site.address.postalCode}`;

export const licenseLine = () =>
  `${site.license.holder}, ${site.license.label}${site.license.number}`;
