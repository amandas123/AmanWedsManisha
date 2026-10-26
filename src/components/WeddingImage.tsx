/** An optional panel displays one photograph from the bundled editorial triptych. */
export function WeddingImage({
  src,
  alt,
  panel,
}: {
  src: string;
  alt: string;
  panel?: number;
}) {
  return (
    <div className="editorial-image">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        style={
          panel === undefined
            ? undefined
            : {
                width: "300%",
                maxWidth: "none",
                transform: `translateX(-${(panel * 100) / 3}%)`,
              }
        }
      />
    </div>
  );
}
