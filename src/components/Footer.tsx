import { weddingData as d } from "../data/weddingData";
import { Ornament } from "./Ornament";
export function Footer() {
  return (
    <footer>
      <Ornament />
      <p className="eyebrow gold">TOGETHER IS A BEAUTIFUL PLACE TO BE</p>
      <h2>
        {d.groom} <em>&</em> {d.bride}
      </h2>
      <p>{d.dateLabel.toUpperCase()}</p>
      <div className="footer-bottom">
        <span>MADE WITH LOVE, FOR THE PEOPLE WE LOVE</span>
        <a href="#home">BACK TO THE TOP ↑</a>
      </div>
    </footer>
  );
}
