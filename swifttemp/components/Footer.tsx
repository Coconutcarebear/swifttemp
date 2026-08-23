import Link from 'next/link';
import { site, fullAddress, licenseLine } from '@/lib/site';
import { footerNav } from '@/lib/nav';

export default function Footer() {
  return (
    <footer className="site">
      <div className="u">
        <div className="fgrid">
          <div className="fbrand">
            <span className="wm">Swift<em>Temp</em></span>
            <span className="tl">{site.tagline}</span>
            <p style={{ marginTop: 18, fontSize: 14, lineHeight: 1.65 }}>
              Licensed HVAC for homes and businesses across north Jersey. Upfront pricing,
              no overtime charges.
            </p>
            <Link className="btn btn-primary" style={{ marginTop: 14 }} href="/contact">
              Request Service
            </Link>
          </div>

          {Object.entries(footerNav).map(([heading, links]) => (
            <div key={heading}>
              <h4>{heading}</h4>
              <ul>
                {links.map((l) => (
                  <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="u">
        <div className="legal">
          {/* NAP block — must match the Google Business Profile character-for-character. */}
          <b>{site.name}</b> · {fullAddress()} · <a href={site.phoneHref}>{site.phone}</a>
          <br />
          <b>{licenseLine()}</b> · Fully licensed, bonded, and insured
          <br />
          © 2026 {site.name} · <Link href="/legal/privacy">Privacy Policy</Link> ·{' '}
          <Link href="/legal/terms">Terms of Service</Link>
        </div>
      </div>
      <div className="tempbar" />
    </footer>
  );
}
