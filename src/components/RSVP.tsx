import { useState, type FormEvent } from "react";
import { ArrowUpRight, Check, Heart, X } from "lucide-react";
import { weddingData as d } from "../data/weddingData";
import { Reveal } from "./Reveal";
import { Ornament } from "./Ornament";
type ResponseData = {
  name: string;
  email: string;
  guests: string;
  note: string;
  attending: string;
};
export function RSVP() {
  const [choice, setChoice] = useState("yes");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const values = Object.fromEntries(
      new FormData(e.currentTarget),
    ) as unknown as ResponseData;
    values.name = values.name.trim();
    if (values.name.length < 2) {
      setError("Please enter your full name.");
      return;
    }
    try {
      const previous = JSON.parse(
        localStorage.getItem("wedding-rsvps") || "[]",
      );
      localStorage.setItem(
        "wedding-rsvps",
        JSON.stringify([
          ...previous,
          { ...values, attending: choice, created: new Date().toISOString() },
        ]),
      );
      setSent(true);
    } catch {
      setError(
        "Your browser could not save your response. Please enable local storage and try again.",
      );
    }
  }
  return (
    <section id="rsvp" className="rsvp-section section-pad">
      <Reveal className="rsvp-intro">
        <p className="eyebrow gold">YOU MAKE THE CELEBRATION COMPLETE</p>
        <h2>
          Will you
          <br />
          <em>join us?</em>
        </h2>
        <Ornament />
        <p>
          Your presence is our favourite present.
          <br />
          Let us know if you’ll be there for our beginning.
        </p>
        <p className="rsvp-note">
          With love, {d.groom} & {d.bride}
        </p>
      </Reveal>
      <div className="rsvp-form">
        {sent ? (
          <div className="success" role="status">
            <Check size={35} />
            <h3>
              {choice === "yes"
                ? "We can’t wait to see you!"
                : "You’ll be there in spirit."}
            </h3>
            <p>Your response is saved on this device.</p>
            <p className="form-note">
              This invitation is a preview. Responses are stored locally and are
              not sent to the couple.
            </p>
            <button className="text-button" onClick={() => setSent(false)}>
              SEND ANOTHER RESPONSE
            </button>
          </div>
        ) : (
          <form onSubmit={submit}>
            <fieldset>
              <legend>WILL YOU BE ATTENDING?</legend>
              <div className="attendance">
                <button
                  type="button"
                  aria-pressed={choice === "yes"}
                  className={choice === "yes" ? "selected" : ""}
                  onClick={() => setChoice("yes")}
                >
                  <Heart size={16} />
                  Joyfully accepts
                </button>
                <button
                  type="button"
                  aria-pressed={choice === "no"}
                  className={choice === "no" ? "selected" : ""}
                  onClick={() => setChoice("no")}
                >
                  <X size={16} />
                  Regretfully declines
                </button>
              </div>
            </fieldset>
            <label>
              Your full name <span>*</span>
              <input
                name="name"
                required
                minLength={2}
                maxLength={100}
                autoComplete="name"
                placeholder="Enter your name"
              />
            </label>
            <label>
              Email address <span>*</span>
              <input
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@example.com"
              />
            </label>
            {choice === "yes" && (
              <label>
                Number of guests
                <select name="guests" defaultValue="1">
                  {[1, 2, 3, 4, 5, 6].map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? "guest" : "guests"}
                    </option>
                  ))}
                </select>
              </label>
            )}
            <label>
              A note for us{" "}
              <textarea
                name="note"
                maxLength={500}
                placeholder="Dietary preferences, a little message…"
                rows={2}
              />
            </label>
            <button className="primary-button" type="submit">
              SEND YOUR RSVP <ArrowUpRight size={17} />
            </button>
            <p className="form-note">
              Preview RSVP · saved on this device only.
            </p>
            {error && <p role="alert">{error}</p>}
          </form>
        )}
      </div>
    </section>
  );
}
