/**
 * The thermostat dial. The cool-to-hot conic gradient is the strongest idea in
 * the style guide, so it's the hero visual rather than a decoration — and it
 * means the hero doesn't need photography that doesn't exist yet.
 */
export default function Dial({ badges = true }: { badges?: boolean }) {
  return (
    <div className="dial-wrap">
      <div className="dial" role="img" aria-label="Thermostat set to 72 degrees">
        <div className="dial-inner">
          <div className="dial-temp">72<sup>°</sup></div>
          <div className="dial-lbl">Comfortable</div>
          <div className="dial-sub">Where your house should be</div>
        </div>
      </div>
      {badges && (
        <>
          <div className="dial-badge db-1"><div className="n">2 hrs</div><div className="l">Avg. arrival</div></div>
          <div className="dial-badge db-2"><div className="n">4.9 ★</div><div className="l">[312] reviews</div></div>
        </>
      )}
    </div>
  );
}
