import type { Metadata } from 'next';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Terms of Service',
  alternates: { canonical: `${site.url}/legal/terms` },
};

/** PLACEHOLDER — draft scaffolding for attorney review, not legal advice. */
export default function Terms() {
  return (
    <section className="band">
      <div className="u narrow">
        <span className="eyebrow">Legal</span>
        <h1>Terms of Service</h1>
        <p className="formnote">Last updated: [DATE] · Draft for attorney review.</p>

        <div className="prose" style={{ marginTop: 30 }}>
          <h3>Using this site</h3>
          <p>[Standard site terms.]</p>

          <h3>Estimates and pricing</h3>
          <p>[Prices shown are indicative. Written estimates govern. Diagnostic fee terms, financing disclosures, and any promotional conditions.]</p>

          <h3>Service and warranty</h3>
          <p>[Repair warranty terms, manufacturer warranty registration, and what voids coverage.]</p>

          <h3>Licensing</h3>
          <p>{site.license.holder}, {site.license.label}{site.license.number}. [Confirm with counsel whether NJ Home Improvement Contractor registration also applies to residential work.]</p>

          <h3>Contact</h3>
          <p><a href={`mailto:${site.email}`}>{site.email}</a> · <a href={site.phoneHref}>{site.phone}</a></p>
        </div>
      </div>
    </section>
  );
}
