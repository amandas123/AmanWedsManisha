import { useEffect, useRef, useState, type PointerEvent } from "react";
import { weddingData as d } from "../data/weddingData";

const width = 300;
const height = 266;
const heart = "M150 251C121 224 15 148 15 85C15 13 101-8 150 53C199-8 285 13 285 85C285 148 179 224 150 251Z";

export function ScratchDate() {
  const canvas = useRef<HTMLCanvasElement>(null);
  const pixels = useRef(0);
  const date = useRef<HTMLTimeElement>(null);
  const focusDate = useRef(false);
  const stroke = useRef<{ pointer: number; x: number; y: number } | null>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const context = canvas.current?.getContext("2d", { willReadFrequently: true });
    if (!context) return;

    context.clearRect(0, 0, width, height);
    context.save();
    context.clip(new Path2D(heart));
    const foil = context.createLinearGradient(0, 0, width, height);
    foil.addColorStop(0, "#625e3e");
    foil.addColorStop(0.37, "#a49b6d");
    foil.addColorStop(0.67, "#676344");
    foil.addColorStop(1, "#918252");
    context.fillStyle = foil;
    context.fillRect(0, 0, width, height);

    for (let index = 0; index < 2400; index++) {
      const x = (index * 47.413) % width;
      const y = (index * 89.231) % height;
      context.fillStyle = index % 3 === 0 ? "#fff1c270" : "#322f2638";
      context.fillRect(x, y, 1.2, 1.2);
    }

    context.fillStyle = "#fff9e9";
    context.font = "20px Georgia";
    context.textAlign = "center";
    context.fillText("Scratch here", width / 2, 119);
    context.restore();
    pixels.current = countFoil(context);
  }, []);

  useEffect(() => {
    if (revealed && focusDate.current) date.current?.focus({ preventScroll: true });
  }, [revealed]);

  function scratch(event: PointerEvent<HTMLCanvasElement>) {
    const surface = event.currentTarget;
    const context = surface.getContext("2d");
    if (!context) return;
    const bounds = surface.getBoundingClientRect();
    const x = (event.clientX - bounds.left) * width / bounds.width;
    const y = (event.clientY - bounds.top) * height / bounds.height;
    const previous = stroke.current;

    context.save();
    context.globalCompositeOperation = "destination-out";
    context.lineWidth = 34;
    context.lineCap = "round";
    context.beginPath();
    context.moveTo(previous?.x ?? x, previous?.y ?? y);
    context.lineTo(x + 0.01, y);
    context.stroke();
    context.restore();
    stroke.current = { pointer: event.pointerId, x, y };

    if (pixels.current && countFoil(context) < pixels.current * 0.62) {
      stroke.current = null;
      setRevealed(true);
    }
  }

  return (
    <>
      <div className="scratch-heart">
        <div className="heart-paper">
          <time ref={date} tabIndex={-1} dateTime={d.startsAt} aria-hidden={!revealed}>
            <span>{d.weekday}</span>
            <strong>{d.dateLabel}</strong>
            <span>{d.timeLabel} IST</span>
          </time>
        </div>
        {!revealed && (
          <canvas
            ref={canvas}
            width={width}
            height={height}
            aria-hidden="true"
            onPointerDown={(event) => {
              if (stroke.current || event.button !== 0) return;
              event.currentTarget.setPointerCapture(event.pointerId);
              scratch(event);
            }}
            onPointerMove={(event) => {
              if (stroke.current?.pointer === event.pointerId) scratch(event);
            }}
            onLostPointerCapture={() => { stroke.current = null; }}
          />
        )}
      </div>
      <div className="reveal-status" aria-live="polite">
        {revealed ? (
          <span className="sr-only">{d.weekday}, {d.dateLabel} at {d.timeLabel} IST</span>
        ) : (
          <button type="button" className="reveal-button" onClick={() => {
            focusDate.current = true;
            setRevealed(true);
          }}>Reveal date</button>
        )}
      </div>
    </>
  );
}

function countFoil(context: CanvasRenderingContext2D) {
  const pixels = context.getImageData(0, 0, width, height).data;
  let count = 0;
  for (let index = 3; index < pixels.length; index += 16) {
    if (pixels[index] > 128) count++;
  }
  return count;
}
