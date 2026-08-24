-- SwiftTemp — leads table
-- Run this in the Supabase SQL editor.

create table if not exists public.leads (
  id            uuid primary key default gen_random_uuid(),
  created_at    timestamptz not null default now(),
  name          text not null,
  phone         text not null,
  email         text,
  address       text,
  service       text,
  message       text,
  lead_type     text not null default 'residential',
  source_path   text,
  status        text not null default 'new'
);

create index if not exists leads_created_at_idx on public.leads (created_at desc);
create index if not exists leads_status_idx     on public.leads (status);

-- SECURITY -------------------------------------------------------------
-- RLS on with ZERO policies denies anon and authenticated entirely.
-- service_role bypasses RLS, so only the server-side Worker route can write.
-- Do not add an anon insert policy: the key would be public and the table
-- becomes a spam target.
alter table public.leads enable row level security;

-- Optional: let a dashboard read leads later without exposing them publicly.
-- create policy "staff read" on public.leads
--   for select to authenticated using (auth.jwt() ->> 'role' = 'staff');
