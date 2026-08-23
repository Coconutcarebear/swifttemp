export interface Service {
  slug: string;
  title: string;
  h1: string;
  subhead: string;
  metaTitle: string;
  metaDescription: string;
  summary: string;
  warranty: string;
  proof: { n: string; l: string }[];
  symptoms: { title: string; body: string }[];
  pricing: { cost: string; decision: string };
  faqs: { q: string; a: string }[];
  body: string;
}

import { acRepair } from '@/content/services/ac-repair';
import { heatingRepair } from '@/content/services/heating-repair';
import { systemReplacement } from '@/content/services/system-replacement';
import { ductlessMiniSplits } from '@/content/services/ductless-mini-splits';

export const services: Service[] = [
  acRepair,
  heatingRepair,
  systemReplacement,
  ductlessMiniSplits,
];

export const getService = (slug: string): Service | undefined =>
  services.find((s) => s.slug === slug);

/**
 * Publish rule, enforced at build time rather than in a style guide nobody
 * reads: a service page ships with at least four symptoms, four FAQs, four
 * proof stats, and a meta description inside Google's display limit.
 */
for (const s of services) {
  if (s.faqs.length < 4) throw new Error(`[content] ${s.slug}: needs at least 4 FAQs`);
  if (s.symptoms.length < 4) throw new Error(`[content] ${s.slug}: needs at least 4 symptoms`);
  if (s.proof.length !== 4) throw new Error(`[content] ${s.slug}: needs exactly 4 proof stats`);
  if (s.metaDescription.length > 155) throw new Error(`[content] ${s.slug}: meta description over 155 chars`);
  if (s.metaTitle.length > 60) throw new Error(`[content] ${s.slug}: meta title over 60 chars`);
}
