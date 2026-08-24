import type { Service } from '@/lib/services';

export const ductlessMiniSplits: Service = {
  slug: 'ductless-mini-splits',
  title: 'Ductless Mini-Splits',
  h1: 'Cooling and heat for houses that never had ductwork',
  subhead: 'The answer for pre-war homes, additions, converted attics, and rooms that were never comfortable.',
  metaTitle: 'Ductless Mini-Split Installation NJ | SwiftTemp',
  metaDescription:
    'Ductless mini-split installation across north Jersey. Ideal for older homes without ductwork, additions, and attic conversions.',
  summary: 'Mini-split design and installation for homes without ducts, plus zoning for problem rooms.',
  warranty: 'Up to [12]-year parts and labor',
  proof: [
    { n: '1 day', l: 'Typical single zone' },
    { n: 'No ducts', l: 'Required' },
    { n: '[12] yr', l: 'Max warranty' },
    { n: 'Rebates', l: 'Often available' },
  ],
  symptoms: [
    { title: 'No ductwork in the house', body: 'Common in pre-1940 north Jersey housing on steam or hot water. Mini-splits skip the problem entirely.' },
    { title: "A room that's always wrong", body: 'Attic conversion, addition, sunroom, garage office — a dedicated zone reaches what a central system cannot.' },
    { title: 'One thermostat, two climates', body: 'Upstairs at 80 while downstairs is at 68 is a distribution problem, not a capacity problem.' },
    { title: "Window units you're tired of", body: 'Quieter, far more efficient, and they heat as well as cool.' },
    { title: 'Heating without fossil fuel', body: 'Modern cold-climate heat pumps hold capacity well below freezing and qualify for rebates.' },
  ],
  pricing: {
    cost: 'A single zone typically runs $[X,XXX] to $[X,XXX] installed. Multi-zone systems scale from there. Line-set routing and electrical are the variables.',
    decision: 'Mini-splits win when adding ductwork would mean tearing up finished space. If usable duct runs already exist, a central system is usually the better value.',
  },
  faqs: [
    { q: 'How disruptive is the install?', a: 'One zone is typically a single day. We core a three-inch penetration per head and route the line set outside where possible.' },
    { q: 'Do they heat as well as cool?', a: 'Yes. Cold-climate models hold rated capacity into the single digits, which covers a north Jersey winter.' },
    { q: 'How many zones do I need?', a: 'It depends on layout and load, not square footage alone. We assess on site.' },
    { q: 'Are they loud?', a: 'Indoor heads run quieter than a refrigerator. The outdoor unit is quieter than a conventional condenser.' },
    { q: 'Do they qualify for rebates?', a: "Frequently, through [NJ Clean Energy] and federal efficiency credits. We'll tell you what applies before you commit." },
  ],
  body: 'Roughly a third of the housing stock in our service area predates central air entirely. Mini-splits are the reason those houses can be comfortable without gutting a wall.',
};
