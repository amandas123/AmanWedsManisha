import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Hand, Heart } from "lucide-react";
import { weddingData as d } from "../data/weddingData";
import { RingCeremony } from "./RingCeremony";

export function Hero() {
  const [opened, setOpened] = useState(false);
  const [finished, setFinished] = useState(false);
  const reduced = useReducedMotion();
  const heading = useRef<HTMLHeadingElement>(null);
  const duration = reduced ? 0 : 1.45;

  useEffect(() => {
    if (!opened) return;
    const timer = window.setTimeout(
      () => {
        setFinished(true);
        heading.current?.focus({ preventScroll: true });
      },
      reduced ? 0 : 1500,
    );
    return () => window.clearTimeout(timer);
  }, [opened, reduced]);

  return (
    <section
      className={`ceremony-stage${opened ? " is-open" : ""}`}
      aria-label={`${d.groom} and ${d.bride}'s ${d.ceremony}`}
    >
      <div className="sky" aria-hidden="true">
        <div className="cloud cloud-left" />
        <div className="cloud cloud-right" />
      </div>
      <motion.div
        className="ivory-backdrop"
        aria-hidden="true"
        initial={false}
        animate={{ opacity: opened ? 1 : 0 }}
        transition={{ duration, delay: reduced ? 0 : 0.3 }}
      />
      <header className="masthead">
        <span className="monogram">
          {d.groom[0]}
          <i>&</i>
          {d.bride[0]}
        </span>
        <span className="masthead-label">THE {d.ceremony.toUpperCase()}</span>
        <Heart size={20} strokeWidth={1} aria-hidden="true" />
      </header>

      {!opened && (
        <div className="cover-copy">
          <p className="eyebrow">{d.introduction}</p>
          <h1>
            {d.groom} <em>&</em> {d.bride}
          </h1>
          <div className="cover-occasion">
            <span />
            {d.ceremony}
            <span />
          </div>
          <p className="cover-note">{d.coverNote}</p>
        </div>
      )}

      {opened && (
        <RingCeremony headingRef={heading} reduced={Boolean(reduced)} />
      )}

      <motion.div
        className="portal-glow"
        aria-hidden="true"
        initial={false}
        animate={{ opacity: opened ? [0, 0.9, 0] : 0 }}
        transition={{ duration: reduced ? 0 : 1.8 }}
      />
      <motion.button
        type="button"
        className="temple-button"
        aria-label={`Open the invitation to ${d.groom} and ${d.bride}'s ${d.ceremony}`}
        aria-expanded={opened}
        aria-controls={opened ? "ring-ceremony" : undefined}
        aria-hidden={finished ? true : undefined}
        disabled={opened}
        style={{ visibility: finished ? "hidden" : "visible" }}
        onClick={() => setOpened(true)}
        initial={false}
        animate={{
          scale: opened && !reduced ? 1.18 : 1,
          opacity: opened ? 0 : 1,
        }}
        transition={{
          scale: { duration },
          opacity: { duration: reduced ? 0 : 0.5, delay: reduced ? 0 : 0.95 },
        }}
      >
        <motion.img
          src={d.templeArtwork}
          alt=""
          aria-hidden="true"
          className="temple-half temple-left"
          initial={false}
          animate={{ x: opened && !reduced ? "-85%" : "0%" }}
          transition={{ duration, ease: [0.65, 0, 0.25, 1] }}
        />
        <motion.img
          src={d.templeArtwork}
          alt=""
          aria-hidden="true"
          className="temple-half temple-right"
          initial={false}
          animate={{ x: opened && !reduced ? "85%" : "0%" }}
          transition={{ duration, ease: [0.65, 0, 0.25, 1] }}
        />
        {!opened && (
          <span className="open-cue">
            <Hand size={18} strokeWidth={1.3} />
            <span>{d.openingPrompt}</span>
            <small>AN INVITATION TO OUR FOREVER</small>
          </span>
        )}
      </motion.button>
      <p className="stage-footer">WITH LOVE, FROM OUR FAMILIES TO YOURS</p>
    </section>
  );
}
