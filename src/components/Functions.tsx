import { WeddingImage } from "./WeddingImage";
import { Flower2, Music2, Heart } from "lucide-react";
import { weddingData as d } from "../data/weddingData";
import { Reveal } from "./Reveal";
export function Functions() {
  return (
    <section id="celebrations" className="celebrations section-pad">
      <Reveal>
        <p className="eyebrow">THREE DAYS. A LIFETIME OF MEMORIES.</p>
        <h2>The Celebrations</h2>
        <p className="section-intro">
          A little tradition, a little magic, and all our favourite people.
        </p>
      </Reveal>
      <div className="event-grid">
        {d.events.map((e, i) => (
          <Reveal className="event" key={e.name}>
            <div className="event-image">
              <WeddingImage
                src={e.image}
                panel={e.imagePanel}
                alt={`${e.name} celebration inspiration`}
              />
              <span className="event-number">0{i + 1}</span>
            </div>
            <div className="event-body">
              <div className="event-icon">
                {i === 0 ? <Flower2 /> : i === 1 ? <Music2 /> : <Heart />}
              </div>
              <p className="eyebrow">{e.date}</p>
              <h3>{e.name}</h3>
              <p className="event-subtitle">{e.subtitle}</p>
              <div className="event-divider" />
              <p className="event-time">{e.time}</p>
              <p className="event-dress">{e.dress}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <p className="celebration-note">
        The finer details are on their way. The joy is already here.
      </p>
    </section>
  );
}
