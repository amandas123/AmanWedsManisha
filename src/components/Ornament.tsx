import { Flower2 } from "lucide-react";
export function Ornament() {
  return (
    <div className="ornament" aria-hidden="true">
      <span />✧<Flower2 size={23} strokeWidth={1} />✧<span />
    </div>
  );
}
