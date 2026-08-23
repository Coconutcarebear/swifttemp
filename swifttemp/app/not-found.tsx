import Link from 'next/link';
import { site } from '@/lib/site';

export default function NotFound() {
  return (
    <section className="band center">
      <div className="u narrow">
        <span className="eyebrow">404</span>
        <h1>That page isn&rsquo;t here</h1>
        <p className="lede" style={{ margin: '0 auto' }}>
          But we are. If something&rsquo;s broken at your place, calling is faster than looking.
        </p>
        <div className="btnrow" style={{ justifyContent: 'center', marginTop: 28 }}>
          <a className="btn btn-primary btn-lg" href={site.phoneHref}>Call {site.phone}</a>
          <Link className="btn btn-outline btn-lg" href="/">Back to home</Link>
        </div>
      </div>
    </section>
  );
}
