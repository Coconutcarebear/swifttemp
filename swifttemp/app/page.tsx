import Link from 'next/link';
import ProofBar from '@/components/ProofBar';
import Dial from '@/components/Dial';
import { site } from '@/lib/site';
import { offer } from '@/lib/offers';
import { services } from '@/lib/services';

/**
 * Situation fork. Competitors sort the homepage by equipment type — that's an
 * org chart. Nobody thinks "I need the heating department"; they think "it's
 * 40 degrees in here." These four map to the three residential audiences plus
 * commercial.
 */
const situations = [
  {
    cls: 'card hot',
    stroke: '#B2111C',
    d: 'M12 2 3 14h7l-1 8 9-12h-7z',
    title: "Nothing's working",
    body: "No heat, no cooling, or water where it shouldn't be. This is the fastest path to a truck.",
    cta: 'Get help now',
    href: '/contact?service=Emergency',
  },
  {
    cls: 'card',
    stroke: '#027DD6',
    d: 'M3 10.5 12 3l9 7.5M5 10v10h14V10M9.5 20v-6h5v6',
    title: "It's time to replace",
    body: 'Old system, rising bills, one repair too many. Free in-home estimate, no pressure.',
    cta: 'Book an estimate',
    href: '/services/system-replacement',
  },
  {
    cls: 'card',
    stroke: '#027DD6',
    d: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18M12 7v5l3.5 2',
    title: 'Keep it running',
    body: "Seasonal tune-ups, priority service when it's 12° out, and no diagnostic fees.",
    cta: 'See plans',
    href: '/maintenance-plans',
  },
  {
    cls: 'card accent',
    stroke: '#1B2D60',
    d: 'M4 21V6l8-3v18M12 10h8v11',
    title: 'I manage a building',
    body: 'Commercial service, retrofits, and preventive maintenance contracts across north Jersey.',
    cta: 'Commercial services',
    href: '/commercial',
  },
];

const techs = [
  { i: 'MR', n: '[M. Rivera]', r: '[Lead Technician · 9 yrs]' },
  { i: 'DK', n: '[D. Kowalski]', r: '[Install Lead · 12 yrs]' },
  { i: 'AT', n: '[A. Thomas]', r: '[Service Tech · 5 yrs]' },
];

const propertyTypes = [
  'Office + flex', 'Retail + restaurant', 'Multi-family', 'Warehouse + industrial',
  'Medical + dental', 'Schools + daycare', 'Property portfolios',
];

export default function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="u">
          <div>
            <span className="eyebrow">Residential + Commercial HVAC · New Jersey</span>
            <h1>Same-day service, or we <em>call you</em> before you have to call us.</h1>
            <p className="sub">
              Repairs, replacements, and maintenance for homes and businesses across north Jersey.
              Licensed, background-checked technicians — and a real arrival window, not a
              four-hour guess.
            </p>
            <div className="btnrow">
              <a className="btn btn-primary btn-lg" href={site.phoneHref}>Call {site.phone}</a>
              <Link className="btn btn-outline btn-lg" href="/contact">Request service</Link>
            </div>
            <div className="pillrow" style={{ marginTop: 26 }}>
              <span className="pill">24/7 emergency service</span>
              <span className="pill">No overtime charges</span>
              <span className="pill">Upfront pricing, always</span>
            </div>
          </div>
          <Dial />
        </div>
      </section>

      {/* ===== OFFER BAR =====
          This is Horizon's H1, demoted to where it belongs. A promo in the
          headline converts this quarter and builds nothing. */}
      {offer.active && (
        <div className="offer">
          <div className="u">
            <div className="txt">
              <span
                className="big"
                dangerouslySetInnerHTML={{
                  __html: offer.headline.replace(offer.highlight, `<u>${offer.highlight}</u>`),
                }}
              />
              <span className="fine">{offer.fine}</span>
            </div>
            <Link className="btn btn-outline-light" href={offer.ctaHref}>{offer.ctaLabel}</Link>
          </div>
        </div>
      )}

      {/* ===== SITUATION FORK ===== */}
      <section className="band">
        <div className="u">
          <div className="sec-head center">
            <span className="eyebrow">Start here</span>
            <h2>What&rsquo;s going on?</h2>
            <p className="lede" style={{ margin: '0 auto' }}>
              Tell us where you are and we&rsquo;ll get you to the right place — not to a menu
              of departments.
            </p>
          </div>
          <div className="grid g4">
            {situations.map((s) => (
              <div className={s.cls} key={s.title}>
                <div className="ic">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={s.stroke}
                       strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d={s.d} />
                  </svg>
                </div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
                <Link className="go" href={s.href}>{s.cta} →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProofBar />

      {/* ===== SERVICES ===== */}
      <section className="band tint">
        <div className="u">
          <div className="sec-head">
            <span className="eyebrow">What we do</span>
            <h2>Everything that heats, cools, or moves air in your building</h2>
          </div>
          <div className="grid g4">
            {services.map((s) => (
              <div className="card" key={s.slug}>
                <h3>{s.title}</h3>
                <p>{s.summary}</p>
                <Link className="go" href={`/services/${s.slug}`}>
                  Explore {s.title.toLowerCase()} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TECHNICIANS =====
          None of the recognizable competitors put faces on the homepage.
          Cheapest differentiation available — but it depends on technician
          consent and a photo shoot. If that never happens, replace this with
          an "our standards" module rather than shipping placeholder people. */}
      <section className="band">
        <div className="u">
          <div className="split wide-l">
            <div>
              <span className="eyebrow">The people</span>
              <h2>You&rsquo;ll know who&rsquo;s coming before they knock</h2>
              <p className="lede">
                Every {site.shortName} technician is background-checked, [NATE]-certified, and on
                our payroll — not a subcontractor picked up for the afternoon. You get a name,
                a photo, and a text when they&rsquo;re on the way.
              </p>
              <p style={{ marginTop: 22 }}>
                <Link className="btn btn-navy" href="/about">Meet the team</Link>
              </p>
            </div>
            <div className="grid g3" style={{ gap: 16 }}>
              {techs.map((t) => (
                <div className="card" key={t.i} style={{ textAlign: 'center', padding: '20px 14px' }}>
                  <div style={{
                    width: '100%', aspectRatio: '1', borderRadius: 10, display: 'grid',
                    placeItems: 'center', marginBottom: 12,
                    background: 'radial-gradient(120% 90% at 50% 0%,#CAEBFF 0%,#9FCDEA 55%,#5E8FBF 100%)',
                  }}>
                    <span style={{
                      fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 38,
                      color: '#fff', opacity: 0.9,
                    }}>{t.i}</span>
                  </div>
                  <h3 style={{ fontSize: 16, marginBottom: 2 }}>{t.n}</h3>
                  <p style={{ fontSize: 13, color: 'var(--muted)' }}>{t.r}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== COMMERCIAL ===== */}
      <section className="band comm">
        <div className="u">
          <div className="split">
            <div>
              <span className="eyebrow on-dark">Commercial + light industrial</span>
              <h2>Your building doesn&rsquo;t get to have a bad day</h2>
              <p className="lede" style={{ color: 'rgba(232,245,255,.85)' }}>
                Preventive maintenance contracts, emergency response, and equipment
                replacement for commercial properties across New Jersey.
              </p>
              <div className="btnrow" style={{ marginTop: 26 }}>
                <Link className="btn btn-primary" href="/contact?type=commercial">
                  Request a site assessment
                </Link>
                <Link className="btn btn-outline-light" href="/commercial">Commercial services</Link>
              </div>
            </div>
            <div className="grid g2" style={{ gap: 11 }}>
              {propertyTypes.map((t) => (
                <div className="ctype" key={t}><span />{t}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="band iceband center">
        <div className="u" style={{ maxWidth: 760 }}>
          <span className="eyebrow">Let&rsquo;s get you comfortable</span>
          <h2>Too hot, too cold, or too expensive? Let&rsquo;s fix it.</h2>
          <p className="lede" style={{ margin: '0 auto' }}>
            Licensed, insured, and answering the phone right now — including nights, weekends,
            and holidays, at no extra charge.
          </p>
          <div className="btnrow" style={{ justifyContent: 'center', marginTop: 28 }}>
            <a className="btn btn-primary btn-lg" href={site.phoneHref}>Call {site.phone}</a>
            <Link className="btn btn-outline btn-lg" href="/contact">Request service</Link>
          </div>
        </div>
      </section>
    </>
  );
}
