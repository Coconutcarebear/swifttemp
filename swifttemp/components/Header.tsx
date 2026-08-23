'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { site } from '@/lib/site';
import { primaryNav } from '@/lib/nav';

export default function Header() {
  const path = usePathname();

  return (
    <>
      <div className="util">
        <div className="u">
          <span>
            <span className="star">★★★★★</span> <b>{site.rating.value}</b> · {site.rating.count} Google reviews
          </span>
          <span>Serving {site.areaServed.map((a) => a.replace(' County', '')).join(' · ')}</span>
          {/* Legally required in NJ advertising — N.J.A.C. 13:32A-5.1 */}
          <span>{site.license.label}<b>{site.license.number}</b></span>
        </div>
      </div>

      <header className="site">
        <div className="u hd">
          {/* LOGO SLOT — drop the production SwiftTemp SVG lockup here.
              Wordmark runs alone until the real file arrives. */}
          <Link className="brand" href="/">
            <span>
              <span className="wm">Swift<em>Temp</em></span>
              <span className="tl">{site.tagline}</span>
            </span>
          </Link>

          <nav className="nav" aria-label="Primary">
            {primaryNav.map((i) => (
              <Link
                key={i.href}
                href={i.href}
                aria-current={path === i.href || path.startsWith(i.href + '/') ? 'page' : undefined}
              >
                {i.label}
              </Link>
            ))}
          </nav>

          <div className="hd-cta">
            <a className="phone" href={site.phoneHref}>
              {site.phone}
              <small>24/7 · No overtime fees</small>
            </a>
            <Link className="btn btn-primary" href="/contact">Request Service</Link>
          </div>
        </div>
      </header>
    </>
  );
}
