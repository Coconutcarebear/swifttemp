import type { Metadata } from 'next';
import Link from 'next/link';
import ProofBar from '@/components/ProofBar';
import { services } from '@/lib/services';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'HVAC Services in North Jersey',
  description:
    'AC repair, heating repair, system replacement, and ductless mini-splits across north Jersey. Licensed technicians, upfront pricing.',
  alternates: { canonical: `${site.url}/services` },
};

export default function ServicesIndex() {
  return (
    <>
      <section className="hero compact">
        <div className="u" style={{ display: 'block' }}>
          <span className="eyebrow">Services</span>
          <h1>Everything that heats, cools, or moves air</h1>
          <p className="lede">
            Four things we do, done properly, rather than twenty listed on a page. If you need
            something that isn&rsquo;t here, call and ask — the answer is usually yes.
          </p>
        </div>
      </section>

      <section className="band">
        <div className="u">
          <div className="grid g2">
            {services.map((s) => (
              <div className="card" key={s.slug}>
                <h3 style={{ fontSize: 22 }}>{s.title}</h3>
                <p>{s.summary}</p>
                <div className="pillrow" style={{ marginTop: 14 }}>
                  {s.proof.slice(0, 3).map((p) => (
                    <span className="pill" key={p.l}><strong>{p.n}</strong> {p.l}</span>
                  ))}
                </div>
                <Link className="go" href={`/services/${s.slug}`}>Explore {s.title.toLowerCase()} →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProofBar />

      <section className="band iceband center">
        <div className="u narrow">
          <h2>Not sure which one you need?</h2>
          <p className="lede" style={{ margin: '0 auto' }}>
            Describe what the system is doing and we&rsquo;ll tell you. No charge for the conversation.
          </p>
          <div className="btnrow" style={{ justifyContent: 'center', marginTop: 26 }}>
            <a className="btn btn-primary btn-lg" href={site.phoneHref}>Call {site.phone}</a>
            <Link className="btn btn-outline btn-lg" href="/contact">Request service</Link>
          </div>
        </div>
      </section>
    </>
  );
}
