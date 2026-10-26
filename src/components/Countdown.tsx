import { useEffect, useState } from "react";
import { weddingData as d } from "../data/weddingData";
import { Ornament } from "./Ornament";
export function Countdown() {
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const seconds = Math.max(
    0,
    Math.floor((new Date(d.date).getTime() - now) / 1000),
  );
  const parts = [
    Math.floor(seconds / 86400),
    Math.floor(seconds / 3600) % 24,
    Math.floor(seconds / 60) % 60,
    seconds % 60,
  ];
  return (
    <section className="countdown">
      <p className="eyebrow gold">EVERY MOMENT BRINGS US CLOSER</p>
      <h2>
        Counting down to <em>forever.</em>
      </h2>
      <div className="timer" role="timer" aria-label="Time until the wedding">
        {parts.map((n, i) => (
          <div key={i}>
            <strong>{String(n).padStart(2, "0")}</strong>
            <span>{["DAYS", "HOURS", "MINUTES", "SECONDS"][i]}</span>
          </div>
        ))}
      </div>
      <Ornament />
    </section>
  );
}
