import { WeddingImage } from "./WeddingImage";
import { useState } from "react";
import { Play } from "lucide-react";
import { weddingData as d } from "../data/weddingData";
import { Reveal } from "./Reveal";
export function Video() {
  const [play, setPlay] = useState(false);
  return (
    <section className="video-section section-pad">
      <Reveal>
        <p className="eyebrow gold">BEFORE THE FOREVER</p>
        <h2>
          A glimpse of <em>our beginning.</em>
        </h2>
        <div className="video-frame">
          {play && d.videoId ? (
            <iframe
              title="Our pre-wedding film"
              src={`https://www.youtube-nocookie.com/embed/${d.videoId}?autoplay=1`}
              allow="autoplay; encrypted-media; fullscreen"
              allowFullScreen
            />
          ) : (
            <>
              <WeddingImage
                src={d.images[0].src}
                panel={d.images[0].panel}
                alt="A romantic wedding moment"
              />
              <button
                onClick={() => setPlay(true)}
                aria-label="Play our pre-wedding film"
              >
                <Play size={27} fill="currentColor" />
              </button>
              <div className="video-caption">
                <span>THE PRE-WEDDING FILM</span>
                <p>
                  {play
                    ? "Our film is coming soon. Stay close."
                    : "A few moments. A thousand feelings."}
                </p>
              </div>
            </>
          )}
        </div>
      </Reveal>
    </section>
  );
}
