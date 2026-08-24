/**
 * Seasonal offer bar — the one thing that changes monthly, so it lives in
 * config rather than content. An edit is a one-line PR. `active: false`
 * hides the bar entirely.
 */
export const offer = {
  active: true,
  headline: 'New system from $[106]/mo + a [12]-year warranty',
  highlight: '$[106]/mo',
  fine: '$[79] diagnostic, waived with repair. Financing through [partner], subject to approval.',
  ctaLabel: 'See current offers',
  ctaHref: '/contact',
} as const;
