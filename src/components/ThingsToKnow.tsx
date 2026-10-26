import { ArrowUpRight, CalendarDays, Heart, MapPin } from "lucide-react";
import { weddingData as d } from "../data/weddingData";
export function ThingsToKnow() {
  function calendar() {
    const contents = `BEGIN:VCALENDAR\r\nVERSION:2.0\r\nBEGIN:VEVENT\r\nDTSTART:${d.calendarStart}\r\nDTEND:${d.calendarEnd}\r\nSUMMARY:${d.groom} and ${d.bride} Wedding\r\nDESCRIPTION:${d.venue}\r\nEND:VEVENT\r\nEND:VCALENDAR`;
    const a = document.createElement("a");
    a.href = URL.createObjectURL(
      new Blob([contents], { type: "text/calendar" }),
    );
    a.download = "ranbir-alia-wedding.ics";
    a.click();
    URL.revokeObjectURL(a.href);
  }
  return (
    <section className="things section-pad">
      <p className="eyebrow gold">A FEW LITTLE DETAILS</p>
      <h2>Things to know</h2>
      <div className="things-grid">
        <article>
          <MapPin />
          <h3>The Venue</h3>
          <p>
            {d.venue}
            <br />
            We’ll share the way to our special day soon.
          </p>
          <span className="tiny-label">DETAILS TO FOLLOW</span>
        </article>
        <article>
          <Heart />
          <h3>A Little Help</h3>
          <p>
            Questions, travel plans, or just a hello?
            <br />
            Our families will be happy to help.
          </p>
          {d.contact ? (
            <a href={`mailto:${d.contact}`}>GET IN TOUCH ↗</a>
          ) : (
            <span className="tiny-label">CONTACT DETAILS COMING SOON</span>
          )}
        </article>
        <article>
          <CalendarDays />
          <h3>Save Our Date</h3>
          <p>
            Make a little room in your calendar.
            <br />
            We’ve saved a place for you in our hearts.
          </p>
          <button className="text-button" onClick={calendar}>
            ADD TO CALENDAR <ArrowUpRight size={14} />
          </button>
        </article>
      </div>
    </section>
  );
}
