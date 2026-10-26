import { weddingData as d } from "./data/weddingData";
import { Hero } from "./components/Hero";
import {
  Invitation,
  DateReveal,
  Functions,
  Couple,
  Instagram,
  Video,
  Countdown,
  ThingsToKnow,
  RSVP,
  Wishes,
  MusicPlayer,
  Footer,
} from "./components/Sections";
export default function App() {
  return (
    <>
      <a className="skip-link" href="#invitation">
        Skip to invitation
      </a>
      <Hero />
      <nav className="page-nav" aria-label="Wedding sections">
        <a className="nav-brand" href="#home">
          {d.groom[0]} & {d.bride[0]}
        </a>
        <div>
          <a href="#our-story">OUR STORY</a>
          <a href="#celebrations">CELEBRATIONS</a>
          <a href="#rsvp">
            RSVP <span>↗</span>
          </a>
        </div>
      </nav>
      <main>
        <Invitation />
        <DateReveal />
        <Functions />
        <Couple />
        <Instagram />
        <Video />
        <Countdown />
        <ThingsToKnow />
        <RSVP />
        <Wishes />
      </main>
      <Footer />
      <MusicPlayer />
    </>
  );
}
