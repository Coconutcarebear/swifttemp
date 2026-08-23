import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `HVAC Repair & Installation in North Jersey | ${site.shortName}`,
    template: `%s | ${site.shortName}`,
  },
  description:
    'Licensed HVAC for homes and businesses across north Jersey. Upfront pricing, no overtime charges, 24/7 emergency service.',
  openGraph: { type: 'website', siteName: site.name, locale: 'en_US' },
  robots: { index: true, follow: true },
};

function localBusinessSchema() {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'HVACBusiness',
    name: site.name,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    areaServed: site.areaServed.map((a) => ({ '@type': 'AdministrativeArea', name: a })),
    openingHoursSpecification: site.hours.spec.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
  };

  // Fabricated ratings are a structured-data violation. Only emit when real.
  if (site.rating.verified) {
    schema.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: site.rating.value,
      reviewCount: site.rating.count,
    };
  }
  return schema;
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Source+Sans+3:wght@400;600;700&family=Source+Serif+4:opsz,wght@8..60,400;8..60,600&display=swap"
        />
        <JsonLd data={localBusinessSchema()} />
      </head>
      <body>
        <a className="skip" href="#main">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />

        {/* Phone-first: present on every page at every scroll position. */}
        <div className="msticky">
          <a className="btn btn-primary" href={site.phoneHref}>Call now</a>
          <Link className="btn btn-outline-light" href="/contact">Request service</Link>
        </div>
      </body>
    </html>
  );
}
