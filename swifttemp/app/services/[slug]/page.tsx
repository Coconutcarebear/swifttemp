import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ProofBar from '@/components/ProofBar';
import Dial from '@/components/Dial';
import JsonLd from '@/components/JsonLd';
import { services, getService } from '@/lib/services';
import { site } from '@/lib/site';

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return {
    title: { absolute: s.metaTitle },
    description: s.metaDescription,
    alternates: { canonical: `${site.url}/services/${s.slug}` },
    openGraph: { title: s.metaTitle, description: s.metaDescription },
  };
}

/** Numbered because it is a genuine sequence. Nothing else on the site uses
 *  numbered markers decoratively. */
const steps = (warranty: string) => [
  { n: '01', t: 'You get a text', b: 'Name, photo, and an arrival window before we leave.' },
  { n: '02', t: 'Full diagnostic', b: 'We test the system, not just the symptom you called about.' },
  { n: '03', t: 'Price before work', b: 'Written options. You choose. No surprises on the invoice.' },
  { n: '04', t: 'Fixed and tested', b: `Most repairs same visit, backed by our ${warranty}.` },
];

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();

  // FAQPage JSON-LD — a real rich-result opportunity on these queries, and
  // almost nobody in the category bothers.
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: s.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      <JsonLd data={faqSchema} />

      {/* ===== HERO ===== */}
      <section className="hero compact">
        <div className="u">
          <div>
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link> › <Link href="/services">Services</Link> › {s.title}
            </nav>
            <h1>{s.h1}</h1>
            <p className="sub">{s.subhead}</p>
            <div className="btnrow">
              <a className="btn btn-primary btn-lg" href={site.phoneHref}>Call {site.phone}</a>
              <Link className="btn btn-outline btn-lg" href={`/contact?service=${encodeURIComponent(s.title)}`}>
                Request service
              </Link>
            </div>
            <div className="pillrow" style={{ marginTop: 24 }}>
              {s.proof.map((p) => (
                <span className="pill" key={p.l}><strong>{p.n}</strong> {p.l}</span>
              ))}
            </div>
          </div>
          <Dial badges={false} />
        </div>
      </section>

      {/* ===== SYMPTOMS =====
          People search symptoms, not service names. This is where the page
          earns its long-tail traffic. Tone stays specific and useful — never
          scare-selling. */}
      <section className="band">
        <div className="u">
          <div className="sec-head"><span className="eyebrow">Symptoms</span><h2>Sound familiar?</h2></div>
          <div className="grid g3">
            {s.symptoms.map((x) => (
              <div className="card" key={x.title}><h3>{x.title}</h3><p>{x.body}</p></div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="band tint">
        <div className="u">
          <div className="sec-head">
            <span className="eyebrow">The visit</span>
            <h2>What happens when we show up</h2>
          </div>
          <div className="grid g4">
            {steps(s.warranty).map((x) => (
              <div className="card" key={x.n}>
                <span className="num">{x.n}</span>
                <h3>{x.t}</h3>
                <p>{x.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRICING =====
          Most competitors say nothing about price. Saying something — even a
          range with honest caveats — differentiates and filters bad calls. */}
      <section className="band">
        <div className="u">
          <div className="sec-head"><span className="eyebrow">Money</span><h2>What it costs, honestly</h2></div>
          <div className="grid g2">
            <div className="card"><h3>What does it cost?</h3><p>{s.pricing.cost}</p></div>
            <div className="card"><h3>Repair or replace?</h3><p>{s.pricing.decision}</p></div>
          </div>
          <p className="prose" style={{ marginTop: 26 }}>{s.body}</p>
        </div>
      </section>

      <ProofBar />

      {/* ===== FAQ ===== */}
      <section className="band tint">
        <div className="u narrow">
          <div className="sec-head"><span className="eyebrow">Questions</span><h2>{s.title} FAQ</h2></div>
          <div className="faq">
            {s.faqs.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <div className="a">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CLOSE ===== */}
      <section className="band iceband center">
        <div className="u" style={{ maxWidth: 720 }}>
          <h2>Need {s.title.toLowerCase()}?</h2>
          <p className="lede" style={{ margin: '0 auto' }}>
            Someone answers 24/7 — nights, weekends, and holidays at no extra charge.
          </p>
          <div className="btnrow" style={{ justifyContent: 'center', marginTop: 26 }}>
            <a className="btn btn-primary btn-lg" href={site.phoneHref}>Call {site.phone}</a>
            <Link className="btn btn-outline btn-lg" href={`/contact?service=${encodeURIComponent(s.title)}`}>
              Request service
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
