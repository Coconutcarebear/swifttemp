import type { Metadata } from 'next';
import Link from 'next/link';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Request received',
  robots: { index: false, follow: false },
};

export default function ThankYou() {
  return (
    <section className="band center">
      <div className="u narrow">
        <span className="eyebrow">Got it</span>
        <h1>We&rsquo;ve got your request</h1>
        <p className="lede" style={{ margin: '0 auto' }}>
          Someone from dispatch will call you back shortly. If it&rsquo;s urgent — no heat, no
          cooling, or water where it shouldn&rsquo;t be — calling is faster than waiting on us.
        </p>
        <div className="btnrow" style={{ justifyContent: 'center', marginTop: 28 }}>
          <a className="btn btn-primary btn-lg" href={site.phoneHref}>Call {site.phone}</a>
          <Link className="btn btn-outline btn-lg" href="/">Back to home</Link>
        </div>
      </div>
    </section>
  );
}
