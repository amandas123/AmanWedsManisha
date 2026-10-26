import { weddingData as d } from "../data/weddingData";
import { Reveal } from "./Reveal";
import { Ornament } from "./Ornament";
export function Invitation() {
  return (
    <section id="invitation" className="invitation section-pad">
      <Reveal>
        <img
          className="ganesh"
          src="/ganesh.svg"
          alt="Lord Ganesh, a blessing for new beginnings"
          width="65"
          height="75"
          loading="lazy"
        />
        <p className="sanskrit">श्री गणेशाय नमः</p>
        <p className="eyebrow gold">WITH THE BLESSINGS OF OUR FAMILIES</p>
        <p className="family">
          {d.families[0]} <span>&</span> {d.families[1]}
        </p>
        <h2 className="invite-word">Invite</h2>
        <p className="body-copy">
          you to share in their joy as their children
          <br />
          begin a lifetime of love and togetherness.
        </p>
        <h2 className="couple-names">
          {d.groom} <i>&</i> {d.bride}
        </h2>
        <Ornament />
        <p className="italic-copy">
          Some stories are written in the stars.
          <br />
          Ours begins with you by our side.
        </p>
      </Reveal>
      <span className="corner-flower left">❀</span>
      <span className="corner-flower right">❀</span>
    </section>
  );
}
