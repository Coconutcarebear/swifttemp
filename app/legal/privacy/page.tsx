import type { Metadata } from 'next';
import { site, fullAddress } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  alternates: { canonical: `${site.url}/legal/privacy` },
};

/**
 * PLACEHOLDER. This is scaffolding, not legal advice, and it must be reviewed
 * by the client's attorney before launch — particularly around NJ consumer
 * protection and any call-recording disclosure if call tracking is added.
 */
export default function Privacy() {
  return (
    <section className="band">
      <div className="u narrow">
        <span className="eyebrow">Legal</span>
        <h1>Privacy Policy</h1>
        <p className="formnote">Last updated: [DATE] · Draft for attorney review.</p>

        <div className="prose" style={{ marginTop: 30 }}>
          <h3>What we collect</h3>
          <p>When you submit a service request we collect your name, phone number, and any email address, service address, and details you choose to provide. We also collect standard analytics data about how the site is used.</p>

          <h3>How we use it</h3>
          <p>To contact you about the service you requested, to schedule and perform work, and to keep records of jobs. We do not sell your information.</p>

          <h3>Who we share it with</h3>
          <p>[Service providers that operate this site and our business: hosting, database, email delivery, analytics, and any dispatch software. List them here once confirmed.]</p>

          <h3>Cookies and analytics</h3>
          <p>[Describe the analytics in use and any consent mechanism.]</p>

          <h3>Your choices</h3>
          <p>[Rights to access, correct, or delete, and how to exercise them under applicable New Jersey and federal law.]</p>

          <h3>Contact</h3>
          <p>{site.name}<br />{fullAddress()}<br /><a href={`mailto:${site.email}`}>{site.email}</a> · <a href={site.phoneHref}>{site.phone}</a></p>
        </div>
      </div>
    </section>
  );
}
