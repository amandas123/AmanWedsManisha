import { ArrowUpRight, Flower2 } from "lucide-react";
import { weddingData as d } from "../data/weddingData";
export function Instagram() {
  return (
    <section className="instagram">
      <Flower2 size={31} strokeWidth={1} />
      <p className="eyebrow gold">CAPTURE THE LOVE</p>
      <h2>
        Our moments. <em>Your lens.</em>
      </h2>
      <p>From happy tears to dance-floor memories, share it all with</p>
      <a
        href={`https://www.instagram.com/explore/tags/${d.hashtag.toLowerCase()}/`}
        target="_blank"
        rel="noreferrer"
      >
        #{d.hashtag} <ArrowUpRight size={22} />
      </a>
    </section>
  );
}
