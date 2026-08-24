import type { Metadata } from 'next';
import Link from 'next/link';
import ProofBar from '@/components/ProofBar';
import { site, licenseLine } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About SwiftTemp',
  description:
    'Licensed, insured HVAC for north Jersey homes and businesses. Background-checked technicians on our own payroll.',
  alternates: { canonical: `${site.url}/about` },
};

const techs = [
  { i: 'MR', n: '[M. Rivera]', r: '[Lead Technician]', y: '[9 years]', c: '[NATE]' },
  { i: 'DK', n: '[D. Kowalski]', r: '[Install Lead]', y: '[12 years]', c: '[EPA 608]' },
  { i: 'AT', n: '[A. Thomas]', r: '[Service Technician]', y: '[5 years]', c: '[NATE]' },
  { i: 'JL', n: '[J. Lopez]', r: '[Dispatch]', y: '[4 years]', c: '' },
];

/** Operational commitments, not values. "Integrity" is not a differentiator;
 *  a flat rate at 2am is. */
const commitments = [
  { t: 'One rate, around the clock', b: 'No overtime charge for nights, weekends, or holidays. The 2am price is the 2pm price.' },
  { t: 'Price before work', b: 'Written options before anything gets touched. You approve the number, not the invoice.' },
  { t: 'Our own technicians', b: 'On payroll, background-checked, and certified. We do not subcontract your house out.' },
  { t: 'We will tell you to stop', b: "When a repair isn't worth it, we say so — even though the repair is the easier sale." },
];

export default function About() {
  return (
    <>
      <section className="hero compact">
        <div className="u" style={{ display: 'block' }}>
          <span className="eyebrow">About</span>
          <h1>Built to show up</h1>
          <p className="lede">
            [Origin story goes here — specific, dated, and local. When the company started,
            what the founder did before, and why it exists. Two or three paragraphs, written
            from a fifteen-minute recorded conversation rather than a questionnaire.]
          </p>
        </div>
      </section>

      <section className="band">
        <div className="u">
          <div className="sec-head">
            <span className="eyebrow">How we work</span>
            <h2>Four things we commit to</h2>
          </div>
          <div className="grid g4">
            {commitments.map((c) => (
              <div className="card" key={c.t}><h3>{c.t}</h3><p>{c.b}</p></div>
            ))}
          </div>
        </div>
      </section>

      <ProofBar />

      {/* PHOTO DEPENDENCY: these become real portraits after a half-day shoot.
          If technician consent never arrives, cut this section rather than
          shipping stock photography of models — that undoes the whole point. */}
      <section className="band tint">
        <div className="u">
          <div className="sec-head">
            <span className="eyebrow">The team</span>
            <h2>The people who show up</h2>
          </div>
          <div className="grid g4">
            {techs.map((t) => (
              <div className="card" key={t.i} style={{ textAlign: 'center' }}>
                <div style={{
                  width: '100%', aspectRatio: '1', borderRadius: 10, display: 'grid',
                  placeItems: 'center', marginBottom: 14,
                  background: 'radial-gradient(120% 90% at 50% 0%,#CAEBFF 0%,#9FCDEA 55%,#5E8FBF 100%)',
                }}>
                  <span style={{
                    fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 42,
                    color: '#fff', opacity: 0.9,
                  }}>{t.i}</span>
                </div>
                <h3 style={{ fontSize: 17, marginBottom: 2 }}>{t.n}</h3>
                <p style={{ fontSize: 13.5, color: 'var(--muted)' }}>{t.r} · {t.y}</p>
                {t.c && <span className="pill" style={{ marginTop: 10, fontSize: 11 }}>{t.c}</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="band">
        <div className="u narrow center">
          <h2>Licensed and insured</h2>
          <p className="lede" style={{ margin: '0 auto' }}>{licenseLine()}</p>
          <p className="formnote" style={{ marginTop: 12 }}>
            Fully insured. Certificates available on request for commercial work.
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
