import type { Service } from '@/lib/services';

export const acRepair: Service = {
  slug: 'ac-repair',
  title: 'AC Repair',
  h1: 'AC repair in north Jersey, usually same day',
  subhead: '$[79] diagnostic, waived when you book the repair. Upfront pricing before we touch anything.',
  metaTitle: 'AC Repair in North Jersey | SwiftTemp',
  metaDescription:
    'Same-day air conditioning repair across north Jersey. Upfront pricing, licensed technicians, no overtime charges.',
  summary: 'Repair, diagnostics, and emergency cooling service for homes and businesses.',
  warranty: '[1]-year repair warranty',
  proof: [
    { n: 'Same day', l: 'Most calls' },
    { n: '[NATE]', l: 'Certified' },
    { n: '[1] yr', l: 'Repair warranty' },
    { n: '24/7', l: 'No overtime' },
  ],
  symptoms: [
    { title: 'Blowing warm air', body: 'Usually refrigerant, a failed capacitor, or a frozen evaporator coil.' },
    { title: 'Running constantly', body: 'Undersized, low on charge, or losing conditioned air through the ducts.' },
    { title: 'Tripping the breaker', body: 'An electrical fault or a compressor drawing too much. Stop resetting it.' },
    { title: 'Water around the unit', body: 'A blocked condensate drain, nine times out of ten.' },
    { title: 'Loud or new noises', body: 'Grinding, squealing, and banging each point at something different.' },
    { title: 'Smells when it kicks on', body: 'Musty means biological growth. Burning means shut it off and call.' },
  ],
  pricing: {
    cost: 'Most common repairs land between $[XXX] and $[XXX]. What moves it is the part, the refrigerant type, and whether the system is still under manufacturer warranty. Anything over $[XXX] can be financed.',
    decision: "If the system is under 10 years old and the repair is under $[500], repair almost always wins. Past 15 years, on R-22, or over the $[5,000] rule, we'll tell you to stop spending money on it.",
  },
  faqs: [
    { q: 'How fast can you get here?', a: "Most repair calls are same day. If we can't get to you today we'll tell you when we book, not after you've waited." },
    { q: 'Do you charge extra nights and weekends?', a: 'No. The rate at 2am on a holiday is the rate at 2pm on a Tuesday.' },
    { q: 'Will you work on my brand of system?', a: "Yes — every major brand. Parts availability varies on discontinued models and we'll tell you upfront if that's a factor." },
    { q: "What's covered under the repair warranty?", a: '[1] year on parts we supply and the labor to install them. Manufacturer warranties on major components run separately and we register them for you.' },
    { q: 'Do I need to be home?', a: 'Someone over 18 needs to be there to authorize the work and give us access to the equipment.' },
  ],
  body: 'Air conditioning fails on the hottest day of the year, which is also the day every other company in the county is booked. We hold capacity in reserve through the summer specifically for that.',
};
