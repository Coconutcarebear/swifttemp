import type { Metadata } from 'next';
import Link from 'next/link';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'HVAC Maintenance Plans',
  description:
    'Two seasonal tune-ups a year, priority service, no diagnostic fees. Membership plans for north Jersey homes.',
  alternates: { canonical: `${site.url}/maintenance-plans` },
};

/**
 * Usually the most valuable URL on an HVAC site — the only page selling
 * recurring revenue. It gets its own template, not a homepage section.
 *
 * NAMING: the plan needs a real name. Both major competitors use "Comfort360".
 * Placeholder below; naming it is a brand deliverable, not a copy afterthought.
 */
export default function Plans() {
  return (
    <>
      <section className="hero compact">
        <div className="u" style={{ display: 'block' }}>
          <span className="eyebrow">Maintenance plans</span>
          <h1>Stop finding out in August</h1>
          <p className="lede">
            Most systems don&rsquo;t fail suddenly. They fail on the first genuinely hot day, after
            a year of nobody looking at them.
          </p>
        </div>
      </section>

      <section className="band">
        <div className="u">
          <div className="grid g2">
            <div className="plan feat">
              <span className="eyebrow on-dark">[SwiftTemp Comfort Club]</span>
              <h3>Two visits a year, priority when it counts</h3>
              <div className="price">$[29]<small>/month</small></div>
              <p style={{ fontSize: 15 }}>Cancel anytime. Covers one system; add units at $[9]/mo.</p>
              <ul>
                <li>Two seasonal tune-ups, scheduled for you</li>
                <li>[15]% off every repair</li>
                <li>No diagnostic fee, ever</li>
                <li>Front of the line on the hottest and coldest days of the year</li>
                <li>Written condition report after each visit</li>
              </ul>
              <Link className="btn btn-primary btn-lg" href="/contact?service=Maintenance%20plan">
                Join the plan
              </Link>
            </div>

            <div className="plan">
              <span className="eyebrow">Financing</span>
              <h3>A new system doesn&rsquo;t have to be a five-figure day</h3>
              <div className="price">$[106]<small>/month</small></div>
              <p style={{ fontSize: 15 }}>On qualifying systems. Approved in minutes, subject to credit.</p>
              <ul>
                <li>Terms up to [XX] months through [partner]</li>
                <li>Soft credit check — no impact to apply</li>
                <li>Stacks with [NJ Clean Energy] rebates</li>
                <li>Up to [12]-year parts and labor warranty</li>
              </ul>
              <Link className="btn btn-outline btn-lg" href="/contact?service=System%20replacement">
                Check your rate
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="band tint">
        <div className="u narrow">
          <div className="sec-head"><span className="eyebrow">The visit</span><h2>What a tune-up actually covers</h2></div>
          <div className="faq">
            <details><summary>Cooling season</summary><div className="a">[Refrigerant charge, coil condition, capacitor test, amp draw, condensate drain, filter, thermostat calibration, electrical connections.]</div></details>
            <details><summary>Heating season</summary><div className="a">[Heat exchanger inspection, combustion analysis, flame sensor, ignition, gas pressure, blower, safety controls, CO test.]</div></details>
            <details><summary>What you get afterwards</summary><div className="a">A written condition report — what&rsquo;s fine, what&rsquo;s wearing, and what will need attention within a year. No verbal-only diagnoses.</div></details>
            <details><summary>Can I cancel?</summary><div className="a">Any time, no fee. We&rsquo;d rather you stay because it&rsquo;s worth it.</div></details>
          </div>
          <div className="btnrow" style={{ justifyContent: 'center', marginTop: 30 }}>
            <a className="btn btn-primary btn-lg" href={site.phoneHref}>Call {site.phone}</a>
          </div>
        </div>
      </section>
    </>
  );
}
