import { useEffect, useState } from "react";
import { Pause, Volume2 } from "lucide-react";
import { weddingData as d } from "../data/weddingData";
export function MusicPlayer() {
  const [playing, setPlaying] = useState(false);
  const [audio] = useState(() => (d.musicUrl ? new Audio(d.musicUrl) : null));
  useEffect(
    () => () => {
      audio?.pause();
    },
    [audio],
  );
  return (
    <button
      className="music-player"
      aria-label={playing ? "Pause music" : "Play wedding music"}
      title={audio ? "Wedding music" : "Wedding soundtrack coming soon"}
      onClick={() => {
        if (audio) {
          if (playing) {
            audio.pause();
            setPlaying(false);
          } else {
            audio.loop = true;
            audio
              .play()
              .then(() => setPlaying(true))
              .catch(() => setPlaying(false));
          }
        } else setPlaying(!playing);
      }}
    >
      {playing && audio ? <Pause size={16} /> : <Volume2 size={16} />}
      <span>
        {!audio && playing
          ? "MUSIC COMING SOON"
          : playing
            ? "SOUND ON"
            : "A LITTLE MELODY"}
      </span>
    </button>
  );
}
