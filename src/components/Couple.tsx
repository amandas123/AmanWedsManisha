import { Heart } from "lucide-react";
import { weddingData as d } from "../data/weddingData";
import { Reveal } from "./Reveal";
import { Ornament } from "./Ornament";
import { Carousel } from "./Carousel";
export function Couple() {
  return (
    <section className="couple-section section-pad" id="our-story">
      <Reveal className="story-copy">
        <p className="eyebrow gold">A LITTLE ABOUT US</p>
        <h2>
          It was always
          <br />
          <em>meant to be.</em>
        </h2>
        <Ornament />
        <p>
          Somewhere between the little moments and the big dreams, we found a
          home in each other.
        </p>
        <p>
          Now, with grateful hearts and a world of memories ahead, we’re ready
          for our forever. And it wouldn’t be the same without you.
        </p>
        <div className="signature">
          {d.groom} & {d.bride} <Heart size={19} strokeWidth={1} />
        </div>
      </Reveal>
      <Reveal>
        <Carousel />
      </Reveal>
    </section>
  );
}
