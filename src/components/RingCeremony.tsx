import { motion } from "framer-motion";
import type { RefObject } from "react";
import { ArrowRight } from "lucide-react";
import { weddingData as d } from "../data/weddingData";
import { Ornament } from "./Ornament";

export function RingCeremony({
  headingRef,
  reduced,
  onDetails,
}: {
  headingRef: RefObject<HTMLHeadingElement | null>;
  onDetails: () => void;
  reduced: boolean;
}) {
  return (
    <motion.article
      id="ring-ceremony"
      className="ring-invitation"
      initial={reduced ? false : { opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{
        opacity: 0,
        y: reduced ? 0 : -18,
        transition: { duration: reduced ? 0 : 0.35, delay: 0 },
      }}
      onAnimationComplete={() =>
        headingRef.current?.focus({ preventScroll: true })
      }
      transition={{ duration: reduced ? 0 : 0.8, delay: reduced ? 0 : 0.7 }}
    >
      <div className="invitation-frame">
        <img
          src="/ganesh.svg"
          alt="Lord Ganesh, a blessing for new beginnings"
          className="ganesh"
          width="60"
          height="68"
        />
        <p className="eyebrow blessing">{d.blessing}</p>
        <h1 ref={headingRef} tabIndex={-1}>
          <span className="welcome-line">{d.welcome}</span>{" "}
          <span className="ceremony-title">{d.ceremony}</span>{" "}
          <span className="of-line">of</span>{" "}
          <span className="couple-names">
            {d.groom} <em>and</em> {d.bride}
          </span>
        </h1>
        <Ornament />
        <p className="invitation-message">{d.invitation}</p>
        <p className="closing-message">{d.closing}</p>
        <div className="rings-motif" aria-hidden="true">
          <span />
          <span />
        </div>
        <button type="button" className="ceremony-button" onClick={onDetails}>
          <span aria-hidden="true">✧</span>
          {d.detailsButton}
          <ArrowRight size={18} strokeWidth={1.4} />
        </button>
        <span className="corner-floral corner-left" aria-hidden="true">
          ❀
        </span>
        <span className="corner-floral corner-right" aria-hidden="true">
          ❀
        </span>
      </div>
    </motion.article>
  );
}
