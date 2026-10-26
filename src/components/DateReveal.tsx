import { useState } from "react";
import { Heart } from "lucide-react";
import { weddingData as d } from "../data/weddingData";
import { Reveal } from "./Reveal";
export function DateReveal() {
  const [open, setOpen] = useState(false);
  return (
    <section className="date-section">
      <Reveal>
        <p className="eyebrow gold">A DAY TO REMEMBER</p>
        <h2>
          Every love story has <em>its day.</em>
        </h2>
        <button
          className={"date-envelope " + (open ? "opened" : "")}
          onClick={() => setOpen(!open)}
          aria-expanded={open}
        >
          <span className="envelope-decoration">✧</span>
          {open ? (
            <>
              <span className="eyebrow">{d.weekday}</span>
              <strong>{d.day}</strong>
              <span>{d.monthYear}</span>
              <small>Save a little space in your heart.</small>
            </>
          ) : (
            <>
              <Heart size={28} strokeWidth={1} />
              <span>Reveal the date</span>
              <small>A little secret, sealed with love</small>
            </>
          )}
        </button>
        <p className="tiny-label">
          {open
            ? "WE CAN’T WAIT TO CELEBRATE WITH YOU"
            : "TAP TO OPEN OUR NEXT CHAPTER"}
        </p>
      </Reveal>
    </section>
  );
}
