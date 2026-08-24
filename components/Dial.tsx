'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * The thermostat dial. The cool-to-hot conic gradient is the strongest idea in
 * the style guide, so it's the hero visual rather than a decoration — and it
 * means the hero doesn't need photography.
 *
 * On load the reading swings cold → hot → and settles at 72, with the label
 * tracking it. It runs once, not on a loop: a looping animation in a hero
 * reads as a screensaver. Respects prefers-reduced-motion by rendering the
 * resting state immediately.
 */

const REST = 72;

/** waypoints: [temperature, ms to reach it] */
const SEQUENCE: [number, number][] = [
  [58, 0],
  [87, 900],
  [61, 700],
  [76, 500],
  [REST, 450],
];

const easeInOut = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

function labelFor(t: number): { text: string; tone: string } {
  if (t >= 80) return { text: 'Too hot', tone: 'var(--red)' };
  if (t <= 64) return { text: 'Too cold', tone: 'var(--blue-ink)' };
  return { text: 'Comfortable', tone: 'var(--orange-ink)' };
}

export default function Dial({ badges = true }: { badges?: boolean }) {
  const [temp, setTemp] = useState(REST);
  const [settled, setSettled] = useState(true);
  const frame = useRef<number | null>(null);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    setSettled(false);
    setTemp(SEQUENCE[0][0]);

    const start = performance.now();
    // absolute timeline offsets for each leg
    const legs = SEQUENCE.slice(1).map((wp, i) => {
      const from = SEQUENCE[i][0];
      const startAt = SEQUENCE.slice(1, i + 1).reduce((sum, w) => sum + w[1], 0);
      return { from, to: wp[0], startAt, duration: wp[1] };
    });
    const total = legs.reduce((sum, l) => sum + l.duration, 0);

    const tick = (now: number) => {
      const elapsed = now - start;
      if (elapsed >= total) {
        setTemp(REST);
        setSettled(true);
        return;
      }
      const leg = legs.find((l) => elapsed >= l.startAt && elapsed < l.startAt + l.duration) ?? legs[0];
      const p = easeInOut(Math.min(1, (elapsed - leg.startAt) / leg.duration));
      setTemp(Math.round(leg.from + (leg.to - leg.from) * p));
      frame.current = requestAnimationFrame(tick);
    };

    frame.current = requestAnimationFrame(tick);
    return () => { if (frame.current) cancelAnimationFrame(frame.current); };
  }, []);

  const label = labelFor(temp);
  // Rotate the gradient a little with the reading so the color under the
  // number shifts warm or cool as it swings.
  const spin = 135 + (temp - REST) * 1.6;

  return (
    <div className="dial-wrap">
      <div
        className={`dial${settled ? ' settled' : ''}`}
        style={{ ['--spin' as string]: `${spin}deg` }}
        role="img"
        aria-label={`Thermostat set to ${REST} degrees`}
      >
        <div className="dial-inner">
          <div className="dial-temp" aria-hidden="true">
            {temp}<sup>°</sup>
          </div>
          <div className="dial-lbl" style={{ color: label.tone }}>{label.text}</div>
          <div className="dial-sub">Where your house should be</div>
        </div>
      </div>

      {badges && (
        <>
          <div className="dial-badge db-1">
            <div className="n">2 hrs</div>
            <div className="l">Avg. arrival</div>
          </div>
          <div className="dial-badge db-2">
            <div className="n">24/7</div>
            <div className="l">No overtime</div>
          </div>
        </>
      )}
    </div>
  );
}
