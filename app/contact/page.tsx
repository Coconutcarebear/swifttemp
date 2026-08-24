import type { Metadata } from 'next';
import LeadForm from '@/components/LeadForm';
import { site, fullAddress, licenseLine } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact SwiftTemp',
  description:
    'Request HVAC service across north Jersey. 24/7 emergency response, no overtime charges. Call (973) 000-0000.',
  alternates: { canonical: `${site.url}/contact` },
};

export default async function Contact({
  searchParams,
}: {
  searchParams: Promise<{ service?: string; type?: string; error?: string }>;
}) {
  const sp = await searchParams;
  const commercial = sp.type === 'commercial';

  return (
    <section className="band">
      <div className="u">
        <div className="split">
          <div>
            <span className="eyebrow">Contact</span>
            <h1 style={{ fontSize: 'clamp(32px,4.4vw,54px)' }}>
              {commercial ? 'Request a site assessment' : 'Tell us what’s going on'}
            </h1>
            <p className="lede">
              {commercial
                ? 'One account manager, one number, and a written scope before anything starts.'
                : 'Fill this out and dispatch calls you back. If it’s urgent, calling is faster.'}
            </p>

            <div className="card" style={{ marginTop: 28 }}>
              <h3>Reach us</h3>
              <p>
                <a href={site.phoneHref}><strong>{site.phone}</strong></a> — answered 24/7<br />
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </p>
              <h3 style={{ marginTop: 22 }}>Shop</h3>
              <p>{fullAddress()}</p>
              <h3 style={{ marginTop: 22 }}>Licensed</h3>
              <p style={{ fontSize: 14 }}>{licenseLine()}<br />Fully licensed, bonded, and insured.</p>
            </div>
          </div>

          <div>
            <LeadForm
              service={sp.service}
              commercial={commercial}
              error={sp.error}
              heading={commercial ? 'Commercial enquiry' : 'Request service'}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
