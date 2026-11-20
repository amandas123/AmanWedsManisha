import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowUpRight, Heart, MapPin } from "lucide-react";
import { ScratchDate } from "./components/ScratchDate";
import { weddingData as d } from "./data/weddingData";

const ceremonyStart = Date.parse(d.startsAt);
const countdownUnits = [
  { label: "Days", seconds: 86400 },
  { label: "Hours", seconds: 3600 },
  { label: "Minutes", seconds: 60 },
  { label: "Seconds", seconds: 1 },
];

function Countdown() {
  const [now, setNow] = useState(Date.now);

  useEffect(() => {
    const timer = window.setInterval(() => {
      const current = Date.now();
      setNow(current);
      if (current >= ceremonyStart) window.clearInterval(timer);
    }, 1000);
    return () => window.clearInterval(timer);
  }, []);

  const remaining = Math.max(0, Math.ceil((ceremonyStart - now) / 1000));

  return (
    <section className="section countdown" aria-labelledby="countdown-title">
      <h2 id="countdown-title">Counting down</h2>
      <Divider />
      {remaining > 0 ? (
        <dl className="countdown-grid" aria-label="Time until the ring ceremony">
          {countdownUnits.map(({ label, seconds }, index) => {
            const total = Math.floor(remaining / seconds);
            const value = index === 0 ? total : total % (countdownUnits[index - 1].seconds / seconds);
            return (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{String(value).padStart(2, "0")}</dd>
              </div>
            );
          })}
        </dl>
      ) : (
        <p>Thank you for being part of our celebration.</p>
      )}
    </section>
  );
}

function Divider() {
  return <div className="divider" aria-hidden="true"><Heart size={11} fill="currentColor" /></div>;
}

function Botanical({ className }: { className: string }) {
  return (
    <div className={`botanical ${className}`} aria-hidden="true">
      <span className="stem" />
      {Array.from({ length: 8 }, (_, index) => <i key={index} style={{ top: `${index * 10 + 13}%` }} />)}
      <span className="blossom">✿</span>
    </div>
  );
}

function hasOpenHash() {
  return ["#invitation", "#greetings", "#details"].includes(window.location.hash);
}

export default function App() {
  const [opened, setOpened] = useState(hasOpenHash);
  const heading = useRef<HTMLHeadingElement>(null);
  const hasNavigated = useRef(false);

  useEffect(() => {
    function syncInvitation() {
      hasNavigated.current = true;
      setOpened(hasOpenHash());
    }

    window.addEventListener("hashchange", syncInvitation);
    return () => window.removeEventListener("hashchange", syncInvitation);
  }, []);

  useEffect(() => {
    if (opened && window.location.hash === "#details") {
      document.getElementById("details")?.scrollIntoView();
    } else if (opened && hasNavigated.current) {
      heading.current?.focus({ preventScroll: true });
    } else if (!opened) {
      window.scrollTo(0, 0);
    }
  }, [opened]);

  function openInvitation() {
    hasNavigated.current = true;
    window.history.pushState(null, "", "#invitation");
    setOpened(true);
  }

  return (
    <>
      <div className={`entrance${opened ? " entrance-open" : ""}`} inert={opened}>
        <div className="stage-curtain stage-curtain-left" aria-hidden="true" />
        <div className="stage-curtain stage-curtain-right" aria-hidden="true" />
        <div className="cover-door cover-door-left" aria-hidden="true" />
        <div className="cover-door cover-door-right" aria-hidden="true" />
        <button type="button" className="seal" onClick={openInvitation} aria-label="Open Aman and Manisha’s invitation">
          <span className="seal-plaque">
            <span className="seal-scroll seal-scroll-top" aria-hidden="true">❦</span>
            <span className="seal-scroll seal-scroll-bottom" aria-hidden="true">❦</span>
            <span className="seal-sprig" aria-hidden="true">❧</span>
            <span>{d.openingPrompt}</span>
            <span className="seal-sprig seal-sprig-bottom" aria-hidden="true">❧</span>
          </span>
        </button>
      </div>

      <main className="invitation" inert={!opened}>
        <section id="invitation" className="hero" aria-labelledby="couple">
          <div className="hero-copy">
            <p className="eyebrow">{d.blessing}</p>
            <h1 id="couple" ref={heading} tabIndex={-1}>{d.groom} <span>&amp;</span> {d.bride}</h1>
            <Divider />
            <p className="ceremony-label">{d.ceremony}</p>
            <a className="continue" href="#greetings">Read the invitation <ArrowDown size={15} /></a>
          </div>
        </section>

        <div className="letter">
          <div className="floral-frame" aria-hidden="true">
            {["left", "right"].map((side) => (
              <div className={`floral-rail floral-rail-${side}`} key={side}>
                {Array.from({ length: 6 }, (_, index) => <Botanical key={index} className="frame-sprig" />)}
              </div>
            ))}
          </div>
          <section id="greetings" className="section greeting" aria-labelledby="greetings-title">
            <Divider />
            <h2 id="greetings-title">Dear family &amp; friends</h2>
            <p>We warmly invite you to celebrate the Ring Ceremony of Aman and Manisha. Join us as we exchange rings and begin this new chapter together.</p>
            <p>With love and gratitude,<br />Aman &amp; Manisha</p>
          </section>

          <section className="section date-section" aria-labelledby="date-title">
            <h2 id="date-title">Scratch to reveal</h2>
            <Divider />
            <ScratchDate />
          </section>

          <Countdown />

          <section id="details" className="section venue" aria-labelledby="venue-title">
            <MapPin size={25} strokeWidth={1.4} aria-hidden="true" />
            <h2 id="venue-title">The Venue</h2>
            <Divider />
            <p className="venue-name">{d.venue}</p>
            <time dateTime={d.startsAt}>{d.weekday}, {d.dateLabel} · {d.timeLabel} IST</time>
            <a className="directions" href={d.mapsUrl} target="_blank" rel="noopener noreferrer">
              View on Google Maps <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </section>
        </div>
      </main>
    </>
  );
}
