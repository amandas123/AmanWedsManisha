import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useRef } from "react";
import { weddingData as d } from "../data/weddingData";
export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress: p } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const glow = useTransform(p, [0, 0.45, 0.9], [0.15, 1, 0]);
  const scale = useTransform(p, [0, 0.8], [1, 1.65]);
  const left = useTransform(p, [0.12, 0.8], ["0%", "-48%"]);
  const right = useTransform(p, [0.12, 0.8], ["0%", "48%"]);
  const opacity = useTransform(p, [0.25, 0.9], [1, 0]);
  return (
    <section ref={ref} className="hero" id="home">
      <div className="cloud cloud-one" />
      <div className="cloud cloud-two" />
      <div className="hero-top">
        <a href="#home" className="monogram">
          {d.groom[0]}
          <span>&</span>
          {d.bride[0]}
        </a>
        <span className="hero-top-label">THE WEDDING CELEBRATION</span>
        <a className="hero-rsvp" href="#rsvp">
          RSVP <span>↗</span>
        </a>
      </div>
      <motion.div className="hero-copy" style={reduce ? {} : { opacity }}>
        <p className="eyebrow">A CELEBRATION OF LOVE</p>
        <h1>
          {d.groom} <em>weds</em> {d.bride}
        </h1>
        <div className="hero-date">
          <span />
          {d.dateLabel.toUpperCase()}
          <span />
        </div>
        <p className="hero-note">Two hearts. One beautiful beginning.</p>
      </motion.div>
      <motion.div
        className="sun-glow"
        style={reduce ? {} : { opacity: glow }}
      />
      <motion.div className="temple" style={reduce ? {} : { scale, opacity }}>
        <motion.img
          alt="Ornate sandstone Indian wedding mandap"
          src="/temple.svg"
          className="temple-half temple-left"
          style={reduce ? {} : { x: left }}
        />
        <motion.img
          alt=""
          aria-hidden="true"
          src="/temple.svg"
          className="temple-half temple-right"
          style={reduce ? {} : { x: right }}
        />
      </motion.div>
      <a className="scroll-cue" href="#invitation">
        <span>SCROLL TO EXPLORE</span>
        <ArrowDown size={15} />
      </a>
      <div className="hero-bottom">WITH LOVE, FROM OUR FAMILIES TO YOURS</div>
    </section>
  );
}
