import { NextResponse } from 'next/server';
import { getCloudflareContext } from '@opennextjs/cloudflare';

/**
 * Lead capture.
 *
 * Design notes:
 *  - Responds with a 303 redirect so a plain <form method="POST"> works with
 *    JavaScript disabled. This form gets used by people on bad connections
 *    standing next to broken equipment; it cannot depend on a script.
 *  - Writes go to Supabase through PostgREST with the service_role key rather
 *    than supabase-js, which keeps the Worker bundle small and keeps the key
 *    strictly server-side. RLS is enabled with zero policies, so nothing but
 *    service_role can touch the table.
 *  - Dispatch is emailed even when the database write fails. A lead nobody
 *    sees is a lost job; a lead that's only in an inbox is still a job.
 */

export const dynamic = 'force-dynamic';

interface Env {
  SUPABASE_URL?: string;
  SUPABASE_SERVICE_KEY?: string;
  TURNSTILE_SECRET?: string;
  RESEND_API_KEY?: string;
  DISPATCH_EMAIL?: string;
  FROM_EMAIL?: string;
}

/** Cloudflare bindings in production, process.env locally. */
async function readEnv(): Promise<Env> {
  try {
    const { env } = await getCloudflareContext({ async: true });
    return { ...process.env, ...(env as unknown as Env) };
  } catch {
    return process.env as Env;
  }
}

const str = (v: FormDataEntryValue | null) => (typeof v === 'string' ? v.trim() : '');
const orNull = (v: string) => (v.length ? v : null);

async function verifyTurnstile(secret: string, token: string, ip: string): Promise<boolean> {
  try {
    const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body: new URLSearchParams({ secret, response: token, remoteip: ip }),
    });
    const data = (await res.json()) as { success?: boolean };
    return data.success === true;
  } catch {
    // Turnstile being unreachable must never cost a real lead.
    return true;
  }
}

async function notifyDispatch(env: Env, lead: Record<string, string | null>): Promise<boolean> {
  if (!env.RESEND_API_KEY || !env.DISPATCH_EMAIL) return false;

  const body = [
    `Name:     ${lead.name}`,
    `Phone:    ${lead.phone}`,
    `Email:    ${lead.email ?? '—'}`,
    `Address:  ${lead.address ?? '—'}`,
    `Service:  ${lead.service ?? '—'}`,
    `Type:     ${lead.lead_type ?? 'residential'}`,
    `Page:     ${lead.source_path ?? '—'}`,
    '',
    lead.message ?? '',
  ].join('\n');

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: env.FROM_EMAIL ?? 'site@swifttemp.com',
        to: [env.DISPATCH_EMAIL],
        reply_to: lead.email ?? undefined,
        subject: `New service request — ${lead.name} — ${lead.phone}`,
        text: body,
      }),
    });
    return res.ok;
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  const env = await readEnv();
  const origin = new URL(request.url).origin;

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return NextResponse.redirect(`${origin}/contact?error=server#form`, 303);
  }

  const back = str(form.get('source_path')) || '/contact';
  const fail = (code: string) =>
    NextResponse.redirect(`${origin}${back}${back.includes('?') ? '&' : '?'}error=${code}#form`, 303);

  // 1. Honeypot — accept silently so bots learn nothing.
  if (str(form.get('company_website'))) {
    return NextResponse.redirect(`${origin}/thank-you`, 303);
  }

  // 2. Turnstile, when configured and a token was supplied.
  const token = str(form.get('cf-turnstile-response'));
  if (env.TURNSTILE_SECRET && token) {
    const ip = request.headers.get('cf-connecting-ip') ?? '';
    if (!(await verifyTurnstile(env.TURNSTILE_SECRET, token, ip))) return fail('verify');
  }

  // 3. Only two fields actually matter: who, and how to call them back.
  const name = str(form.get('name'));
  const phone = str(form.get('phone'));
  if (!name || !phone) return fail('missing');

  const lead = {
    name,
    phone,
    email: orNull(str(form.get('email'))),
    address: orNull(str(form.get('address'))),
    service: orNull(str(form.get('service'))),
    message: orNull(str(form.get('message'))),
    lead_type: str(form.get('lead_type')) || 'residential',
    source_path: orNull(back),
  };

  // 4. Persist.
  let stored = false;
  if (env.SUPABASE_URL && env.SUPABASE_SERVICE_KEY) {
    try {
      const res = await fetch(`${env.SUPABASE_URL}/rest/v1/leads`, {
        method: 'POST',
        headers: {
          apikey: env.SUPABASE_SERVICE_KEY,
          Authorization: `Bearer ${env.SUPABASE_SERVICE_KEY}`,
          'Content-Type': 'application/json',
          Prefer: 'return=minimal',
        },
        body: JSON.stringify(lead),
      });
      stored = res.ok;
    } catch {
      stored = false;
    }
  }

  // 5. Notify regardless — the inbox is the backstop for the database.
  const emailed = await notifyDispatch(env, lead);

  if (!stored && !emailed) return fail('server');
  return NextResponse.redirect(`${origin}/thank-you`, 303);
}

/** Someone hit the endpoint directly. Send them somewhere useful. */
export async function GET(request: Request) {
  return NextResponse.redirect(`${new URL(request.url).origin}/contact`, 302);
}
