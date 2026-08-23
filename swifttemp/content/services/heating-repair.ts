import type { Service } from '@/lib/services';

export const heatingRepair: Service = {
  slug: 'heating-repair',
  title: 'Heating Repair',
  h1: 'Heating repair when the house is already cold',
  subhead: 'Furnaces, boilers, and heat pumps. $[79] diagnostic, waived when you book the repair.',
  metaTitle: 'Heating & Furnace Repair North Jersey | SwiftTemp',
  metaDescription:
    'Same-day furnace, boiler, and heat pump repair across north Jersey. Upfront pricing, no overtime charges.',
  summary: 'Furnace, boiler, and heat pump diagnostics and repair, including older steam systems.',
  warranty: '[1]-year repair warranty',
  proof: [
    { n: 'Same day', l: 'Most calls' },
    { n: '[NATE]', l: 'Certified' },
    { n: '[1] yr', l: 'Repair warranty' },
    { n: '24/7', l: 'No overtime' },
  ],
  symptoms: [
    { title: 'No heat at all', body: 'Ignition, thermocouple, control board, or a tripped safety doing its job.' },
    { title: 'Short cycling', body: 'On and off every few minutes usually means a restricted filter or a failing flame sensor.' },
    { title: 'Cold air from the vents', body: "The blower is running but combustion isn't. Often ignition or gas supply." },
    { title: 'Banging radiators', body: 'Trapped condensate in a steam system. Common in pre-war north Jersey housing and usually fixable.' },
    { title: 'Burning smell on first start', body: 'Normal for the first hour of the season. Persistent means stop and call.' },
    { title: 'Carbon monoxide alarm', body: 'Leave the building and call the fire department first, then call us.' },
  ],
  pricing: {
    cost: 'Common repairs run $[XXX] to $[XXX]. Older boilers and discontinued parts push the top of that range. Financing is available over $[XXX].',
    decision: "A furnace past 18 years with a cracked heat exchanger is a replacement, not a repair — that's a safety call, not a sales one. Under 12 years, repair is usually the right answer.",
  },
  faqs: [
    { q: 'Do you work on steam and hot-water boilers?', a: "Yes. A lot of the housing stock here is pre-war and still on original distribution, and plenty of companies won't touch it." },
    { q: 'How fast can you get here when there is no heat?', a: 'No-heat calls are triaged ahead of everything else in winter. Most are same day.' },
    { q: 'Do you charge extra nights and weekends?', a: 'No. Same rate around the clock, holidays included.' },
    { q: 'Should I keep resetting the furnace?', a: 'No. A lockout is a safety control telling you something is wrong. Repeated resets can turn a small repair into a large one.' },
  ],
  body: 'Heat fails in a cold snap, when every system in the county is under load at once. No-heat calls get triaged ahead of everything else from November through March.',
};
