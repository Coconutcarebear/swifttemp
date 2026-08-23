import { site } from '@/lib/site';

/**
 * Five slots, five facts. If the client can't fill a slot with a number or a
 * credential, DELETE the entry rather than softening it into an adjective.
 * An empty-sounding proof bar is worse than a short one.
 */
const stats = [
  { n: site.rating.value, star: true, l: `${site.rating.count} Google reviews` },
  { n: '[Since 20XX]', star: false, l: 'Years serving NJ' },
  { n: '[NATE]', star: false, l: 'Certified technicians' },
  { n: '24/7', star: false, l: 'No overtime fees' },
  { n: 'Licensed', star: false, l: 'Bonded & insured' },
];

const badges = ['[Carrier] Factory Authorized Dealer', 'BBB [A+] Rated', 'EPA 608 Certified'];

export default function ProofBar() {
  return (
    <div className="proof">
      <div className="u">
        {stats.map((s) => (
          <div className="stat" key={s.l}>
            <div className="n">{s.n} {s.star && <span>★</span>}</div>
            <div className="l">{s.l}</div>
          </div>
        ))}
      </div>
      <div className="badges">
        {badges.map((b) => <span className="pill" key={b}>{b}</span>)}
      </div>
    </div>
  );
}
