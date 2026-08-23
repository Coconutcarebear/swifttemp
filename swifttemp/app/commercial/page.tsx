import type { Metadata } from 'next';
import Link from 'next/link';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Commercial HVAC in North Jersey',
  description:
    'Preventive maintenance contracts, emergency response, and equipment replacement for commercial properties across north Jersey.',
  alternates: { canonical: `${site.url}/commercial` },
};

const types = [
  'Office + flex', 'Retail + restaurant', 'Multi-family', 'Warehouse + light industrial',
  'Houses of worship', 'Medical + dental', 'Schools + daycare', 'Property management portfolios',
];

const contracts = [
  { t: 'Preventive maintenance', b: 'Scheduled quarterly or semi-annual service, documented, with asset-level history per unit.' },
  { t: 'Emergency response', b: '[4]-hour response for contract customers. 24/7, holidays included.' },
  { t: 'Replacement + retrofit', b: 'RTUs, splits, and VRF. Phased around your operating hours, not ours.' },
];

export default function Commercial() {
  return (
    <>
      {/* A facility manager is not a homeowner in a hurry. Longer cycle,
          contract-shaped relationship, and the deciding question is "can you
          handle my portfolio" — not "can you come today." Hence the CTA shift:
          nobody books a commercial contract through a calendar widget. */}
      <section className="band comm">
        <div className="u">
          <div className="split">
            <div>
              <span className="eyebrow on-dark">Commercial + light industrial HVAC · New Jersey</span>
              <h1 style={{ color: '#fff', fontSize: 'clamp(32px,4.6vw,58px)' }}>
                Your building doesn&rsquo;t get to have a bad day
              </h1>
              <p className="lede" style={{ color: 'rgba(232,245,255,.85)' }}>
                Preventive maintenance contracts, emergency response, and equipment replacement
                for [200]+ commercial properties across north Jersey. One account manager,
                one number, [4]-hour emergency response.
              </p>
              <div className="btnrow" style={{ marginTop: 26 }}>
                <Link className="btn btn-primary btn-lg" href="/contact?type=commercial">
                  Request a site assessment
                </Link>
                <a className="btn btn-outline-light btn-lg" href={site.phoneHref}>
                  Call {site.phone}
                </a>
              </div>
            </div>
            <div className="grid g2" style={{ gap: 11 }}>
              {types.map((t) => <div className="ctype" key={t}><span />{t}</div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="band" id="contracts">
        <div className="u">
          <div className="sec-head">
            <span className="eyebrow">How we work with buildings</span>
            <h2>Contracts, not call-outs</h2>
          </div>
          <div className="grid g3">
            {contracts.map((c) => (
              <div className="card" key={c.t}><h3>{c.t}</h3><p>{c.b}</p></div>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial buyers want insurance limits and a safety record, not star
          ratings. Entirely different proof vocabulary from residential. */}
      <section className="band tint">
        <div className="u">
          <div className="sec-head"><span className="eyebrow">Proof</span><h2>What you&rsquo;ll want to see</h2></div>
          <div className="grid g2">
            <div className="card">
              <h3>Case studies</h3>
              <p>
                [Two at launch: property type, the problem, what we did, and a measurable
                result — energy, downtime, or cost.]
              </p>
            </div>
            <div className="card">
              <h3>Credentials</h3>
              <p>
                [License, insurance limits, bonding, EPA certifications, manufacturer
                authorizations, and safety record.]
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="band iceband center">
        <div className="u narrow">
          <h2>Let&rsquo;s walk the building</h2>
          <p className="lede" style={{ margin: '0 auto' }}>
            No charge for the assessment, and you get a written scope before anything starts.
          </p>
          <div className="btnrow" style={{ justifyContent: 'center', marginTop: 26 }}>
            <Link className="btn btn-primary btn-lg" href="/contact?type=commercial">
              Request a site assessment
            </Link>
            <a className="btn btn-outline btn-lg" href={site.phoneHref}>Call {site.phone}</a>
          </div>
        </div>
      </section>
    </>
  );
}
