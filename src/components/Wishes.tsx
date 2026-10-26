import { useState, type FormEvent } from "react";
import { Heart, Send } from "lucide-react";
type Wish = { name: string; message: string };
export function Wishes() {
  const [wishes, setWishes] = useState<Wish[]>(() => {
    try {
      const data = JSON.parse(localStorage.getItem("wedding-wishes") || "[]");
      return Array.isArray(data)
        ? data.filter(
            (x) => typeof x.name === "string" && typeof x.message === "string",
          )
        : [];
    } catch {
      return [];
    }
  });
  const [error, setError] = useState("");
  function send(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const wish = {
      name: String(data.get("name")).trim(),
      message: String(data.get("message")).trim(),
    };
    if (!wish.name || !wish.message) {
      setError("Please add your name and a wish.");
      return;
    }
    try {
      const next = [wish, ...wishes];
      localStorage.setItem("wedding-wishes", JSON.stringify(next));
      setWishes(next);
      form.reset();
      setError("");
    } catch {
      setError("Your browser could not save this wish. Please try again.");
    }
  }
  return (
    <section className="wishes section-pad">
      <p className="eyebrow gold">WORDS WE’LL TREASURE FOREVER</p>
      <h2>
        Leave a little <em>love.</em>
      </h2>
      <p className="section-intro">
        Your blessings are the most beautiful part of our story.
      </p>
      <form className="wish-form" onSubmit={send}>
        <label className="sr-only" htmlFor="wish-name">
          Your name
        </label>
        <input
          id="wish-name"
          name="name"
          placeholder="Your name"
          required
          maxLength={80}
        />
        <label className="sr-only" htmlFor="wish-message">
          Your wish
        </label>
        <input
          id="wish-message"
          name="message"
          placeholder="Write a wish for the happy couple…"
          required
          maxLength={400}
        />
        <button aria-label="Send your wish" type="submit">
          <Send size={19} />
        </button>
      </form>
      {error && <p role="alert">{error}</p>}
      <div className="wish-grid" aria-live="polite">
        {wishes.length ? (
          wishes.map((w, i) => (
            <article key={i}>
              <Heart size={17} />
              <p>“{w.message}”</p>
              <span>— {w.name}</span>
            </article>
          ))
        ) : (
          <p className="empty-wishes">
            A beautiful story deserves beautiful wishes.
            <br />
            Be the first to leave yours.
          </p>
        )}
      </div>
      <p className="form-note">Wishes are saved on this device.</p>
    </section>
  );
}
