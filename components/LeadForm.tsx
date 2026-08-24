import Script from 'next/script';
import { site } from '@/lib/site';

interface Props {
  service?: string;
  commercial?: boolean;
  heading?: string;
  error?: string;
}

const ERRORS: Record<string, string> = {
  verify: "We couldn't verify that submission. Refresh and try again — or just call, it's faster.",
  missing: 'We need at least a name and a phone number to call you back.',
  server: "Something broke on our end. Please call us directly — we don't want to lose your request.",
};

/**
 * Deliberately a plain <form method="POST">, not a client component with
 * fetch(). The moment this form gets used is someone on bad LTE standing next
 * to a dead furnace — it has to submit with JavaScript disabled or broken.
 * Turnstile enhances it when JS is available; the honeypot covers the rest.
 */
export default function LeadForm({
  service = '',
  commercial = false,
  heading = 'Request service',
  error,
}: Props) {
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? '1x00000000000000000000AA';

  const options = commercial
    ? ['Preventive maintenance contract', 'Emergency service', 'Replacement or retrofit', 'Site assessment', 'Something else']
    : ['AC repair', 'Heating repair', 'System replacement', 'Ductless mini-splits', 'Maintenance plan', 'Something else'];

  return (
    <>
      <form className="form" method="POST" action="/api/lead" id="form">
        <h2 style={{ fontSize: 'clamp(24px,3vw,34px)' }}>{heading}</h2>

        {error && <div className="errbox" role="alert">{ERRORS[error] ?? ERRORS.server}</div>}

        {/* Honeypot. Bots fill it, humans never see it. */}
        <div className="hp" aria-hidden="true">
          <label htmlFor="company_website">Leave this field empty</label>
          <input type="text" id="company_website" name="company_website" tabIndex={-1} autoComplete="off" />
        </div>

        <input type="hidden" name="lead_type" value={commercial ? 'commercial' : 'residential'} />
        <input type="hidden" name="source_path" value={commercial ? '/contact?type=commercial' : '/contact'} />

        <div className="form-row">
          <div className="field">
            <label htmlFor="name">Name <span className="req" aria-hidden="true">*</span></label>
            <input id="name" name="name" type="text" required autoComplete="name" />
          </div>
          <div className="field">
            <label htmlFor="phone">Phone <span className="req" aria-hidden="true">*</span></label>
            <input id="phone" name="phone" type="tel" required autoComplete="tel" inputMode="tel" />
            <div className="hint">The fastest way for us to reach you.</div>
          </div>
        </div>

        <div className="form-row">
          <div className="field">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" autoComplete="email" />
          </div>
          <div className="field">
            <label htmlFor="address">Service address</label>
            <input id="address" name="address" type="text" autoComplete="street-address" />
          </div>
        </div>

        <div className="field">
          <label htmlFor="service">What do you need?</label>
          <select id="service" name="service" defaultValue={service || options[0]}>
            {options.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        </div>

        <div className="field">
          <label htmlFor="message">Tell us what&rsquo;s going on</label>
          <textarea
            id="message"
            name="message"
            placeholder="Age of the system, what it's doing, when it started…"
          />
        </div>

        <div className="cf-turnstile" data-sitekey={siteKey} data-theme="light" />

        <div>
          <button className="btn btn-primary btn-lg" type="submit">Send request</button>
        </div>

        <p className="formnote">
          Or call <a href={site.phoneHref}><strong>{site.phone}</strong></a> — someone answers 24/7,
          including nights, weekends, and holidays, at no extra charge.
        </p>
      </form>

      <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" strategy="lazyOnload" />
    </>
  );
}
