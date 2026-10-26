import { WeddingImage } from "./WeddingImage";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { weddingData as d } from "../data/weddingData";
export function Carousel() {
  const [index, setIndex] = useState(0);
  return (
    <div
      className="carousel"
      aria-roledescription="carousel"
      aria-label="Our moments"
    >
      <WeddingImage
        src={d.images[index].src}
        panel={d.images[index].panel}
        alt={`Wedding inspiration, moment ${index + 1}`}
      />
      <span className="photo-caption">A LOVE, A LAUGH, A LIFETIME.</span>
      <div className="carousel-controls">
        <button
          aria-label="Previous photo"
          onClick={() =>
            setIndex((index + d.images.length - 1) % d.images.length)
          }
        >
          <ChevronLeft size={18} />
        </button>
        <span aria-live="polite">
          0{index + 1} <span>/ 0{d.images.length}</span>
        </span>
        <button
          aria-label="Next photo"
          onClick={() => setIndex((index + 1) % d.images.length)}
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
