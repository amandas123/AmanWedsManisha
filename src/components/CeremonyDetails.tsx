import { pageTurnVariants, pageShadeVariants } from "./pageTurn";
import { motion } from "framer-motion";
import type { RefObject } from "react";
import { ArrowLeft, ArrowUpRight, MapPin } from "lucide-react";
import { weddingData as d } from "../data/weddingData";
import { Ornament } from "./Ornament";

export function CeremonyDetails({
  turnDirection,
  headingRef,
  reduced,
  onBack,
}: {
  turnDirection: number;
  headingRef: RefObject<HTMLHeadingElement | null>;
  reduced: boolean;
  onBack: () => void;
}) {
  return (
    <motion.article
      id="ceremony-details"
      className="ring-invitation details-page book-page"
      custom={turnDirection}
      variants={pageTurnVariants(reduced, turnDirection === 0 ? 0.7 : 0)}
      initial="enter"
      animate="visible"
      exit="exit"
      onAnimationComplete={(phase) => {
        if (phase === "visible")
          headingRef.current?.focus({ preventScroll: true });
      }}
    >
      <div className="invitation-frame details-frame">
        <p className="eyebrow blessing">
          {d.groom} & {d.bride} · {d.ceremony}
        </p>
        <h1 ref={headingRef} tabIndex={-1}>
          A date with <em>forever.</em>
        </h1>
        <p className="date-poem">{d.dateMessage}</p>
        <time
          className="ceremony-date"
          dateTime={`${d.date}T${d.time}`}
          aria-label={`${d.weekday}, ${d.dateLabel}, ${d.timeLabel}`}
        >
          <span className="date-weekday">{d.weekday}</span>
          <span className="date-day">{d.day}</span>
          <span className="date-month">
            {d.month} <span>{d.year}</span>
          </span>
          <span className="ceremony-time">{d.timeLabel}</span>
        </time>
        <p className="details-message">{d.detailsMessage}</p>
        <Ornament />
        <a
          className="venue-link"
          href={d.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Get directions to ${d.venue} in Google Maps (opens in a new tab)`}
        >
          <MapPin size={26} strokeWidth={1.2} aria-hidden="true" />
          <span className="venue-label">THE VENUE</span>
          <span className="venue-name">{d.venue}</span>
          <span className="venue-message">{d.venueMessage}</span>
          <span className="directions-label">
            GET DIRECTIONS <ArrowUpRight size={17} />
          </span>
        </a>
        <p className="map-note">Opens Google Maps for your journey to us.</p>
        <button type="button" className="back-button" onClick={onBack}>
          <ArrowLeft size={15} />
          Back to the invitation
        </button>
        <span className="corner-floral corner-left" aria-hidden="true">
          ❀
        </span>
        <span className="corner-floral corner-right" aria-hidden="true">
          ❀
        </span>
      </div>
      <motion.div
        className="book-page-shade"
        aria-hidden="true"
        variants={pageShadeVariants(reduced)}
      />
    </motion.article>
  );
}
