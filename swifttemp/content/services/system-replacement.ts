import type { Service } from '@/lib/services';

export const systemReplacement: Service = {
  slug: 'system-replacement',
  title: 'System Replacement',
  h1: 'A new system, priced honestly and installed properly',
  subhead: 'Free in-home estimate, three written options, and financing from $[106]/mo on qualifying systems.',
  metaTitle: 'HVAC System Replacement North Jersey | SwiftTemp',
  metaDescription:
    'AC and furnace replacement across north Jersey. Written options, honest sizing, financing available, up to [12]-year warranty.',
  summary: 'Full system replacement for AC, furnaces, and heat pumps — sized by load calculation, not guesswork.',
  warranty: 'Up to [12]-year parts and labor',
  proof: [
    { n: 'Free', l: 'In-home estimate' },
    { n: '[12] yr', l: 'Max warranty' },
    { n: '[1–2] days', l: 'Typical install' },
    { n: 'Financing', l: 'From $[106]/mo' },
  ],
  symptoms: [
    { title: 'Over 15 years old', body: 'Efficiency has dropped and parts are getting scarce. Worth pricing before it fails in August.' },
    { title: 'Repairs adding up', body: "If annual repairs approach a third of replacement cost, you're renting a dying system." },
    { title: 'Running on R-22', body: 'The refrigerant is phased out. Recharges have gotten expensive and will keep getting worse.' },
    { title: 'Rooms that never match', body: 'Often a system that was never load-calculated in the first place.' },
    { title: 'Bills climbing every year', body: "Same usage, higher cost, usually means efficiency loss the system won't recover." },
  ],
  pricing: {
    cost: 'A full changeout typically runs $[X,XXX] to $[XX,XXX] depending on capacity, efficiency tier, and whether ductwork needs modification. You get written options at three price points, not one number.',
    decision: "We size with a load calculation, not by matching whatever was there before. A wrong-sized system is the most common defect we find in other companies' installs, and it can't be fixed later without replacing it again.",
  },
  faqs: [
    { q: 'How long does an install take?', a: 'Most residential changeouts are one day. Two if ductwork or electrical needs modification.' },
    { q: 'Will you give me options, or one price?', a: 'Three written options — good, better, best — with the efficiency and warranty differences spelled out. You pick.' },
    { q: 'Are there rebates available?', a: 'Often, through [NJ Clean Energy] and manufacturer promotions. We handle the paperwork and it stacks with financing.' },
    { q: 'Do you size the system properly?', a: 'We run a load calculation on the actual house. Replacing like-for-like without checking is how homes end up short cycling for twenty years.' },
    { q: 'What warranty do I get?', a: 'Up to [12] years parts and labor on qualifying systems, registered by us so you never lose coverage on a technicality.' },
  ],
  body: 'Replacement is the largest single purchase most homeowners make for their house short of a roof. The estimate is free, the options are written, and nobody follows up with pressure.',
};
