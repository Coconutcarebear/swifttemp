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
          <span><b>24/7</b> emergency service · no overtime charges</span>
          <span>Serving {site.areaServed.map((a) => a.replace(' County', '')).join(' · ')}</span>
          {/* Legally required in NJ advertising — N.J.A.C. 13:32A-5.1 */}
          <span>{site.license.label}<b>{site.license.number}</b></span>
        </div>
      </div>

      <header className="site">
        <div className="u hd">
          <Link className="brand" href="/" aria-label={`${site.name} home`}>
            {/* Replace with the vector lockup when the SVG arrives — this is the
                supplied raster at 2.4x for retina. */}
            <img src="/logo.png" alt={site.name} width={535} height={160} />
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
